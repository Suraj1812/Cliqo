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
      <div className="relative mx-auto grid w-full max-w-7xl items-start gap-6 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-20">
        <Reveal className="min-w-0 max-w-4xl space-y-4 sm:space-y-6">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display text-[clamp(2.15rem,10vw,4.75rem)] font-semibold leading-[0.95] tracking-tight text-ink">
            {title}
          </h1>
          <p className="max-w-3xl text-[0.98rem] leading-7 text-slate sm:text-lg sm:leading-8 lg:text-xl">
            {description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href={primaryHref}
              className="button-sheen inline-flex w-full items-center justify-center rounded-full bg-deep px-6 py-3 font-semibold text-sand transition hover:-translate-y-0.5 sm:w-auto"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex w-full items-center justify-center rounded-full border border-deep/15 bg-white/70 px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-deep/30 hover:bg-white sm:w-auto"
            >
              {secondaryLabel}
            </Link>
          </div>

          <div className="grid gap-3 sm:hidden">
            {heroSignals.map((signal) => (
              <div
                key={signal.label}
                className="signal-card rounded-[1.25rem] border border-deep/10 bg-white/80 px-4 py-3.5 shadow-panel"
              >
                <p className="text-[0.64rem] uppercase tracking-[0.2em] text-tide">{signal.label}</p>
                <p className="mt-2 font-display text-lg leading-tight text-ink">{signal.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative hidden w-full min-w-0 sm:block lg:ml-auto" delay={140}>
          <div className="glass-dark card-lift p-5 text-white sm:p-8">
            <div className="absolute inset-x-8 top-14 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.26em] text-mist/60">Signal surface</p>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl">
                Fast-moving income, rendered lender-ready.
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {heroSignals.map((signal, index) => (
                  <div
                    key={signal.label}
                    className="signal-card card-lift rounded-[1.6rem] border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm last:sm:col-span-2"
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
