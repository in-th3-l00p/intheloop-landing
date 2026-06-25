# intheloop

The **intheloop** studio website — a faithful Next.js (App Router) implementation of
the Claude Design project *Intheloop branding project*. Aubergine-and-ivory, quiet,
old-money serif meets monospaced marginalia.

> Software at the edge of *research* and *craft*.

## Pages

| Route          | Source design                       | Contents |
|----------------|-------------------------------------|----------|
| `/`            | intheloop Landing.dc.html           | Hero (parallax film field + blackletter watermark), About, Portfolio/Brand portals, galaxy statement band, sliced visual-log grid, contact |
| `/portfolio`   | intheloop Portfolio.dc.html         | Selected-work index (6 tiles) |
| `/case-study`  | intheloop Case Study.dc.html        | Case Study № 001 — full write-up, outcome stats |
| `/brand`       | intheloop Brand Book.dc.html        | Logo, type, colour, voice, motifs + downloadable marks |
| `/logo`        | intheloop Logo.dc.html              | Six logo studies + primary lockup |

## Stack

- **Next.js 15** (App Router, React 19, TypeScript), statically prerendered.
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

- `public/assets/` — brand marks. SVGs are the originals from the design project; the
  PNG variants (used by the Brand Book download buttons) are rendered from those SVGs.
- `public/uploads/hero.svg`, `galaxy.svg` and `public/assets/visual-log.svg` are
  **procedural** starfield/film-field stand-ins for the design's large binary photo
  uploads. Drop the real images in at the same paths (or `.png`, updating the references)
  to swap them in.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
