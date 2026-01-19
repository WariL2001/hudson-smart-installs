import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Hudson Smart Installs",
  description: "How Hudson Smart Installs collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-brand-cream text-ink-900">
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-display text-3xl font-semibold text-brand-navy">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink-500">Effective date: January 2024</p>

        <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
          <p>
            Hudson Smart Installs (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed
            to protecting your personal information.
          </p>

          <h2 className="pt-4 font-display text-xl font-semibold text-brand-navy">1. Information we collect</h2>
          <ul className="list-disc pl-5">
            <li>Name, email, phone number, and message content when you contact us.</li>
            <li>Basic analytics data such as browser type, pages visited, and IP address.</li>
          </ul>

          <h2 className="pt-4 font-display text-xl font-semibold text-brand-navy">2. How we use information</h2>
          <ul className="list-disc pl-5">
            <li>To respond to inquiries and provide low-voltage installation services.</li>
            <li>To improve our website and customer experience.</li>
          </ul>

          <h2 className="pt-4 font-display text-xl font-semibold text-brand-navy">3. Information sharing</h2>
          <p>
            We do not sell or rent your information. We may share it only with trusted providers
            (such as hosting or email services) required to operate our website.
          </p>

          <h2 className="pt-4 font-display text-xl font-semibold text-brand-navy">4. Data security</h2>
          <p>
            We use secure connections and limit access to data. No system is 100 percent secure, and
            we cannot guarantee absolute protection.
          </p>

          <h2 className="pt-4 font-display text-xl font-semibold text-brand-navy">5. Your rights</h2>
          <p>
            You may request that we update or delete your information by emailing
            {" "}
            <a
              href="mailto:info@hudsonsmartinstalls.com"
              className="font-semibold text-brand-orange underline"
            >
              info@hudsonsmartinstalls.com
            </a>
            .
          </p>

          <h2 className="pt-4 font-display text-xl font-semibold text-brand-navy">6. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy occasionally. Any changes will be posted here with a
            new effective date.
          </p>
        </section>
      </main>
    </div>
  );
}
