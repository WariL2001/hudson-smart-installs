"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string; hash?: string };

const NAV: NavItem[] = [
  { href: "/networking-cabling", label: "Networking & Cabling" },
  { href: "/smart-home-office", label: "Smart Home & Office" },
  { href: "/it-support", label: "IT Support" },
  { href: "/#services", label: "Services", hash: "#services" },
  { href: "/#areas", label: "Service Areas", hash: "#areas" },
  { href: "/contact", label: "Contact" },
  { href: "/reviews", label: "Reviews" },
];


function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Mantener hash actual para resaltar activo
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash || "");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("scroll", updateHash, { passive: true });
    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("scroll", updateHash);
    };
  }, []);

  // Cerrar con ESC y bloquear scroll del body cuando open=true
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Focus al abrir el panel
  useEffect(() => {
    if (open && panelRef.current) panelRef.current.focus();
  }, [open]);

  // Offset dinámico según altura real del header
  const getHeaderOffset = () =>
    (document.querySelector("header") as HTMLElement | null)?.offsetHeight ?? 64;

  const smoothScrollTo = (idWithHash: string) => {
    const el = document.querySelector(idWithHash) as HTMLElement | null;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Click handler: smooth scroll + actualizar URL + cerrar si corresponde
  const onNavClick =
    (item: NavItem, closeAfter?: () => void) =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (item.hash && pathname === "/") {
        e.preventDefault();
        smoothScrollTo(item.hash);
        history.replaceState(null, "", item.hash);
        closeAfter?.();
      }
    };

  const isActive = (item: NavItem) => {
    if (item.hash) return hash === item.hash && pathname === "/";
    return pathname === item.href;
  };

  return (
    <header className="sticky top-0 z-[1100] bg-[#F5F1E5]/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
      <div className="relative flex items-center justify-center w-[230px] h-[96px] mr-8 md:mr-14">
        <Link
          href="/"
          className="relative z-10 flex items-center gap-2"
          aria-label="Hudson Smart Installs — Home"
        >
          <Image
            src="/logohsi.png"
            alt="Hudson Smart Installs"
            width={240}
            height={80}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>
      </div>



                {/* Desktop nav + CTA with animated underline */}
                <div className="ml-auto hidden md:flex items-center gap-4 nav-wave">
                  <nav className="flex gap-6 text-sm relative z-10">
                    {NAV.map((item) => (
                      <Link
                        key={item.href + item.label}
                        href={item.href}
                        onClick={onNavClick(item)}
                        className={cn(
                          "hover:text-brand-orange focus-visible:text-brand-orange",
                          isActive(item) ? "text-brand-orange font-medium" : "text-brand-navy"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="relative z-10 flex items-center gap-2">
                    <Link
                      href="/#contact"
                      onClick={onNavClick({ href: "/#contact", hash: "#contact", label: "Contact" })}
                      className="btn btn-primary"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          className="md:hidden ml-auto rounded-lg p-2 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40"
          onClick={() => setOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Overlay (móvil) */}
      {open && (
        <div
          aria-hidden
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer (móvil) */}
      <aside
        id="mobile-drawer"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className={cn(
          "fixed right-0 top-0 z-50 h-dvh w-80 transform bg-brand-navy text-brand-cream shadow-xl transition-transform duration-200 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
          <span className="font-semibold">Menu</span>
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

        <nav className="flex flex-col gap-1 p-3">
          {NAV.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              onClick={(e) => {
                onNavClick(item, () => setOpen(false))(e);
                if (!item.hash || pathname !== "/") setOpen(false);
              }}
              className={cn(
                "rounded-lg px-3 py-2 text-[15px] transition-colors hover:bg-white/10",
                isActive(item) ? "bg-white/10 font-medium" : "text-brand-cream"
              )}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            onClick={(e) => {
              onNavClick({ href: "/#contact", hash: "#contact", label: "Contact" }, () => setOpen(false))(e);
              setOpen(false);
            }}
            className="mt-2 rounded-xl bg-brand-orange px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Book Now
          </Link>


          <div className="mt-4 border-t border-white/10 pt-3 text-xs opacity-80">
            <p>Mon–Sat · 8:00–18:00</p>
            <p>Jersey City & North Jersey</p>
          </div>
        </nav>
      </aside>
    </header>
  );
}
