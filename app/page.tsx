import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "Low Voltage Installation in North Jersey | Hudson Smart Installs",
  description:
    "Low-voltage installation and maintenance for homes and small businesses in North Jersey. Security cameras, structured cabling, smart home devices, access control, TV mounting, and more.",
};

const services = [
  {
    id: "security-cameras",
    title: "Security Camera Systems",
    description:
      "Indoor and outdoor CCTV with DVR/NVR setup, remote viewing apps, and clean cable runs.",
    image: "/services/security-camera.svg",
    imageAlt: "Security camera icon",
  },
  {
    id: "data-cabling",
    title: "Data Cabling and Network Wiring",
    description:
      "Cat5e/Cat6/Cat6A and fiber runs, patch panels, labeling, and testing for reliable speed.",
    image: "/services/data-cabling.svg",
    imageAlt: "Data cabling icon",
  },
  {
    id: "smart-home",
    title: "Smart Home Devices",
    description:
      "Doorbells, thermostats, lighting, and speakers connected to Wi-Fi with simple app setup.",
    image: "/services/smart-home.svg",
    imageAlt: "Smart home icon",
  },
  {
    id: "access-control",
    title: "Access Control Systems",
    description:
      "Keypads, intercoms, and door buzzers installed for secure entry in homes and offices.",
    image: "/services/access-control.svg",
    imageAlt: "Access control icon",
  },
  {
    id: "tv-mounting",
    title: "TV Mounting and Cable Management",
    description:
      "Secure wall mounting with hidden or neatly managed cables and clean device hookups.",
    image: "/services/tv-mounting.svg",
    imageAlt: "TV mounting icon",
  },
  {
    id: "low-voltage",
    title: "Low-Voltage Electrical Work",
    description:
      "Patch panels, device rewiring, and tidy jack installs to keep systems safe and organized.",
    image: "/services/low-voltage.svg",
    imageAlt: "Low-voltage panel icon",
  },
];

const highlights = [
  {
    title: "Neat, labeled work",
    body: "Every run is organized and labeled so future changes are easy and safe.",
  },
  {
    title: "Fast, clear communication",
    body: "We return calls quickly, arrive on time, and explain everything before we leave.",
  },
  {
    title: "Built for homes and small businesses",
    body: "We design installs that keep households secure and offices running without downtime.",
  },
  {
    title: "Trusted local service",
    body: "5.0 Google rating and a focus on clean work that lasts.",
  },
];

const testimonials = [
  {
    quote:
      "They wired our office with Cat6 and installed cameras in one visit. Everything was labeled and tested.",
    name: "Alex R.",
    location: "Newark, NJ",
  },
  {
    quote:
      "Our doorbell and smart thermostat were set up quickly, and the app walkthrough was easy to follow.",
    name: "Maria L.",
    location: "Hoboken, NJ",
  },
  {
    quote:
      "Great TV mount with hidden cables. Clean finish and no mess left behind.",
    name: "Bryan K.",
    location: "Jersey City, NJ",
  },
];

const gallery = [
  {
    src: "/images/hs2.png",
    title: "Structured cabling in progress",
    body: "Rack work with clean terminations and testing.",
  },
  {
    src: "/images/hs3.png",
    title: "Smart home device setup",
    body: "Connected hubs and devices staged for setup.",
  },
  {
    src: "/images/hs1.png",
    title: "On-site service visit",
    body: "Arrive prepared with tools and a clear plan.",
  },
];

const stats = [
  {
    label: "Response",
    value: "Within 24h",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Est.",
    value: "2024",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: "Rating",
    value: "5.0 Google",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ),
  },
];

export default function Page() {
  return (
    <div className="bg-brand-cream text-ink-900">
      {/* ── HERO ── */}
      <section className="hero-surface">
        <div className="hero-grid" aria-hidden />
        <div className="hero-orb a" aria-hidden />
        <div className="hero-orb b" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="space-y-6">
              <span className="tag-pill">Low-voltage installations</span>
              <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
                Low-Voltage Tech Installations Done Right in North Jersey
              </h1>
              <p className="text-lg text-white/80">
                Professional installation of security cameras, structured cabling, smart home devices,
                access control, and TV mounting for homeowners and small businesses.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Request a Free Quote
                </Link>
                <a href="tel:+15513047001" className="btn btn-ghost">
                  Call Now: (551) 304-7001
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white/10 backdrop-blur-sm px-4 py-3 text-sm ring-1 ring-white/15"
                  >
                    <div className="flex items-center gap-2 text-brand-orange">
                      {item.icon}
                      <p className="text-xs uppercase tracking-[0.18em] text-white/60">{item.label}</p>
                    </div>
                    <p className="mt-1 text-lg font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-[320px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 md:h-[420px]">
                <Image
                  src="/images/hs1.png"
                  alt="Technician arriving for a low-voltage installation"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/10 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    Recent install
                  </p>
                  <p className="font-display text-xl font-semibold">Outdoor security camera setup</p>
                </div>
              </div>

              <aside className="card-surface bg-white p-6 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Service focus
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-brand-navy">
                  Low-voltage installs for every space
                </h2>
                <p className="mt-2 text-sm text-ink-700">
                  Whether you are a homeowner or a small business owner, we plan clean routes, test every
                  connection, and leave the site tidy.
                </p>
                <ul className="mt-4 space-y-3 text-sm text-ink-700">
                  {services.slice(0, 4).map((service) => (
                    <li key={service.id} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                      <span>{service.title}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                    <span>TV mounting and cable management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                    <span>Low-voltage electrical fixes and tidy-ups</span>
                  </li>
                </ul>
                <Link href="/services" className="mt-6 inline-flex btn btn-outline-dark">
                  Explore all services
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Services</p>
            <h2 className="font-display text-3xl font-semibold text-brand-navy md:text-4xl">
              Core low-voltage services
            </h2>
          </div>
          <Link href="/services" className="btn btn-outline-dark">
            See service details
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="card-surface bg-white p-6 hover:-translate-y-1 hover:shadow-xl hover:border-brand-orange/20 reveal-up"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-mist text-brand-orange">
                  <Image src={service.image} alt={service.imageAlt} width={28} height={28} />
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-navy leading-snug">{service.title}</h3>
              </div>
              <p className="mt-3 text-sm text-ink-700">{service.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                Learn more
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-brand-mist/70">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Why choose us</p>
              <h2 className="font-display text-3xl font-semibold text-brand-navy md:text-4xl">
                Clean installs, reliable performance
              </h2>
              <p className="text-sm text-ink-700">
                We focus on safe, tidy, and well-tested installations. You get a system that works and
                a walkthrough that makes it easy to use.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="card-surface bg-white p-5 reveal-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <span className="absolute right-3 top-1 font-display text-6xl font-bold leading-none text-brand-mist select-none pointer-events-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative text-sm font-semibold text-brand-navy">{item.title}</h3>
                  <p className="relative mt-2 text-sm text-ink-700">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Recent installs</p>
            <h2 className="font-display text-3xl font-semibold text-brand-navy md:text-4xl">
              Real work, clean finishes
            </h2>
          </div>
          <Link href="/contact" className="btn btn-outline-dark">
            Request a quote
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {gallery.map((item) => (
            <div
              key={item.title}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg ring-1 ring-brand-navy/10"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/10 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-white/80">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESIDENTIAL / BUSINESS ── */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-surface bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Residential</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-brand-navy">
              Safer, smarter homes
            </h3>
            <p className="mt-2 text-sm text-ink-700">
              We install cameras, doorbells, and smart lighting with clean wiring and easy app setup.
              Your home stays tidy and your devices stay connected.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-700">
              {["Clean cable runs and hidden wiring options", "Simple controls for family and guests", "Walkthrough before we leave"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Small business</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-brand-navy">
              Reliable systems for offices
            </h3>
            <p className="mt-2 text-sm text-ink-700">
              Structured cabling, access control, and camera systems designed to reduce downtime and
              keep teams productive.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-700">
              {["Cat6 and fiber runs with patch panels", "Access control for doors and entry points", "Neat racks and labeled terminations"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Service areas</p>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Serving North Jersey homes and small businesses
              </h2>
              <p className="text-sm text-white/80">
                Based in Jersey City, we regularly serve Hudson, Essex, and Bergen counties. If you do
                not see your town listed, ask us anyway.
              </p>
              <p className="text-sm text-white/60">
                Jersey City, Hoboken, Bayonne, Union City, Newark, Bloomfield, Clifton, Hackensack,
                Fort Lee, and nearby towns.
              </p>
              <Link href="/service-areas" className="btn btn-ghost">
                View full service area list
              </Link>
            </div>
            <div className="card-surface bg-white/10 border-white/15 p-6 text-white shadow-none">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Response time</p>
              <p className="mt-2 font-display text-2xl font-semibold">Calls returned within 24 hours</p>
              <p className="mt-2 text-sm text-white/75">
                We confirm scope, schedule a visit, and arrive with the right hardware to avoid delays.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="tel:+15513047001" className="btn btn-primary">
                  Call now
                </a>
                <Link href="/contact" className="btn btn-ghost">
                  Request a quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Testimonials</p>
            <h2 className="font-display text-3xl font-semibold text-brand-navy md:text-4xl">
              Clients trust our work
            </h2>
          </div>
          <Link href="/testimonials" className="btn btn-outline-dark">
            Read more reviews
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className="card-surface bg-white p-5 reveal-up"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-4 w-4 fill-brand-orange" viewBox="0 0 24 24" aria-hidden>
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <p className="mt-3 text-sm text-ink-700">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                {item.name} — {item.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="bg-brand-mist/70">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Request a quote</p>
              <h2 className="font-display text-3xl font-semibold text-brand-navy md:text-4xl">
                Tell us about your project
              </h2>
              <p className="text-sm text-ink-700">
                Share the location, the equipment you have, and what you want to improve. We will reply
                with a clear plan and timing options.
              </p>
              <div className="mt-2 space-y-3">
                <div className="flex items-center gap-3 text-sm text-ink-700">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <span>We reply within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-700">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>Serving Hudson, Essex, and Bergen counties</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-700">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>Free, no-obligation quotes</span>
                </div>
              </div>
            </div>

            <div className="card-surface bg-white p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
