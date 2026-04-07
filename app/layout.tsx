import Script from "next/script";

import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileCta from "./components/MobileCta";
import { Sora, Source_Sans_3 } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.hudsonsmartinstalls.com";
export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Hudson Smart Installs",
      template: "%s | Hudson Smart Installs",
    },
    description:
      "Low-voltage installation and maintenance for homes and small businesses in North Jersey. Security cameras, structured cabling, smart home devices, access control, TV mounting, and more.",
    keywords: [
      "low voltage installation",
      "security camera installation",
      "structured cabling",
      "data cabling",
      "access control systems",
      "TV mounting",
      "smart home devices",
      "low-voltage",
      "network wiring",
      "Cat6",
      "fiber optic",
      "Jersey City",
      "Hoboken",
      "North Jersey",
      "Hudson County",
      "Essex County",
      "Bergen County",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Hudson Smart Installs",
      description:
        "Low-voltage installation and maintenance in North Jersey. Cameras, cabling, smart devices, access control, and clean TV mounting.",
      url: "/",
      siteName: "Hudson Smart Installs",
      // Using your logo for now; we can generate a 1200x630 OG image later.
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Hudson Smart Installs",
      description:
        "Low-voltage installation and maintenance in North Jersey. Cameras, cabling, smart devices, access control, and clean TV mounting.",
      images: ["/opengraph-image"],
    },
    manifest: "/site.webmanifest",
    themeColor: "#0B1C2B",
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
      <body
        className={`${sourceSans.variable} ${sora.variable} relative min-h-screen bg-brand-cream text-ink-900 antialiased`}
      >
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

        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
