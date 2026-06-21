"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, CalendarHeart } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-indigo-600">
            <CalendarHeart className="h-7 w-7" />
            <span className="text-lg font-bold text-slate-900" style={{ fontFamily: "var(--font-sora)" }}>
              Event Planning OS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={"/login"}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Sign in
            </Link>
            <Button asChild href={"/signup"} size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Start free trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-100 py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href={"/login"}
                className="block px-2 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                Sign in
              </Link>
              <Button asChild href={"/signup"} className="bg-indigo-600 hover:bg-indigo-700 text-white w-full">
                Start free trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
