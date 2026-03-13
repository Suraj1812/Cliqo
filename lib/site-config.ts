export const siteConfig = {
  name: "Cliqo",
  shortName: "Cliqo",
  title: "Cliqo | Credit Infrastructure for India's Gig Economy",
  description:
    "Cliqo turns fragmented gig-platform earnings into verified income, risk insights, and lender-ready credit profiles.",
  url: "https://cliqo.ai",
  locale: "en_IN",
  founder: {
    name: "Aritra Halder",
    pronouns: "He/Him",
    title: "CEO & Founder",
    bio: "Building Cliqo - Financial Identity for India's gig economy",
    linkedin: "https://www.linkedin.com/in/aritra-halder/",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHsd5NYyrxx7Q/profile-displayphoto-shrink_400_400/B56ZbtEsiuHUAg-/0/1747734154095?e=1775088000&v=beta&t=KaOJpcdPFHbY36DzEN6nCQ_ns5p0v3Wz3Kd8ktMyeKM",
  },
  company: {
    name: "Cliqo",
    tagline: "Credit infrastructure for India's gig economy",
    linkedin: "https://www.linkedin.com/company/cliqoai/",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQEZTZZbHYjogQ/company-logo_200_200/B56Zyr5KzMKAAI-/0/1772410416878/cliqoai_logo?e=1775088000&v=beta&t=Z_LIWhE0SwkPuHMZfB9CH35flbIkCy4xZRCsvmHrc84",
  },
  contact: {
    salesEmail: "sales@cliqo.ai",
    partnerEmail: "partners@cliqo.ai",
  },
  keywords: [
    "gig economy credit infrastructure",
    "gig worker lending",
    "income verification",
    "fintech infrastructure India",
    "NBFC underwriting",
    "platform worker credit scoring",
    "consent-based data sharing",
  ],
} as const;

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, siteConfig.url).toString();
}
