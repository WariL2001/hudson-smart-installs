"use client";

import dynamic from "next/dynamic";
import ContactForm from "../components/ContactForm";
import Link from "next/link";

const ServiceAreaMap = dynamic(
  () => import("../components/ServiceAreaMap"),
  { ssr: false, loading: () => <div className="h-[360px] w-full rounded-2xl bg-black/5 animate-pulse" /> }
);

export default function ContactPage() {
  return (
    <div className="bg-brand-cream text-ink-900">
      <section className="relative overflow-hidden bg-brand-cream text-ink-900">
        <div className="mesh-shell" aria-hidden>
          <div className="mesh mesh-a" />
          <div className="mesh mesh-b" />
          <div className="mesh mesh-c" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-navy ring-1 ring-brand-navy/10 shadow-sm">
            <span>Contact us</span>
            <span className="h-[1px] w-6 bg-brand-orange/80" />
            <span>North Jersey</span>
          </div>

          <div className="mt-8 grid gap-10 md:grid-cols-[1.05fr_1fr] md:items-start">
            <div className="space-y-5">
              <h1 className="text-4xl font-extrabold leading-tight text-brand-navy md:text-5xl">
                Tell us what you need. We’ll reply with timing and a plan.
              </h1>
              <p className="text-lg text-ink-700">
                Share the space, the gear you have, and what’s not working. Hudson, Essex, and Bergen are prioritized for quick arrivals.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="tel:+12012757451" className="btn btn-outline-dark">
                  Call (201) 275-7451
                </a>
                <a
                  href="https://wa.me/+12012757451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  WhatsApp
                </a>
                <a href="mailto:info@hudsonsmartinstalls.com" className="btn btn-outline-dark">
                  Email
                </a>
              </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-brand-navy/10">
                <div className="text-xs uppercase tracking-wide text-ink-500">Response</div>
                <div className="text-2xl font-bold text-brand-navy">Same day</div>
                <div className="text-sm text-ink-600">Remote or on-site</div>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-brand-navy/10">
                <div className="text-xs uppercase tracking-wide text-ink-500">Service area</div>
                <div className="text-2xl font-bold text-brand-navy">North Jersey</div>
                <div className="text-sm text-ink-600">Hudson • Essex • Bergen</div>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-brand-navy/10">
                <div className="text-xs uppercase tracking-wide text-ink-500">Languages</div>
                <div className="text-2xl font-bold text-brand-navy">EN / ES</div>
                <div className="text-sm text-ink-600">Plain explanations</div>
              </div>
            </div>
            </div>

            <div className="card-surface bg-white text-ink-900 p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-500">Send a message</p>
                  <h2 className="text-xl font-semibold text-ink-900">We’ll get back quickly</h2>
                </div>
                <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                  Same week slots
                </span>
              </div>
              <ContactForm />
              <a
                href="https://g.page/r/Ca8MnC9PLM60EAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-2 text-sm font-semibold text-brand-orange transition hover:bg-brand-orange/20"
              >
                ⭐ Leave a Google review
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-14 mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-navy/10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-brand-orange/80">Contact</p>
                <h3 className="text-xl font-semibold text-ink-900">Direct lines</h3>
              </div>
              <div className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                Same-week installs
              </div>
            </div>

            <div className="mt-4 grid gap-3 text-sm text-ink-800">
              <a href="tel:+12012757451" className="flex items-center gap-2 hover:text-brand-orange">
                📞 (201) 275-7451
              </a>
              <a href="mailto:info@hudsonsmartinstalls.com" className="flex items-center gap-2 hover:text-brand-orange">
                ✉️ info@hudsonsmartinstalls.com
              </a>
              <a
                href="https://wa.me/+12012757451"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-orange"
              >
                💬 WhatsApp
              </a>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl bg-brand-orange/5 p-3 text-sm text-ink-700">
                Wi-Fi tuning, cabling, smart devices, cameras, locks, and light IT.
              </div>
              <div className="rounded-xl bg-brand-navy/5 p-3 text-sm text-ink-700">
                We label work, take photos, and explain setups in English or Spanish.
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Link href="/#services" className="btn btn-outline-dark">
                See services
              </Link>
              <Link href="/reviews" className="btn btn-outline-dark">
                See reviews
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-brand-navy/10">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-brand-orange/80">Service area</p>
                <h3 className="text-lg font-semibold text-ink-900">Hudson, Essex, Bergen</h3>
              </div>
              <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                On-site + remote
              </span>
            </div>
            <div className="relative z-0 h-[420px] w-full overflow-hidden rounded-xl shadow-lg">
              <ServiceAreaMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
