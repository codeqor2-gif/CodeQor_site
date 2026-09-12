import { NextResponse } from "next/server";
import {
  getSmtpConfig,
  createTransporter,
  sendClientConfirmation,
  sendCompanyNotification,
} from "@/lib/mail";
import type { ContactFormData, SmtpConfig } from "@/lib/mail";

export const runtime = "nodejs";

// ---------------------------------------------------------------------------
// In-memory duplicate / rate-limit guard (per server instance).
// Prevents accidental double-clicks and naive spam. For multi-instance
// production use, replace with Redis/Upstash.
// ---------------------------------------------------------------------------
const recentSubmissions = new Map<string, number>();
const DEDUPE_WINDOW_MS = 60 * 1000;

function fingerprint(payload: string): string {
  let hash = 0;
  for (let i = 0; i < payload.length; i++) {
    hash = (hash * 31 + payload.charCodeAt(i)) | 0;
  }
  return `${hash}:${payload.length}`;
}

function isDuplicate(key: string): boolean {
  const now = Date.now();
  // Prune old entries opportunistically
  for (const [k, ts] of recentSubmissions) {
    if (now - ts > DEDUPE_WINDOW_MS) recentSubmissions.delete(k);
  }
  const last = recentSubmissions.get(key);
  if (last && now - last < DEDUPE_WINDOW_MS) return true;
  recentSubmissions.set(key, now);
  return false;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  // Trim + collapse excessive whitespace + enforce max length.
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function sanitizeMultiline(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim().replace(/\s+/g, " "))
    .join("\n")
    .trim()
    .slice(0, maxLength);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------
export async function POST(request: Request) {
  // ---- Parse body ----
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  // The form sends `phone` as { countryCode, dialCode, number } —
  // accept that shape as well as a plain string for flexibility.
  let rawPhone = "";
  const phoneInput = data.phone;
  if (typeof phoneInput === "string") {
    rawPhone = phoneInput;
  } else if (phoneInput && typeof phoneInput === "object") {
    const p = phoneInput as Record<string, unknown>;
    const dialCode = typeof p.dialCode === "string" ? p.dialCode.trim() : "";
    const number = typeof p.number === "string" ? p.number.trim() : "";
    rawPhone = `${dialCode} ${number}`.trim();
  }

  const fullName = sanitize(data.fullName ?? data.name, 120);
  const email = sanitize(data.email, 254).toLowerCase();
  const phone = sanitize(rawPhone, 40);
  const subject = sanitize(data.subject, 200);
  const message = sanitizeMultiline(data.message, 5000);

  // ---- Validation ----
  const errors: Record<string, string> = {};
  if (!fullName) errors.fullName = "Full Name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(email))
    errors.email = "Email must be a valid email address.";
  if (!phone) errors.phone = "Phone is required.";
  if (!subject) errors.subject = "Subject is required.";
  if (!message) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: "Validation failed.", fields: errors },
      { status: 400 },
    );
  }

  // ---- Duplicate-submission guard (same payload within 60 s) ----
  const key = fingerprint(`${fullName}|${email}|${phone}|${subject}|${message}`);
  if (isDuplicate(key)) {
    return NextResponse.json(
      {
        error:
          "This message was already received. Please wait a moment before resending.",
      },
      { status: 429 },
    );
  }

  // ---- SMTP config ----
  const config = getSmtpConfig();
  if ("error" in config) {
    // Never log credentials; this message intentionally reveals nothing secret.
    console.error("Contact API: SMTP environment variables are missing.");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }

  const smtpConfig = config as SmtpConfig;
  const transporter = createTransporter(smtpConfig);

  const formData: ContactFormData = {
    fullName,
    email,
    phone,
    subject,
    message,
  };

  // ---- Send emails ----
  try {
    // Send company notification first (critical). If it succeeds, send
    // the client confirmation. If the client confirmation fails, we still
    // return success since the company received the inquiry.
    await sendCompanyNotification(transporter, formData, smtpConfig);

    // Client confirmation is best-effort — don't fail the entire request
    // if only this one errors.
    try {
      await sendClientConfirmation(transporter, formData, smtpConfig);
    } catch (confirmErr) {
      console.error(
        "Contact API: client confirmation email failed.",
        confirmErr instanceof Error ? confirmErr.message : confirmErr,
      );
      // Intentionally swallowed — the company already received the inquiry.
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully. We will get back to you soon.",
      },
      { status: 200 },
    );
  } catch (err) {
    // Log the error message only — never auth credentials.
    console.error(
      "Contact API: failed to send email.",
      err instanceof Error ? err.message : err,
    );
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }
}
