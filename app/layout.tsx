import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://eventplanningos.com"),
  title: {
    default: "Event Planning OS — All-in-One Platform for Independent Planners",
    template: "%s | Event Planning OS",
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
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Event Planning OS",
    title: "Event Planning OS — All-in-One Platform for Independent Planners",
    description:
      "Manage your entire event business from one place. Clients, estimates, contracts, invoices, communications, day-of ops, and more.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Event Planning OS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Planning OS",
    description: "All-in-one platform for independent event planners.",
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
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-[var(--font-body)]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
