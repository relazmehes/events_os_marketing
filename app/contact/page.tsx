import type { Metadata } from "next";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Event Planning OS team. We're happy to help with questions about pricing, features, or anything else.",
  openGraph: {
    title: "Contact | Event Planning OS",
    description: "Get in touch with the Event Planning OS team.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 pb-12 sm:pt-28 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-100">
            Get in touch
          </Badge>
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            We'd love to hear from you
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Questions about pricing, features, or need help getting started? Send us a message and we'll
            get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Info column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2
                  className="text-xl font-bold text-slate-900 mb-6"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Contact information
                </h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">Email us</p>
                      <a
                        href="mailto:hello@eventplanningos.com"
                        className="text-indigo-600 hover:underline text-sm"
                      >
                        hello@eventplanningos.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">Response time</p>
                      <p className="text-slate-500 text-sm">Within 1 business day</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                      <MessageSquare className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">Enterprise enquiries</p>
                      <p className="text-slate-500 text-sm">
                        Interested in the Enterprise plan or custom onboarding? Mention it in your message
                        and we'll prioritise your request.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                <p className="text-sm font-semibold text-indigo-800 mb-1">Already a customer?</p>
                <p className="text-sm text-indigo-700">
                  Log in to your account and use the in-app support chat for the fastest response.
                </p>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <h2
                  className="text-xl font-bold text-slate-900 mb-6"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  Send a message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
