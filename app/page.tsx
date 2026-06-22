import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  FileText,
  Mail,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://your-app.up.railway.app";

export const metadata: Metadata = {
  title: "Elation — All-in-One Event Planning OS for Independent Planners",
  description:
    "Manage your entire event business from one place. Clients, estimates, contracts, invoices, communications, day-of ops, and more — built for independent event planners.",
};

const FEATURES = [
  {
    icon: CalendarDays,
    title: "Events & Clients",
    description:
      "Full event lifecycle management with a unified client CRM. Track every detail from first inquiry to final wrap-up.",
  },
  {
    icon: FileText,
    title: "Estimates, Contracts & Invoices",
    description:
      "Create polished proposals, send legally-sound contracts for e-signature, and collect payments — all in one flow.",
  },
  {
    icon: Mail,
    title: "Email Communications",
    description:
      "Connect your Gmail or Microsoft 365 account. Send, receive, and track event-aware emails without leaving the app.",
  },
  {
    icon: ClipboardList,
    title: "Day-of Ops Pack",
    description:
      "Generate a complete day-of operations pack — timeline, vendor contacts, run-of-show — in minutes, not hours.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Add your client & event",
    description:
      "Create a client profile, link your event, and capture every detail — budget, venue, vendors, and more.",
  },
  {
    step: "2",
    title: "Build your documents",
    description:
      "Generate an estimate, convert it to a contract, collect e-signature, and send the invoice — in one connected workflow.",
  },
  {
    step: "3",
    title: "Run the day flawlessly",
    description:
      "Print your Day-of Ops Pack, manage the guest list, and keep every stakeholder in the loop with automated reminders.",
  },
];

const PRICING_TIERS = [
  {
    name: "Basic",
    price: "$29",
    period: "/mo",
    description: "Perfect for solo planners just getting started.",
    features: [
      "1 user",
      "Up to 10 events/month",
      "Clients & CRM",
      "Estimates & invoices",
      "Contracts with e-sign",
      "Day-of ops pack",
      "Guest list management",
    ],
    cta: "Start free trial",
    ctaHref: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$59",
    period: "/mo",
    description: "Everything you need to run a thriving solo planning business.",
    features: [
      "1 user",
      "Unlimited events",
      "Everything in Basic",
      "Gmail & M365 email sync",
      "Automated reminders",
      "Advanced reporting",
      "Priority email support",
    ],
    cta: "Start free trial",
    ctaHref: "/signup",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "/mo",
    description: "For small firms ready to scale with a team.",
    features: [
      "Up to 10 users",
      "Unlimited events",
      "Everything in Pro",
      "Team seat management",
      "Shared client workspace",
      "Custom branding",
      "Priority support & onboarding",
    ],
    cta: "Contact us",
    ctaHref: "/contact",
    highlighted: false,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-amber-50 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-violet-100 text-violet-700 hover:bg-violet-100 border-violet-200">
            Built for independent event planners
          </Badge>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1E0A3C] leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Run your entire event
            <br />
            <span className="text-violet-700">business in one place</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From first client inquiry to final invoice — Elation handles your full event lifecycle
            so you can focus on creating unforgettable experiences.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              href={"/signup"}
              size="lg"
              className="bg-violet-700 hover:bg-violet-800 text-white px-8 text-base font-semibold shadow-lg shadow-violet-200"
            >
              Start free trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              asChild
              href="/features"
              variant="outline"
              size="lg"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 text-base"
            >
              See all features
            </Button>
          </div>
          <p className="mt-4 text-sm text-slate-500">No credit card required · Cancel anytime</p>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-y border-slate-100 bg-slate-50 py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest mb-8">
            Built for independent event planners
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: Clock,
                headline: "14-day free trial",
                sub: "No credit card required to get started.",
              },
              {
                icon: Zap,
                headline: "Everything in one place",
                sub: "Clients, docs, email, ops — zero context switching.",
              },
              {
                icon: ShieldCheck,
                headline: "Cancel anytime",
                sub: "No lock-in. Export your data whenever you want.",
              },
            ].map((item) => (
              <div key={item.headline} className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-violet-700" />
                </div>
                <p className="font-semibold text-slate-900 text-sm">{item.headline}</p>
                <p className="text-slate-500 text-xs max-w-[200px]">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-100">
              Everything you need
            </Badge>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              All the tools. One platform.
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Stop juggling spreadsheets, email threads, and separate tools. Elation brings your
              entire workflow under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature) => (
              <Card
                key={feature.title}
                className="group border-slate-100 hover:border-violet-200 hover:shadow-md transition-all duration-200"
              >
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-violet-700 transition-colors">
                    <feature.icon className="h-5 w-5 text-violet-700 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-base font-semibold text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/features"
              className="text-violet-700 font-medium text-sm hover:text-violet-800 inline-flex items-center gap-1 transition-colors"
            >
              View all features <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-100">
              Simple by design
            </Badge>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How it works
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Get from inquiry to event day in three connected steps — no steep learning curve required.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((item, idx) => (
              <div key={idx} className="relative text-center">
                <div
                  className="mx-auto w-14 h-14 rounded-full bg-violet-700 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-violet-200 mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.step}
                </div>
                <h3
                  className="font-semibold text-lg text-slate-900 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 sm:py-28 bg-white" id="pricing">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-100">
              Transparent pricing
            </Badge>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Simple, predictable pricing
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              No surprise fees. Cancel anytime. Start free — no credit card required.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl flex flex-col ${
                  tier.highlighted
                    ? "bg-violet-700 text-white shadow-2xl shadow-violet-200 ring-2 ring-violet-700 scale-105"
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
                  <h3
                    className={`text-xl font-bold mb-1 ${tier.highlighted ? "text-white" : "text-slate-900"}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {tier.name}
                  </h3>
                  <p className={`text-sm mb-6 ${tier.highlighted ? "text-violet-200" : "text-slate-500"}`}>
                    {tier.description}
                  </p>
                  <div className="flex items-end gap-1 mb-8">
                    <span
                      className={`text-4xl font-extrabold ${tier.highlighted ? "text-white" : "text-[#1E0A3C]"}`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {tier.price}
                    </span>
                    <span className={`text-sm mb-1 ${tier.highlighted ? "text-violet-200" : "text-slate-500"}`}>
                      {tier.period}
                    </span>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2
                          className={`h-4 w-4 mt-0.5 shrink-0 ${
                            tier.highlighted ? "text-violet-200" : "text-violet-600"
                          }`}
                        />
                        <span className={tier.highlighted ? "text-violet-100" : "text-slate-700"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.ctaHref}
                    className={`inline-flex items-center justify-center w-full rounded-lg py-2.5 px-4 text-sm font-semibold transition-colors ${
                      tier.highlighted
                        ? "bg-white text-violet-700 hover:bg-violet-50"
                        : "bg-violet-700 text-white hover:bg-violet-800"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-8">
            All plans include a 14-day free trial. &nbsp;
            <Link href="/pricing" className="text-violet-700 hover:underline font-medium">
              View full comparison →
            </Link>
          </p>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 bg-gradient-to-r from-violet-800 to-[#1E0A3C]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to simplify your event business?
          </h2>
          <p className="mt-4 text-indigo-100 text-lg max-w-xl mx-auto">
            Join independent planners who manage their entire business without the chaos.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              href={"/signup"}
              size="lg"
              className="bg-white text-violet-700 hover:bg-violet-50 px-8 text-base font-semibold shadow-lg"
            >
              Start free trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              asChild
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white bg-white/10 hover:bg-white/20 px-8 text-base font-semibold"
            >
              View pricing
            </Button>
          </div>
          <p className="mt-4 text-sm text-indigo-200">No credit card required · Cancel anytime</p>
        </div>
      </section>
    </>
  );
}
