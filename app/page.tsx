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

export default function Page() {
  return (
    <div className="bg-brand-cream text-ink-900">
      <section className="hero-surface">
        <div className="hero-grid" aria-hidden />
        <div className="hero-orb a" aria-hidden />
        <div className="hero-orb b" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="space-y-6">
              <span className="tag-pill">Low-voltage installations</span>
              <h1 className="font-display text-4xl font-semibold leading-tight text-brand-navy md:text-6xl">
                Low-Voltage Tech Installations Done Right in North Jersey
              </h1>
              <p className="text-lg text-ink-700">
                Professional installation of security cameras, structured cabling, smart home devices,
                access control, and TV mounting for homeowners and small businesses.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Request a Free Quote
                </Link>
                <a href="tel:+12012757451" className="btn btn-outline-dark">
                  Call Now: (201) 275-7451
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Response", value: "Within 24h" },
                  { label: "Since", value: "2024" },
                  { label: "Rating", value: "5.0 Google" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white/90 px-4 py-3 text-sm shadow-sm ring-1 ring-brand-navy/10"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-ink-500">{item.label}</p>
                    <p className="mt-1 text-lg font-semibold text-brand-navy">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-[320px] overflow-hidden rounded-3xl shadow-lg ring-1 ring-brand-navy/10 md:h-[420px]">
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
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange" aria-hidden />
                      <span>{service.title}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange" aria-hidden />
                    <span>TV mounting and cable management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange" aria-hidden />
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

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="card-surface bg-white p-6 transition hover:-translate-y-1 hover:shadow-md reveal-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist/70 text-brand-orange">
                  <Image src={service.image} alt={service.imageAlt} width={28} height={28} />
                </div>
                <h3 className="font-display text-xl font-semibold text-brand-navy">{service.title}</h3>
              </div>
              <p className="mt-2 text-sm text-ink-700">{service.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </section>

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
                  className="card-surface bg-white p-4 reveal-up"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <h3 className="text-sm font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-700">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {gallery.map((item) => (
            <div
              key={item.title}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg ring-1 ring-brand-navy/10"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-white/80">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
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
              <li>Clean cable runs and hidden wiring options</li>
              <li>Simple controls for family and guests</li>
              <li>Walkthrough before we leave</li>
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
              <li>Cat6 and fiber runs with patch panels</li>
              <li>Access control for doors and entry points</li>
              <li>Neat racks and labeled terminations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Service areas</p>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Serving North Jersey homes and small businesses
              </h2>
              <p className="text-sm text-white/80">
                Based in Jersey City, we regularly serve Hudson, Essex, and Bergen counties. If you do
                not see your town listed, ask us anyway.
              </p>
              <p className="text-sm text-white/70">
                Jersey City, Hoboken, Bayonne, Union City, Newark, Bloomfield, Clifton, Hackensack,
                Fort Lee, and nearby towns.
              </p>
              <Link href="/service-areas" className="btn btn-ghost">
                View full service area list
              </Link>
            </div>
            <div className="card-surface bg-white/10 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Response time</p>
              <p className="mt-2 font-display text-2xl font-semibold">Calls returned within 24 hours</p>
              <p className="mt-2 text-sm text-white/75">
                We confirm scope, schedule a visit, and arrive with the right hardware to avoid delays.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="tel:+12012757451" className="btn btn-primary">
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
              <ul className="mt-4 space-y-2 text-sm text-ink-700">
                <li>Low-voltage installation near me for homes or offices</li>
                <li>Structured cabling in New Jersey with tidy patch panels</li>
                <li>Home security camera setup in North Jersey</li>
              </ul>
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
