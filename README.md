# intheloop — Case Study № 001

A faithful Next.js (App Router) implementation of the **intheloop Case Study** design,
imported from the Claude Design project *Intheloop branding project*.

> "A coordination layer at planet scale" — rebuilding the consensus and scheduling core
> beneath a globally distributed product, without a moment of downtime.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **next/font/google** — Cormorant Garamond (display serif), JetBrains Mono (labels),
  UnifrakturCook (blackletter accents)
- No runtime UI dependencies — styling is inline + a small `globals.css` for hover states.

## What's implemented

- `/` — the full case study page: top bar, project header with floating blackletter
  watermark, meta grid, 16:9 case-film placeholder, Overview / Challenge / Approach /
  Outcome sections, pull quote, image placeholders, outcome stats, and the next/footer cards.
- Scroll interactions ported from the original design (`components/ScrollEffects.tsx`):
  - staggered blur/translate **reveal** of `[data-reveal]` blocks via `IntersectionObserver`
  - a top **scroll-progress** bar.
- `/portfolio` — a minimal styled stub so the in-design nav links resolve (the sibling
  Landing/Portfolio pages were not part of the imported case-study file).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/
  layout.tsx      fonts + metadata
  page.tsx        the case study
  portfolio/      navigation stub
  globals.css     base styles, keyframes, hover states
  icon.svg        favicon (intheloop seal)
components/
  ScrollEffects.tsx   reveal + progress (client)
public/assets/
  il-seal.svg     brand monogram
```
