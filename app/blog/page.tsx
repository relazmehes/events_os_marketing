import type { Metadata } from "next";
import { BookOpen, ArrowRight, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://your-app.up.railway.app";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and insights for independent event planners — from the Event Planning OS team.",
  openGraph: {
    title: "Blog | Event Planning OS",
    description: "Tips, guides, and insights for independent event planners.",
  },
};

const UPCOMING_POSTS = [
  {
    title: "How to build a client onboarding workflow that wins",
    category: "Business tips",
    eta: "Coming soon",
  },
  {
    title: "The essential contract clauses every event planner needs",
    category: "Legal & Contracts",
    eta: "Coming soon",
  },
  {
    title: "Day-of ops: how to stay calm when everything changes",
    category: "Operations",
    eta: "Coming soon",
  },
  {
    title: "Pricing your events: moving from hourly to value-based fees",
    category: "Pricing & Finance",
    eta: "Coming soon",
  },
  {
    title: "How to use email automation to keep clients in the loop",
    category: "Communications",
    eta: "Coming soon",
  },
  {
    title: "Growing from solo planner to small firm: a practical guide",
    category: "Growth",
    eta: "Coming soon",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-100">
            Blog
          </Badge>
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Insights for independent planners
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Practical guides, business tips, and behind-the-scenes looks at running a successful event
            planning practice. New content launching soon.
          </p>
        </div>
      </section>

      {/* Coming soon state */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Rss className="h-5 w-5 text-indigo-500" />
            <h2
              className="text-lg font-semibold text-slate-900"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Coming up
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {UPCOMING_POSTS.map((post) => (
              <div
                key={post.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <Badge className="mb-3 bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-100 text-xs">
                  {post.category}
                </Badge>
                <h3 className="font-semibold text-slate-900 leading-snug mb-3">{post.title}</h3>
                <p className="text-xs text-slate-400 font-medium">{post.eta}</p>
              </div>
            ))}
          </div>

          {/* Newsletter signup prompt */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 p-10 text-center">
            <BookOpen className="h-8 w-8 text-indigo-500 mx-auto mb-4" />
            <h3
              className="text-xl font-bold text-slate-900 mb-2"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Be first to read new articles
            </h3>
            <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
              We're putting the finishing touches on our first articles. Sign up to the app to get notified
              when we publish.
            </p>
            <Button asChild href={`${APP_URL}/signup`} className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Create a free account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
