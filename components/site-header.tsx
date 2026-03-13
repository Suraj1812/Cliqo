"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { siteConfig } from "@/lib/site-config";
import { navLinks } from "@/lib/site-data";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  const mobileMenu =
    mounted &&
    createPortal(
      <div
        className={`fixed inset-0 z-[100] bg-sand transition duration-300 lg:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`flex min-h-screen flex-col transition duration-300 ${
            mobileOpen ? "translate-y-0" : "translate-y-3"
          }`}
        >
          <div className="border-b border-deep/10 bg-sand px-4 py-4 shadow-sm">
            <div className="mx-auto flex w-full max-w-md items-center justify-between gap-4">
              <Link href="/" className="flex min-w-0 items-center gap-3">
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-deep/10 bg-white shadow-panel">
                  <Image
                    src={siteConfig.company.image}
                    alt={`${siteConfig.company.name} logo`}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-xl font-semibold tracking-tight text-ink">{siteConfig.company.name}</p>
                  <p className="mt-1 text-[0.62rem] uppercase leading-tight tracking-[0.14em] text-slate/70">
                    {siteConfig.company.tagline}
                  </p>
                </div>
              </Link>

              <button
                type="button"
                aria-label="Close navigation menu"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-deep/10 bg-white text-deep shadow-panel transition hover:bg-white"
                onClick={() => setMobileOpen(false)}
              >
                <span className="relative h-5 w-5">
                  <span className="absolute left-0 top-[9px] h-0.5 w-5 rotate-45 rounded-full bg-current" />
                  <span className="absolute left-0 top-[9px] h-0.5 w-5 -rotate-45 rounded-full bg-current" />
                </span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="mx-auto flex w-full max-w-md flex-col px-4 pb-8 pt-6">
              <nav className="grid gap-3">
                {navLinks.map((link) => {
                  const active = isActive(pathname, link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-[1.5rem] border px-5 py-4 text-lg transition ${
                        active
                          ? "border-deep bg-deep text-sand"
                          : "border-deep/10 bg-white text-ink hover:border-deep/20 hover:bg-sand/70"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 rounded-[2rem] border border-deep/10 bg-white p-5 shadow-panel">
                <p className="eyebrow">Company</p>
                <p className="mt-5 font-display text-3xl text-ink">{siteConfig.company.name}</p>
                <p className="mt-3 text-base leading-7 text-slate">{siteConfig.company.tagline}</p>
              </div>

              <div className="mt-auto grid gap-3 pt-8">
                <Link
                  href="/contact"
                  className="button-sheen inline-flex items-center justify-center rounded-full bg-ember px-5 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Request Demo
                </Link>
                <a
                  href={siteConfig.company.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-deep/10 bg-white px-5 py-4 text-base font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-sand/70"
                >
                  Company LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body,
    );

  return (
    <header className="sticky top-0 z-50 border-b border-deep/10 bg-sand/90 backdrop-blur-xl">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-deep/10 bg-white shadow-panel">
              <Image
                src={siteConfig.company.image}
                alt={`${siteConfig.company.name} logo`}
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </span>
            <div className="min-w-0">
              <p className="font-display text-xl font-semibold tracking-tight text-ink">{siteConfig.company.name}</p>
              <p className="hidden max-w-[15rem] text-[0.64rem] uppercase leading-tight tracking-[0.14em] text-slate/70 md:block xl:max-w-[18rem]">
                {siteConfig.company.tagline}
              </p>
            </div>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-2 rounded-full border border-deep/10 bg-white/70 px-3 py-2 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    active ? "bg-deep text-sand" : "text-slate hover:bg-deep/5 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="button-sheen hidden shrink-0 rounded-full bg-ember px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-amber-500 lg:inline-flex"
          >
            Request Demo
          </Link>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-deep/10 bg-white/80 text-deep shadow-panel transition hover:bg-white lg:hidden"
            onClick={() => setMobileOpen((current) => !current)}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

      </div>
      {mobileMenu}
    </header>
  );
}
