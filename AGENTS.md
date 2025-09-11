# Repository Guidelines

## Project Structure & Module Organization
- Source in `src/`: UI in `src/components/**` (shared UI in `src/components/ui/*`), utilities in `src/lib/**`, styles in `src/styles/globals.css`.
- Pages Router: `pages/_app.tsx`, `pages/index.tsx` (Next.js 15). Assets in `public/`.
- Slides are modular and lazy‑loaded via `src/components/presentation/SlideManager.tsx` and `src/components/slides/*`.

## Build, Test, and Development Commands
- `npm run dev` — Start local dev server at `http://localhost:3000`.
- `npm run build` — Production build.
- `npm run start:auto` — Start built app on an available port.
- `npm run start:fixed` — Start on `127.0.0.1:60123`.
- `npm run preview` — Build, then start on a free port.
- `npm run lint` — Run ESLint (Next.js + Core Web Vitals).
- `npm run check:ctas` — Validate required CTAs (checks `CALENDLY_URL` in key slides).

## Coding Style & Naming Conventions
- Language: strict TypeScript. Path alias `@/*` → `src/*` (e.g., `import { cn } from '@/lib/utils'`).
- Components: PascalCase files (e.g., `ExecutiveSummary.tsx`). Utilities: camelCase (e.g., `utils.ts`).
- Indentation: 2 spaces; concise, typed props; use `React.FC` as used in the codebase.
- Styling: Tailwind CSS; keep class names focused and composable.

## Testing Guidelines
- No formal test runner yet. Before PRs: run `npm run lint`, `npm run check:ctas`, and validate both `npm run dev` and `npm run preview`.
- If adding tests, co‑locate as `*.test.ts(x)` using React Testing Library with Vitest or Jest.

## Commit & Pull Request Guidelines
- Commits: short, imperative summaries (e.g., "Fix mobile nav focus trap"). Group related changes.
- PRs: include purpose, key changes, screenshots of affected slides, repro/validation steps, and linked issues.
- Ensure ESLint passes and CTAs check succeeds; note any performance impact.

## Security & Configuration Tips
- CTAs/contacts live in `src/lib/contact.ts` (e.g., `CALENDLY_URL`). Update thoughtfully; do not commit secrets.
- `next.config.js` sets `outputFileTracingRoot` for predictable deployments—avoid changing unless necessary.

## Architecture Overview
- Next.js Pages Router app. Slides are code‑split and lazy‑loaded via `SlideManager` with fallbacks.
- Charts: Recharts. SEO: `next-seo`. Styling: Tailwind with small composable UI primitives.

## Agent‑Specific Instructions
- Follow the structure and naming above; keep changes minimal and focused.
- Prefer `@/*` imports; avoid broad refactors in drive‑by changes.
- Run `npm run lint` and `npm run check:ctas` before proposing PRs.

