"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import ContactForm from "./components/ContactForm";

const ServiceAreaMap = dynamic(
  () => import("./components/ServiceAreaMap"),
  { ssr: false, loading: () => <div className="h-[420px] w-full rounded-2xl bg-black/5 animate-pulse" /> }
);

/**
 * Hudson Smart Installs — refreshed home
 * - Bold hero with stats and trust signals
 * - Clear packages + bilingual catalog
 * - Process, service area map, and contact card
 */

export default function Page() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = (en: string, es: string) => (lang === "en" ? en : es);

  const quickLinks = [
    {
      title: t("Networking & Cabling", "Redes y cableado"),
      desc: t("Clean, labeled runs, Wi-Fi tuning, and tidy racks.", "Tendidos limpios, Wi-Fi ajustado y racks prolijos."),
      href: "/networking-cabling",
    },
    {
      title: t("Smart Home & Office", "Hogar y oficina inteligente"),
      desc: t("Locks, cameras, lighting, thermostats, and app setup.", "Cerraduras, cámaras, iluminación, termostatos y apps."),
      href: "/smart-home-office",
    },
    {
      title: t("IT Support", "Soporte IT"),
      desc: t("Remote help first, on-site when needed. Bilingual.", "Remoto primero, en sitio si hace falta. Bilingüe."),
      href: "/it-support",
    },
  ];

  const stats = [
    {
      label: t("Avg response", "Tiempo medio de respuesta"),
      value: "<24h",
      detail: t("Calls returned same day", "Devolvemos llamadas el mismo día"),
    },
    {
      label: t("Google rating", "Calificación en Google"),
      value: "5.0",
      detail: t("Neighbors and small businesses", "Vecinos y pequeños negocios"),
    },
    {
      label: t("Since", "Desde"),
      value: "2024",
      detail: t("Low-voltage + smart installs", "Instalaciones de bajo voltaje + smart"),
    },
  ];

  const microHighlights = [
    t("Same-week installs when slots are open", "Instalaciones en la semana si hay cupo"),
    t("Photos and labeling so future changes are easy", "Fotos y etiquetado para cambios futuros"),
    t("Hudson, Essex, Bergen focus", "Enfocados en Hudson, Essex, Bergen"),
  ];

  return (
    <>
      <div className="bg-brand-cream text-ink-900">
        {/* HERO */}
        <section className="relative overflow-hidden bg-brand-cream text-ink-900">
          <div className="mesh-shell" aria-hidden>
            <div className="mesh mesh-a" />
            <div className="mesh mesh-b" />
            <div className="mesh mesh-c" />
          </div>

          <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-4 py-16 md:grid-cols-[1.2fr_0.95fr] md:py-24">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-navy ring-1 ring-brand-navy/10 shadow-sm">
                <span>Hudson Smart Installs</span>
                <span className="h-[1px] w-6 bg-brand-orange/80" />
                <span>{t("North Jersey", "Norte de Nueva Jersey")}</span>
              </div>

              <h1 className="text-4xl font-extrabold leading-tight text-brand-navy md:text-6xl">
                {t("Tech installs done neatly, labeled, and explained.", "Instalaciones tecnológicas prolijas, etiquetadas y explicadas.")}
              </h1>
              <p className="text-lg text-ink-700">
                {t(
                  "Networking, smart devices, cameras, and IT support for North Jersey. Quick response, bilingual, and tidy work.",
                  "Redes, dispositivos inteligentes, cámaras y soporte IT en el norte de NJ. Respuesta rápida, bilingüe y trabajo prolijo."
                )}
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  {t("Book a visit", "Agenda una visita")}
                </a>
                <a href="tel:+12012757451" className="btn btn-outline-dark">
                  {t("Call", "Llamar")}
                </a>
                <a href="https://wa.me/12012757451" className="btn btn-outline-dark" aria-label="WhatsApp">
                  WhatsApp
                </a>
                <button
                  onClick={() => setLang(lang === "en" ? "es" : "en")}
                  className="btn btn-outline-dark"
                  aria-label="Toggle language English/Spanish"
                >
                  {lang === "en" ? "ES" : "EN"}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-brand-navy/10"
                  >
                    <div className="text-xs uppercase tracking-wide text-ink-500">
                      {item.label}
                    </div>
                    <div className="text-2xl font-bold text-brand-navy">{item.value}</div>
                    <div className="text-sm text-ink-600">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="relative">
              <div className="card-surface border border-brand-navy/10 bg-white p-6 shadow-xl ring-1 ring-brand-navy/5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ink-500">
                      {t("Fast availability", "Disponibilidad rápida")}
                    </p>
                    <h3 className="text-xl font-bold text-ink-900">
                      {t("Same-week installs", "Instalaciones en la semana")}
                    </h3>
                    <p className="text-sm text-ink-500">
                      {t("North Jersey • Bilingual EN/ES", "Norte de NJ • Bilingüe EN/ES")}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 text-sm text-ink-700">
                  <div className="rounded-xl bg-brand-orange/5 p-3">
                    {t("We arrive with testers, patch cords, and mounting hardware.", "Llegamos con testers, patch cords y herrajes.")}
                  </div>
                  <div className="rounded-xl bg-brand-navy/5 p-3">
                    {t("Photos and labeling included for simple future changes.", "Incluimos fotos y etiquetado para cambios simples.")}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="tel:+12012757451" className="btn btn-outline-dark">
                    {t("Talk to a technician", "Habla con un técnico")}
                  </a>
                  <a
                    href="https://g.page/r/Ca8MnC9PLM60EAE/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {t("See Google reviews", "Ver reseñas en Google")}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* MICRO HIGHLIGHTS */}
        <section className="-mt-16 mx-auto max-w-6xl px-4 pb-6">
          <div className="grid gap-4 md:grid-cols-4">
            {microHighlights.map((text) => (
              <div key={text} className="card-surface bg-white p-4">
                <p className="text-sm text-ink-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* QUICK LINKS TO PRACTICE PAGES */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold md:text-3xl">
                {t("Choose what you need", "Elige lo que necesitas")}
              </h2>
              <p className="text-ink-600">
                {t("Short visits or full installs. We keep it tidy and labeled.", "Visitas cortas o instalaciones completas. Todo prolijo y etiquetado.")}
              </p>
            </div>
            <a href="/contact" className="btn btn-outline-dark">
              {t("Talk to us", "Hablemos")}
            </a>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((item) => (
              <a key={item.title} href={item.href} className="card-surface block bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-lg font-bold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{item.desc}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange">
                  {t("View details", "Ver detalles")} →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section
          id="areas"
          className="mx-auto max-w-6xl grid gap-10 px-4 pb-16 md:grid-cols-[1fr_1.2fr] scroll-mt-20"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange/80">
              {t("Service areas", "Zonas de servicio")}
            </p>
            <h2 className="text-2xl font-extrabold md:text-3xl">
              {t("North Jersey coverage", "Cobertura en el norte de NJ")}
            </h2>
            <p className="text-ink-600">
              {t(
                "Hudson, Essex, and Bergen counties prioritized for quick arrival.",
                "Hudson, Essex y Bergen priorizados para llegada rápida."
              )}
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm text-ink-700">
              {["Jersey City", "Hoboken", "Kearny", "Newark", "Elizabeth", "Hackensack", "Clifton", "Union City", "North Bergen", "Bayonne"].map((city) => (
                <div key={city} className="rounded-lg bg-white/80 px-3 py-2 shadow-sm ring-1 ring-brand-navy/5">
                  {city}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-0 h-[420px] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-brand-navy/10">
            <ServiceAreaMap />
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mx-auto max-w-6xl grid gap-8 px-4 pb-16 md:grid-cols-[1.05fr_1fr]"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold md:text-3xl">{t("Tell us what you need", "Cuéntanos qué necesitas")}</h2>
            <p className="text-ink-600">
              {t(
                "Describe the space and what isn’t working. We reply with timing and a simple plan.",
                "Describe el espacio y qué no funciona. Respondemos con tiempo y un plan simple."
              )}
            </p>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand-navy/10">
              <p className="text-sm font-semibold text-ink-900">{t("Direct contacts", "Contactos directos")}</p>
              <div className="mt-2 grid gap-2 text-sm text-ink-700">
                <a href="tel:+12012757451" className="hover:text-brand-orange">
                  📞 (201) 275-7451
                </a>
                <a href="mailto:info@hudsonsmartinstalls.com" className="hover:text-brand-orange">
                  ✉️ info@hudsonsmartinstalls.com
                </a>
                <a
                  href="https://wa.me/+12012757451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange"
                >
                  💬 WhatsApp
                </a>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                {t("Same-week installs available", "Instalaciones en la semana disponibles")}
              </div>
            </div>
          </div>

          <div className="card-surface bg-brand-navy text-brand-cream p-6 shadow-xl">
            <ContactForm />
            <a
              href="https://g.page/r/Ca8MnC9PLM60EAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              ⭐ {t("Leave a Google review", "Deja una reseña en Google")}
            </a>
          </div>
        </section>
      </div>

      {/* JSON-LD: Service area emphasis (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Hudson Smart Installs",
            areaServed: [
              "Jersey City",
              "Newark",
              "Hoboken",
              "Elizabeth",
              "Hackensack",
              "Clifton",
              "Union City",
              "North Bergen",
              "Bayonne",
              "Kearny",
            ],
            serviceType: [
              "Networking",
              "Wi-Fi",
              "Cabling",
              "CCTV",
              "Smart Locks",
              "TV & AV",
              "NAS & Backups",
              "POS & Peripherals",
              "Smart Home",
              "Remote Support",
            ],
          }),
        }}
      />
    </>
  );
}
