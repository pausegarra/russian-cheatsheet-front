# Russian Cheatsheet

A dark, minimal Russian language reference built with React 19, TypeScript, Vite and Tailwind CSS v4. Manrope is served locally, including Cyrillic glyphs. No UI component framework or color scheme provider is required.

## Development

Install dependencies with `pnpm install --frozen-lockfile` using the committed pnpm lockfile, or `yarn` when following the existing Yarn workflow.

```sh
yarn dev
yarn lint
yarn build
yarn preview
```

Configure the API base URL in a local, gitignored `.env`:

```dotenv
VITE_API_URL=http://localhost:8080
```

The API must allow the development origin through CORS. Production builds use `.env.cloud` through the existing CI workflow. No backend or deployment changes are required for the redesign.

## Pages and search

- `/`: primary Russian/English dictionary search and linked alphabet/grammar references.
- `/vocabulary/:id`: word translations, related words, forms, pronunciation when provided, and paginated examples. The same dictionary search allows switching words.
- `/vocabulary`: legacy redirect to home; preserves search and pagination parameters.
- `/alphabet`: all 33 Cyrillic letters with Latin transliteration and IPA.
- `/grammar`: guide index, cases, declensions, pronouns, numbers, verbs and motion verbs.

Search debounces requests by 300 ms, preserves `search` and one-based `page` in the URL, and ignores superseded responses. Use Arrow Up/Down and Enter to open a result; Escape clears the search. Empty, loading and retry states remain local to the relevant component. The detail search expands on focus so the current word remains prominent.

Word pronunciation uses optional `russianAccented` exactly as supplied by the API, including OpenRussian's apostrophe stress markers. The detail page builds `https://api.openrussian.org/read/ru/{encodeURIComponent(russianAccented)}` and lets OpenRussian redirect to its selected audio file. It never infers or removes stress. If accented text is unavailable, the player uses `audioUrl`; if resolver playback fails, a distinct stored `audioUrl` is tried once. When no source works, the page shows `Audio unavailable`. Playback starts only on click and stops when the word changes or the page closes. Existing API responses without `russianAccented` remain supported.

## Styling and assets

Tailwind is integrated through `@tailwindcss/vite`. Theme tokens and shared utilities live in `src/app.css`; grammar CSS modules use `@reference` and `@apply`. The interface always uses a dark color scheme and respects reduced motion preferences. Feature modules retain existing services, entities and educational data.

The generated book/Cyrillic mark and favicon live in `public/brand/`. Dictionary data and examples are credited to [OpenRussian](https://en.openrussian.org/).
