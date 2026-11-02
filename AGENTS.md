# AGENTS.md

## Commands

| Action | Command |
|--------|---------|
| Dev server | `yarn dev` |
| Lint | `yarn lint` |
| Build (includes typecheck) | `yarn build` (`tsc -b && vite build`) |
| Install deps | `yarn` |

No test framework configured. No standalone typecheck script — `tsc -b` runs as part of `build`.

## Tech Stack

- React 19, TypeScript 5.7, Vite 6
- Tailwind CSS v4 through `@tailwindcss/vite`; dark-only theme tokens in `src/app.css`
- react-router-dom v7 (flat `<Route>` arrays, no data routers)
- `@betino/fetch` for HTTP — base URL from `VITE_API_URL` env var
- Native semantic React components, Phosphor icons, locally hosted Manrope including Cyrillic; grammar CSS modules use Tailwind `@reference` and `@apply`

## Module Architecture

Feature-based modules under `src/modules/`. Each module follows this pattern:

```
src/modules/<name>/
  root.ts          — DI container, wires services with dependencies
  *.module.tsx     — exports route array (JSX `<Route>` elements)
  services/        — service classes
  entities/        — domain types/classes
  components/      — UI components
  pages/           — route page components
```

Module order in `App.tsx`: common → grammar → alphabet → vocabulary.

Shared `fetchService` lives in `src/modules/common/root.ts`. The shared dictionary search lives in `src/modules/vocabulary/components/word-search.tsx` and is used by both home and word detail.

## Env Vars

- `.env` — local dev (gitignored), points to `http://localhost:8080`
- `.env.cloud` — committed, points to `https://russiancheatsheet.com`
- CI swaps `.env.cloud` → `.env` before build (`mv .env.cloud .env`)

Vite exposes only `VITE_*` vars to client code.

## TypeScript Config

Project references: `tsconfig.app.json` (src) + `tsconfig.node.json` (vite config). Strict mode on, `noUnusedLocals` and `noUnusedParameters` enabled. `no-explicit-any` lint rule is OFF.

## Deploy Flow

Tag push (`*.*.*`) triggers GitHub Actions: build → Docker image → Helm deploy to K3s. Version lives in `package.json` and is tagged via `make tag`. Nginx serves the SPA with `try_files $uri /index.html` for client-side routing.
