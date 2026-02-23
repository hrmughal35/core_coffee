# Core Coffee – Official Website

Modern, mobile-first website for **Core Coffee**, a café in DHA Phase 8 (X), Park View, Lahore.

## Tech Stack

- **Framework:** Next.js 14 (App Router) + React
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel-ready

## Features

- **Home:** Hero with tagline, CTAs (View Menu, Order Now, Get Directions), rating badge (⭐ 4.7), price range, open-hours badge
- **About:** Café story, quality coffee, chill environment, late-night hours
- **Menu:** Hot Coffee, Cold Coffee, Signature Drinks, Snacks & Desserts + Foodpanda CTA
- **Gallery:** Grid + lightbox (placeholder images; replace with your own)
- **Reviews:** Testimonials with star ratings
- **Contact:** Embedded map, address, click-to-call, business hours

Additional: WhatsApp & Call floating buttons, sticky “Open Now” badge, local SEO meta + JSON-LD schema.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) by connecting the repo; no extra config needed.

### Deploy to GitHub Pages

1. In your repo go to **Settings → Pages** (under "Code and automation").
2. Under **Build and deployment**, set **Source** to **"Deploy from a branch"**.
3. Under **Branch**, choose branch **`gh-pages`** and folder **`/ (root)`**. Click **Save**.
4. Push the latest code to `main`. The GitHub Action will build the site and deploy to the `gh-pages` branch.
5. Your site will be live at **`https://hrmughal35.github.io/core_coffee/`** (may take 1–2 minutes after the first push).

If your repo name changes, update `repoName` in `next.config.js`.

## Images (all local — no external URLs)

All images are stored in **`public/images/`** so they work everywhere (no CORS, no broken links):

- `public/images/hero.svg` — Home hero (warm gradient + coffee cup)
- `public/images/about.svg` — About page header
- `public/images/gallery-1.svg` … `gallery-6.svg` — Gallery grid

These are **placeholder SVGs**. To use real photos:

1. Add your files (e.g. `hero.jpg`, `about.jpg`, `gallery-1.jpg` …) into `public/images/`.
2. In the code, change paths: e.g. `/images/hero.svg` → `/images/hero.jpg` (same filename, different extension).

No external image domains are required; everything is served from your own site.

## Hero video (optional)

For a **cinematic hero**, add a high-resolution coffee video:

1. Place **`hero.mp4`** in **`public/videos/`**.
2. The homepage hero will use it as a looping background with a slow zoom effect.
3. If the file is missing or fails to load, the static hero image is shown automatically.

See `public/videos/README.md` for suggested resolution, length, and free stock video sources (Pexels, Coverr, Pixabay).

## Customization

- **Map:** Replace the iframe `src` in `app/contact/page.tsx` with the “Embed” code from your Google Maps listing for exact pin.
- **Foodpanda:** Update the Foodpanda link in the navbar/footer if your restaurant URL changes.
- **Schema:** Update `app/layout.tsx` JSON-LD with your real coordinates and OG image URL when you have a live domain.

## SEO

- Meta title and description set for “Core Coffee – Best Coffee Shop in DHA Phase 8 Lahore”.
- Local business schema (address, hours, phone, rating) in the root layout.
- Per-page titles/descriptions via `app/*/layout.tsx` files.
