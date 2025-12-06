import Link from "next/link";

const scopes = [
  {
    title: "Low-voltage cabling",
    bullets: [
      "Cat6/Cat6A/Cat7 runs, extensions, and relocations",
      "Patch panels, keystones, surface/flush mounts",
      "Cable certification and labeling on request",
    ],
  },
  {
    title: "Wi-Fi optimization & access points",
    bullets: [
      "Placement and mounting (ceiling/wall)",
      "Mesh/backhaul setup, channel/power planning",
      "Guest/IoT SSID separation when supported",
    ],
  },
  {
    title: "Switches, firewalls & VLANs",
    bullets: [
      "Router replacement, dual-WAN failover",
      "Managed switch configuration (L2/L3)",
      "DHCP/DNS, QoS, port security, VPN basics",
    ],
  },
  {
    title: "Rack builds & cleanups",
    bullets: [
      "Wall-mount enclosures and full racks",
      "Power layout, cable management, Velcro + trays",
      "UPS install and graceful-shutdown basics",
    ],
  },
];

const badges = [
  "Neat, labeled, and documented",
  "Bilingual on-site support",
  "Tools, testers, and patch cords ready",
];

const steps = [
  {
    title: "Walk-through & plan",
    copy: "Scope, runs, and hardware confirmed with a quick visit or call.",
  },
  {
    title: "Install & label",
    copy: "Runs, terminations, labeling, photos, and tidy cable paths.",
  },
  {
    title: "Test & handoff",
    copy: "Speed and continuity tests, Wi-Fi tuning, and clear handoff notes.",
  },
];

export default function NetworkingCablingPage() {
  return (
    <div className="bg-brand-cream text-ink-900">
      <section className="relative overflow-hidden bg-brand-cream text-ink-900">
        <div className="mesh-shell" aria-hidden>
          <div className="mesh mesh-a" />
          <div className="mesh mesh-b" />
          <div className="mesh mesh-c" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.15fr_0.9fr] md:py-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-navy ring-1 ring-brand-navy/10 shadow-sm">
              <span>Networking & cabling</span>
              <span className="h-[1px] w-6 bg-brand-orange/80" />
              <span>North Jersey</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-brand-navy md:text-5xl">
              Tidy, labeled networks that are easy to live with and easy to service.
            </h1>
            <p className="text-lg text-ink-700">
              Clean runs, labeled panels, and tuned Wi-Fi for homes and small businesses. We document and leave room for future upgrades.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-primary">
                Get a quote
              </Link>
              <a href="tel:+12012757451" className="btn btn-outline-dark">
                Call (201) 275-7451
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-brand-navy/10">
                <div className="text-xs uppercase tracking-wide text-ink-500">Response</div>
                <div className="text-2xl font-bold text-brand-navy">Same week</div>
                <div className="text-sm text-ink-600">Rush slots when available</div>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-brand-navy/10">
                <div className="text-xs uppercase tracking-wide text-ink-500">Scope</div>
                <div className="text-2xl font-bold text-brand-navy">Low-voltage</div>
                <div className="text-sm text-ink-600">Cabling, Wi-Fi, racks</div>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-brand-navy/10">
                <div className="text-xs uppercase tracking-wide text-ink-500">Counties</div>
                <div className="text-2xl font-bold text-brand-navy">Hudson +</div>
                <div className="text-sm text-ink-600">Hudson, Essex, Bergen</div>
              </div>
            </div>
          </div>

          <aside className="card-surface border border-brand-navy/10 bg-white p-6 shadow-xl ring-1 ring-brand-navy/5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-500">Site-ready installs</p>
                <h3 className="text-xl font-bold text-ink-900">We arrive with what we need</h3>
                <p className="text-sm text-ink-500">Ladders, punch-down tools, labeler, testers, patch cords.</p>
              </div>
              <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                Licensed & insured
              </span>
            </div>
            <div className="mt-4 space-y-2 text-sm text-ink-700">
              <div className="rounded-xl bg-brand-orange/5 p-3">Photos and labeling included so future changes stay simple.</div>
              <div className="rounded-xl bg-brand-navy/5 p-3">We keep runs neat, test continuity, and tune Wi-Fi before leaving.</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-primary">
                Book a visit
              </Link>
              <a href="tel:+12012757451" className="btn btn-outline-dark">
                Talk through scope
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="-mt-14 mx-auto max-w-6xl px-4 pb-6">
        <div className="grid gap-4 md:grid-cols-3">
          {badges.map((text) => (
            <div key={text} className="card-surface bg-white p-4">
              <h3 className="text-sm font-semibold text-brand-orange">{text}</h3>
              <p className="mt-2 text-sm text-ink-600">
                {text === badges[0]
                  ? "Labeling, photos, and tidy cable paths are standard on every install."
                  : text === badges[1]
                    ? "Explain the plan and the changes in plain English or Spanish."
                    : "We carry hardware to avoid delays: keystones, plates, patch cords, brackets."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl">What we can do for your network</h2>
            <p className="text-ink-600">Reliable connectivity for homes and small businesses, without the mess.</p>
          </div>
          <Link href="/#contact" className="btn btn-outline-dark">
            Ask about your project
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {scopes.map((item) => (
            <article key={item.title} className="card-surface bg-white p-6">
              <h3 className="text-lg font-bold text-ink-900">{item.title}</h3>
              <ul className="mt-3 space-y-2 text-ink-700">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span aria-hidden>•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-8 rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-brand-navy/5 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl">How a project runs</h2>
            <p className="text-ink-600">We keep communication clear and leave you with a clean network closet.</p>
            <div className="mt-6 grid gap-3">
              {steps.map((step, idx) => (
                <div key={step.title} className="flex gap-3 rounded-2xl border border-brand-navy/10 bg-white p-4 shadow-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange/10 text-sm font-bold text-brand-orange">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900">{step.title}</h3>
                    <p className="text-sm text-ink-600">{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-brand-navy text-white p-6 shadow-lg">
            <h3 className="text-xl font-semibold">What we check before leaving</h3>
            <ul className="space-y-3 text-brand-cream/90">
              <li>• Continuity and speed tests on new runs</li>
              <li>• Wi-Fi coverage and channel/power tuning</li>
              <li>• Labels on panels, cords, and wall plates</li>
              <li>• Photos and a short handoff of the layout</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy/90 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange/80">Plan your install</p>
            <h2 className="text-2xl font-extrabold md:text-3xl">Tell us the rooms, drops, and Wi-Fi goals</h2>
            <p className="text-brand-cream/85">We will reply with timing, parts, and a clean plan to execute.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/#contact" className="btn btn-primary">
              Start a project
            </Link>
            <a href="tel:+12012757451" className="btn btn-ghost">
              Call now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
