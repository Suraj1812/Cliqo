import Image from "next/image";
import { navLinks } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-deep text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white">
              <Image
                src={siteConfig.company.image}
                alt={`${siteConfig.company.name} logo`}
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <div>
              <p className="font-display text-xl font-semibold tracking-tight">{siteConfig.company.name}</p>
              <p className="text-sm text-white/60">{siteConfig.company.tagline}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/70">
            Make gig income measurable, reliable, and creditworthy for lenders, fintechs, digital banks, and
            worker platforms.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Pages</p>
          <div className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/75 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Leadership</p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="font-display text-xl">{siteConfig.founder.name}</p>
            <p className="mt-1 text-sm text-white/60">
              {siteConfig.founder.title} · {siteConfig.founder.pronouns}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">{siteConfig.founder.bio}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href={siteConfig.founder.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm font-semibold text-mist transition hover:text-white"
              >
                CEO LinkedIn
              </a>
              <a
                href={siteConfig.company.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm font-semibold text-mist transition hover:text-white"
              >
                Company LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
