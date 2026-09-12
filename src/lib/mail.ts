import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface SmtpConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  companyEmail: string;
  companyName: string;
  companyWebsite: string;
}

// ---------------------------------------------------------------------------
// SMTP configuration (reads from environment variables)
// ---------------------------------------------------------------------------
export function getSmtpConfig(): SmtpConfig | { error: string } {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASSWORD; // do NOT trim passwords
  const companyEmail = process.env.COMPANY_EMAIL?.trim();
  const companyName = process.env.COMPANY_NAME?.trim() || "Our Company";
  const companyWebsite = process.env.COMPANY_WEBSITE?.trim() || "#";

  if (!host || !Number.isFinite(port) || !user || !pass || !companyEmail) {
    return { error: "Email service is not configured on the server." };
  }
  return { host, port, user, pass, companyEmail, companyName, companyWebsite };
}

// ---------------------------------------------------------------------------
// Transporter factory
// ---------------------------------------------------------------------------
export function createTransporter(config: SmtpConfig) {
  // Port 465 => implicit TLS (secure: true). Ports 587/25 => STARTTLS.
  const secure = config.port === 465;
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure,
    auth: { user: config.user, pass: config.pass },
    ...(secure ? {} : { requireTLS: true }),
  });
}

// ---------------------------------------------------------------------------
// HTML helpers
// ---------------------------------------------------------------------------
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nl2br(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

// ---------------------------------------------------------------------------
// Shared email style constants
// ---------------------------------------------------------------------------
const BRAND_PRIMARY = "#0052CC";
const BRAND_GRADIENT = "linear-gradient(135deg, #0052CC, #43B2F2)";
const FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

function emailWrapper(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Email</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f9; font-family:${FONT_STACK}; -webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f9;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; width:100%; background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          ${content}
        </table>
        <!-- Spacer -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; width:100%;">
          <tr>
            <td style="padding:16px 0 0; text-align:center; font-size:11px; color:#9ca3af;">
              This email was generated automatically. Please do not reply to this email directly unless instructed.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function headerBanner(title: string): string {
  return `<tr>
  <td style="background:${BRAND_GRADIENT}; padding:32px 40px; text-align:center;">
    <h1 style="margin:0; font-size:22px; font-weight:700; color:#ffffff; letter-spacing:-0.3px;">${escapeHtml(title)}</h1>
  </td>
</tr>`;
}

function detailsTable(data: ContactFormData): string {
  const rows = [
    { label: "Full Name", value: data.fullName },
    { label: "Email", value: data.email },
    { label: "Phone", value: data.phone },
    { label: "Subject", value: data.subject },
  ];

  const tableRows = rows
    .map(
      (row) => `<tr>
  <td style="padding:12px 16px; font-size:13px; font-weight:600; color:#374151; white-space:nowrap; border-bottom:1px solid #f3f4f6; width:120px; vertical-align:top;">${escapeHtml(row.label)}</td>
  <td style="padding:12px 16px; font-size:13px; color:#1f2937; border-bottom:1px solid #f3f4f6; vertical-align:top;">${escapeHtml(row.value)}</td>
</tr>`,
    )
    .join("\n");

  // Message gets its own full-width row with multiline support
  const messageRow = `<tr>
  <td style="padding:12px 16px; font-size:13px; font-weight:600; color:#374151; white-space:nowrap; width:120px; vertical-align:top;">Message</td>
  <td style="padding:12px 16px; font-size:13px; color:#1f2937; line-height:1.6; vertical-align:top;">${nl2br(data.message)}</td>
</tr>`;

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f9fafb; border-radius:8px; border:1px solid #e5e7eb; overflow:hidden;">
${tableRows}
${messageRow}
</table>`;
}

function footerSection(companyName: string, companyWebsite: string): string {
  const year = new Date().getFullYear();
  const websiteLink =
    companyWebsite !== "#"
      ? `<br /><a href="${escapeHtml(companyWebsite)}" style="font-size:12px; color:${BRAND_PRIMARY}; text-decoration:none;">${escapeHtml(companyWebsite)}</a>`
      : "";
  return `<tr>
  <td style="padding:24px 40px; background-color:#f9fafb; border-top:1px solid #e5e7eb; text-align:center;">
    <p style="margin:0; font-size:12px; color:#6b7280;">&copy; ${year} ${escapeHtml(companyName)}. All rights reserved.${websiteLink}</p>
  </td>
</tr>`;
}

// ---------------------------------------------------------------------------
// Email #1 — Client Confirmation
// ---------------------------------------------------------------------------
function buildClientConfirmationHtml(
  data: ContactFormData,
  companyName: string,
  companyWebsite: string,
): string {
  const body = `
${headerBanner(companyName)}
<tr>
  <td style="padding:36px 40px 12px;">
    <p style="margin:0 0 16px; font-size:15px; color:#1f2937; line-height:1.6;">
      Dear <strong>${escapeHtml(data.fullName)}</strong>,
    </p>
    <p style="margin:0 0 16px; font-size:14px; color:#374151; line-height:1.7;">
      Thank you for contacting <strong>${escapeHtml(companyName)}</strong>. We have successfully received your message through our website&#39;s Contact Us form.
    </p>
    <p style="margin:0 0 24px; font-size:14px; color:#374151; line-height:1.7;">
      Our team will review your inquiry and get back to you within <strong>24 hours</strong>. Below are the details you submitted:
    </p>
  </td>
</tr>
<tr>
  <td style="padding:0 40px 28px;">
    ${detailsTable(data)}
  </td>
</tr>
<tr>
  <td style="padding:0 40px 32px;">
    <p style="margin:0 0 4px; font-size:14px; color:#374151; line-height:1.6;">
      Warm regards,
    </p>
    <p style="margin:0; font-size:14px; font-weight:600; color:${BRAND_PRIMARY};">
      The ${escapeHtml(companyName)} Team
    </p>
  </td>
</tr>
${footerSection(companyName, companyWebsite)}`;

  return emailWrapper(body);
}

function buildClientConfirmationText(
  data: ContactFormData,
  companyName: string,
): string {
  return `Dear ${data.fullName},

Thank you for contacting ${companyName}. We have successfully received your message through our website's Contact Us form.

Our team will review your inquiry and get back to you within 24 hours.

--- Your Submitted Details ---

Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject}

Message:
${data.message}

------------------------------

Warm regards,
The ${companyName} Team`;
}

// ---------------------------------------------------------------------------
// Email #2 — Company Notification
// ---------------------------------------------------------------------------
function buildCompanyNotificationHtml(
  data: ContactFormData,
  companyName: string,
): string {
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Karachi",
  });

  const body = `
${headerBanner("New Contact Form Submission")}
<tr>
  <td style="padding:36px 40px 12px;">
    <p style="margin:0 0 16px; font-size:14px; color:#374151; line-height:1.7;">
      A new inquiry has been submitted through the <strong>${escapeHtml(companyName)}</strong> website Contact Us form.
    </p>
  </td>
</tr>
<tr>
  <td style="padding:0 40px 24px;">
    <h3 style="margin:0 0 12px; font-size:13px; font-weight:700; color:${BRAND_PRIMARY}; text-transform:uppercase; letter-spacing:0.5px;">Client Details</h3>
    ${detailsTable(data)}
  </td>
</tr>
<tr>
  <td style="padding:0 40px 28px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#eff6ff; border-radius:8px; border:1px solid #bfdbfe;">
      <tr>
        <td style="padding:14px 16px;">
          <p style="margin:0; font-size:13px; color:#1e40af; line-height:1.6;">
            &#128161; <strong>Tip:</strong> This inquiry was sent from <strong>${escapeHtml(data.email)}</strong>. You can reply directly to this email to respond to the client.
          </p>
        </td>
      </tr>
    </table>
  </td>
</tr>
<tr>
  <td style="padding:0 40px 28px;">
    <p style="margin:0; font-size:11px; color:#9ca3af;">Received on ${escapeHtml(timestamp)} (PKT)</p>
  </td>
</tr>
<tr>
  <td style="padding:16px 40px; background-color:#f9fafb; border-top:1px solid #e5e7eb; text-align:center;">
    <p style="margin:0; font-size:12px; color:#6b7280;">Sent from ${escapeHtml(companyName)} Contact Form</p>
  </td>
</tr>`;

  return emailWrapper(body);
}

function buildCompanyNotificationText(
  data: ContactFormData,
  companyName: string,
): string {
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Karachi",
  });

  return `New Contact Form Submission

A new inquiry has been submitted through the ${companyName} website Contact Us form.

--- Client Details ---

Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject}

Message:
${data.message}

-----------------------

This inquiry was sent from ${data.email}. You can reply directly to this email to respond to the client.

Received on ${timestamp} (PKT)
Sent from ${companyName} Contact Form`;
}

// ---------------------------------------------------------------------------
// Public send functions
// ---------------------------------------------------------------------------

/**
 * Sends a branded confirmation email to the client acknowledging receipt
 * of their Contact Us form submission.
 */
export async function sendClientConfirmation(
  transporter: Transporter,
  data: ContactFormData,
  config: SmtpConfig,
): Promise<void> {
  const fromAddress = `"${config.companyName}" <${config.user}>`;

  await transporter.sendMail({
    from: fromAddress,
    to: data.email,
    replyTo: config.companyEmail,
    subject: `Thank You for Contacting ${config.companyName}`,
    text: buildClientConfirmationText(data, config.companyName),
    html: buildClientConfirmationHtml(
      data,
      config.companyName,
      config.companyWebsite,
    ),
  });
}

/**
 * Sends a branded notification email to the company with all client
 * submission details. Sets Reply-To to the client's email so the
 * company can respond directly.
 */
export async function sendCompanyNotification(
  transporter: Transporter,
  data: ContactFormData,
  config: SmtpConfig,
): Promise<void> {
  const fromAddress = `"${config.companyName} Website" <${config.user}>`;

  await transporter.sendMail({
    from: fromAddress,
    to: config.companyEmail,
    replyTo: data.email, // company hits Reply → reaches the client
    subject: `New Contact Form Submission: ${data.subject}`,
    text: buildCompanyNotificationText(data, config.companyName),
    html: buildCompanyNotificationHtml(data, config.companyName),
  });
}
