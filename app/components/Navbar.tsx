"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open && panelRef.current) panelRef.current.focus();
  }, [open]);

  const isActive = (item: NavItem) => pathname === item.href;

  return (
    <header className="sticky top-0 z-[1100] border-b border-brand-navy/10 bg-brand-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="flex items-center" aria-label="Hudson Smart Installs Home">
          <Image
            src="/logohsi.png"
            alt="Hudson Smart Installs"
            width={210}
            height={72}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="ml-auto hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6 text-sm font-semibold text-ink-700">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item) ? "page" : undefined}
                className={cn(
                  "transition hover:text-brand-orange",
                  isActive(item) && "text-brand-orange"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="btn btn-primary">
            Request a Free Quote
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <Link
            href="/contact"
            className="rounded-full bg-brand-orange px-3 py-2 text-xs font-semibold text-white shadow-sm"
          >
            Free Quote
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            className="rounded-lg p-2 text-ink-700 hover:bg-white/60 focus-visible:ring-2 focus-visible:ring-brand-orange/40"
            onClick={() => setOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          aria-hidden
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        id="mobile-drawer"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className={cn(
          "fixed right-0 top-0 z-50 h-dvh w-80 transform bg-brand-navy text-white shadow-xl transition-transform duration-200 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
          <span className="text-sm font-semibold uppercase tracking-[0.18em]">Menu</span>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3 py-2 transition-colors hover:bg-white/10",
                isActive(item) ? "bg-white/10 font-semibold" : "text-white"
              )}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-full bg-brand-orange px-3 py-2 text-center text-sm font-semibold text-white"
          >
            Request a Free Quote
          </Link>

          <div className="mt-4 border-t border-white/10 pt-3 text-xs opacity-80">
            <p>Mon-Sat - 8:00 AM - 6:00 PM</p>
            <p>Jersey City + North Jersey</p>
          </div>
        </nav>
      </aside>
    </header>
  );
}
