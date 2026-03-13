export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/workflow", label: "Workflow" },
  { href: "/developer", label: "Developer" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const platforms = [
  "Uber",
  "Swiggy",
  "Zomato",
  "Rapido",
  "Urban Company",
  "Ola",
  "Amazon Flex",
  "Freelancer platforms",
];

export const featureCards = [
  {
    title: "Multi-platform income verification",
    description:
      "Aggregate earnings, bonuses, incentives, tips, and payout history across the worker's gig stack.",
  },
  {
    title: "Risk intelligence",
    description:
      "Translate noisy income streams into stability, reliability, and repayment-capacity signals that lenders can use.",
  },
  {
    title: "Fraud detection",
    description:
      "Flag fake screenshots, manipulated spikes, account sharing, and identity mismatch before a lender books risk.",
  },
  {
    title: "API infrastructure",
    description:
      "Ship verification and credit insights directly into lender onboarding, underwriting, and portfolio monitoring flows.",
  },
];

export const architectureLayers = [
  {
    name: "Identity layer",
    detail: "Authentication, OTP verification, KYC checks, consent capture, and audit trails.",
  },
  {
    name: "Data integration layer",
    detail: "Platform connectors, sync orchestration, payout ingestion, and structured raw events.",
  },
  {
    name: "Data processing engine",
    detail: "Cleaning, standardization, normalization, and cross-platform income stitching.",
  },
  {
    name: "AI decision engine",
    detail: "Stability scoring, reliability scoring, fraud signals, and loan-capacity outputs.",
  },
  {
    name: "Lender dashboard",
    detail: "Worker profile, analytics, explanations, and risk monitoring surfaces for operations teams.",
  },
  {
    name: "API infrastructure",
    detail: "Embeddable endpoints for verification, score retrieval, and continuous monitoring.",
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "Worker identity verification",
    summary:
      "Collect name, phone, email, date of birth, address, PAN, and Aadhaar data with OTP and KYC checks.",
  },
  {
    step: "02",
    title: "Consent-based data access",
    summary:
      "Explain what data is collected, why it is used, who can access it, and how long consent stays active.",
  },
  {
    step: "03",
    title: "Platform data aggregation",
    summary:
      "Fetch trip volume, delivery count, earnings, incentives, tips, payouts, ratings, and work patterns.",
  },
  {
    step: "04",
    title: "Income normalization engine",
    summary:
      "Convert platform-specific earning formats into monthly, weekly, daily, trend, and volatility metrics.",
  },
  {
    step: "05",
    title: "Income stability analysis",
    summary:
      "Measure consistency, variance across weeks, active days, tenure, and income-per-task quality.",
  },
  {
    step: "06",
    title: "Worker reliability scoring",
    summary:
      "Assess completion rate, cancellation rate, ratings, account age, and work discipline signals.",
  },
  {
    step: "07",
    title: "Fraud detection",
    summary:
      "Detect identity reuse, suspicious spikes, account sharing, irregular patterns, and fake evidence.",
  },
  {
    step: "08",
    title: "Creditworthiness engine",
    summary:
      "Generate verified income, risk category, repayment-capacity estimates, and suggested loan limits.",
  },
  {
    step: "09",
    title: "Lender dashboard",
    summary:
      "Present the worker profile, linked platforms, income trends, reliability signals, and risk insights.",
  },
  {
    step: "10",
    title: "Loan eligibility calculation",
    summary:
      "Estimate a safe EMI threshold from average income and convert it into recommended loan capacity.",
  },
  {
    step: "11",
    title: "Loan approval",
    summary:
      "Support decisions for personal, vehicle, working-capital, EV, and short-term micro-loan products.",
  },
  {
    step: "12",
    title: "Continuous monitoring",
    summary:
      "Track ongoing income changes and issue risk alerts when earnings deteriorate meaningfully.",
  },
];

export const dashboardMetrics = [
  "Monthly income",
  "Average weekly earnings",
  "Active working days",
  "Income growth",
  "Platform distribution",
  "Risk score",
  "Suggested loan eligibility",
];

export const securityItems = [
  "Encrypted data storage and transit",
  "Consent lifecycle management",
  "Secure API architecture",
  "Regulatory compliance readiness",
  "Audit logs and access controls",
];

export const customers = [
  {
    title: "NBFCs",
    detail: "Expand into the gig segment with more confidence and sharper risk controls.",
  },
  {
    title: "Fintech apps",
    detail: "Embed verification and underwriting in digital onboarding and credit funnels.",
  },
  {
    title: "Digital banks",
    detail: "Reach borrowers who earn consistently but are invisible to salary-based scoring systems.",
  },
  {
    title: "Gig platforms",
    detail: "Launch lending and financial services for their worker base using verified earnings history.",
  },
];

export const apiEndpoints = [
  {
    method: "POST",
    path: "/v1/workers/verify",
    description: "Create or refresh a worker identity and KYC verification job.",
  },
  {
    method: "POST",
    path: "/v1/workers/link-platform",
    description: "Capture consent and initiate platform connection for a worker.",
  },
  {
    method: "GET",
    path: "/v1/workers/{workerId}/income",
    description: "Retrieve normalized income, platform distribution, and payout trends.",
  },
  {
    method: "GET",
    path: "/v1/workers/{workerId}/credit-profile",
    description: "Fetch scores, risk category, repayment capacity, and fraud checks.",
  },
  {
    method: "POST",
    path: "/v1/webhooks/subscribe",
    description: "Subscribe to ongoing monitoring alerts and score refresh notifications.",
  },
];

export const monetizationStreams = [
  "API usage fees per verification or credit insight request",
  "SaaS dashboard subscriptions for lender teams",
  "Revenue share on approved or disbursed loans",
];

export const values = [
  "Worker-first consent and data transparency",
  "Practical underwriting signals for real-world lenders",
  "Infrastructure that makes gig income legible, not speculative",
  "Continuous risk monitoring instead of one-time snapshots",
];

export const companyStats = [
  { label: "Platforms covered", value: "7+" },
  { label: "Workflow stages", value: "12" },
  { label: "Core decision outputs", value: "6" },
];
