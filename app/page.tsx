import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import {
  architectureLayers,
  companyStats,
  customers,
  featureCards,
  monetizationStreams,
  platforms,
  securityItems,
  workflowSteps,
} from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Credit Infrastructure for India's Gig Economy",
  description:
    "Cliqo helps lenders verify gig income, model worker stability, detect fraud, and make faster credit decisions.",
  pathname: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-deep/10 bg-gradient-to-br from-mist via-sand to-white">
        <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-40" />
        <div className="hero-orb hero-orb-one left-[8%] top-20 h-48 w-48 bg-ember/20" />
        <div className="hero-orb hero-orb-two right-[10%] top-28 h-64 w-64 bg-tide/15" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-24">
          <Reveal className="space-y-8">
            <p className="eyebrow">Credit infrastructure for India&apos;s gig economy</p>
            <div className="space-y-6">
              <h1 className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Make gig income measurable, reliable, and creditworthy.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate sm:text-xl">
                Cliqo turns fragmented platform earnings into verified income profiles, risk insights, and lender-ready
                underwriting workflows for the new workforce.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="button-sheen rounded-full bg-deep px-6 py-3 font-semibold text-sand transition hover:-translate-y-0.5">
                Request Demo
              </Link>
              <Link
                href="/workflow"
                className="rounded-full border border-deep/15 bg-white/75 px-6 py-3 font-semibold text-ink transition hover:border-deep/30 hover:bg-white"
              >
                Explore Workflow
              </Link>
            </div>

            <div className="grid equal-grid gap-4 sm:grid-cols-3">
              {companyStats.map((item) => (
                <div key={item.label} className="panel card-lift equal-card p-5">
                  <p className="font-display text-4xl font-semibold text-deep">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate/70">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              {platforms.map((platform) => (
                <span key={platform} className="metric-pill card-lift text-sm text-slate">
                  {platform}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="glass-dark card-lift relative overflow-hidden p-8 text-white" delay={140}>
            <div className="absolute inset-x-8 top-16 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent animate-pulseLine" />
            <div className="absolute inset-y-8 right-16 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />
            <div className="relative space-y-7">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.28em] text-mist/70">End-to-end flow</p>
                <h2 className="font-display text-3xl font-semibold leading-tight">
                  Worker data in. Lending confidence out.
                </h2>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    title: "Identity and consent",
                    detail: "KYC checks, OTP, consent capture, and worker-approved data sharing.",
                  },
                  {
                    title: "Income aggregation",
                    detail: "Trips, payouts, incentives, ratings, working hours, and bank-linked deposits.",
                  },
                  {
                    title: "Decision engine",
                    detail: "Stability, reliability, fraud signals, EMI capacity, and risk segmentation.",
                  },
                  {
                    title: "Lender action",
                    detail: "Profile review, API retrieval, approval recommendations, and monitoring alerts.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`card-lift rounded-[1.6rem] border border-white/12 p-5 backdrop-blur-sm ${
                      index % 2 === 0 ? "bg-white/10" : "bg-white/5"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-mist/60">Phase {index + 1}</p>
                        <p className="mt-2 font-display text-2xl text-white">{item.title}</p>
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist/70">
                        {index + 1}/4
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/70">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The problem"
            title="Gig workers are financially active, but still invisible to formal credit."
            description="Traditional underwriting expects salary slips, clean employment history, and single-employer income. Gig workers bring multi-platform earnings, weekly cashflow variation, and no formal payroll footprint."
          />
        </Reveal>

        <div className="grid equal-grid gap-6 lg:grid-cols-3">
          {[
            "Income is spread across multiple apps and payout systems.",
            "Weekly volatility makes raw statements hard to interpret.",
            "Traditional scorecards ignore ratings, active days, and platform tenure.",
          ].map((item, index) => (
            <Reveal key={item} className="h-full" delay={index * 80}>
              <div className="panel card-lift equal-card p-7">
                <p className="font-display text-2xl text-ink">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white/55 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal className="space-y-6">
            <SectionHeading
              eyebrow="The solution"
              title="A financial identity layer purpose-built for platform workers."
              description="Cliqo normalizes earnings, validates identity, models reliability, and packages the output into a lender-facing decision surface."
            />
            <div className="panel card-lift p-7">
              <p className="text-sm uppercase tracking-[0.24em] text-slate/70">Core outputs</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Verified income",
                  "Income stability score",
                  "Worker reliability score",
                  "Fraud risk flags",
                  "Risk category",
                  "Suggested loan limit",
                ].map((item) => (
                  <span key={item} className="metric-pill card-lift text-sm text-slate">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid equal-grid gap-5 md:grid-cols-2">
            {architectureLayers.map((layer, index) => (
              <Reveal key={layer.name} className="h-full" delay={index * 70}>
                <div className="panel card-lift equal-card p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-tide">{layer.name}</p>
                  <p className="mt-4 font-display text-2xl text-ink">{layer.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Workflow"
            title="From worker sign-up to live loan monitoring in twelve connected steps."
            description="The process is designed for partner apps, lenders, and Cliqo's own verification portal."
          />
        </Reveal>

        <div className="grid equal-grid gap-5 lg:grid-cols-3">
          {workflowSteps.slice(0, 6).map((step, index) => (
            <Reveal key={step.step} className="h-full" delay={index * 70}>
              <div className="panel card-lift equal-card p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-display text-4xl text-deep">{step.step}</p>
                  <span className="rounded-full bg-deep/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-deep">
                    Active stage
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate">{step.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="panel card-lift grid gap-8 p-8 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="space-y-4">
              <p className="eyebrow">Loan capacity example</p>
              <h3 className="font-display text-3xl text-ink">INR 40,000 average monthly income</h3>
              <p className="text-lg leading-8 text-slate">
                With a recommended EMI threshold of 30%, Cliqo can help a lender model a safe EMI envelope near INR
                12,000 and back into responsible loan size recommendations.
              </p>
            </div>
            <div className="grid equal-grid gap-4 sm:grid-cols-3">
              {[
                { label: "Average monthly income", value: "INR 40,000" },
                { label: "Safe EMI threshold", value: "30%" },
                { label: "Indicative EMI capacity", value: "INR 12,000" },
              ].map((item) => (
                <div key={item.label} className="card-lift equal-card rounded-[1.6rem] border border-deep/10 bg-mist/45 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate/70">{item.label}</p>
                  <p className="mt-4 font-display text-3xl text-deep">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-deep py-20 text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Feature stack"
              title="Everything lenders need to trust non-traditional income."
              description="Each module is designed to reduce underwriting friction without asking workers to fit legacy employment molds."
              light
            />
          </Reveal>
          <div className="grid equal-grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((feature, index) => (
              <Reveal key={feature.title} className="h-full" delay={index * 70}>
                <div className="card-lift equal-card rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <h3 className="font-display text-2xl text-white">{feature.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="Who it serves"
              title="Built for institutions moving into gig-worker credit."
              description="Cliqo acts as infrastructure, not a point solution, so multiple business models can plug into the same trust layer."
            />
          </Reveal>
          <div className="grid gap-5">
            {customers.map((customer, index) => (
              <Reveal key={customer.title} delay={index * 70}>
                <div className="panel card-lift p-6">
                  <p className="font-display text-2xl text-ink">{customer.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate">{customer.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <Reveal>
            <div className="panel card-lift p-7">
              <p className="eyebrow">Security and compliance</p>
              <div className="mt-6 grid gap-4">
                {securityItems.map((item) => (
                  <div key={item} className="card-lift rounded-[1.4rem] border border-deep/10 bg-white/60 px-4 py-4 text-sm text-slate">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass-dark card-lift p-7 text-white">
              <p className="eyebrow border-white/12 bg-white/10 text-white">Revenue model</p>
              <div className="mt-6 space-y-4">
                {monetizationStreams.map((item) => (
                  <div key={item} className="card-lift rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-deep/10 bg-white/60 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <Reveal>
            <div className="panel card-lift grid gap-8 p-8 sm:grid-cols-[180px_1fr] sm:items-start">
              <div className="relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-[1.8rem] border border-deep/10 bg-mist/45">
                <Image
                  src={siteConfig.founder.image}
                  alt={`${siteConfig.founder.name} portrait`}
                  fill
                  sizes="(max-width: 640px) 180px, 180px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="eyebrow">Founder</p>
                <h2 className="mt-6 font-display text-4xl text-ink">{siteConfig.founder.name}</h2>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-deep/10 bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate/80">
                    {siteConfig.founder.pronouns}
                  </span>
                  <span className="rounded-full border border-deep/10 bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate/80">
                    {siteConfig.founder.title}
                  </span>
                </div>
                <p className="mt-6 text-xl leading-9 text-slate">{siteConfig.founder.bio}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={siteConfig.founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="button-sheen inline-flex rounded-full bg-deep px-5 py-3 text-sm font-semibold text-sand transition hover:-translate-y-0.5"
                  >
                    CEO LinkedIn
                  </a>
                  <a
                    href={siteConfig.company.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-deep/15 bg-white/75 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-deep/30 hover:bg-white"
                  >
                    Company LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-dark card-lift flex flex-col justify-between gap-8 p-8 text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-mist/60">Long-term vision</p>
                <h2 className="mt-4 font-display text-4xl leading-tight">India&apos;s financial identity layer for gig workers.</h2>
              </div>
              <div className="grid equal-grid gap-4 sm:grid-cols-2">
                {[
                  "Insurance access",
                  "Savings products",
                  "Credit cards",
                  "BNPL for gig workers",
                ].map((item) => (
                  <div key={item} className="card-lift equal-card rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80">
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="button-sheen inline-flex rounded-full bg-ember px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                Start a partnership
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
