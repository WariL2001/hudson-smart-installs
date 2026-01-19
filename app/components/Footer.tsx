import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-navy/10 bg-brand-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div>
          <p className="font-display text-xl font-semibold text-brand-navy">Hudson Smart Installs</p>
          <p className="mt-3 text-sm text-ink-700">
            Low-voltage installation and maintenance for homes and small businesses in North Jersey.
            We deliver neat, labeled work and clear walkthroughs.
          </p>
          <Link href="/contact" className="mt-4 inline-flex btn btn-primary">
            Request a Free Quote
          </Link>
          <p className="mt-4 text-xs text-ink-500">
            Based in Jersey City. Serving Hudson, Essex, and Bergen counties.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Pages</p>
          <nav className="mt-4 flex flex-col gap-2 text-sm text-ink-700">
            <Link href="/" className="hover:text-brand-orange">Home</Link>
            <Link href="/services" className="hover:text-brand-orange">Services</Link>
            <Link href="/about" className="hover:text-brand-orange">About Us</Link>
            <Link href="/service-areas" className="hover:text-brand-orange">Service Areas</Link>
            <Link href="/testimonials" className="hover:text-brand-orange">Testimonials</Link>
            <Link href="/contact" className="hover:text-brand-orange">Contact</Link>
          </nav>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Contact</p>
          <div className="mt-4 space-y-2 text-sm text-ink-700">
            <a href="tel:+12012757451" className="block hover:text-brand-orange">Call (201) 275-7451</a>
            <a href="mailto:info@hudsonsmartinstalls.com" className="block hover:text-brand-orange">
              info@hudsonsmartinstalls.com
            </a>
            <a
              href="https://wa.me/12012757451"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-brand-orange"
            >
              Message on WhatsApp
            </a>
            <p className="text-xs text-ink-500">Service hours: Mon-Sat, 8:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-4 pb-8 text-xs text-ink-500 md:flex-row md:items-center md:justify-between">
        <p>Copyright {new Date().getFullYear()} Hudson Smart Installs. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:text-brand-orange">Privacy</Link>
          <Link href="/terms" className="hover:text-brand-orange">Terms</Link>
          <a
            href="https://g.page/r/Ca8MnC9PLM60EAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-orange"
          >
            Leave a Google review
          </a>
        </div>
      </div>
    </footer>
  );
}
