# Repository Guidelines

## Project Structure & Module Organization
- Source: `src/` (UI in `src/components/**`, utilities in `src/lib/**`, styles in `src/styles/globals.css`).
- Pages Router: `pages/_app.tsx`, `pages/index.tsx` (Next.js 15).
- Assets: `public/` for static files.
- Slides are modular and lazy-loaded via `src/components/presentation/SlideManager.tsx` and `src/components/slides/*`.

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server on port 3000.
- `npm run build`: Production build.
- `npm run start:auto`: Start production server on an available port.
- `npm run start:fixed`: Start on `127.0.0.1:60123`.
- `npm run preview`: Build then start on a free port.
- `npm run lint`: Run ESLint across the project.
- `npm run check:ctas`: Validate required CTAs (checks for `CALENDLY_URL` in key slides).

## Coding Style & Naming Conventions
- Language: TypeScript (strict). Path alias `@/*` → `src/*`.
- Components: PascalCase files (e.g., `ExecutiveSummary.tsx`). Utilities: camelCase (e.g., `utils.ts`).
- Indentation: 2 spaces; prefer concise, typed props and `React.FC` as used.
- Styling: Tailwind CSS; keep class names focused and composable. Shared UI in `src/components/ui/*`.
- Linting: ESLint (Next.js recommended + Core Web Vitals). Run `npm run lint` before commits.

## Testing Guidelines
- No formal test runner is configured yet. Before sending a PR:
  - Run `npm run lint`, verify `npm run check:ctas` passes.
  - Test both `npm run dev` and a production build (`npm run preview`).
- If adding tests, place them alongside modules as `*.test.ts(x)` and use React Testing Library + Vitest or Jest.

## Commit & Pull Request Guidelines
- Commits: short, imperative summaries (e.g., "Fix mobile nav focus trap"). Group related changes.
- PRs: include purpose, key changes, screenshots of affected slides, repro/validation steps, and linked issues.
- Ensure no ESLint errors and CTAs check passes. Note any performance impact.

## Security & Configuration Tips
- CTAs and contacts live in `src/lib/contact.ts` (e.g., `CALENDLY_URL`). Update thoughtfully and keep sensitive details out of VCS.
- `next.config.js` sets `outputFileTracingRoot` for predictable deployments; avoid changing unless needed.

## Architecture Overview
- Next.js Pages Router app. Slides are code-split and lazy-loaded via `SlideManager` with fallbacks.
- Charts use Recharts; SEO via `next-seo`. Tailwind for styling with small composable UI primitives.

