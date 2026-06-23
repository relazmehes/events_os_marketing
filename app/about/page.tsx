import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Users, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://your-app.up.railway.app";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story behind Elation — a platform built by planners, for independent event planners who deserve better tools.",
  openGraph: {
    title: "About | Elation",
    description: "Built by planners, for independent event planners.",
  },
};

const VALUES = [
  {
    icon: Heart,
    title: "Built for planners, by planners",
    description:
      "Every feature exists because an independent planner needed it. We don't build what looks good in a demo — we build what makes your day-to-day genuinely easier.",
  },
  {
    icon: Users,
    title: "Designed for one-to-small teams",
    description:
      "Most event planning software is built for large agencies. We're built for solo planners and small firms of up to 10 — where every hour saved goes straight to the bottom line.",
  },
  {
    icon: Zap,
    title: "Opinionated simplicity",
    description:
      "We make deliberate choices so you don't have to configure everything. Sensible defaults, clean workflows, and a UI that gets out of your way.",
  },
  {
    icon: Shield,
    title: "Your data, your business",
    description:
      "Client data is sensitive. We take security seriously — encrypted at rest and in transit, with clear privacy practices and no third-party advertising.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-100">
            Our story
          </Badge>
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Empowering the planners
            <br />
            <span className="text-indigo-600">who make moments happen</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Independent event planners work incredibly hard. They coordinate dozens of moving parts, manage
            multiple clients, and keep everyone happy — often all on their own. They deserve tools as
            professional as the events they create.
          </p>
        </div>
      </section>

      {/* Mission narrative */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The problem with existing tools
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Most event planners manage their business across a patchwork of tools — a spreadsheet for
              clients, a Word doc for contracts, a separate invoicing app, and endless email threads. Switching
              between them costs time, creates errors, and feels like anything but professional.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Enterprise event management platforms exist, but they're expensive, complex, and built for teams
              of 50. Solo planners and small firms are left to cobble together their own workflow — or pay for
              features they'll never use.
            </p>

            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our answer: Elation
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Elation is a single, opinionated platform built for independent planners and small
              planning firms. It handles your full event lifecycle — from the first client conversation all the
              way through to the final invoice and post-event follow-up.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              We've made the hard decisions so you don't have to. Every module connects to the next. Your
              estimate becomes your contract becomes your invoice. Your email syncs to your event. Your
              day-of ops pack pulls from your vendor and timeline data automatically.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We're building for the planner who wants to spend their time creating exceptional events —
              not fighting their software.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What we stand for
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <v.icon className="h-5 w-5 text-indigo-600" />
                </div>
                <h3
                  className="font-semibold text-slate-900 text-lg mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {v.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-600 to-violet-600">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to simplify your workflow?
          </h2>
          <p className="mt-4 text-indigo-100 max-w-xl mx-auto">
            Start your free trial today — no credit card required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-md px-8 py-3 text-base font-semibold text-indigo-700 bg-white hover:bg-indigo-50 shadow-lg transition-colors"
            >
              Start free trial <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md px-8 py-3 text-base font-semibold text-white border-2 border-white bg-transparent hover:bg-white hover:text-indigo-700 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
