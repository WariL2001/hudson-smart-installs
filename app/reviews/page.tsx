"use client";

import Link from "next/link";

export default function ReviewsPage() {
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
            <span>Customer reviews</span>
            <span className="h-[1px] w-6 bg-brand-orange/80" />
            <span>North Jersey</span>
          </div>

          <div className="mt-6 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold leading-tight text-brand-navy md:text-5xl">
                Neighbors and small businesses rate us 5.0 on Google.
              </h1>
              <p className="text-lg text-ink-700">
                Wi-Fi fixes, clean cabling, smart devices, and on-site IT—always labeled and explained before we leave.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/#contact" className="btn btn-primary">
                  Book a visit
                </Link>
                <a
                  href="https://g.page/r/Ca8MnC9PLM60EAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  Leave a review
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-brand-navy/10">
                  <div className="text-xs uppercase tracking-wide text-ink-500">Rating</div>
                  <div className="text-2xl font-bold text-brand-navy">5.0</div>
                  <div className="text-sm text-ink-600">Google reviews</div>
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

            <aside className="card-surface border border-brand-navy/10 bg-white p-6 shadow-xl ring-1 ring-brand-navy/5">
              <header className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink-500">Google feedback</p>
                  <h2 className="text-xl font-bold text-ink-900">What clients say</h2>
                  <p className="text-sm text-ink-500">Pulled directly from our Google Business Profile.</p>
                </div>
                <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                  Verified
                </span>
              </header>

              <section className="mt-4 rounded-2xl bg-brand-orange/5 p-3 shadow-inner">
                <div
                  className="elfsight-app-9943d850-f7a6-4bf9-9aec-0721a217feb3"
                  data-elfsight-app-lazy
                />
              </section>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://g.page/r/Ca8MnC9PLM60EAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Leave a Google review
                </a>
                <Link href="/#contact" className="btn btn-outline-dark">
                  Request a visit
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="-mt-14 mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card-surface bg-white p-4">
            <h3 className="text-sm font-semibold text-brand-orange">Clear expectations</h3>
            <p className="mt-2 text-sm text-ink-600">Arrival windows, labeled work, and photos before we leave.</p>
          </div>
          <div className="card-surface bg-white p-4">
            <h3 className="text-sm font-semibold text-brand-orange">Prepared visits</h3>
            <p className="mt-2 text-sm text-ink-600">Testers, patch cords, plates, and mounting hardware on hand.</p>
          </div>
          <div className="card-surface bg-white p-4">
            <h3 className="text-sm font-semibold text-brand-orange">Bilingual support</h3>
            <p className="mt-2 text-sm text-ink-600">We explain fixes and changes in English or Spanish.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
