import Link from "next/link";

const setups = [
  {
    title: "Smart thermostats, lighting & sensors",
    bullets: [
      "Thermostats, switches/dimmers, leak/door sensors",
      "App scenes, schedules, and basic routines",
      "Wi-Fi / hub checks so everything stays online",
    ],
  },
  {
    title: "Cameras, doorbells & intercoms",
    bullets: [
      "PoE/IP cams, NVR/DVR wiring and tuning",
      "Smart doorbells, chime adapters, placement",
      "Notification zones and privacy masks",
    ],
  },
  {
    title: "Smart locks & access",
    bullets: [
      "Lock installs, strike alignment, door prep",
      "User codes, auto-lock, and basic audit",
      "Integration with hubs/automation when supported",
    ],
  },
  {
    title: "Scenes, routines & automations",
    bullets: [
      "Morning / night / away scenes that make sense",
      "Basic energy-saving schedules",
      "Multi-device routines that feel natural",
    ],
  },
];

const comforts = [
  "Devices mounted cleanly with hidden wiring where possible",
  "Apps organized so family or staff know what to tap",
  "Photos, labels, and a quick walkthrough before we leave",
];

export default function SmartHomeOfficePage() {
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
              <span>Smart home & office</span>
              <span className="h-[1px] w-6 bg-brand-orange/80" />
              <span>EN / ES</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-brand-navy md:text-5xl">
              Smart devices installed neatly, tuned, and explained.
            </h1>
            <p className="text-lg text-ink-700">
              Thermostats, lighting, locks, cameras, and sensors set up so they work together—and everyone knows how to use them.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-primary">
                Schedule a visit
              </Link>
              <a href="tel:+12012757451" className="btn btn-outline-dark">
                Call (201) 275-7451
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-brand-navy/10">
                <div className="text-xs uppercase tracking-wide text-ink-500">Install style</div>
                <div className="text-2xl font-bold text-brand-navy">Tidy & labeled</div>
                <div className="text-sm text-ink-600">Clean wiring, clear apps</div>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-brand-navy/10">
                <div className="text-xs uppercase tracking-wide text-ink-500">Coverage</div>
                <div className="text-2xl font-bold text-brand-navy">North Jersey</div>
                <div className="text-sm text-ink-600">Hudson • Essex • Bergen</div>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-brand-navy/10">
                <div className="text-xs uppercase tracking-wide text-ink-500">Languages</div>
                <div className="text-2xl font-bold text-brand-navy">English / Español</div>
                <div className="text-sm text-ink-600">Clear walkthroughs</div>
              </div>
            </div>
          </div>

          <aside className="card-surface border border-brand-navy/10 bg-white p-6 shadow-xl ring-1 ring-brand-navy/5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-500">Ready-to-use setups</p>
                <h3 className="text-xl font-bold text-ink-900">We prep, mount, and connect</h3>
                <p className="text-sm text-ink-500">Power, Wi-Fi, and app access are confirmed before we leave.</p>
              </div>
              <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                Licensed & insured
              </span>
            </div>
            <div className="mt-4 space-y-2 text-sm text-ink-700">
              <div className="rounded-xl bg-brand-orange/5 p-3">We bring adapters, low-voltage cabling, plates, and mounting hardware.</div>
              <div className="rounded-xl bg-brand-navy/5 p-3">Apps organized and shared with clear roles for family or staff.</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-primary">
                Book now
              </Link>
              <a href="tel:+12012757451" className="btn btn-outline-dark">
                Talk to a technician
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="-mt-14 mx-auto max-w-6xl px-4 pb-6">
        <div className="grid gap-4 md:grid-cols-3">
          {comforts.map((text) => (
            <div key={text} className="card-surface bg-white p-4">
              <h3 className="text-sm font-semibold text-brand-orange">Comfort-first setup</h3>
              <p className="mt-2 text-sm text-ink-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl">What we can set up for you</h2>
            <p className="text-ink-600">Safe, low-voltage installs and clean app configurations that just work.</p>
          </div>
          <Link href="/#contact" className="btn btn-outline-dark">
            Plan your setup
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {setups.map((item) => (
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
            <h2 className="text-2xl font-extrabold md:text-3xl">How we deliver smart installs</h2>
            <p className="text-ink-600">We make sure devices are mounted well, apps are tidy, and Wi-Fi is ready.</p>
            <div className="mt-6 grid gap-3">
              {["Plan and parts check", "Install, pair, and label", "Walkthrough and support"].map((title, idx) => (
                <div key={title} className="flex gap-3 rounded-2xl border border-brand-navy/10 bg-white p-4 shadow-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange/10 text-sm font-bold text-brand-orange">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900">{title}</h3>
                    <p className="text-sm text-ink-600">
                      {idx === 0
                        ? "Confirm gear, wiring, and app access so we arrive ready."
                        : idx === 1
                          ? "Mount, cable, pair, and organize apps with clear names."
                          : "Review the setup with you and leave notes for future changes."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-brand-navy text-white p-6 shadow-lg">
            <h3 className="text-xl font-semibold">What you get before we leave</h3>
            <ul className="space-y-3 text-brand-cream/90">
              <li>• Clean mounting, hidden wiring where possible</li>
              <li>• Apps organized with shared access where needed</li>
              <li>• Labels, photos, and Wi-Fi stability checks</li>
              <li>• Quick tips for daily use and scenes you will actually tap</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy/90 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange/80">Make it feel seamless</p>
            <h2 className="text-2xl font-extrabold md:text-3xl">Tell us the rooms, devices, and routines you want</h2>
            <p className="text-brand-cream/85">We will create a clear plan and schedule to get it installed.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/#contact" className="btn btn-primary">
              Start your setup
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
