"use client";

import { useState } from "react";
import ContactForm from "./Components/ContactForm";


/**
 * North Jersey Tech — Services & Design
 * - Integrates comprehensive bilingual services catalog
 * - Accessible CTAs, headings, and lists
 * - Color composition: gradient shell + cream content surfaces
 * - Emphasizes North Jersey service area
 * - Contact form wired (optional): see API route stub at bottom
 */

export default function Page() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = (en: string, es: string) => (lang === "en" ? en : es);
  // ---- CONTACT FORM STATE & HANDLERS ----
  const [form, setForm] = useState({ name: "", email: "", phone: "", details: "", hp: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "error">(null);
  
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || undefined,
          details: form.details.trim(),
          hp: form.hp || undefined, // honeypot
        }),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({ name: "", email: "", phone: "", details: "", hp: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  }
  






  // ---------- PACKAGES (short + friendly) ----------
  const packages = [
    {
      title: t("Diagnostic Visit (up to 60 min)", "Visita de diagnóstico (hasta 60 min)"),
      price: "$89",
      bullet: t(
        "Root-cause check + quick fixes when possible",
        "Diagnóstico de causa raíz + arreglos rápidos si es posible"
      ),
    },
    {
      title: t("Two-Hour On-Site Support", "Soporte en sitio de dos horas"),
      price: "$149",
      bullet: t(
        "Most small tech issues resolved same visit",
        "La mayoría de incidencias técnicas se resuelven en la misma visita"
      ),
    },
    {
      title: t("Half-Day On-Site (4 hrs)", "Media jornada en sitio (4 h)"),
      price: "$279",
      bullet: t("Bundle tasks for better value", "Agrupa tareas para mejor valor"),
    },
    {
      title: t("Proactive Maintenance Plan", "Plan de mantenimiento proactivo"),
      price: "$49/mo",
      bullet: t(
        "Priority scheduling + seasonal checks",
        "Agenda prioritaria + revisiones por temporada"
      ),
    },
  ];

  // ---------- SERVICE CATALOG (comprehensive, tech-only) ----------
  type Service = {
    id: string;
    title: string;
    subtitle?: string;
    bullets: string[];
  };

  const tr = (en: string, es: string) => (lang === "en" ? en : es); // avoid name clash

  const services: Service[] = [
    {
      id: "network-cabling",
      title: tr(
        "Low-Voltage Cabling (Cat6/Cat6A/Cat7)",
        "Cableado de bajo voltaje (Cat6/Cat6A/Cat7)"
      ),
      subtitle: tr("Clean runs • Labeling • Testing", "Tendidos limpios • Etiquetado • Pruebas"),
      bullets: [
        tr("New drops, extensions, and relocations", "Nuevas bajadas, extensiones y reubicaciones"),
        tr(
          "Patch panels, keystones, surface/flush mounts",
          "Patch panels, keystones, cajas sobrepuestas/embutidas"
        ),
        tr("Cable certification + report (on request)", "Certificación de cables + reporte (a pedido)"),
        tr("Conduit/tray routing & penetration sealing", "Canalización/bandejas y sellado de penetraciones"),
      ],
    },
    {
      id: "wifi-aps",
      title: tr("Wi-Fi Optimization & Access Points", "Optimización de Wi‑Fi y Access Points"),
      subtitle: tr("Dead-zone removal • Roaming tuned", "Sin zonas muertas • Roaming ajustado"),
      bullets: [
        tr("AP placement & mounting (ceiling/wall)", "Ubicación y montaje de AP (techo/pared)"),
        tr(
          "Mesh/backhaul setup, channel/power planning",
          "Configuración mesh/backhaul, canales y potencia"
        ),
        tr("SSID/VLAN separation for guests/IoT", "Separación SSID/VLAN para invitados/IoT"),
        tr("Interference diagnostics (2.4/5/6 GHz)", "Diagnóstico de interferencias (2.4/5/6 GHz)"),
      ],
    },
    {
      id: "switch-firewall-vlan",
      title: tr("Switches, Firewalls & VLANs", "Switches, Firewalls y VLANs"),
      subtitle: tr("Small Office / Home Office networking", "Redes para oficina pequeña / hogar"),
      bullets: [
        tr("Router replacement, dual-WAN failover", "Reemplazo de router, dual-WAN y failover"),
        tr("Managed switch configuration (L2/L3)", "Configuración de switches administrables (L2/L3)"),
        tr(
          "DHCP/DNS, QoS, port security, link aggregation",
          "DHCP/DNS, QoS, seguridad de puertos, agregación"
        ),
        tr(
          "Site-to-site / remote-user VPN (when supported)",
          "VPN sitio-a-sitio / usuario remoto (según soporte)"
        ),
      ],
    },
    {
      id: "rack-builds",
      title: tr("Rack Builds & Network Cleanup", "Montaje de racks y orden de red"),
      subtitle: tr("Tidy, labeled, serviceable", "Limpio, etiquetado y mantenible"),
      bullets: [
        tr("Wall-mount enclosures & full racks", "Gabinetes murales y racks completos"),
        tr("Power layout, cable management, velcro + trays", "Distribución eléctrica y gestión de cables"),
        tr("UPS install & graceful-shutdown setup", "Instalación de UPS y apagado seguro"),
        tr("before/after documentation", "Documentación antes/después"),
      ],
    },
    {
      id: "cctv-doorbells",
      title: tr(
        "Cameras, Doorbells & Intercoms (Low-Voltage)",
        "Cámaras, timbres y porteros (bajo voltaje)"
      ),
      subtitle: tr("Placement • Cabling • App setup", "Ubicación • Cableado • Configuración"),
      bullets: [
        tr("PoE/IP cams, NVR/DVR wiring & tuning", "Cámaras PoE/IP, cableado y ajuste de NVR/DVR"),
        tr("Smart doorbells & chime adapters", "Timbres inteligentes y adaptadores de campana"),
        tr("Notification zones & privacy masks", "Zonas de alerta y máscaras de privacidad"),
        tr("Remote viewing & user permissions", "Acceso remoto y permisos de usuario"),
      ],
    },
    {
      id: "smart-locks-access",
      title: tr(
        "Smart Locks & Access (Residential/Light Commercial)",
        "Cerraduras inteligentes y acceso (residencial/comercial ligero)"
      ),
      subtitle: tr("Keypads • App control • Schedules", "Teclados • App • Horarios"),
      bullets: [
        tr(
          "Lock installs, strike alignment, door prep",
          "Instalación de cerraduras, alineación de pernos, preparación de puerta"
        ),
        tr("User codes, auto-lock, audit basics", "Códigos, auto-bloqueo y auditoría básica"),
        tr(
          "Integration with hubs/automation (if supported)",
          "Integración con hubs/automatización (si aplica)"
        ),
      ],
    },
    {
      id: "tv-av",
      title: tr("TV Mounting, AV & Conference Rooms", "Montaje de TV, AV y salas de reuniones"),
      subtitle: tr("Concealed cabling • Calibrated", "Cableado oculto • Calibrado"),
      bullets: [
        tr("Fixed/tilt/full-motion mounts, soundbars & hides", "Soportes fijos/inclinables/articulados, barras de sonido"),
        tr("HDMI/optic routing, baluns & in-wall plates", "Tendido HDMI/óptico, baluns y placas embutidas"),
        tr(
          "Wireless presentation & camera/mic placement",
          "Presentación inalámbrica y ubicación de cámara/mic"
        ),
      ],
    },
    {
      id: "backup-nas",
      title: tr("Backups, NAS & File Sharing", "Backups, NAS y compartición de archivos"),
      subtitle: tr("Protect what matters", "Protege lo importante"),
      bullets: [
        tr("NAS setup, RAID, SMB/AFP/NFS shares", "Configuración de NAS, RAID y carpetas compartidas"),
        tr("Versioned backups to external/cloud", "Backups versionados a disco externo/nube"),
        tr("PC/Mac onboarding & migration", "Alta y migración de PC/Mac"),
      ],
    },
    {
      id: "pos-peripherals",
      title: tr("POS, Printers & Peripherals", "POS, impresoras y periféricos"),
      subtitle: tr("Ready for day one", "Listo desde el primer día"),
      bullets: [
        tr(
          "Receipt/label printers, scanners, cash drawers",
          "Impresoras de recibo/etiquetas, escáneres, cajones"
        ),
        tr("Driver install, network share/queue setup", "Instalación de drivers y colas/red"),
        tr("Cable management at counters/front desk", "Gestión de cables en mostradores"),
      ],
    },
    {
      id: "smart-home",
      title: tr(
        "Smart Thermostats, Lighting & Sensors",
        "Termostatos, iluminación y sensores inteligentes"
      ),
      subtitle: tr("Install • Pair • Automate", "Instalar • Vincular • Automatizar"),
      bullets: [
        tr(
          "Thermostats, switches/dimmers, leak/door sensors",
          "Termostatos, interruptores/reguladores, sensores"
        ),
        tr("App scenes, schedules & basic routines", "Escenas, horarios y rutinas básicas"),
      ],
    },
    {
      id: "remote-support",
      title: tr(
        "Remote Support & On-Site Troubleshooting",
        "Soporte remoto y en sitio"
      ),
      subtitle: tr("Quick help when you need it", "Ayuda rápida cuando la necesitas"),
      bullets: [
        tr("Malware cleanup & performance tuning", "Limpieza de malware y ajuste de rendimiento"),
        tr("Email/identity, accounts, MFA & backups", "Correo, cuentas, MFA y copias de seguridad"),
        tr("New-device setup, updates and hardening", "Alta de equipos, actualizaciones y endurecimiento"),
      ],
    },
  ];

  return (
    <>
      {/* SHELL: gradient background; cream cards */}
      <div className="min-h-screen bg-[linear-gradient(120deg,theme(colors.brand.navy),theme(colors.brand.orange))] text-white">
        {/* HERO */}
        <section className="">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                {t(
                  "Hands-on tech support and installations for homes and small businesses in North Jersey.",
                  "Soporte técnico e instalaciones prácticas para hogares y pequeños negocios en el norte de Nueva Jersey."
                )}
              </h1>
              <p className="mt-4 text-brand-cream/90 md:text-lg">
                {t(
                  "Wi‑Fi fixes, smart tech setup, clean cabling, and on-site IT optimization.",
                  "Arreglos de Wi‑Fi, configuración de tecnología inteligente, cableado prolijo y optimización de IT en sitio."
                )}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  {t("Get a Quote", "Pedir cotización")}
                </a>
                <a href="tel:+15513429343" className="btn btn-ghost">
                  {t("Call", "Llamar")}
                </a>
                <a
                  href="https://wa.me/15513429343"
                  className="btn btn-ghost"
                  aria-label="WhatsApp"
                >
                  WhatsApp
                </a>
                <button
                  onClick={() => setLang(lang === "en" ? "es" : "en")}
                  className="btn border border-white/30 hover:bg-white/10"
                  aria-label="Toggle language English/Spanish"
                >
                  {lang === "en" ? "ES" : "EN"}
                </button>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-2 text-brand-cream/90 text-sm">
                <li>✅ {t("On-time & professional", "Puntual y profesional")}</li>
                <li>✅ {t("Bilingual (EN/ES)", "Bilingüe (EN/ES)")}</li>
                <li>✅ {t("Clean, labeled cabling", "Cableado prolijo y etiquetado")}</li>
                <li>✅ {t("Same-day options", "Opciones el mismo día")}</li>
              </ul>
            </div>

            <aside className="card-surface">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-ink-900">
                  {t("Featured Packages", "Paquetes destacados")}
                </h3>
                <div className="mt-4 grid gap-4">
                  {packages.map((p, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-white p-4 shadow-sm border border-brand-navy/10"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-ink-900">{p.title}</h4>
                        <span className="font-extrabold text-brand-orange">{p.price}</span>
                      </div>
                      <p className="text-sm text-ink-500 mt-1">{p.bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* SERVICES – integrated catalog */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            {t("Service Categories", "Categorías de servicio")}
          </h2>
          <p className="text-brand-cream/90 mt-2">
            {t(
              "Hands-on tech work. No high-voltage, major plumbing, or structural jobs.",
              "Trabajo técnico práctico. Sin alta tensión, plomería mayor ni estructura."
            )}
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.id} id={s.id} className="card-surface p-6 text-ink-900">
                <header className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    {s.subtitle && (
                      <p className="text-ink-500 mt-0.5">{s.subtitle}</p>
                    )}
                  </div>
                  <a href="#contact" className="btn btn-primary whitespace-nowrap">
                    {t("Get a Quote", "Pedir cotización")}
                  </a>
                </header>

                <ul className="mt-4 space-y-2 text-ink-700">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span aria-hidden>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* AREAS */}
        <section id="areas" className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            {t("Service Areas", "Áreas de servicio")}
          </h2>
          <p className="mt-2 text-brand-cream/90">
            North Jersey — Jersey City • Newark • Hoboken • Elizabeth • Hackensack • Clifton • Union City • North Bergen • Bayonne • Kearny
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
            <iframe
              title="North Jersey map"
              className="w-full h-[300px] md:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6049.343196326338!2d-74.056!3d40.733"
            />
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="mx-auto max-w-6xl px-4">
          <div className="card-surface p-4 text-ink-900">
            <h3 className="font-semibold">{t("What we don’t do", "Lo que no hacemos")}</h3>
            <p className="text-sm text-ink-700 mt-1">
              {t(
                "High-voltage electrical, major plumbing, or structural work.",
                "Electricidad de alto voltaje, plomería mayor o trabajo estructural."
              )}
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section
  id="contact"
  className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-12"
>
  {/* LEFT SIDE = contact details */}
  <div className="space-y-4">
    <h2 className="text-2xl md:text-3xl font-semibold">Contact Us</h2>
    <p className="opacity-80">
      📍 Serving North Jersey • Bilingual (EN/ES)
    </p>
    <p className="opacity-80">📞 (551) 342-9343</p>
    <p className="opacity-80">✉️ warilojano@gmail.com</p>

    <div className="flex gap-3 mt-4">
      <a
        href="tel:+15513429343"
        className="btn btn-primary"
      >
        Call
      </a>
      <a
        href="https://wa.me/+15513429343"
        target="_blank"
        rel="noopener noreferrer"
        className="btn bg-green-600 hover:bg-green-700 text-white"
      >
        WhatsApp
      </a>
    </div>
  </div>

  {/* RIGHT SIDE = form */}
  <div>
    <ContactForm />
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
            name: "North Jersey Tech",
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
              "Wi‑Fi",
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

/* =============================================================
   OPTIONAL: API route stub (app/api/contact/route.ts)
   - Install: npm i nodemailer zod
   - Set env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO
   ============================================================= */

// export const runtime = "edge"; // or remove for Node.js if SMTP library needs it
// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import { z } from "zod";
//
// const schema = z.object({
//   name: z.string().min(1),
//   email: z.string().email(),
//   phone: z.string().optional(),
//   details: z.string().min(1),
//   hp: z.string().optional(), // honeypot
// });
//
// export async function POST(req: NextRequest) {
//   const data = await req.json().catch(() => ({}));
//   const parsed = schema.safeParse(data);
//   if (!parsed.success || parsed.data.hp) {
//     return NextResponse.json({ ok: false }, { status: 400 });
//   }
//
//   const t = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: Number(process.env.SMTP_PORT || 587),
//     secure: false,
//     auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
//   });
//
//   await t.sendMail({
//     from: `NJ Tech <${process.env.SMTP_USER}>`,
//     to: process.env.CONTACT_TO,
//     subject: `New quote request: ${parsed.data.name}`,
//     text: `${parsed.data.name} (${parsed.data.email}${parsed.data.phone ? ", " + parsed.data.phone : ""})\n\n${parsed.data.details}`,
//   });
//
//   return NextResponse.json({ ok: true });
// }

/* =============================================================
   STYLE NOTES (Tailwind v4)
   - Shell uses gradient (navy→orange). Content surfaces use cream/white.
   - Provide utilities in globals.css for .card-surface and .btn variants.
   Example (globals):

   .card-surface { @apply bg-brand-cream text-ink-900 rounded-2xl shadow-sm border border-white\/10 backdrop-blur; }
   .btn { @apply inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60; }
   .btn-primary { @apply bg-brand-orange text-white hover:opacity-90; }
   .btn-ghost { @apply bg-white/10 text-white hover:bg-white/15; }

   Also set text-ink-* tokens:
   :root { --ink-900:#0F172A; --ink-700:#334155; --ink-500:#64748B; }
   .text-ink-900{color:var(--ink-900)} .text-ink-700{color:var(--ink-700)} .text-ink-500{color:var(--ink-500)}

   ============================================================= */