import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata = {
  title: "Terms & Conditions | CodeQor Technologies",
};

export default function TermsPage() {
  return (
    <section className="relative overflow-hidden bg-zinc-50 py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary-400/20 blur-[130px]" />

      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
        >
          <FiArrowLeft /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-zinc-900 sm:text-5xl">
          Terms & <span className="text-primary-600">Conditions</span>
        </h1>
        <p className="mt-4 text-sm text-zinc-500">Last updated: August 17, 2026</p>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="text-xl font-bold text-zinc-900">1. Acceptance of Terms</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              By accessing and using the services provided by CodeQor Technologies ("Company",
              "we", "us"), you accept and agree to be bound by the terms and provisions of this
              agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">2. Services</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              CodeQor Technologies provides IT services, software development, digital marketing,
              ERP solutions, and related technology consulting services. We reserve the right to
              modify, suspend, or discontinue any service at any time without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">3. Intellectual Property</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              All content, trademarks, logos, and intellectual property displayed on this website
              are the property of CodeQor Technologies or its licensors. You may not reproduce,
              distribute, or create derivative works without our express written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">4. Limitation of Liability</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              In no event shall CodeQor Technologies be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your use of or inability
              to use our services. Our total liability shall not exceed the amount paid by you for
              the specific service giving rise to the claim.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">5. Confidentiality</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Both parties agree to maintain the confidentiality of proprietary information shared
              during the course of the engagement. This obligation survives the termination of any
              business relationship between the parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">6. Termination</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Either party may terminate the engagement with written notice as specified in the
              applicable service agreement. Upon termination, all outstanding payments become due
              and confidential information must be returned or destroyed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">7. Governing Law</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              These terms shall be governed by and construed in accordance with the laws of the
              Commonwealth of Pennsylvania, United States. Any disputes shall be resolved in the
              courts of competent jurisdiction in Northampton County, Pennsylvania.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">8. Changes to Terms</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              We reserve the right to update these terms at any time. Changes will be posted on
              this page with an updated revision date. Continued use of our services after changes
              constitutes acceptance of the modified terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">9. Contact Us</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              If you have questions about these Terms & Conditions, please contact us at{" "}
              <a href="mailto:info@codqortechnologies.com" className="font-semibold text-primary-600 hover:underline">info@codqortechnologies.com</a>{" "}
              or call <a href="tel:03224544934" className="font-semibold text-primary-600 hover:underline">03224544934</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
