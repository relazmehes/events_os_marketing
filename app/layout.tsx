import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://your-app.up.railway.app";

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
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Nav appUrl={APP_URL} />
        <main className="flex-1">{children}</main>
        <Footer appUrl={APP_URL} />
      </body>
    </html>
  );
}
