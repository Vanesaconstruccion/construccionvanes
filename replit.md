# CONSTRUYE — Empresa de Construcción

Sitio web corporativo de alta gama para una empresa de construcción española, con animación de carga, navegación sticky, portafolio de proyectos, sección "Conócenos", servicios, blog y formulario de contacto.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/construccion-web run dev` — run the website (port 24625)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, framer-motion, wouter, react-hook-form + zod
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/construccion-web/` — frontend SPA (construction company website)
  - `src/pages/Home.tsx` — main page composing all sections
  - `src/components/sections/` — Hero, Projects, About, Services, Blog, Contact
  - `src/components/layout/` — Navbar (sticky, transparent→solid on scroll), Footer
  - `src/components/ui/loading-screen.tsx` — 2.5s construction intro animation
  - `src/assets/` — generated images (hero, 6 project photos, 3 blog photos)
- `vercel.json` — SPA rewrite config for Vercel deployment (framework: vite, outputDirectory: dist/public)
- `lib/api-spec/openapi.yaml` — API contract source of truth
- `lib/db/src/schema/` — Drizzle DB schema

## Architecture decisions

- Presentation-first SPA: no backend needed; all sections are client-side with framer-motion scroll animations.
- vercel.json placed at workspace root with `outputDirectory: "dist/public"` and catch-all rewrite to `/index.html` for SPA routing.
- LinkedIn icon uses lucide-react `Linkedin` (react-icons/si does not export SiLinkedin in this version).
- `window.find` typed as optional to avoid TS error on browsers without the API.

## Product

- Animated loading screen (orange bar + brand reveal, 2.5s)
- Sticky navbar: transparent on hero, solid on scroll, integrated search bar, mobile hamburger
- Hero: full-viewport with generated image, parallax zoom, two CTAs
- Proyectos: 6 interactive project cards with hover reveal
- Conócenos: timeline (2009–2024), values grid, "Trabaja con nosotros" CTA banner
- Servicios: 6 service tiles with hover color inversion
- Blog: 3 article preview cards
- Contacto: validated form (react-hook-form + zod) + direct contact info
- Footer: social links (LinkedIn, Instagram, Pinterest), legal policies, address

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Always run `pnpm --filter @workspace/api-spec run codegen` after OpenAPI spec changes before touching frontend code.
- `react-icons/si` in this project does NOT export `SiLinkedin` — use `lucide-react`'s `Linkedin` instead.
- Vite port 24625 is assigned by the artifact system — don't hardcode a different port.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
