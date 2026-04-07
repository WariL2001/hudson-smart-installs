import Link from "next/link";
import type { Metadata } from "next";
import ServiceAreaMap from "../components/ServiceAreaMap";

export const metadata: Metadata = {
  title: "Service Areas | Hudson Smart Installs",
  description:
    "Service areas across North Jersey including Hudson, Essex, and Bergen counties. Hudson Smart Installs serves homes and small businesses with low-voltage installation services.",
};

const counties = [
  {
    name: "Hudson County",
    cities: ["Jersey City", "Hoboken", "Bayonne", "Union City", "Weehawken", "North Bergen", "Kearny"],
  },
  {
    name: "Essex County",
    cities: ["Newark", "Montclair", "Bloomfield", "East Orange", "West Orange", "Irvington"],
  },
  {
    name: "Bergen County",
    cities: ["Hackensack", "Fort Lee", "Paramus", "Englewood", "Ridgefield", "Cliffside Park"],
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="bg-brand-cream text-ink-900">
      <section className="hero-surface">
        <div className="hero-grid" aria-hidden />
        <div className="hero-orb a" aria-hidden />
        <div className="hero-orb b" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-5">
              <span className="tag-pill">Service areas</span>
              <h1 className="font-display text-4xl font-semibold text-white md:text-5xl">
                Low-voltage service across North Jersey
              </h1>
              <p className="text-lg text-white/80">
                Hudson Smart Installs is based in Jersey City and serves homes and small businesses
                throughout Hudson, Essex, and Bergen counties. If you are nearby and do not see your
                town listed, reach out and we will confirm availability.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Request a Free Quote
                </Link>
                <a href="tel:+15513047001" className="btn btn-ghost">
                  Call (551) 304-7001
                </a>
              </div>
            </div>

            <aside className="card-surface bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Local focus</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-brand-navy">
                Fast response in core areas
              </h2>
              <p className="mt-2 text-sm text-ink-700">
                We regularly install structured cabling, security cameras, and smart home systems in
                Jersey City, Hoboken, Newark, and surrounding towns.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="space-y-6">
            {counties.map((county) => (
              <div key={county.name} className="card-surface bg-white p-6">
                <h2 className="font-display text-xl font-semibold text-brand-navy">{county.name}</h2>
                <p className="mt-3 text-sm text-ink-700">{county.cities.join(", ")}</p>
              </div>
            ))}
            <div className="card-surface bg-white p-6">
              <h2 className="font-display text-xl font-semibold text-brand-navy">By request</h2>
              <p className="mt-3 text-sm text-ink-700">
                We can often accommodate nearby areas for larger projects. Call us to confirm timing.
              </p>
            </div>
          </div>

          <div className="card-surface bg-white p-4">
            <div className="mb-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Coverage map</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-brand-navy">North Jersey</h3>
            </div>
            <div className="relative z-0 h-[360px] w-full overflow-hidden rounded-xl shadow-lg md:h-[520px]">
              <ServiceAreaMap />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist/70">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Local expertise</p>
              <h2 className="font-display text-3xl font-semibold text-brand-navy md:text-4xl">
                We bring low-voltage expertise to every neighborhood
              </h2>
              <p className="text-sm text-ink-700">
                From network cabling in Jersey City brownstones to security cameras in Bergen County
                offices, our team brings the tools and parts needed for a clean install.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/services" className="btn btn-outline-dark">
                Browse services
              </Link>
              <Link href="/contact" className="btn btn-primary">
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
