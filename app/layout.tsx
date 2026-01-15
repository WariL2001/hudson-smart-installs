import Link from "next/link";
import Script from "next/script";

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
      // app/icon.png is served automatically at /icon.png
      icon: [
        { url: "/icon.png", type: "image/png" },
      ],
      // reuse the same icon for Apple for now
      apple: [
        { url: "/icon.png", sizes: "512x512", type: "image/png" },
      ],
    },
    
  };
  


  
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative min-h-screen bg-brand-cream text-ink-900">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6OPTD9YS3F"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6OPTD9YS3F');
          `}
        </Script>

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
