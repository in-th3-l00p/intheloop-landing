# CLAUDE.md

Guidance for any agent (or human) working on the **intheloop** studio website.
Read this first — it captures the things that are *not* obvious from the code alone.

---

## What this is

The **intheloop** studio website — a faithful Next.js (App Router) implementation of the
Claude Design project *Intheloop branding project*. Aesthetic: graphite-and-ivory, quiet,
old-money serif meets monospaced marginalia. Tagline: *Software at the edge of research and craft.*

- **Location:** `/Users/intheloop/Desktop/intheloop-landing/`
- **Live:** https://intheloop.space (Vercel, auto-deploys on push to `main`)
- **Repo:** `in-th3-l00p/intheloop-landing` on GitHub
- **Stack:** Next.js 15 (App Router, React 19, TypeScript), statically prerendered. Keystatic
  git-based CMS. No runtime UI framework — styling is inline React styles + a small `globals.css`.

> Keep Next.js on a non-vulnerable release. Vercel **blocks deploys** on flagged Next.js
> versions (it once rejected 15.3.1). If a deploy fails for that reason, `npm install next@15`
> and redeploy.

---

## Pages

All under `app/`. Routes:

| Route                | File                              | In CMS? | Contents |
|----------------------|-----------------------------------|---------|----------|
| `/`                  | `app/page.tsx`                     | ✅ home + settings + projects | Hero (parallax `/uploads/hero.png` + blackletter "il" watermark), About, Publishings/Brand portal cards, galaxy statement band (`/uploads/galaxy.png`), sliced visual-log grid, contact |
| `/publishings`       | `app/publishings/page.tsx`        | ✅ projects + caseStudies + articles collections | Selected-work index with **in-page tabs** (Projects / Case Studies / Articles). Tabs are an island (`components/PortfolioTabs.tsx`); active tab is mirrored to the URL hash (`/publishings#articles`). All three panels are server-rendered into the DOM (crawlable); the island only toggles visibility. Each tab renders a quiet `EmptyState` (in-file) when its collection has no entries; the placeholder tile/grid markup is kept in-file for when real content is added. **Route was `/portfolio`; renamed to `/publishings`.** |
| `/case-study/[slug]` | `app/case-study/[slug]/page.tsx`  | ✅ caseStudies collection | Per-study write-up + outcome stats. `generateStaticParams` over the collection; "Next" card cycles to the next study by `number`. |
| `/articles/[slug]`   | `app/articles/[slug]/page.tsx`    | ✅ articles collection | Per-article page. Body is a **typed block array** (paragraph / heading / quote / code) rendered by the local `Block` component — no markdown renderer/dependency. Paragraphs & quotes honour the `*asterisk*` lilac accent. |
| `/brand`             | `app/brand/page.tsx`              | ❌ static | Brand book: logo, type, colour, voice, motifs + downloadable marks |
| `/logo`              | `app/logo/page.tsx`              | ❌ static | Six logo studies + primary lockup |

`/brand` and `/logo` are **brand reference and intentionally live in code** — not in the CMS.

The hero **scroll indicator was removed** by request — do not reintroduce it.

**Site title / wordmark:** both the browser/SEO title and the visible top-bar wordmark are `✧ intheloop ✧`. The title template (`app/layout.tsx`) is `"%s · ✧ intheloop ✧"`; the home page sets `title: { absolute: "✧ intheloop ✧" }`; the wordmark lives in `components/TopBar.tsx`.

**Punctuation:** the visible copy intentionally avoids em-dashes (`—`). Use the studio separators `·` / `/`, or restructure with commas/colons. Don't reintroduce `—`.

---

## Design language

**Palette** — *Graphite & Amethyst*. A cool graphite/steel **foundation** with a
refined jewel **amethyst accent**. The structure (grounds, surfaces, body greys,
slate, dot-grid, watermark) stays near-monochrome and cool; only the *accent tier*
is purple — that keeps it grown-up, not the candy-lilac that read childish before.

| Token        | Hex       | Use |
|--------------|-----------|-----|
| Graphite/ground | `#0c0e10` | page background, theme color |
| Panel/surface   | `#15181b` | cards, tiles |
| Slate           | `#3f4a52` | structural deep, dot-grid, watermark (stays cool) |
| Amethyst        | `#9a78cf` | rules, marks, mono accents (the purple accent) |
| Soft Amethyst   | `#b79ae6` | italic highlight (the accent color) |
| Cool Ivory/type | `#e6e6e2` | primary text |

> Purple lives **only on the accent tier** (marks + highlight). The body greys
> (`#97a0a7`, `#79838b`, `#b4b9bf`), surfaces, dot-grid and the big "il" watermark
> stay cool steel — don't tint those purple, or the page slides back to "purple
> everywhere". The accent amethyst is a richer, slightly bluer jewel tone than the
> old pastel lilac (`#c4a9e0`), which is what read childish. **Photos stay cool:**
> the galaxy band is desaturated and the visual-log plates are archival silver that
> bloom to colour on hover.

**Fonts** (via `next/font/google`, wired as CSS variables in `app/layout.tsx`, stacks in
`components/tokens.ts`):

- **Cormorant Garamond** — display serif (`SERIF`, `--font-cormorant`)
- **JetBrains Mono** — labels + body marginalia (`MONO`, `--font-jetbrains`)
- **UnifrakturCook** — blackletter accents/watermarks (`BLACKLETTER`, `--font-unifraktur`)

**Styling convention:** inline `style={{…}}` objects on elements (no Tailwind/CSS-in-JS lib).
`app/globals.css` holds only hover states and keyframes (e.g. `floaty`, reveal transitions).
Match this style when adding UI — do not introduce a CSS framework.

---

## Shared components (`components/`)

- `Frame.tsx` — page chrome: graphite ground, ambient dot-grid, fixed corner crosshairs,
  scroll-progress bar, mounts `ScrollEffects`. Wrap every page in `<Frame>`.
- `TopBar.tsx` — seal wordmark + optional breadcrumb trail (`crumbs={[{label, href?}]}`).
- `ScrollEffects.tsx` — `"use client"`. Drives `[data-reveal]` (staggered reveal),
  `[data-progress]` (progress bar), `[data-parallax]` (parallax). Add these attributes to opt in.
- `VisualLog.tsx` — `"use client"`. Slices one image across an 8-cell grid with cover-fit offsets
  (fallback dims 1774×887).
- `tokens.ts` — the three font-family stacks (`SERIF`, `MONO`, `BLACKLETTER`).

---

## Content / CMS (Keystatic)

Content is YAML in `content/`, read at **build time** via `lib/reader.ts`
(`createReader(process.cwd(), keystaticConfig)`), so the site stays statically prerendered.

- **Admin UI:** `/keystatic`
- **Model** (`keystatic.config.tsx`):
  - `content/settings.yaml` — singleton: studio name, tagline, SEO description, contact, location, footer, copyright year
  - `content/home.yaml` — singleton: hero, about, meta, statement band, contact heading
  - `content/projects/*.yaml` — collection, one file per work tile (`slugField: title`, `format: yaml`). Optional `summary` + `href` (if `href` set, the tile links there).
  - `content/case-studies/*.yaml` — collection, one file per case study (`slugField: title`). Full write-up (overview, challenge, approach steps, stats…) plus `number` + `kind` for the index tile. **Was a singleton (`content/case-study.yaml`); converted to a collection.**
  - `content/articles/*.yaml` — collection, one file per article (`slugField: title`). `number`, `kind`, `date`, `readingTime`, `summary`, and `body` (the typed block array described above).
- **Accent convention:** in heading/statement fields, wrap words in `*asterisks*` to render them
  in the lilac italic accent. `lib/accent.tsx` does this: `accent(text)` splits on `/(\*[^*]+\*)/g`
  and renders `*word*` as `<em>` in `#c4a9e0`; `lines(text)` turns `\n` into `<br/>`.
  Use `accent()`/`lines()` when surfacing CMS text — never dangerouslySetInnerHTML.
- **Editing locally:** `npm run dev` → `/keystatic` → edit → writes to `content/` files → commit + push.

### ⚠️ CRITICAL: storage-mode gate

`keystatic.config.tsx` chooses GitHub vs local storage. It **must gate on the public slug**:

```ts
const storage = process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
  ? ({ kind: "github", repo: { owner: "in-th3-l00p", name: "intheloop-landing" } } as const)
  : ({ kind: "local" } as const);
```

**Why `NEXT_PUBLIC_…` and not a server-only secret:** the config is shared by the admin UI
(client bundle) and the API route (server). Both must resolve to the **same** storage kind.
A server-only var is `undefined` in the browser, so the client falls back to local mode and
calls `/api/keystatic/tree` — which the GitHub-mode server doesn't serve → 404 loop →
**"stuck loading" spinner** (`Unexpected token 'N', "Not Found" is not valid JSON`).
The public slug is inlined into the client bundle, so client + server agree. This was a real
bug; do not "simplify" it back to a server-only var.

When the slug is unset (no GitHub App env), storage falls back to local mode so builds stay
green even without the secrets. Production with the env vars set = live in-browser editing that
commits to the repo → Vercel redeploys.

### Keystatic env vars (4)

Stored in **Vercel** project env + a **git-ignored `.env`** locally. Never commit them.

- `KEYSTATIC_GITHUB_CLIENT_ID` (server) — GitHub App client id `Iv23lipwXKgsIpx4WLJF`
- `KEYSTATIC_GITHUB_CLIENT_SECRET` (server)
- `KEYSTATIC_SECRET` (server)
- `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` (public) — slug `in-th3-l00p-keystatic`

---

## SEO / metadata / icons

- `SITE_URL = "https://intheloop.space"` — used in `app/layout.tsx`, `robots.ts`, `sitemap.ts`, `manifest.ts`.
- `app/layout.tsx` — full `metadata` export (metadataBase, title template, description, openGraph,
  twitter `summary_large_image`, robots, keywords) + `viewport` export (themeColor `#0e0a14`, dark).
- Per-page `metadata` with `alternates.canonical` (see `app/publishings/page.tsx`).
- `app/robots.ts`, `app/sitemap.ts` (async; static routes + every case study & article slug from the reader, `LAST_MODIFIED`), `app/manifest.ts`.
- `app/not-found.tsx` — branded 404, robots `noindex`.
- Icons/OG: `app/icon.svg`, `app/apple-icon.png`, `app/opengraph-image.png` (1200×630),
  `app/twitter-image.png`, `public/icon-192.png`, `public/icon-512.png`.

---

## Assets

- `public/assets/` — brand marks (SVG + PNG): `il-seal`, `il-seal-dark`, `il-monogram`,
  `il-monogram-dark`, plus `visual-log.png`.
- `public/uploads/hero.png`, `public/uploads/galaxy.png`, `public/assets/visual-log.png` are the
  **real photographic uploads** from the design project (hero film-still, galaxy band, sliced field).

> The Claude Design API has a **256 KiB per-file fetch cap** — the original photos came back
> truncated over the wire. They were imported from a local zip instead. If you need original
> design assets again and they exceed 256 KiB, expect truncation; get them another way.

---

## Deployment (Vercel)

- Team: **inth3loop** (Pro), `team_WIIIUTsMt9gWCe4cDieoUJjr`
- Project: **intheloop-landing**, `prj_t1ySkAnA9dV3JbESXgWa8OB2rjcX`
- Domain: **intheloop.space** (purchased + DNS managed by Vercel; apex + `www` 308→apex)
- GitHub integration auto-deploys on push to `main`.

---

## Git rules (STANDING — follow on every commit)

- **GitHub account:** push as **`in-th3-l00p`**. If the active `gh` account is the Fortech one
  (`catalin-george-tisca-fortech`), switch to `in-th3-l00p` temporarily for the push, then
  **restore** the active account back to `catalin-george-tisca-fortech` afterward.
- **Commit identity:** `in-th3-l00p` / `admin@tiscacatalin.com`.
- **NO co-author trailer.** Do not add `Co-Authored-By:` to any commit.
- **Keep a clean git tree** — no stray/uncommitted junk; commit logically.
- **Never commit `.env`** (or any secret). `.gitignore` covers `node_modules`, `.next`, `.env*`,
  `.vercel`, `.DS_Store`. Secrets live only in Vercel's encrypted env store + local git-ignored `.env`.

---

## Develop

```bash
npm install
npm run dev      # http://localhost:3000  (+ /keystatic for the CMS)
npm run build    # production build (also what Vercel runs)
```
