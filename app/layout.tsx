import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hudson Smart Installs",
  description:
    "Hands-on tech installs & support in North Jersey. Networking, smart tech, clean cabling, and on-site IT.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="
          min-h-screen text-brand-cream
          bg-gradient-to-br from-brand-navy via-[#16263a] to-brand-orange/70
          antialiased
        "
      >
        <a href="#main" className="skip-link">Skip to content</a>

        <header className="sticky top-0 z-50 bg-brand-navy/70 backdrop-blur border-b border-white/10">
  <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
    <Link href="/" className="flex items-center gap-2" aria-label="Hudson Smart Installs — Home">
      <Image
        src="/logohsi.png"
        alt="Hudson Smart Installs"
        width={160}
        height={40}
        priority
        className="h-6 md:h-8 w-auto"
      />
    </Link>

    <nav className="ml-auto hidden md:flex gap-6 text-sm">
      {[
        ["#networking", "Networking & Cabling"],
        ["#smart-tech", "Smart Home & Office"],
        ["#it-support", "IT Support"],
        ["#custom", "Custom Installs"],
        ["#areas", "Service Areas"],
        ["#contact", "Contact"],
      ].map(([href, label]) => (
        <a key={href} href={href} className="hover:text-brand-orange focus-visible:text-brand-orange">
          {label}
        </a>
      ))}
    </nav>

    <div className="hidden md:flex items-center gap-2">
      <a href="#contact" className="btn btn-primary">Book Now</a>
    </div>
  </div>
</header>

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
