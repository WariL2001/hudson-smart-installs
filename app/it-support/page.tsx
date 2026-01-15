import Link from "next/link";

const issues = [
  {
    title: "Remote support & setup",
    bullets: [
      "App installs, printers, cloud accounts, MFA",
      "Email/calendar fixes and sync issues",
      "Light OS cleanup and updates",
    ],
  },
  {
    title: "On-site PC / Mac troubleshooting",
    bullets: [
      "Slow machines, freezes, boot and login issues",
      "Monitor, dock, USB and peripheral problems",
      "Wi-Fi and LAN checks while we are there",
    ],
  },
  {
    title: "Backups & protection",
    bullets: [
      "External drive or cloud backup setup",
      "Simple schedule explained in plain language",
      "Basic antivirus / anti-malware guidance",
    ],
  },
  {
    title: "Small business & retail",
    bullets: [
      "POS terminals, receipt/label printers",
      "Stable payment networks and cabling cleanup",
      "Coordination with remote IT or helpdesk",
    ],
  },
];

const steps = [
  {
    title: "Describe the problem",
    copy: "Share symptoms, error messages, and what changed recently.",
  },
  {
    title: "Remote first when possible",
    copy: "We resolve many issues on the spot via secure remote session.",
  },
  {
    title: "On-site visit when needed",
    copy: "We arrive with adapters, tools, and spares to finish faster.",
  },
];

export default function ITSupportPage() {
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
              <span>IT Support</span>
              <span className="h-[1px] w-6 bg-brand-orange/80" />
              <span>EN / ES</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-brand-navy md:text-5xl">
              IT support that fixes things and leaves them organized.
            </h1>
            <p className="text-lg text-ink-700">
              Remote help when it is faster, on-site when hands are required. We keep notes, label cables, and explain what changed.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-primary">
                Request support
              </Link>
              <a href="tel:+12012757451" className="btn btn-outline-dark">
                Call (201) 275-7451
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-brand-navy/10">
                <div className="text-xs uppercase tracking-wide text-ink-500">Response</div>
                <div className="text-2xl font-bold text-brand-navy">Same day</div>
                <div className="text-sm text-ink-600">Remote when possible</div>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-brand-navy/10">
                <div className="text-xs uppercase tracking-wide text-ink-500">On-site</div>
                <div className="text-2xl font-bold text-brand-navy">North Jersey</div>
                <div className="text-sm text-ink-600">Hudson • Essex • Bergen</div>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-brand-navy/10">
                <div className="text-xs uppercase tracking-wide text-ink-500">Prepared</div>
                <div className="text-2xl font-bold text-brand-navy">Tools + spares</div>
                <div className="text-sm text-ink-600">Adapters, testers, cables</div>
              </div>
            </div>
          </div>

          <aside className="card-surface border border-brand-navy/10 bg-white p-6 shadow-xl ring-1 ring-brand-navy/5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-500">Need it fixed now?</p>
                <h3 className="text-xl font-bold text-ink-900">Remote + on-site support</h3>
                <p className="text-sm text-ink-500">Screenshare or a technician at your door.</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-ink-700">
              <div className="rounded-xl bg-brand-orange/5 p-3">
                We document what we change and leave cables labeled.
              </div>
              <div className="rounded-xl bg-brand-navy/5 p-3">
                Bilingual technician: plain English or Spanish.
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-primary">
                Book a visit
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
          <div className="card-surface bg-white p-4">
            <h3 className="text-sm font-semibold text-brand-orange">Clean handoff</h3>
            <p className="mt-2 text-sm text-ink-600">Notes, labels, and photos so you know what changed.</p>
          </div>
          <div className="card-surface bg-white p-4">
            <h3 className="text-sm font-semibold text-brand-orange">Prepared arrivals</h3>
            <p className="mt-2 text-sm text-ink-600">Adapters, patch cords, surge strips, and tools in the kit.</p>
          </div>
          <div className="card-surface bg-white p-4">
            <h3 className="text-sm font-semibold text-brand-orange">Respectful on-site</h3>
            <p className="mt-2 text-sm text-ink-600">Shoe covers, floor protection, and tidy work areas.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl">Issues we handle often</h2>
            <p className="text-ink-600">Remote first, on-site when hands are needed. We leave things better organized.</p>
          </div>
          <Link href="/#contact" className="btn btn-outline-dark">
            Describe your issue
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {issues.map((item) => (
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
            <h2 className="text-2xl font-extrabold md:text-3xl">How a support ticket flows</h2>
            <p className="text-ink-600">
              A single technician owns your issue from first contact to resolution, whether remote or on-site.
            </p>
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
            <h3 className="text-xl font-semibold">What we bring on-site</h3>
            <ul className="space-y-3 text-brand-cream/90">
              <li>• Laptop with adapters, flash drives, and recovery media</li>
              <li>• Patch cords, surge strips, labeler, Velcro, basic tools</li>
              <li>• Wi-Fi analyzer and network tester for quick checks</li>
              <li>• Shoe covers, floor protection, and cleaning wipes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy/90 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange/80">Ready to get help</p>
            <h2 className="text-2xl font-extrabold md:text-3xl">Send us the details and we will respond quickly</h2>
            <p className="text-brand-cream/85">Tell us the symptoms, device type, and when you need it resolved.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/#contact" className="btn btn-primary">
              Request support
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
