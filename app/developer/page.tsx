import type { Metadata } from "next";

import { CodeBlock } from "@/components/code-block";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { apiEndpoints } from "@/lib/site-data";

const requestExample = `{
  "workerId": "wrk_01J9C2A8",
  "platforms": ["uber", "swiggy", "zomato"],
  "consentWindowDays": 180,
  "includeMonitoring": true
}`;

const responseExample = `{
  "workerId": "wrk_01J9C2A8",
  "verifiedIncomeMonthly": 40000,
  "incomeStabilityScore": 82,
  "workerReliabilityScore": 88,
  "riskCategory": "moderate",
  "suggestedLoanLimit": 125000,
  "fraudFlags": [],
  "monitoringStatus": "active"
}`;

const sdkExample = `import { CliqoClient } from "@cliqo/sdk";

const client = new CliqoClient({
  apiKey: process.env.CLIQO_API_KEY!,
  baseUrl: "https://api.cliqo.ai",
});

const profile = await client.creditProfiles.get("wrk_01J9C2A8");

console.log(profile.riskCategory);`;

export const metadata: Metadata = createPageMetadata({
  title: "Developer",
  description:
    "Integrate Cliqo APIs for worker verification, platform linking, normalized income retrieval, and ongoing monitoring alerts.",
  pathname: "/developer",
});

export default function DeveloperPage() {
  return (
    <>
      <PageHero
        eyebrow="Developer"
        title="Embed income verification and credit signals directly into your lending stack."
        description="Use Cliqo APIs to verify workers, link platforms, fetch credit profiles, and subscribe to live monitoring updates."
        secondaryHref="/contact"
        secondaryLabel="Request integration support"
      />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="API surface"
            title="A compact API designed for onboarding, underwriting, and monitoring."
            description="Endpoints are structured so product teams can start with verification and expand into deeper credit intelligence over time."
          />
        </Reveal>

        <div className="grid gap-4 sm:gap-5">
          {apiEndpoints.map((endpoint, index) => (
            <Reveal key={endpoint.path} delay={index * 70}>
              <div className="panel card-lift flex flex-col gap-4 p-4 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-deep px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sand sm:text-xs sm:tracking-[0.22em]">
                      {endpoint.method}
                    </span>
                    <code className="block break-words font-display text-[0.95rem] leading-6 text-ink sm:text-lg lg:break-normal lg:text-xl">
                      {endpoint.path}
                    </code>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate sm:mt-3 sm:leading-7">{endpoint.description}</p>
                </div>
                <span className="w-fit rounded-full border border-deep/10 bg-white/80 px-4 py-2 text-sm text-slate">
                  REST JSON
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white/55 py-16 sm:py-20">
        <div className="mx-auto grid equal-grid w-full max-w-7xl gap-5 px-4 sm:gap-8 sm:px-6 lg:grid-cols-2 lg:px-8">
          <CodeBlock title="Create a linked profile" language="json" code={requestExample} />
          <CodeBlock title="Credit profile response" language="json" code={responseExample} />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-8">
        <div className="min-w-0 space-y-6 sm:space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="Authentication"
              title="Designed for fintech-grade security and clear consent boundaries."
              description="Each worker connection is tied to explicit consent, and lenders access only the data products their integration is approved to use."
            />
          </Reveal>
          <div className="grid gap-3 sm:gap-4">
            {[
              "API key authentication for server-to-server access",
              "Worker-scoped consent tokens for platform linking",
              "Audit logs for every profile retrieval and refresh",
              "Webhook signatures for monitoring events",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <div className="panel card-lift px-4 py-4 text-sm leading-6 text-slate sm:px-5 sm:py-5 sm:leading-7">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="min-w-0 space-y-6 sm:space-y-8">
          <Reveal delay={100}>
            <CodeBlock title="TypeScript SDK example" language="ts" code={sdkExample} />
          </Reveal>
          <Reveal delay={160}>
            <div className="panel card-lift p-5 sm:p-7">
              <p className="eyebrow">Integration path</p>
              <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4">
                {[
                  "1. Verify identity and start a worker record.",
                  "2. Link supported gig platforms with consent capture.",
                  "3. Poll or subscribe for normalized income and score outputs.",
                  "4. Use dashboard or APIs for review, approval, and monitoring.",
                ].map((item) => (
                  <div
                    key={item}
                    className="card-lift rounded-[1.2rem] border border-deep/10 bg-mist/45 px-4 py-3.5 text-sm leading-6 text-slate sm:rounded-[1.4rem] sm:py-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
