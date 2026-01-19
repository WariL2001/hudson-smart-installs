import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Hudson Smart Installs",
  description: "Terms and conditions for using Hudson Smart Installs services and website.",
};

export default function TermsPage() {
  return (
    <div className="bg-brand-cream text-ink-900">
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-display text-3xl font-semibold text-brand-navy">Terms of Service</h1>
        <p className="mt-2 text-sm text-ink-500">Effective date: January 2024</p>

        <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
          <p>
            By using hudsonsmartinstalls.com you agree to these terms.
          </p>

          <h2 className="pt-4 font-display text-xl font-semibold text-brand-navy">1. Services</h2>
          <p>
            We provide low-voltage installation and maintenance services including security cameras,
            structured cabling, smart home devices, access control, and TV mounting. Quotes are
            estimates and may change based on site conditions and materials.
          </p>

          <h2 className="pt-4 font-display text-xl font-semibold text-brand-navy">2. Website use</h2>
          <p>
            Do not misuse or disrupt the site or violate any laws while using it.
          </p>

          <h2 className="pt-4 font-display text-xl font-semibold text-brand-navy">3. Quotes and appointments</h2>
          <p>
            Requests made through forms are not binding until confirmed by a Hudson Smart Installs
            representative.
          </p>

          <h2 className="pt-4 font-display text-xl font-semibold text-brand-navy">4. Liability</h2>
          <p>
            We are not liable for indirect or incidental damages arising from use of the site or
            services, to the extent allowed by law.
          </p>

          <h2 className="pt-4 font-display text-xl font-semibold text-brand-navy">5. Intellectual property</h2>
          <p>
            Site content (logo, text, designs) belongs to Hudson Smart Installs. Do not copy without
            written permission.
          </p>

          <h2 className="pt-4 font-display text-xl font-semibold text-brand-navy">6. Contact</h2>
          <p>
            Questions? Email
            {" "}
            <a
              className="font-semibold text-brand-orange underline"
              href="mailto:info@hudsonsmartinstalls.com"
            >
              info@hudsonsmartinstalls.com
            </a>
            . Jersey City, NJ.
          </p>
        </section>
      </main>
    </div>
  );
}
