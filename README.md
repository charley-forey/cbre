# CBRE interview landing page

A minimal Next.js page for the Head of AI Products conversation: links to live demos ([chat.creai.solutions](https://chat.creai.solutions), [flows.creai.solutions](https://flows.creai.solutions)), an About section, and a downloadable resume.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), **Add New Project** and import the repo.
3. Framework preset: **Next.js**. Root directory: `.` (repository root).
4. Optional: set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://your-domain.vercel.app`) so Open Graph preview URLs are correct if you are not using Vercel’s default `VERCEL_URL`.

Production build locally:

```bash
npm run build
npm start
```

## Public assets

| File | Purpose |
|------|---------|
| `public/cbre-logo.png` | CBRE wordmark—edge-trimmed to hug the letters (no excess canvas). Re-run `node scripts/trim-cbre-logo.mjs` after replacing the source asset (writes backup `cbre-logo-original.png` once; backup is gitignored). |
| `public/charley-forey-resume-2026.pdf` | Resume download |
| `public/charley.png` | Profile photo (from `profile_photo.png` or equivalent). If missing, an initials fallback is shown. |

## Favicon & tab title

- Browser tab title is set in `app/layout.tsx` (`metadata.title`).
- Favicon / app icons: [`app/icon.png`](app/icon.png) and [`app/apple-icon.png`](app/apple-icon.png) are derived from the profile photo; update `public/charley.png` and recopy if you change your headshot.

## Repository notes

Confidential role specification and duplicate resume copies in the project root are listed in `.gitignore` so they are not committed by mistake. The resume served on the site is the copy under `public/`.
