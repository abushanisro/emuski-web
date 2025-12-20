# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview

Marketing and product website for EMUSKI Manufacturing Solutions, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Radix UI + shadcn/ui, TanStack Query, React Hook Form + Zod, and Lucide React. The site showcases engineering and manufacturing services, AI-powered solutions, and content pages such as blog, newsroom, gallery, and legal pages.

Key references:
- High-level docs and setup: `README.md`
- App Router entrypoint and layout: `app/layout.tsx`, `app/page.tsx`, `app/providers.tsx`
- Global styling and Tailwind setup: `src/index.css`, `tailwind.config.ts`, `postcss.config.js`
- Next.js configuration and SEO/image behavior: `next.config.js`

## Commands and workflows

All commands are defined in `package.json` and use npm scripts.

### Install and environment setup

- Install dependencies:
  - `npm install`
- Create local environment file (based on `README.md`):
  - `cp .env.example .env.local`
  - Then fill in values documented under **Environment Variables** in `README.md`.

### Core scripts

- Start development server (Next.js dev):
  - `npm run dev`
  - Serves the app at `http://localhost:3000`.
- Build for production:
  - `npm run build`
- Run production server (after build):
  - `npm run start`
- Lint the codebase (Next.js + ESLint config):
  - `npm run lint`

### Tests

No test runner or `test` script is currently defined in `package.json`. If you add tests (e.g. Jest, Vitest, Playwright), also add:
- A top-level script such as `"test": "<runner>"` in `package.json`.
- Notes here describing how to run all tests and a single test file.

### Deployment

Based on `README.md`:
- Vercel (recommended): deploy using the Vercel CLI (`vercel`) or via GitHub integration.
- Netlify: deployment is configured via `netlify.toml`; use `netlify deploy --prod` when working with the Netlify CLI.

## Configuration and environment

See `.env.example` and `README.md` for full details. Common variables:
- `NEXT_PUBLIC_STRAPI_URL` – optional Strapi CMS URL.
- `NEXT_PUBLIC_STRAPI_API_TOKEN` – optional Strapi API token.
- `NEXT_PUBLIC_USE_STRAPI` – flag to enable/disable Strapi integration.
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` – Google reCAPTCHA site key used by the contact form.

Make sure `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set before working on forms/components that integrate reCAPTCHA (e.g. contact page and related UI wrappers).

`next.config.js` customizes:
- Image optimization (formats, quality presets, and allowed `remotePatterns`).
- Security settings for SVG images via `contentSecurityPolicy` and `dangerouslyAllowSVG`.
- Custom HTTP headers (e.g. `X-DNS-Prefetch-Control`) and special headers for PDF assets under `/assets/documents`.
- SEO-related redirect from `emuski.com` to `www.emuski.com`.

Be cautious when modifying image domains, CSP, or redirects, as they directly impact SEO and external asset loading.

## Application architecture

### Routing and page structure (App Router)

The app uses the Next.js App Router under the `app/` directory:
- Root layout and providers:
  - `app/layout.tsx` – global HTML shell, metadata, and shared layout.
  - `app/providers.tsx` – wraps the app with global React providers (e.g. theme, query client, toasts).
- Core marketing and product pages (each with `page.tsx`, some with `layout.tsx`):
  - `app/page.tsx` – home page.
  - `app/precision-engineering/` – engineering services content.
  - `app/manufacturing-services/` – manufacturing services content.
  - `app/solutions/ai/` – AI/solutions offering.
  - `app/gallery/` – media and capabilities gallery.
  - `app/contact/` – contact and lead capture.
  - Legal and policy pages: `app/privacy-policy/`, `app/terms-and-conditions/`, `app/cookie-policy/`.
- Content-heavy sections:
  - Blog: `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`.
  - Newsroom: `app/newsroom/page.tsx`, `app/newsroom/layout.tsx`, `app/newsroom/[slug]/page.tsx`.
- Admin:
  - `app/admin/subscribers/page.tsx` – internal view for managing or viewing email subscribers.
- Global 404:
  - `app/not-found.tsx` – not found handling.

Routing is mostly file-system driven. When adding new pages or sections, follow the existing convention: create a route folder under `app/` with `page.tsx` and an optional `layout.tsx` for that section.

### Data layer and APIs

The data layer is centralized under `src/api/` and `src/data/`:
- `src/api/`:
  - `blogApi.ts`, `blogApiConfig.ts`, `bloggerApi.ts`, `types.ts`, and `index.ts` provide typed clients and configuration for blog/news content, integrating with Blogger and/or a CMS.
  - Any network calls or external blog/news integrations should go through these modules instead of being reimplemented in components.
- `src/data/`:
  - `blogData.ts`, `pageSpecificFAQs.ts`, `successStories.ts`, `technicalSpecifications.ts` hold structured static content for different pages and sections (FAQs, success stories, specs, etc.).
  - Use these data modules for marketing copy or structured content that is not yet CMS-driven.

For new external data sources, prefer creating a new client module under `src/api/` and exposing a small, typed surface that can be consumed by hooks and components.

### Hooks and state management

Custom hooks live in `src/hooks/`:
- Query/remote-data hooks:
  - `useBlogApi.ts`, `useBlogApiConfig.ts`, `useBloggerApi.ts`, `useSuccessStoriesBlogger.ts` wrap the API layer and integrate it with TanStack Query for caching, loading states, and error handling.
- UI/utility hooks:
  - `use-mobile.tsx` – viewport/responsiveness-related logic.
  - `use-toast.ts` – integrates with the toast system from `src/components/ui/`.

When introducing new asynchronous data flows, follow the existing pattern:
- Create or extend an API client under `src/api/`.
- Add a dedicated hook under `src/hooks/` that uses TanStack Query, and only use that hook from components.

### UI components and design system

UI is composed from:
- `src/components/` – page-level and feature-specific components:
  - Hero and marketing sections (`HeroSection`, `ServicesShowcase`, `ManufacturingExcellenceSection`, etc.).
  - Domain-specific sections for engineering, manufacturing, solutions, and success stories.
  - Cross-cutting components such as `Navbar`, `Footer`, `Gallery`, `NewsCarousel`, `BlogPage`, `BlogPost`, `Contact`, `EmailSubscription`, `SubscriberDashboard`.
  - Messaging/automation components like `WhatsAppChatbot`, `WhatsAppWidget`, and email-related components.
  - The `manufacturing-sections/` subfolder groups multiple manufacturing-focused section components behind a central `index.ts` barrel file.
- `src/components/ui/` – the shared design system built on top of Radix UI and shadcn/ui:
  - Primitive wrappers: `button.tsx`, `input.tsx`, `textarea.tsx`, `checkbox.tsx`, `switch.tsx`, `select.tsx`, `tabs.tsx`, etc.
  - Layout and chrome: `card.tsx`, `sheet.tsx`, `sidebar.tsx`, `scroll-area.tsx`, `navigation-menu.tsx`, `pagination.tsx`.
  - Feedback and overlays: `alert.tsx`, `toast.tsx`, `toaster.tsx`, `dialog.tsx`, `drawer.tsx`, `hover-card.tsx`, `tooltip.tsx`.
  - Form helpers: `form.tsx`, `input-otp.tsx`, `recaptcha.tsx` for integrated form + validation + reCAPTCHA flows.
  - Visual and utility components: `calendar.tsx`, `carousel.tsx`, `chart.tsx`, `light-rays.tsx`, `error-pages.tsx`, `skeleton.tsx`.

For any new UI, prefer composing or extending existing `src/components/ui/` primitives rather than introducing new styling patterns, and colocate page-specific components under `src/components/`.

### Utilities and cross-cutting concerns

Shared utility modules live under `src/lib/` and `src/utils/`:
- `src/lib/utils.ts` – general-purpose helpers (string/class name utilities, etc.).
- `src/utils/`:
  - `emailAutomation.ts`, `emailService.ts` – email sending and automation behavior (used by contact/subscription flows).
  - `geoTranslation.ts` – geolocation- or region-based behavior and translations.

When adding new cross-cutting functionality that is not tied to a single feature, prefer placing it under `src/utils/` or `src/lib/` instead of burying it in page components.

### Public assets and scripts

- `public/` – static assets (images, documents, etc.).
- `public/scripts/generate-sitemap.js` – script for generating the sitemap used for SEO.

If you modify routing or add significant new sections, ensure the sitemap generation logic stays in sync with the `app/` route structure.
