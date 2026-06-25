# intheloop

The **intheloop** studio website — a faithful Next.js (App Router) implementation of
the Claude Design project *Intheloop branding project*. Aubergine-and-ivory, quiet,
old-money serif meets monospaced marginalia.

> Software at the edge of *research* and *craft*.

**Live:** [intheloop.space](https://intheloop.space) · deployed on Vercel (auto-deploys on push to `main`).

## Pages

| Route          | Source design                       | Contents |
|----------------|-------------------------------------|----------|
| `/`            | intheloop Landing.dc.html           | Hero (parallax film field + blackletter watermark), About, Portfolio/Brand portals, galaxy statement band, sliced visual-log grid, contact |
| `/portfolio`   | intheloop Portfolio.dc.html         | Selected-work index (6 tiles) |
| `/case-study`  | intheloop Case Study.dc.html        | Case Study № 001 — full write-up, outcome stats |
| `/brand`       | intheloop Brand Book.dc.html        | Logo, type, colour, voice, motifs + downloadable marks |
| `/logo`        | intheloop Logo.dc.html              | Six logo studies + primary lockup |

## Content (CMS)

The editable content is managed with **[Keystatic](https://keystatic.com)** — a git-based
CMS built into this app. Content lives as YAML files in `content/`, and the pages read it at
build time, so the site stays statically prerendered.

- **Admin UI:** `/keystatic` — edit Site settings, the Home page, Projects, and the Case study.
- **Content model** (`keystatic.config.tsx`):
  - `content/settings.yaml` — studio name, tagline, SEO description, contact email, location, footer
  - `content/home.yaml` — hero, about, meta, statement band, contact heading
  - `content/case-study.yaml` — full case-study write-up (overview, challenge, approach, stats…)
  - `content/projects/*.yaml` — the portfolio work tiles (one file per project)
- **Accent convention:** in any heading/statement field, wrap words in `*asterisks*` to render
  them in the lilac italic accent (e.g. `Software at the edge of *research* and *craft*.`).
- **Editing locally:** run `npm run dev`, open `/keystatic`, edit, save → writes to the
  `content/` files. Commit and push to deploy.
- **Editing live (in the browser):** set the GitHub-App env vars (see *Live editing* below) so the
  deployed `/keystatic` commits straight to the repo → Vercel redeploys. Until then, production
  uses local mode (read-only on Vercel).
- The Brand Book and Logo pages are brand reference and remain in code.

### Live editing (one-time GitHub connection)

`keystatic.config.tsx` switches to GitHub storage when `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`
is set. (It must be the `NEXT_PUBLIC_` var — the config is shared by the admin UI and the API
route, and both have to resolve to the same storage kind; a server-only var would leave the
client in local mode and the editor stuck loading.)
To enable in-browser editing on the live site, run the Keystatic GitHub-App setup (it creates the
app and gives you four env vars: `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`,
`KEYSTATIC_SECRET`, `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`), then add them in the Vercel project.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript), statically prerendered.
- **Keystatic** — git-based CMS; content as YAML in `content/`, read via `lib/reader.ts`.
- **next/font/google** — Cormorant Garamond (display serif), JetBrains Mono (labels/body),
  UnifrakturCook (blackletter accents).
- No runtime UI dependencies — styling is inline + a small `globals.css` for hover states
  and keyframes.

## Shared components

- `components/Frame.tsx` — page chrome: aubergine ground, ambient dot-grid, fixed corner
  crosshairs, scroll-progress bar, and the scroll-effects runtime.
- `components/TopBar.tsx` — seal wordmark + optional breadcrumb trail.
- `components/ScrollEffects.tsx` — staggered reveal (`[data-reveal]`), progress bar
  (`[data-progress]`) and parallax (`[data-parallax]`), ported from the design's script.
- `components/VisualLog.tsx` — slices one image across an 8-cell grid (cover-fit offsets).
- `components/tokens.ts` — the three font-family stacks.

## Assets

- `public/assets/` — brand marks (SVG + PNG), the originals from the design project.
- `public/uploads/hero.png`, `public/uploads/galaxy.png` and `public/assets/visual-log.png`
  are the original photographic uploads from the design project: the hero film-still, the
  galaxy statement-band field, and the wide field sliced across the visual-log grid.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
