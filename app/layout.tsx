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
            <a href="/" className="group inline-flex items-center gap-3" aria-label="Hudson Smart Installs home">
              <img src="/logohsi.png" alt="Hudson Smart Installs logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
              <span className="sr-only">Hudson Smart Installs</span>
            </a>

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
              <a href="#" className="hover:text-brand-orange">Privacy</a>
              <a href="#" className="hover:text-brand-orange">Terms</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
