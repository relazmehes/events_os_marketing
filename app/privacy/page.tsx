import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Event Planning OS collects, uses, and protects your personal data.",
};

const EFFECTIVE_DATE = "June 21, 2026";
const CONTACT_EMAIL = "privacy@eventplanningos.com";
const COMPANY = "Event Planning OS";

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 mb-10">Effective date: {EFFECTIVE_DATE}</p>

        <div className="prose prose-slate max-w-none text-slate-700 space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Who we are</h2>
            <p>
              {COMPANY} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the Event Planning OS
              platform (the &ldquo;Service&rdquo;). This Privacy Policy explains how we collect, use, disclose,
              and protect information about you when you use our Service.
            </p>
            <p className="mt-3">
              If you have questions, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 hover:underline">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Information we collect</h2>
            <h3 className="font-semibold text-slate-800 mb-1">Account data</h3>
            <p>
              When you register, we collect your name, email address, business name, and a hashed password.
              If you sign in via Google or Microsoft OAuth, we receive your name and email from those providers.
            </p>
            <h3 className="font-semibold text-slate-800 mt-4 mb-1">Business data you enter</h3>
            <p>
              We store the data you add to the Service: clients, events, estimates, invoices, contracts,
              communications, files, and related records. This data belongs to you.
            </p>
            <h3 className="font-semibold text-slate-800 mt-4 mb-1">Email connections</h3>
            <p>
              If you connect a Gmail or Microsoft 365 account, we store OAuth tokens required to
              sync messages on your behalf. We access only the permissions you explicitly grant.
              We do not sell or share your email content.
            </p>
            <h3 className="font-semibold text-slate-800 mt-4 mb-1">Usage and technical data</h3>
            <p>
              We may collect browser type, IP address, pages visited, and feature usage through
              server logs and analytics tools. This data is used to improve the Service.
            </p>
            <h3 className="font-semibold text-slate-800 mt-4 mb-1">Payment data</h3>
            <p>
              Payments are processed by Stripe. We do not store full card numbers. We receive
              subscription status, customer ID, and billing email from Stripe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. How we use your information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide and maintain the Service</li>
              <li>To process billing and subscriptions</li>
              <li>To send transactional emails (account confirmation, password reset, reminders you configure)</li>
              <li>To respond to support requests</li>
              <li>To detect, investigate, and prevent security incidents</li>
              <li>To improve the Service based on aggregated, anonymised usage patterns</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Data sharing</h2>
            <p>We share your data only with:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Stripe</strong> — for payment processing</li>
              <li><strong>Railway</strong> — our hosting and database provider</li>
              <li><strong>Google / Microsoft</strong> — only when you choose to connect an OAuth account</li>
              <li><strong>Law enforcement</strong> — when required by applicable law or a valid legal request</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Data retention</h2>
            <p>
              We retain your account and business data for as long as your account is active. If you close
              your account, we will delete or anonymise your personal data within 90 days, except where
              we are required to retain it for legal or accounting purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Your rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict certain processing</li>
              <li>Receive a portable copy of your data</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 hover:underline">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Cookies</h2>
            <p>
              We use a session cookie for authentication (NextAuth.js) and may use analytics cookies
              to understand page usage. We do not use advertising or cross-site tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Security</h2>
            <p>
              Passwords are hashed with bcrypt. Data is transmitted over TLS. We follow industry-standard
              practices to protect your information, but no method of transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Children</h2>
            <p>
              The Service is not directed to children under 16. We do not knowingly collect personal data
              from children under 16.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">10. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes
              by email or by a notice in the app. Continued use of the Service after the effective date
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">11. Contact</h2>
            <p>
              For privacy-related questions, contact us at{" "}
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
