# Cliqo

Credit infrastructure for India's gig economy.

Cliqo is a production-ready marketing and product website for a fintech infrastructure company that helps lenders understand, verify, and underwrite gig-worker income. The site presents Cliqo's end-to-end workflow, product architecture, API surfaces, founder profile, and demo/contact funnel in a polished responsive experience with layered motion, strong SEO basics, and a strict verification pipeline.

## What This Repository Contains

This repository contains the complete frontend website for Cliqo, built as a static-first Next.js App Router project.

Included in the site:

- Landing page with product story, workflow overview, features, founder section, and CTA
- Product page for the platform capability stack
- Workflow page explaining the 12-step worker-to-lender journey
- Developer page with API surface and integration examples
- About page with mission, founder, values, and company vision
- Contact page with a validated demo request flow

## Company Positioning

Cliqo is building the credit infrastructure layer for India's gig economy.

Core idea:

- Gig workers earn real income across platforms like Uber, Swiggy, Zomato, Rapido, Urban Company, Ola, and Amazon Flex
- Traditional lenders often cannot underwrite that income properly because it is fragmented, volatile, and undocumented by formal salary systems
- Cliqo converts that platform activity into verified income, stability signals, reliability scoring, fraud checks, and lender-ready credit insights

## Product Narrative Covered by the Website

The site explains the full Cliqo workflow:

1. Worker identity verification
2. Consent-based data access
3. Platform data aggregation
4. Income normalization
5. Income stability analysis
6. Worker reliability scoring
7. Fraud detection
8. Creditworthiness engine
9. Lender dashboard
10. Loan eligibility calculation
11. Loan approval support
12. Continuous monitoring

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- ESLint 9 with Next.js rules

## Key Production Features

- Fully typed codebase with strict TypeScript checking
- Lint-clean project with zero warnings allowed
- Responsive layout across desktop and mobile
- Shared design system and content config
- Motion system with reduced-motion accessibility fallback
- SEO-ready metadata for each route
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, and custom app icon
- Custom 404 page
- External image configuration for LinkedIn-hosted brand/founder assets
- Contact flow with client-side validation and prefilled email handoff

## Brand and Content Configuration

Centralized brand and profile data live in:

- `lib/site-config.ts`

This includes:

- Company name and tagline
- Company LinkedIn URL and logo image
- Founder name, pronouns, title, bio, LinkedIn URL, and image
- Contact email addresses
- Site URL and metadata keywords

## Project Structure

```text
app/
  about/
  contact/
  developer/
  product/
  workflow/
  globals.css
  icon.svg
  layout.tsx
  manifest.ts
  not-found.tsx
  page.tsx
  robots.ts
  sitemap.ts

components/
  code-block.tsx
  contact-form.tsx
  page-hero.tsx
  reveal.tsx
  section-heading.tsx
  site-footer.tsx
  site-header.tsx
  site-shell.tsx

lib/
  metadata.ts
  site-config.ts
  site-data.ts
```

## Animations and Responsiveness

The current build includes a reusable reveal and motion system.

Highlights:

- Scroll-triggered reveal animations using `IntersectionObserver`
- Hover lift effects for cards and UI blocks
- Hero background orb motion and CTA sheen effects
- Reduced-motion support via CSS media queries
- Stable mobile header layout with horizontal nav overflow handling
- Responsive section grids across all major pages

Motion utilities and shared visual behavior live primarily in:

- `app/globals.css`
- `components/reveal.tsx`
- `components/page-hero.tsx`

## Local Development

### Requirements

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The local dev server will start at:

- `http://localhost:3000`

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run lint
```

Runs ESLint with zero warnings allowed.

```bash
npm run typecheck
```

Runs TypeScript in no-emit mode.

```bash
npm run build
```

Creates the production build.

```bash
npm run start
```

Runs the production server after build.

```bash
npm run check
```

Runs the full quality gate:

- lint
- typecheck
- production build

## Production Deployment

This project is ready to deploy on Vercel or any Node-compatible platform that supports Next.js 15.

Recommended deployment steps:

1. Install dependencies with `npm install`
2. Run `npm run check`
3. Run `npm run build`
4. Serve with `npm run start` or deploy through your platform pipeline

Important production notes:

- The canonical site URL is currently set to `https://cliqo.ai`
- LinkedIn-hosted remote images are explicitly allowed in `next.config.ts`
- Contact form submission currently uses a validated `mailto:` handoff rather than a backend form endpoint

## Suggested Next Production Enhancements

The repository is production-ready as a marketing/product website today. If you want to extend it further, the next meaningful upgrades would be:

- Replace `mailto:` contact submission with a server action or API route
- Add analytics and event tracking
- Add OG social preview images
- Add CMS-backed content editing
- Add end-to-end browser tests
- Add CI workflow for `npm run check`

## Verification Status

This project is expected to pass:

```bash
npm run check
```

That command validates:

- ESLint
- TypeScript
- Next.js production build

## Repository

- GitHub: `https://github.com/Suraj1812/Cliqo`

## Maintainer

- Founder: Aritra Halder
- Company LinkedIn: `https://www.linkedin.com/company/cliqoai/`

