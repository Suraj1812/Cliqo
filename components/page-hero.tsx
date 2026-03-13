import Link from "next/link";

import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

const heroSignals = [
  {
    label: "Verified income",
    value: "Cross-platform earnings",
  },
  {
    label: "Risk intelligence",
    value: "Stability + reliability",
  },
  {
    label: "Live monitoring",
    value: "Portfolio alerts",
  },
];

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Request Demo",
  secondaryHref = "/developer",
  secondaryLabel = "See APIs",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-deep/10 bg-gradient-to-br from-mist via-sand to-white">
      <div className="absolute inset-0 bg-grid bg-[size:40px_40px] opacity-40" />
      <div className="hero-orb hero-orb-one left-[10%] top-14 h-44 w-44 bg-ember/20" />
      <div className="hero-orb hero-orb-two right-[8%] top-10 h-56 w-56 bg-tide/20" />
      <div className="hero-orb hero-orb-three bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 bg-white/60" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <Reveal className="max-w-4xl space-y-6">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">{title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate sm:text-xl">{description}</p>
          <div className="flex flex-wrap gap-4">
            <Link href={primaryHref} className="button-sheen rounded-full bg-deep px-6 py-3 font-semibold text-sand transition hover:-translate-y-0.5">
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="rounded-full border border-deep/15 bg-white/70 px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-deep/30 hover:bg-white"
            >
              {secondaryLabel}
            </Link>
          </div>
        </Reveal>

        <Reveal className="relative w-full lg:ml-auto" delay={140}>
          <div className="glass-dark card-lift p-6 text-white sm:p-8">
            <div className="absolute inset-x-8 top-14 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.26em] text-mist/60">Signal surface</p>
              <h2 className="mt-4 font-display text-3xl">Fast-moving income, rendered lender-ready.</h2>
              <div className="mt-8 grid gap-4">
                {heroSignals.map((signal, index) => (
                  <div
                    key={signal.label}
                    className="signal-card card-lift rounded-[1.6rem] border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <p className="text-xs uppercase tracking-[0.26em] text-mist/60">{signal.label}</p>
                    <p className="mt-3 font-display text-2xl text-white">{signal.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
