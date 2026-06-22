import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://elation.events"),
  title: {
    default: "Elation — All-in-One Event Planning OS for Independent Planners",
    template: "%s | Elation",
  },
  description:
    "Manage your entire event business from one place. Clients, estimates, contracts, invoices, communications, day-of ops, and more — built for independent event planners.",
  keywords: [
    "event planning software",
    "event planner platform",
    "event management app",
    "independent event planner tools",
    "wedding planner software",
    "event business management",
    "elation events",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Elation",
    title: "Elation — All-in-One Event Planning OS for Independent Planners",
    description:
      "Manage your entire event business from one place. Clients, estimates, contracts, invoices, communications, day-of ops, and more.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Elation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elation",
    description: "All-in-one event planning OS for independent planners.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col bg-white text-slate-900" style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
