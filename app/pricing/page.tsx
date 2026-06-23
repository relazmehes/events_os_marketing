import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://your-app.up.railway.app";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Elation. Basic at $29/mo, Pro at $59/mo, Enterprise at $149/mo. Start free — no credit card required.",
  openGraph: {
    title: "Pricing | Elation",
    description: "Simple pricing for independent planners and small firms.",
  },
};

const TIERS = [
  {
    name: "Basic",
    price: "$29",
    period: "/mo",
    description: "For solo planners launching their business.",
    features: [
      "1 user",
      "Up to 10 events/month",
      "Clients & CRM",
      "Estimates & invoices",
      "Contract templates & e-sign",
      "Day-of ops pack",
      "Guest list management",
      "File attachments",
      "PDF export",
    ],
    cta: "Start free trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$59",
    period: "/mo",
    description: "Everything you need to grow a thriving solo practice.",
    features: [
      "1 user",
      "Unlimited events",
      "Everything in Basic",
      "Gmail & Microsoft 365 email sync",
      "Automated reminder emails",
      "AI estimate suggestions",
      "Advanced reporting & analytics",
      "Priority email support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "/mo",
    description: "For small planning firms ready to scale.",
    features: [
      "Up to 10 users",
      "Unlimited events",
      "Everything in Pro",
      "Team seat management",
      "Shared client workspace",
      "Custom branding on documents",
      "Onboarding & training session",
      "Priority phone & email support",
    ],
    cta: "Contact us",
    highlighted: false,
  },
];

type CheckState = boolean | "partial";

interface ComparisonRow {
  feature: string;
  basic: CheckState;
  pro: CheckState;
  enterprise: CheckState;
}

const COMPARISON: ComparisonRow[] = [
  { feature: "Users", basic: true, pro: true, enterprise: true },
  { feature: "Events per month", basic: true, pro: true, enterprise: true },
  { feature: "Client & CRM", basic: true, pro: true, enterprise: true },
  { feature: "Estimates & invoices", basic: true, pro: true, enterprise: true },
  { feature: "Contracts & e-sign", basic: true, pro: true, enterprise: true },
  { feature: "Day-of ops pack", basic: true, pro: true, enterprise: true },
  { feature: "Guest list management", basic: true, pro: true, enterprise: true },
  { feature: "File attachments & PDF export", basic: true, pro: true, enterprise: true },
  { feature: "Gmail / M365 email sync", basic: false, pro: true, enterprise: true },
  { feature: "Automated reminder emails", basic: false, pro: true, enterprise: true },
  { feature: "AI estimate suggestions", basic: false, pro: true, enterprise: true },
  { feature: "Advanced reporting", basic: false, pro: true, enterprise: true },
  { feature: "Team seats (multi-user)", basic: false, pro: false, enterprise: true },
  { feature: "Shared client workspace", basic: false, pro: false, enterprise: true },
  { feature: "Custom branding", basic: false, pro: false, enterprise: true },
  { feature: "Onboarding session", basic: false, pro: false, enterprise: true },
  { feature: "Priority support", basic: false, pro: "partial", enterprise: true },
];

const FAQS = [
  {
    q: "Do I need a credit card to start the free trial?",
    a: "No. You can start your 14-day free trial with just an email address. We'll only ask for payment details when you choose a plan at the end of your trial.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. You can upgrade or downgrade at any time from your account settings. Changes take effect immediately and billing is prorated.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your data remains accessible for 30 days after cancellation so you can export it. After that, it is permanently deleted from our servers.",
  },
  {
    q: "How does email sync work?",
    a: "On the Pro and Enterprise plans you can connect your Gmail or Microsoft 365 account via OAuth. Elation syncs your inbox and automatically links emails to the relevant events and clients.",
  },
  {
    q: "Is there a limit on storage for file attachments?",
    a: "All plans include generous file storage. Basic includes 5 GB, Pro includes 20 GB, and Enterprise includes 100 GB. Contact us if you need more.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes — pay annually and save 20% on any plan. Annual billing options are available at checkout.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, American Express) via our secure payment processor.",
  },
];

function CheckIcon({ value }: { value: CheckState }) {
  if (value === true)
    return <CheckCircle2 className="h-5 w-5 text-indigo-600 mx-auto" />;
  if (value === "partial")
    return <CheckCircle2 className="h-5 w-5 text-amber-500 mx-auto" />;
  return <XCircle className="h-5 w-5 text-slate-300 mx-auto" />;
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-100">
            Transparent pricing
          </Badge>
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Simple pricing,
            <br /> no surprises
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Choose the plan that fits your business. All plans include a 14-day free trial — no credit card
            needed.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl flex flex-col ${
                  tier.highlighted
                    ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-200 ring-2 ring-indigo-600 scale-[1.03]"
                    : "bg-white border border-slate-200 shadow-sm"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-amber-400 text-amber-900 border-amber-400 hover:bg-amber-400 px-4 py-1 text-xs font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col">
                  <h2
                    className={`text-xl font-bold mb-1 ${tier.highlighted ? "text-white" : "text-slate-900"}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {tier.name}
                  </h2>
                  <p className={`text-sm mb-6 ${tier.highlighted ? "text-indigo-200" : "text-slate-500"}`}>
                    {tier.description}
                  </p>
                  <div className="flex items-end gap-1 mb-8">
                    <span
                      className={`text-4xl font-extrabold ${tier.highlighted ? "text-white" : "text-slate-900"}`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {tier.price}
                    </span>
                    <span className={`text-sm mb-1 ${tier.highlighted ? "text-indigo-200" : "text-slate-500"}`}>
                      {tier.period}
                    </span>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2
                          className={`h-4 w-4 mt-0.5 shrink-0 ${
                            tier.highlighted ? "text-indigo-200" : "text-indigo-500"
                          }`}
                        />
                        <span className={tier.highlighted ? "text-indigo-100" : "text-slate-700"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    href={tier.name === "Enterprise" ? "/contact" : "/signup"}
                    className={`w-full font-semibold ${
                      tier.highlighted
                        ? "bg-white text-indigo-600 hover:bg-indigo-50"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-8">
            Save 20% with annual billing. All prices in USD.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Feature comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-4 px-6 font-semibold text-slate-700 w-1/2">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-700">Basic</th>
                  <th className="text-center py-4 px-4 font-semibold text-indigo-600 bg-indigo-50">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-700">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-slate-50 ${idx % 2 === 1 ? "bg-slate-50/50" : ""}`}
                  >
                    <td className="py-3 px-6 text-slate-700">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      <CheckIcon value={row.basic} />
                    </td>
                    <td className="py-3 px-4 text-center bg-indigo-50/30">
                      <CheckIcon value={row.pro} />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <CheckIcon value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center flex items-center justify-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-amber-500" /> = email support only (Pro)
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="h-8 w-8 text-indigo-500 mx-auto mb-3" />
            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Frequently asked questions
            </h2>
          </div>
          <Accordion className="space-y-3">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="border border-slate-200 rounded-xl px-6 bg-white shadow-sm"
              >
                <AccordionTrigger className="text-slate-900 font-medium text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="text-center text-sm text-slate-500 mt-10">
            Still have questions?{" "}
            <Link href="/contact" className="text-indigo-600 hover:underline font-medium">
              Get in touch →
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-600 to-violet-600">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start your free trial today
          </h2>
          <p className="mt-4 text-indigo-100 max-w-xl mx-auto">
            14 days free, no credit card required. Cancel at any time.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center justify-center rounded-md px-8 py-3 text-base font-semibold text-indigo-600 bg-white hover:bg-indigo-50 shadow-lg transition-colors"
          >
            Get started free <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
