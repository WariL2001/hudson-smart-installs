import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Hudson Smart Installs | Low-Voltage Specialists in North Jersey",
  description:
    "Learn about Hudson Smart Installs, a North Jersey team focused on low-voltage installation and maintenance for homes and small businesses.",
};

const values = [
  {
    title: "Do it right",
    body: "We choose the clean, safe, and tested route even when it takes more time.",
  },
  {
    title: "Respect the space",
    body: "We protect floors, keep tools organized, and clean up before we leave.",
  },
  {
    title: "Explain the setup",
    body: "You will know what changed, how it works, and how to use it.",
  },
  {
    title: "Be responsive",
    body: "Fast replies, clear timelines, and consistent follow-through.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-brand-cream text-ink-900">
      <section className="hero-surface">
        <div className="hero-grid" aria-hidden />
        <div className="hero-orb a" aria-hidden />
        <div className="hero-orb b" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-5">
              <span className="tag-pill">About us</span>
              <h1 className="font-display text-4xl font-semibold text-white md:text-5xl">
                Local low-voltage specialists you can trust
              </h1>
              <p className="text-lg text-white/80">
                Hudson Smart Installs was founded in 2024 to make technology installations easy and
                reliable for the North Jersey community. We focus on low-voltage systems that keep
                homes and small businesses safe, connected, and organized.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/services" className="btn btn-ghost">
                  View services
                </Link>
                <Link href="/contact" className="btn btn-primary">
                  Request a Free Quote
                </Link>
              </div>
            </div>

            <aside className="card-surface bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">What we do</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-brand-navy">
                Low-voltage done neatly
              </h2>
              <p className="mt-2 text-sm text-ink-700">
                Security cameras, structured cabling, smart home setups, access control, and clean TV
                mounting. Every job is labeled, tested, and explained.
              </p>
              <p className="mt-3 text-sm text-ink-700">
                Based in Jersey City, we serve Hudson, Essex, and Bergen counties.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-lg ring-1 ring-brand-navy/10">
          <Image
            src="/images/hs2.png"
            alt="Technician working on structured cabling in a rack"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 1000px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Field work</p>
            <p className="font-display text-xl font-semibold">Organized racks and labeled wiring</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Our mission</p>
            <h2 className="font-display text-3xl font-semibold text-brand-navy md:text-4xl">
              Make low-voltage installs simple and dependable
            </h2>
            <p className="text-sm text-ink-700">
              We built Hudson Smart Installs to be the team people call when they want the job done
              cleanly, on time, and without confusion. We work with homeowners, renters, and small
              businesses that need a reliable partner for security, networking, and smart devices.
            </p>
            <p className="text-sm text-ink-700">
              Our technicians bring years of experience in low-voltage and IT environments. That means
              you get an installation that looks professional and performs well for the long run.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="card-surface bg-white p-5">
                <h3 className="text-sm font-semibold text-brand-navy">{value.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-mist/70">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">The difference</p>
              <h2 className="font-display text-3xl font-semibold text-brand-navy md:text-4xl">
                Clean work, clear answers, lasting results
              </h2>
              <p className="text-sm text-ink-700">
                We do not rush through installs. We label cables, leave photos when needed, and make
                sure every device is working before we leave. If you prefer English or Spanish, let us
                know and we will accommodate.
              </p>
            </div>
            <div className="card-surface bg-white p-6 text-sm text-ink-700">
              <p className="font-semibold text-brand-navy">Our promise</p>
              <ul className="mt-3 space-y-2">
                {["On-time arrival with the right tools", "Clean, organized wiring", "Training on how to use your system", "Follow-up support when needed"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
