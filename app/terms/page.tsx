export const metadata = {
  title: "Terms of Service · Hudson Smart Installs",
  description:
    "Website terms and conditions for using Hudson Smart Installs services and site.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-brand-cream">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="opacity-80 mb-8">Effective date: October 2025</p>

      <section className="space-y-4 leading-relaxed">
        <p>
          By using hudsonsmartinstalls.com you agree to these terms.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Services</h2>
        <p>
          We provide professional installation and support for networking, smart
          tech, and AV. Quotes are estimates and may change with site conditions
          and materials.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Website Use</h2>
        <p>Don’t misuse or disrupt the site or violate any laws.</p>

        <h2 className="text-xl font-semibold mt-6">3. Quotes & Appointments</h2>
        <p>
          Requests made via forms are non-binding until confirmed by a Hudson
          Smart Installs representative.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Liability</h2>
        <p>
          We are not liable for indirect or incidental damages from use of the
          site or services, to the extent allowed by law.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Intellectual Property</h2>
        <p>
          Site content (logo, text, designs) belongs to Hudson Smart Installs.
          Don’t copy without written permission.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Contact</h2>
        <p>
          Questions?{" "}
          <a className="text-brand-orange underline" href="mailto:info@hudsonsmartinstalls.com">
            info@hudsonsmartinstalls.com
          </a>
          . Jersey City, NJ.
        </p>
      </section>
    </main>
  );
}
