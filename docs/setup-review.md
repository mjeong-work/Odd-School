# React + Vite Deployment Review

## Configuration Check
- `vite.config.ts` sets `base` to `/Odd-School_v1/` and outputs to the `docs` directory without clearing existing GitHub Pages assets.
- `package.json` scripts cover local dev (`npm run dev`), production builds (`npm run build`), and preview hosting.
- `HashRouter` from the vendored `react-router-dom` stub wraps the app in `src/main.tsx` so URLs stay compatible with GitHub Pages.
- `docs/.nojekyll` is present to prevent GitHub Pages from ignoring asset folders that start with underscores.

## Build Verification
- `npm run build` completes successfully and writes production assets to `docs/`.

## Observations & Risks
- The custom vendored `react-router-dom` implementation only provides `HashRouter`; adding nested routes, navigation helpers, or data APIs will require either expanding this stub or installing the official package.
- The preview script (`npm run preview`) passes `--outDir docs`, which is not required by `vite preview` and can be removed once verified.
- Running `npm outdated` fails in restricted environments due to registry access rules; dependency checks might need to run in GitHub Actions or another network that can reach the npm registry.
- With `emptyOutDir: false`, legacy files under `docs/` will persist across builds. Before shipping new UI pages, confirm there are no stale assets that could conflict with routing or filenames.

## Readiness
The current setup builds cleanly and aligns with GitHub Pages requirements. Addressing the noted risks before integrating the Figma-driven routes will help keep the preview stable.
