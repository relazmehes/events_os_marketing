import type { Metadata } from "next";
import {
  CalendarDays,
  Users,
  FileText,
  Mail,
  ClipboardList,
  Users2,
  Bell,
  LayoutDashboard,
  PenLine,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://your-app.up.railway.app";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore every module in Event Planning OS — Events, Clients, Estimates, Contracts, Invoices, Email, Day-of Ops, Guest List, and more.",
  openGraph: {
    title: "Features | Event Planning OS",
    description: "Every tool you need to run a successful event planning business.",
  },
};

const MODULES = [
  {
    icon: LayoutDashboard,
    name: "Dashboard",
    tagline: "Your command centre",
    description:
      "Get a real-time bird's-eye view of your business. Upcoming events, outstanding invoices, recent communications, and key metrics — all on one screen the moment you log in.",
    highlights: [
      "Upcoming event countdown",
      "Revenue & outstanding balance widgets",
      "Recent client activity feed",
      "Quick-create shortcuts",
    ],
    color: "indigo",
  },
  {
    icon: CalendarDays,
    name: "Events",
    tagline: "Manage every event, end to end",
    description:
      "Create and track events through their full lifecycle. Assign clients, vendors, budgets, and venues. Calendar view gives you a complete picture of what's ahead.",
    highlights: [
      "Full lifecycle status tracking",
      "Budget vs. actuals overview",
      "Calendar & list views",
      "Venue & vendor assignment",
      "Weather forecasts for event day",
    ],
    color: "violet",
  },
  {
    icon: Users,
    name: "Clients & CRM",
    tagline: "Know every client deeply",
    description:
      "Maintain a rich profile for every client. Log interactions, attach files, and see the full history of quotes, contracts, and invoices linked to each contact.",
    highlights: [
      "Contact & company profiles",
      "Interaction timeline",
      "Linked events, estimates & invoices",
      "Custom notes & tags",
      "Built-in CRM lite — no extra tool needed",
    ],
    color: "indigo",
  },
  {
    icon: FileText,
    name: "Estimates & Invoices",
    tagline: "From quote to payment, effortlessly",
    description:
      "Build itemised estimates from saved templates, convert them to invoices with one click, and track payment status in real time.",
    highlights: [
      "Line-item estimates with templates",
      "One-click estimate → invoice conversion",
      "Payment status tracking",
      "AI-powered suggestion engine",
      "PDF export",
    ],
    color: "violet",
  },
  {
    icon: PenLine,
    name: "Contracts",
    tagline: "Professional contracts, signed faster",
    description:
      "Generate polished contracts from templates, send them for e-signature, and store signed copies automatically. No DocuSign subscription required.",
    highlights: [
      "Rich-text contract editor",
      "E-signature workflow",
      "Template library",
      "Audit trail & signed copy storage",
      "PDF download",
    ],
    color: "indigo",
  },
  {
    icon: Mail,
    name: "Email Communications",
    tagline: "Stay connected from inside the app",
    description:
      "Connect your Gmail or Microsoft 365 account via OAuth. Compose, send, and receive emails — each thread automatically linked to the relevant event or client.",
    highlights: [
      "Gmail & Microsoft 365 OAuth",
      "Event-aware inbox",
      "Compose & reply from the app",
      "Threaded message view",
      "Scheduled email sync",
    ],
    color: "violet",
  },
  {
    icon: ClipboardList,
    name: "Day-of Ops Pack",
    tagline: "Run the day without breaking a sweat",
    description:
      "Generate a complete Day-of Operations Pack in minutes — timeline, vendor contacts, run-of-show, and checklist. Print-ready or share digitally.",
    highlights: [
      "Auto-generated timeline",
      "Vendor contact sheet",
      "Interactive checklist",
      "Print-optimised layout",
      "Focus mode for on-site use",
    ],
    color: "indigo",
  },
  {
    icon: Users2,
    name: "Guest List",
    tagline: "Every guest, perfectly organised",
    description:
      "Import guest lists via CSV or build them manually. Capture RSVPs, meal preferences, dietary requirements, and table assignments in one place.",
    highlights: [
      "CSV import",
      "RSVP & meal preference tracking",
      "Dietary requirement flags",
      "Table/seating notes",
      "Export for caterers & venues",
    ],
    color: "violet",
  },
  {
    icon: Bell,
    name: "Automated Reminders",
    tagline: "Never let a deadline slip",
    description:
      "Set up automated email reminders for clients — payment due dates, contract signing, event confirmations — and let the platform do the follow-up for you.",
    highlights: [
      "Customisable reminder templates",
      "Scheduled delivery",
      "Invoice due date reminders",
      "Event-day countdown emails",
      "Delivery status tracking",
    ],
    color: "indigo",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-100">
            Full feature set
          </Badge>
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Everything your planning
            <br className="hidden sm:block" /> business needs
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Nine purpose-built modules, one seamless platform. From first hello to final invoice — and
            everything in between.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-24">
          {MODULES.map((mod, idx) => (
            <div
              key={mod.name}
              className={`flex flex-col ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Visual card */}
              <div className="w-full lg:w-1/2">
                <div
                  className={`rounded-2xl p-10 flex items-center justify-center min-h-[220px] ${
                    mod.color === "indigo"
                      ? "bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-100"
                      : "bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-100"
                  }`}
                >
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${
                      mod.color === "indigo"
                        ? "bg-indigo-600 shadow-indigo-200"
                        : "bg-violet-600 shadow-violet-200"
                    }`}
                  >
                    <mod.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <Badge
                  className={`mb-3 ${
                    mod.color === "indigo"
                      ? "bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-100"
                      : "bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-100"
                  }`}
                >
                  {mod.tagline}
                </Badge>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {mod.name}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">{mod.description}</p>
                <ul className="space-y-2">
                  {mod.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          mod.color === "indigo" ? "text-indigo-500" : "text-violet-500"
                        }`}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-600 to-violet-600">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="h-10 w-10 text-indigo-200 mx-auto mb-4" />
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Ready to see it in action?
          </h2>
          <p className="mt-4 text-indigo-100 max-w-xl mx-auto">
            Start your free 14-day trial — no credit card required.
          </p>
          <Button
            asChild
            href={"/signup"}
            size="lg"
            className="mt-8 bg-white text-indigo-600 hover:bg-indigo-50 px-8 text-base font-semibold shadow-lg"
          >
            Start free trial <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}
