import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { workflowSteps } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Workflow",
  description:
    "Follow Cliqo's 12-step workflow from worker onboarding and consent capture to loan approval and continuous income monitoring.",
  pathname: "/workflow",
});

export default function WorkflowPage() {
  return (
    <>
      <PageHero
        eyebrow="Workflow"
        title="A complete worker-to-lender workflow designed for consent, trust, and speed."
        description="Cliqo connects identity assurance, platform linking, signal generation, dashboard review, and ongoing monitoring in one end-to-end system."
        secondaryHref="/product"
        secondaryLabel="Explore product"
      />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="End-to-end flow"
            title="Twelve steps that transform raw platform activity into a credit decision."
            description="The stages below reflect the operational journey from worker onboarding to post-disbursal monitoring."
          />
        </Reveal>

        <div className="grid equal-grid gap-6 lg:grid-cols-2">
          {workflowSteps.map((step, index) => (
            <Reveal key={step.step} className="h-full" delay={index * 55}>
              <div className="panel card-lift equal-card relative overflow-hidden p-7">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-mist/70" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-display text-5xl text-deep">{step.step}</p>
                    <span className="rounded-full bg-deep/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-deep">
                      Step {index + 1}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-3xl text-ink">{step.title}</h2>
                  <p className="mt-4 text-base leading-8 text-slate">{step.summary}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white/55 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <Reveal>
            <div className="panel card-lift p-8">
            <p className="eyebrow">What gets collected</p>
            <div className="mt-8 grid gap-4">
              {[
                "Identity data: name, phone, email, DOB, address, PAN, Aadhaar",
                "Trip and task volume: ride count, delivery count, active days, working hours",
                "Income breakdown: base earnings, bonuses, incentives, surge, tips",
                "Payment behavior: weekly payouts, bank deposits, payout consistency",
                "Platform behavior: ratings, completion rate, cancellation rate, account age",
              ].map((item) => (
                <div key={item} className="card-lift rounded-[1.5rem] border border-deep/10 bg-white/75 px-5 py-4 text-sm leading-7 text-slate">
                  {item}
                </div>
              ))}
            </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-dark card-lift p-8 text-white">
            <p className="eyebrow border-white/12 bg-white/10 text-white">Why the sequence matters</p>
            <div className="mt-8 grid gap-4">
              {[
                "Identity and consent come first so workers stay in control of data access.",
                "Aggregation precedes scoring so risk models use verified cross-platform evidence.",
                "Fraud checks protect lenders before limit recommendations are shown.",
                "Continuous monitoring keeps the profile relevant after origination, not just at underwriting.",
              ].map((item) => (
                <div key={item} className="card-lift rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-white/80">
                  {item}
                </div>
              ))}
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="space-y-6">
          <Reveal>
            <SectionHeading
              eyebrow="Decision logic"
              title="From verified cashflow to safe loan sizing."
              description="Cliqo estimates a workable EMI threshold and converts that into a lender-ready capacity view."
            />
          </Reveal>
          <p className="text-lg leading-8 text-slate">
            Example: if a worker averages INR 40,000 in monthly income and the lender prefers a 30% EMI ceiling,
            Cliqo can surface an indicative safe EMI near INR 12,000 while keeping risk teams aware of volatility and
            reliability context.
          </p>
        </div>

        <Reveal delay={120}>
          <div className="panel card-lift p-8">
          <div className="grid equal-grid gap-4 sm:grid-cols-3">
            {[
              { label: "Average income", value: "INR 40,000" },
              { label: "EMI threshold", value: "30%" },
              { label: "Indicative EMI", value: "INR 12,000" },
            ].map((item) => (
              <div key={item.label} className="card-lift equal-card rounded-[1.5rem] border border-deep/10 bg-mist/45 px-4 py-4">
                <p className="text-sm uppercase tracking-[0.22em] text-slate/70">{item.label}</p>
                <p className="mt-4 font-display text-3xl text-deep">{item.value}</p>
              </div>
            ))}
          </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
