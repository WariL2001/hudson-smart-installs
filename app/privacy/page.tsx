export const metadata = {
  title: "Privacy Policy · Hudson Smart Installs",
  description:
    "How Hudson Smart Installs collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-brand-cream">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="opacity-80 mb-8">Effective date: October 2025</p>

      <section className="space-y-4 leading-relaxed">
        <p>
          Hudson Smart Installs (“we”, “our”, “us”) respects your privacy and is committed
          to protecting your personal information.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your name, email, and phone number when you contact us.</li>
          <li>Technical data like browser type, pages visited, and IP address for analytics.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to your messages and provide requested services.</li>
          <li>To improve our website and communication quality.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">3. Information Sharing</h2>
        <p>
          We <strong>do not sell</strong> or rent your information. We may share it only
          with trusted third parties (like hosting or email providers) to operate our website.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Data Security</h2>
        <p>
          We use secure connections (HTTPS) and limit access to data. However, no system is
          100% secure, and we cannot guarantee absolute protection.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Your Rights</h2>
        <p>
          You may request that we update or delete your personal information by emailing{" "}
          <a
            href="mailto:info@hudsonsmartinstalls.com"
            className="text-brand-orange underline"
          >
            info@hudsonsmartinstalls.com
          </a>.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy occasionally. Any changes will be posted here with
          a new “Effective Date.”
        </p>
      </section>
    </main>
  );
}
