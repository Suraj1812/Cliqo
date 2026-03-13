import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { architectureLayers, dashboardMetrics, featureCards, monetizationStreams, securityItems } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Product",
  description:
    "Explore Cliqo's product stack for identity verification, income normalization, lender dashboards, fraud controls, and portfolio monitoring.",
  pathname: "/product",
});

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="A lender-ready operating system for gig income verification and credit decisions."
        description="Cliqo packages identity checks, platform aggregation, normalization, scoring, fraud controls, and monitoring into one connected product surface."
        secondaryHref="/workflow"
        secondaryLabel="View workflow"
      />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Capability stack"
          title="Six product layers working as one credit infrastructure engine."
          description="Each layer handles a different failure point in gig-worker underwriting, from identity assurance to portfolio monitoring."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {architectureLayers.map((layer, index) => (
            <div key={layer.name} className="panel p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-tide">Layer {index + 1}</p>
              <h2 className="mt-4 font-display text-3xl text-ink">{layer.name}</h2>
              <p className="mt-4 text-sm leading-7 text-slate">{layer.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/55 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="panel p-8">
            <p className="eyebrow">Normalization engine</p>
            <h2 className="mt-6 font-display text-4xl text-ink">Turn messy earnings into a common language.</h2>
            <p className="mt-5 text-lg leading-8 text-slate">
              Cliqo standardizes ride, delivery, and service income across platforms so lenders can compare workers
              consistently instead of reverse-engineering platform dashboards.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Monthly earnings",
                "Weekly earnings",
                "Average daily income",
                "Peak earning days",
                "Income volatility",
                "Income growth trend",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-deep/10 bg-mist/45 px-4 py-4 text-sm text-slate">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-dark p-8 text-white">
            <p className="eyebrow border-white/12 bg-white/10 text-white">Scoring outputs</p>
            <div className="mt-8 grid gap-4">
              {[
                "Verified income",
                "Income stability score",
                "Worker reliability score",
                "Risk category",
                "Predicted repayment capacity",
                "Suggested loan limit",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Risk intelligence"
            title="Underwrite with stability, reliability, and fraud context."
            description="Cliqo goes beyond gross income to show whether a worker's cashflow is durable and trustworthy enough for lending."
          />
          <div className="grid gap-4">
            {[
              "Income consistency across weeks and payout cycles",
              "Platform tenure, work frequency, and active-day trends",
              "Ratings, completion rate, and cancellation behavior",
              "Anomaly detection for manipulated or suspicious earnings",
            ].map((item) => (
              <div key={item} className="panel px-5 py-5 text-sm leading-7 text-slate">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-8">
          <p className="eyebrow">Dashboard surface</p>
          <h2 className="mt-6 font-display text-4xl text-ink">A profile lenders can review in minutes.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {dashboardMetrics.map((metric) => (
              <div key={metric} className="rounded-[1.5rem] border border-deep/10 bg-white/75 px-4 py-4 text-sm text-slate">
                {metric}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep py-20 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Controls"
              title="Security and compliance are part of the product, not an afterthought."
              description="Because workers are granting access to sensitive identity and income data, trust has to be visible across the entire system."
              light
            />
            <div className="grid gap-4">
              {securityItems.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-dark border-white/10 p-8">
            <p className="eyebrow border-white/12 bg-white/10 text-white">Commercial model</p>
            <div className="mt-8 space-y-4">
              {monetizationStreams.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-white/80">
                  {item}
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-ember px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Modules"
          title="A product suite that can be adopted all at once or integrated step by step."
          description="Lenders can start with verification APIs, add the dashboard for operations, and expand into ongoing monitoring as their portfolio matures."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature) => (
            <div key={feature.title} className="panel p-6">
              <h3 className="font-display text-2xl text-ink">{feature.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
