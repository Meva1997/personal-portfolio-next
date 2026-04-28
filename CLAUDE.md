# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server with Turbopack (http://localhost:3000)
pnpm build      # Production build + generates sitemap/robots.txt via postbuild
pnpm start      # Serve production build
pnpm lint       # ESLint via next lint
```

No test suite is configured.

## Architecture

**Next.js 15 App Router** with two routes:
- `/` → `app/page.tsx` — hero, dual-identity, timeline, MediDash showcase, tech stack
- `/projects` → `app/projects/page.tsx` — full project listing with MediDash flagship + PawScout

**Components** (`components/`):
- `MainHeader` — sticky nav with active-route highlighting, mobile hamburger; marked `"use client"` for `usePathname`
- `Footer` — static; links to LinkedIn, GitHub, email
- `TechStack` — animated icon grid; marked `"use client"` for mouse events
- `Certifications` — exists but is not used in any current page

**Types** (`types/index.ts`) — `ProjectsDB` type; currently unused in pages (data is hardcoded inline).

## Styling conventions

The project mixes **Tailwind v4** with **inline `style` props** and **CSS custom properties**.

- All design tokens live in `:root` inside `app/globals.css`: colors (`--accent: #2fccaa`), backgrounds, borders, radii, font families
- Reusable UI patterns are defined as **`@utility` blocks** in `globals.css` (Tailwind v4 syntax), not `@layer components`: `btn-primary`, `btn-outline`, `chip`, `chip-tech`, `chip-med`, `chip-neutral`, `section-label`, `surface`, `bg-grid`, animation utilities
- Apply these as plain class names: `className="btn-primary"`, `className="chip chip-tech"`
- Fonts: `var(--font-display)` → DM Serif Display (headings/logo), `var(--font-body)` → DM Sans (body)
- Dark theme only; base background `#05090f`, accent teal `#2fccaa`

## Key constraints

- `next.config.ts` is a minimal stub — avoid adding redirects or rewrites without checking `vercel.json` too
- The project has both `pnpm-lock.yaml` and `package-lock.json` — use `pnpm` as the package manager
