import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

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
      <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-ember/15 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-20 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">{title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate sm:text-xl">{description}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href={primaryHref} className="rounded-full bg-deep px-6 py-3 font-semibold text-sand transition hover:-translate-y-0.5">
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="rounded-full border border-deep/15 bg-white/70 px-6 py-3 font-semibold text-ink transition hover:border-deep/30 hover:bg-white"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
