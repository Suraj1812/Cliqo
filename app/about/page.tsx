import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { customers, values } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Cliqo's mission, founder, values, and long-term vision for financial identity in India's gig economy.",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Cliqo exists to make gig work legible to the financial system."
        description="We are building the infrastructure that helps lenders understand verified platform income, worker behavior, and repayment capacity with more nuance than legacy scorecards allow."
        secondaryHref="/contact"
        secondaryLabel="Meet the team"
      />

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="Mission"
              title="Build the credit infrastructure layer for India's gig economy."
              description="Cliqo helps lenders, fintech partners, and worker platforms serve people whose earning power is real but under-documented."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="panel card-lift p-7">
              <p className="font-display text-3xl text-ink">Why now?</p>
              <p className="mt-4 text-lg leading-8 text-slate">
                Millions of workers across ride-hailing, delivery, home services, and freelance platforms are generating
                steady income, yet remain outside the formal systems banks trust. Cliqo bridges that gap.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="glass-dark card-lift grid gap-8 p-8 text-white sm:grid-cols-[220px_1fr] sm:items-start">
          <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <Image
              src={siteConfig.founder.image}
              alt={`${siteConfig.founder.name} portrait`}
              fill
              sizes="(max-width: 640px) 220px, 220px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="eyebrow border-white/12 bg-white/10 text-white">Founder</p>
            <h2 className="mt-6 font-display text-4xl text-white">{siteConfig.founder.name}</h2>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/70">
                {siteConfig.founder.pronouns}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/70">
                {siteConfig.founder.title}
              </span>
            </div>
            <p className="mt-6 text-xl leading-9 text-white/80">{siteConfig.founder.bio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.founder.linkedin}
                target="_blank"
                rel="noreferrer"
                className="button-sheen inline-flex rounded-full bg-ember px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                CEO LinkedIn
              </a>
              <a
                href={siteConfig.company.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Company LinkedIn
              </a>
            </div>
          </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-white/55 py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Values"
              title="The operating principles behind the product."
              description="Cliqo is not just a dashboard. It is an infrastructure layer that has to balance worker trust, lender clarity, and scalable operational rigor."
            />
          </Reveal>
          <div className="grid equal-grid gap-5 md:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value} className="h-full" delay={index * 70}>
                <div className="panel card-lift equal-card p-6">
                  <p className="font-display text-2xl text-ink">{value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="Vision"
              title="From lending rails to a full financial identity layer."
              description="The same infrastructure that supports underwriting today can unlock better financial products for workers over time."
            />
          </Reveal>
          <div className="grid gap-4">
            {[
              "Insurance access",
              "Savings products",
              "Credit cards",
              "BNPL and short-cycle products",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <div className="panel card-lift px-5 py-5 text-sm leading-7 text-slate">{item}</div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={100}>
          <div className="panel card-lift p-8">
          <p className="eyebrow">Who we work with</p>
          <div className="mt-8 grid gap-4">
            {customers.map((customer) => (
              <div key={customer.title} className="card-lift rounded-[1.5rem] border border-deep/10 bg-white/75 px-5 py-4">
                <p className="font-display text-2xl text-ink">{customer.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate">{customer.detail}</p>
              </div>
            ))}
          </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
