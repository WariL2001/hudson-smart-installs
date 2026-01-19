import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Cameras, Cabling, Smart Home Services in NJ | Hudson Smart Installs",
  description:
    "Low-voltage installation services in North Jersey including security cameras, structured cabling, smart home devices, access control, TV mounting, and low-voltage electrical work.",
};

const services = [
  {
    id: "security-cameras",
    title: "Security Camera Systems",
    body:
      "Complete installation of security camera systems for homes and businesses. We place indoor and outdoor cameras, run low-voltage wiring, set up DVR/NVR recording, and configure remote viewing apps.",
    image: "/services/security-camera.svg",
    imageAlt: "Security camera icon",
    bullets: [
      "CCTV camera placement with clean cable paths",
      "DVR/NVR setup and motion alerts",
      "Remote viewing on phone or desktop",
    ],
  },
  {
    id: "data-cabling",
    title: "Data Cabling and Network Wiring",
    body:
      "Structured cabling for offices and homes. We run Cat5e/Cat6/Cat6A and fiber lines, terminate jacks, install patch panels, and test every cable for speed and reliability.",
    image: "/services/data-cabling.svg",
    imageAlt: "Data cabling icon",
    bullets: [
      "Network drops for desks, access points, and POS systems",
      "Patch panel installation and labeling",
      "Cable testing and tidy rack organization",
    ],
  },
  {
    id: "smart-home",
    title: "Smart Home Devices",
    body:
      "Installation and setup of smart doorbells, thermostats, lighting, speakers, and more. We mount devices, connect them to Wi-Fi, and configure apps so everything works together.",
    image: "/services/smart-home.svg",
    imageAlt: "Smart home icon",
    bullets: [
      "Doorbells, locks, and smart lighting",
      "Thermostat and sensor setup",
      "Simple app walkthroughs and routines",
    ],
  },
  {
    id: "access-control",
    title: "Access Control Systems",
    body:
      "Secure entry solutions for homes and small offices. We install keypads, intercoms, and door buzzers, and integrate access control with cameras when needed.",
    image: "/services/access-control.svg",
    imageAlt: "Access control icon",
    bullets: [
      "Electronic keypads and intercoms",
      "Door buzzer and entry control wiring",
      "Integration with existing security systems",
    ],
  },
  {
    id: "tv-mounting",
    title: "TV Mounting and Cable Management",
    body:
      "Professional wall mounting with hidden cables or clean raceways. We position the TV at the right height, secure the mount, and connect your devices and soundbar.",
    image: "/services/tv-mounting.svg",
    imageAlt: "TV mounting icon",
    bullets: [
      "Drywall, brick, and fireplace mounting",
      "Cable concealment and clean routing",
      "Soundbar and device hookup",
    ],
  },
  {
    id: "low-voltage",
    title: "Low-Voltage Electrical Work",
    body:
      "Small-scale electrical tasks for low-voltage systems. We replace connectors, rewire jacks, tidy patch panels, and troubleshoot wiring issues for safe, organized setups.",
    image: "/services/low-voltage.svg",
    imageAlt: "Low-voltage panel icon",
    bullets: [
      "Patch panel upgrades and cleanup",
      "Jack replacement and device rewiring",
      "Low-voltage troubleshooting",
    ],
  },
];

const installGallery = [
  {
    src: "/images/hs1.png",
    title: "On-site service visit",
    body: "Prepared arrival and organized tools.",
  },
  {
    src: "/images/hs2.png",
    title: "Rack and cabling work",
    body: "Structured cabling with labeled terminations.",
  },
  {
    src: "/images/hs3.png",
    title: "Smart device setup",
    body: "Hubs, cameras, and sensors configured on Wi-Fi.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-brand-cream text-ink-900">
      <section className="hero-surface">
        <div className="hero-grid" aria-hidden />
        <div className="hero-orb a" aria-hidden />
        <div className="hero-orb b" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div className="space-y-5">
              <span className="tag-pill">Low-voltage services</span>
              <h1 className="font-display text-4xl font-semibold text-brand-navy md:text-5xl">
                Low-Voltage Installation Services in North Jersey
              </h1>
              <p className="text-lg text-ink-700">
                We handle everything from security cameras and structured cabling to smart home setup,
                access control, and TV mounting. If you are searching for low voltage installation near
                me, we bring a clean, professional finish to every job.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Request a Free Quote
                </Link>
                <a href="tel:+12012757451" className="btn btn-outline-dark">
                  Call (201) 275-7451
                </a>
              </div>
            </div>

            <aside className="card-surface bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">How we work</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-brand-navy">
                Neat, tested, and explained
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-700">
                <li>We confirm scope and provide clear timing</li>
                <li>Every cable is labeled and tested</li>
                <li>We clean up and walk you through the setup</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {installGallery.map((item) => (
            <div
              key={item.title}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg ring-1 ring-brand-navy/10"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
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
        <div className="grid gap-8">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="card-surface bg-white p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist/70 text-brand-orange">
                    <Image src={service.image} alt={service.imageAlt} width={28} height={28} />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-brand-navy">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-700">{service.body}</p>
                </div>
                <span className="inline-flex rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                  Core service
                </span>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-ink-700 sm:grid-cols-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-mist/70">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Not sure?</p>
              <h2 className="font-display text-3xl font-semibold text-brand-navy md:text-4xl">
                We help you choose the right solution
              </h2>
              <p className="text-sm text-ink-700">
                Whether you need office network cabling in NJ or a home security camera setup in North
                Jersey, we will recommend the best path and provide a no-obligation quote.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="btn btn-primary">
                Request a Free Quote
              </Link>
              <Link href="/service-areas" className="btn btn-outline-dark">
                See service areas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
