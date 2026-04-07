import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Request a Free Quote | Hudson Smart Installs",
  description:
    "Contact Hudson Smart Installs for low-voltage installation in North Jersey. Request a free quote for security cameras, cabling, smart home devices, access control, and TV mounting.",
};

export default function ContactPage() {
  return (
    <div className="bg-brand-cream text-ink-900">
      <section className="hero-surface">
        <div className="hero-grid" aria-hidden />
        <div className="hero-orb a" aria-hidden />
        <div className="hero-orb b" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
            <div className="space-y-5">
              <span className="tag-pill">Contact</span>
              <h1 className="font-display text-4xl font-semibold text-white md:text-5xl">
                Request a free quote for your low-voltage project
              </h1>
              <p className="text-lg text-white/80">
                Tell us what you need installed or repaired and we will reply within 24 hours with a
                clear plan and timeline.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+15513047001" className="btn btn-primary">
                  Call (551) 304-7001
                </a>
                <a href="sms:+12012757451" className="btn btn-ghost">
                  Send a text message
                </a>
                <a
                  href="https://wa.me/12012757451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Message on WhatsApp
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-brand-navy/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Response</p>
                  <p className="mt-2 text-lg font-semibold text-brand-navy">Within 24 hours</p>
                  <p className="text-sm text-ink-700">Phone or email reply</p>
                </div>
                <div className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-brand-navy/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Service area</p>
                  <p className="mt-2 text-lg font-semibold text-brand-navy">North Jersey</p>
                  <p className="text-sm text-ink-700">Hudson, Essex, Bergen</p>
                </div>
              </div>
            </div>

            <div className="card-surface bg-white p-6 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Send a message</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-brand-navy">
                We will confirm timing and pricing
              </h2>
              <div className="mt-4">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="card-surface bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Direct contact</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-brand-navy">Get in touch</h3>
            <div className="mt-4 space-y-2 text-sm text-ink-700">
              <a href="tel:+15513047001" className="block hover:text-brand-orange">
                Call (551) 304-7001
              </a>
              <a href="sms:+12012757451" className="block hover:text-brand-orange">
                (201) 275-7451
              </a>
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

          <div className="card-surface bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Helpful details</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-brand-navy">What to include</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-700">
              <li>City or town and type of property</li>
              <li>Devices you want installed or fixed</li>
              <li>Any timing or access constraints</li>
              <li>Photos of the area if available</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/services" className="btn btn-outline-dark">
                Browse services
              </Link>
              <Link href="/service-areas" className="btn btn-outline-dark">
                Service areas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
