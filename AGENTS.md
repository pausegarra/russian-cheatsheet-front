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
- Mantine v7/v8 (forced dark mode via `forceColorScheme="dark"`)
- react-router-dom v7 (flat `<Route>` arrays, no data routers)
- Keycloak auth (`keycloak-js`) — hardcoded realm at `auth.pausegarra.com`
- `@betino/fetch` for HTTP — base URL from `VITE_API_URL` env var
- PostCSS with `postcss-preset-mantine` + `postcss-simple-vars`

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

Module order in `App.tsx`: common → alphabet → vocabulary → auth.

Shared root services (`fetchService`, `notificationsService`) live in `src/modules/common/root.ts`. Other modules import from there and from `auth/root.ts`.

## Env Vars

- `.env` — local dev (gitignored), points to `http://localhost:8080`
- `.env.cloud` — committed, points to `https://russian-cheatsheet.pausegarra.com`
- CI swaps `.env.cloud` → `.env` before build (`mv .env.cloud .env`)

Vite exposes only `VITE_*` vars to client code.

## TypeScript Config

Project references: `tsconfig.app.json` (src) + `tsconfig.node.json` (vite config). Strict mode on, `noUnusedLocals` and `noUnusedParameters` enabled. `no-explicit-any` lint rule is OFF.

## Deploy Flow

Tag push (`*.*.*`) triggers GitHub Actions: build → Docker image → Helm deploy to K3s. Version lives in `package.json` and is tagged via `make tag`. Nginx serves the SPA with `try_files $uri /index.html` for client-side routing.
