import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of Elation.",
};

const EFFECTIVE_DATE = "June 21, 2026";
const CONTACT_EMAIL = "legal@elation.events";
const COMPANY = "Elation";

export default function TermsPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Terms of Service
        </h1>
        <p className="text-sm text-slate-500 mb-10">Effective date: {EFFECTIVE_DATE}</p>

        <div className="prose prose-slate max-w-none text-slate-700 space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Acceptance of terms</h2>
            <p>
              By accessing or using {COMPANY} (the &ldquo;Service&rdquo;), you agree to be bound by these
              Terms of Service (&ldquo;Terms&rdquo;). If you do not agree, do not use the Service.
            </p>
            <p className="mt-3">
              These Terms constitute a binding agreement between you (or the organisation you represent)
              and {COMPANY}. If you are using the Service on behalf of an organisation, you represent that
              you have authority to bind that organisation to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. The Service</h2>
            <p>
              {COMPANY} provides a cloud-based platform for independent event planners and small planning
              firms to manage clients, events, documents, communications, and related workflows.
            </p>
            <p className="mt-3">
              We reserve the right to modify, suspend, or discontinue any part of the Service at any time
              with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Accounts</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You must provide accurate registration information and keep it up to date.</li>
              <li>You are responsible for maintaining the confidentiality of your password.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
              <li>You must notify us immediately of any unauthorised use of your account.</li>
              <li>You must be at least 18 years old (or the age of majority in your jurisdiction) to use the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Subscriptions and billing</h2>
            <p>
              Paid plans are billed on a monthly basis via Stripe. Your subscription renews automatically
              unless you cancel before the renewal date.
            </p>
            <p className="mt-3">
              Free trials are available for new accounts. After the trial period, continued use requires
              a paid subscription.
            </p>
            <p className="mt-3">
              We do not offer refunds for partial months. If you cancel, you retain access until the end
              of your current billing period.
            </p>
            <p className="mt-3">
              We reserve the right to change pricing with 30 days&rsquo; notice. Price changes will not
              affect your current billing cycle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Use the Service for any unlawful purpose</li>
              <li>Upload malicious code, viruses, or harmful content</li>
              <li>Attempt to gain unauthorised access to any part of the Service</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Resell or sublicense the Service without our written consent</li>
              <li>Use the Service to send unsolicited commercial communications (spam)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Your data</h2>
            <p>
              You retain ownership of all data you enter into the Service (&ldquo;Your Data&rdquo;). By using
              the Service, you grant us a limited licence to store, process, and display Your Data solely
              to provide the Service to you.
            </p>
            <p className="mt-3">
              You are responsible for ensuring you have the right to upload any data, including client
              information, and that doing so complies with applicable privacy laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Intellectual property</h2>
            <p>
              The Service, including its code, design, trademarks, and content (excluding Your Data),
              is owned by {COMPANY} and protected by applicable intellectual property laws. You may not
              copy, modify, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Disclaimer of warranties</h2>
            <p>
              THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY
              KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE
              WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Limitation of liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, {COMPANY.toUpperCase()} SHALL NOT BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS
              OR REVENUE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, EVEN IF WE HAVE BEEN
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="mt-3">
              OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED
              THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">10. Termination</h2>
            <p>
              You may cancel your account at any time from your account settings. We may suspend or
              terminate your account for violation of these Terms, non-payment, or at our discretion
              with 30 days&rsquo; notice (except in cases of serious violation).
            </p>
            <p className="mt-3">
              Upon termination, your right to use the Service ceases. We will retain your data for
              90 days to allow export, after which it will be deleted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">11. Governing law</h2>
            <p>
              These Terms are governed by the laws of the jurisdiction in which {COMPANY} is registered,
              without regard to conflict-of-law principles. Any disputes shall be resolved in the courts
              of that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">12. Changes to these terms</h2>
            <p>
              We may update these Terms from time to time. Material changes will be communicated by
              email or in-app notice at least 14 days before they take effect. Continued use of the
              Service after the effective date constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">13. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 hover:underline">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
