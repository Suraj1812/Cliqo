"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="sticky top-0 z-50 border-b border-deep/10 bg-sand/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-deep/10 bg-white shadow-panel">
              <Image
                src={siteConfig.company.image}
                alt={`${siteConfig.company.name} logo`}
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </span>
            <div>
              <p className="font-display text-xl font-semibold tracking-tight text-ink">{siteConfig.company.name}</p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate/70">{siteConfig.company.tagline}</p>
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
            className="rounded-full bg-ember px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-amber-500"
          >
            Request Demo
          </Link>
        </div>

        <nav aria-label="Mobile navigation" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? "border-deep bg-deep text-sand"
                    : "border-deep/10 bg-white/75 text-slate hover:border-deep/20 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
