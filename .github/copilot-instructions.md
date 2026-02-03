# GitHub Copilot instructions for this repo

## Quick project summary
- Small React + Vite template project located under `vite-project/`.
- Entrypoint: `vite-project/index.html` → `vite-project/src/main.jsx` → `vite-project/src/pages/Home.jsx`.
- Uses React 19 (JSX) and Vite for dev server + build.
- No tests or CI configuration detected in the repository.

## Developer workflows (commands)
- Start dev server with HMR: `npm run dev` (run from `vite-project/` or root if you prefer).
- Build for production: `npm run build` (outputs `dist/`).
- Preview built site locally: `npm run preview`.
- Lint JS/JSX files: `npm run lint` (uses `vite-project/eslint.config.js`).

## Important files & patterns
- `vite-project/src/pages/Home.jsx` — main page component (layout + content).
- `vite-project/src/main.jsx` — React bootstrap (uses `StrictMode` and `createRoot`).
- `vite-project/index.html` — Vite HTML entry with `<div id="root">` and module script.
- `vite-project/eslint.config.js` — project's ESLint configuration (important rules, e.g. custom `no-unused-vars` pattern).
- Assets are small/static and live under `vite-project/src/assets` and the repo root serves `/vite.svg`.

## Project-specific conventions (what to follow)
- Files are plain JavaScript with JSX; use `.jsx` for components (e.g. `Home.jsx`).
- Code follows ESLint `@eslint/js` + `react-hooks` + `react-refresh` plugin rules. Run `npm run lint` before creating PRs.
- Keep changes scoped to `vite-project/` unless adding repo-level metadata (e.g., `.github/` files).

## How to make safe changes (actionable guidance for an agent)
- When introducing a new component:
  - Create `vite-project/src/components/<Name>.jsx` and import it in `pages/Home.jsx` (or `main.jsx` for route-level changes).
  - Use functional components and React hooks consistently with existing code (example: `useState` in `pages/Home.jsx`).
  - Add styling in `vite-project/src/pages/*/*.css` or `vite-project/src/components/*.css` (one CSS file per component/page) and import it in the component.
- Run `npm run dev` and confirm HMR updates when saving files.
- Run `npm run lint` and fix any lint errors prior to proposing changes.

## Gaps and notes for maintainers (what agent should call out)
- No test runner found — mention this in PRs if you add tests and include instructions.
- No CI or contribution guidelines detected — flag for maintainers if a change affects release/build processes.
- Repository default branch: `main`.

## PR / commit guidance for agents
- Keep PRs focused and small (single feature or fix).
- Include screenshot or short recording when UI changes are visual.
- Add short reproduction steps in PR description (how to run dev server and where to look).

---
If any of this is unclear or you'd like extra detail (e.g., add a sample component PR, tests, or CI config), tell me which area to expand and I will iterate. — GitHub Copilot (Raptor mini)