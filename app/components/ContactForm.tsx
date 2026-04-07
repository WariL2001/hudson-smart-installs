"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"" | "sending" | "ok" | "error">("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const phone = String(formData.get("phone") || "").trim();
    const body = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: phone || undefined,
      details: String(formData.get("details") || ""), // <-- details
      hp: String(formData.get("hp") || ""),           // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm opacity-80 mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-brand-navy/15 bg-brand-cream/40 px-4 py-3 text-ink-900 placeholder-ink-500 outline-none transition focus:border-brand-orange/50 focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm opacity-80 mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-brand-navy/15 bg-brand-cream/40 px-4 py-3 text-ink-900 placeholder-ink-500 outline-none transition focus:border-brand-orange/50 focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm opacity-80 mb-1">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-xl border border-brand-navy/15 bg-brand-cream/40 px-4 py-3 text-ink-900 placeholder-ink-500 outline-none transition focus:border-brand-orange/50 focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
          placeholder="(201) 555-0123"
        />
      </div>

      <div>
        <label htmlFor="details" className="block text-sm opacity-80 mb-1">
          Message
        </label>
        <textarea
          id="details"
          name="details"                 // <-- antes "message"
          required
          rows={5}
          className="w-full rounded-xl border border-brand-navy/15 bg-brand-cream/40 px-4 py-3 text-ink-900 placeholder-ink-500 outline-none transition focus:border-brand-orange/50 focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
          placeholder="Tell us what you need help with..."
        />
      </div>

      {/* Honeypot invisible (opcional pero recomendado) */}
      <input
        type="text"
        name="hp"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "ok" && (
        <p className="text-sm text-emerald-600">Message sent. We will reply within 24 hours.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
