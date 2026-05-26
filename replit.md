# Career Highways

React + Vite clone of careerhighways.com — a marketing site for a skills intelligence platform. User attested ownership of the source site.

## Run & Operate

- The site runs as the `artifacts/career-highways: web` workflow on port 21131 (proxied at `/`).
- `pnpm --filter @workspace/career-highways run typecheck` — typecheck the artifact
- `pnpm run typecheck` — typecheck all packages
- No backend or database — pure static marketing site.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React 19 + Vite, wouter for routing, Tailwind v4, shadcn ui
- framer-motion for scroll animations
- No API client, no database

## Where things live

- `artifacts/career-highways/src/App.tsx` — router (21 routes via wouter)
- `artifacts/career-highways/src/components/SiteLayout.tsx` — sticky header + footer
- `artifacts/career-highways/src/pages/*.tsx` — one file per route
- `artifacts/career-highways/src/index.css` — theme tokens & Google Fonts (Oswald + Work Sans)
- `artifacts/career-highways/public/images/*` — 49 brand assets downloaded from source
- `artifacts/career-highways/public/data/site-content.json` — scraped source content (used by Privacy / Terms pages at runtime)

## Architecture decisions

- Pure static marketing site — no API server, no DB, no auth.
- Privacy Policy and Terms of Use fetch their long-form content from `/data/site-content.json` at runtime rather than inlining ~60KB of prose into the bundle.
- Heading rule in `index.css` sets `color: inherit` so hero sections can use `text-white` wrappers without per-heading overrides.
- Lead-gen forms (Book a Strategy Session, Contact Us) are non-functional — they show a styled success state on submit but do not POST anywhere. Wire to a real endpoint or external form provider before going live.

## Product

Marketing site for Career Highways' skills-intelligence platform. Pages: Home, About, Skills Intelligence, Employers, Solutions, SkillXP, AI Impact, Insights, FAQ, Knowledge Center, Case Studies, In the Press, Team, Job Seekers, Talent Developers, Pathways in Minutes, Book a Strategy Session, Contact Us, Businessolver Partner, Privacy Policy, Terms of Use.

## User preferences

- User wanted an exact-as-possible clone of careerhighways.com — same paths, content, images, fonts, theme.
- Fonts: Oswald (heading) substituted for the proprietary Lorimer No 2; Work Sans for body.

## Gotchas

- Hero CTAs use `text-white` wrappers — don't put `text-accent` directly on a heading inside a hero or it will go dark.
- All internal nav must use wouter's `<Link href="...">`, not `<a>`.
- If you regenerate page content, also copy `.local/site-content.json` to `artifacts/career-highways/public/data/site-content.json` so the legal pages pick it up.

## Pointers

- See the `pnpm-workspace` skill for workspace structure
- See the `react-vite` and `design` skills for component conventions
