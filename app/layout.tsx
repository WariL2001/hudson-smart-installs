import Link from "next/link";

import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.hudsonsmartinstalls.com";
export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Hudson Smart Installs",
      template: "%s · Hudson Smart Installs",
    },
    description:
      "Hands-on tech installs & support in North Jersey. Networking, smart tech, clean cabling, and on-site IT.",
    keywords: [
      "network cabling",
      "wifi",
      "smart home",
      "low-voltage",
      "IT support",
      "Jersey City",
      "Hoboken",
      "North Jersey",
      "AV",
      "CCTV",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Hudson Smart Installs",
      description:
        "Networking, smart tech, clean cabling, and on-site IT in North Jersey.",
      url: "/",
      siteName: "Hudson Smart Installs",
      // Por ahora usamos tu logo; en el paso 2 creamos una OG dinámica 1200x630
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Hudson Smart Installs",
      description:
        "Networking, smart tech, clean cabling, and on-site IT in North Jersey.",
      images: ["/opengraph-image"],
    },
    manifest: "/site.webmanifest",
    themeColor: "#0D1B2A",
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
  


  
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative min-h-screen bg-brand-cream text-ink-900">

        <a href="#main" className="skip-link">Skip to content</a>

        {/* NUEVO: Navbar como client component */}
        <Navbar />

        <main id="main">{children}</main>

        <footer className="mt-20 border-t border-white/10 bg-brand-navy/60">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-brand-cream/90 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="font-semibold">© {new Date().getFullYear()} Hudson Smart Installs</div>
            <div className="opacity-80">North Jersey • Bilingual (EN/ES)</div>
            <div className="md:ml-auto flex gap-4">
              <Link href="/privacy" className="hover:text-brand-orange">Privacy</Link>
              <Link href="/terms" className="hover:text-brand-orange">Terms</Link>
            </div>
          </div>
        </footer>

        


      </body>
    </html>
  );
}
