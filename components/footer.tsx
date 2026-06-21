import Link from "next/link";
import { CalendarHeart, Share2, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <CalendarHeart className="h-6 w-6 text-indigo-400" />
              <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-sora)" }}>
                Event Planning OS
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              The all-in-one platform built for independent event planners and small planning firms.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="X / Twitter"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@eventplanningos.com"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href={"/signup"} className="hover:text-white transition-colors">Start free trial</Link></li>
              <li><Link href={"/login"} className="hover:text-white transition-colors">Sign in</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Event Planning OS. All rights reserved.</p>
          <p>Built for planners, by planners.</p>
        </div>
      </div>
    </footer>
  );
}
