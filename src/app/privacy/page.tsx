import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata = {
  title: "Privacy Policy | NetRoots Technologies",
};

export default function PrivacyPage() {
  return (
    <section className="relative bg-zinc-50 py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent-400/20 blur-[130px]" />

      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
        >
          <FiArrowLeft /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-zinc-900 sm:text-5xl">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="mt-4 text-sm text-zinc-500">Last updated: August 17, 2026</p>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="text-xl font-bold text-zinc-900">1. Information We Collect</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              We collect personal information you voluntarily provide when contacting us, including
              your name, email address, phone number, company name, and project details. We also
              automatically collect certain information when you visit our website, such as your IP
              address, browser type, and browsing behavior.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">2. How We Use Your Information</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              We use your personal information to respond to your inquiries, provide the services
              you request, send project updates and communications, improve our website and
              services, and comply with legal obligations. We do not sell or rent your personal
              information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">3. Data Security</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              We implement industry-standard security measures including encryption, secure
              protocols, access controls, and regular security audits to protect your personal
              information. However, no method of electronic transmission or storage is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">4. Third-Party Services</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              We may use third-party services such as analytics tools, hosting providers, and
              communication platforms. These services have their own privacy policies and may
              collect information as described in their respective policies. We encourage you to
              review their privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">5. Cookies & Tracking</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Our website may use cookies and similar tracking technologies to enhance your browsing
              experience, analyze website traffic, and understand user behavior. You can control
              cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">6. Your Rights</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              You have the right to access, correct, update, or request deletion of your personal
              information. You may also opt out of marketing communications at any time by
              contacting us or using the unsubscribe link in our emails.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">7. Data Retention</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              We retain your personal information only for as long as necessary to fulfill the
              purposes for which it was collected, or as required by applicable law. When your data
              is no longer needed, it is securely deleted or anonymized.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">8. Children&apos;s Privacy</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Our services are not directed to individuals under the age of 16. We do not knowingly
              collect personal information from children. If we become aware that we have collected
              data from a child, we will take steps to delete it promptly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">9. Changes to This Policy</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated revision date. We encourage you to review this policy
              periodically for any changes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">10. Contact Us</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <span className="font-semibold text-primary-600">business@netrootstech.com</span>{" "}
              or call <span className="font-semibold text-primary-600">+1 (302) 300-1742</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
