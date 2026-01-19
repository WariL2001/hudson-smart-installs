import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Testimonials | Hudson Smart Installs",
  description:
    "Read customer reviews for Hudson Smart Installs. Homeowners and small businesses across North Jersey rate our low-voltage installations 5.0 on Google.",
};

const testimonials = [
  {
    quote:
      "They rewired our office with Cat6 and the result is fantastic. The work was neat, labeled, and finished on time.",
    name: "Alex R.",
    location: "Newark, NJ",
  },
  {
    quote:
      "Excellent experience from start to finish. The team mounted my TV and set up smart lighting flawlessly.",
    name: "Maria L.",
    location: "Hoboken, NJ",
  },
  {
    quote:
      "We needed security cameras for our storefront. Hudson Smart Installs did an amazing job and explained everything.",
    name: "Bryan K.",
    location: "Jersey City, NJ",
  },
  {
    quote:
      "Fast response, clean cabling, and the network rack finally looks organized. Highly recommend.",
    name: "Sam T.",
    location: "Hackensack, NJ",
  },
  {
    quote:
      "Our video doorbell and thermostat were installed quickly, and the app walkthrough made it easy for the family.",
    name: "Lena P.",
    location: "Bayonne, NJ",
  },
  {
    quote:
      "Access control and cameras were installed in one visit. Professional, clean, and on time.",
    name: "Chris M.",
    location: "Fort Lee, NJ",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-brand-cream text-ink-900">
      <section className="hero-surface">
        <div className="hero-grid" aria-hidden />
        <div className="hero-orb a" aria-hidden />
        <div className="hero-orb b" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-5">
              <span className="tag-pill">Testimonials</span>
              <h1 className="font-display text-4xl font-semibold text-brand-navy md:text-5xl">
                Clients rate us 5.0 on Google
              </h1>
              <p className="text-lg text-ink-700">
                Homeowners and small businesses across North Jersey trust us for clean installs and
                clear communication.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Request a Free Quote
                </Link>
                <a
                  href="https://g.page/r/Ca8MnC9PLM60EAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  Leave a Google review
                </a>
              </div>
            </div>

            <aside className="card-surface bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Trust signals</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-brand-navy">
                Consistent 5.0 rating
              </h2>
              <p className="mt-2 text-sm text-ink-700">
                Customers highlight tidy work, fast response, and clear explanations of how their
                systems work.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={`${item.name}-${item.location}`}
              className="card-surface bg-white p-5 reveal-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-sm text-ink-700">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                {item.name} - {item.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-mist/70">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Next steps</p>
              <h2 className="font-display text-3xl font-semibold text-brand-navy md:text-4xl">
                Ready to start your project?
              </h2>
              <p className="text-sm text-ink-700">
                Tell us what you need and we will reply with timing and pricing options.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="btn btn-primary">
                Request a Free Quote
              </Link>
              <Link href="/services" className="btn btn-outline-dark">
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
