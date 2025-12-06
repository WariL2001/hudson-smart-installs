"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"" | "sending" | "ok" | "error">("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      details: String(formData.get("details") || ""), // <-- aquí
      hp: String(formData.get("hp") || ""),           // si usas honeypot
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
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <div>
        <label htmlFor="name" className="block text-sm opacity-80 mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-brand-navy/15 bg-white px-3 py-2 text-ink-900 placeholder-ink-500 outline-none focus:ring-2 focus:ring-brand-orange"
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
          className="w-full rounded-md border border-brand-navy/15 bg-white px-3 py-2 text-ink-900 placeholder-ink-500 outline-none focus:ring-2 focus:ring-brand-orange"
          placeholder="you@example.com"
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
          className="w-full rounded-md border border-brand-navy/15 bg-white px-3 py-2 text-ink-900 placeholder-ink-500 outline-none focus:ring-2 focus:ring-brand-orange"
          placeholder="Tell us what you need help with…"
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
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {status === "ok" && (
        <p className="text-sm text-green-300">Message sent. We’ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-300">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
