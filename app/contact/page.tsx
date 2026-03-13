import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Request a Cliqo demo, discuss lender integrations, or explore partnerships for gig-worker credit products.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a demo, discuss an integration, or explore a lending partnership."
        description="Cliqo works with lenders, fintech apps, digital banks, and platform operators looking to serve gig workers with more confidence."
        secondaryHref="/developer"
        secondaryLabel="Developer docs"
      />

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="panel p-8">
          <SectionHeading
            eyebrow="Request demo"
            title="Tell us what you are building."
            description="Share your institution type, use case, expected volume, and timeline. Cliqo can tailor a workflow walkthrough or API integration conversation."
          />
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div className="glass-dark p-8 text-white">
            <p className="eyebrow border-white/12 bg-white/10 text-white">Direct contact</p>
            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-white/60">Sales inquiries</p>
                <a href={`mailto:${siteConfig.contact.salesEmail}`} className="mt-2 inline-flex font-display text-2xl text-white transition hover:text-mist">
                  {siteConfig.contact.salesEmail}
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-white/60">Partnerships</p>
                <a href={`mailto:${siteConfig.contact.partnerEmail}`} className="mt-2 inline-flex font-display text-2xl text-white transition hover:text-mist">
                  {siteConfig.contact.partnerEmail}
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-white/60">Founder</p>
                <a
                  href={siteConfig.founder.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex font-display text-2xl text-mist transition hover:text-white"
                >
                  {siteConfig.founder.name}
                </a>
              </div>
            </div>
          </div>

          <div className="panel p-8">
            <p className="eyebrow">What happens next</p>
            <div className="mt-8 grid gap-4">
              {[
                "1. Discovery call to understand your lending or product workflow.",
                "2. Product walkthrough covering identity, income, scoring, and monitoring.",
                "3. Integration scoping for dashboard access, APIs, or a pilot deployment.",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-deep/10 bg-mist/45 px-5 py-4 text-sm leading-7 text-slate">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
