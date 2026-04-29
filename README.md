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
4. Set `NEXT_PUBLIC_SITE_URL` to your canonical production URL (e.g. `https://your-domain.vercel.app`) so Open Graph `metadataBase` and social previews resolve correctly. If unset, the build falls back to `VERCEL_URL` when present, then localhost for local builds.
5. Optional: set `NEXT_PUBLIC_N8N_DEMO_PASSWORD` in Vercel **Environment Variables** so the landing page can show the shared n8n demo password (same value as in your local `.env.local`). Do **not** commit passwords in git; `.env*.local` is gitignored. `NEXT_PUBLIC_*` values are visible in the browser to anyone who loads the site (fine for a shared POC login; rotate if the URL is leaked).

Production build locally:

```bash
npm run build
npm start
```

## Public assets

| File | Purpose |
|------|---------|
| `public/cbre-logo.png` | CBRE wordmark—edge-trimmed to hug the letters (no excess canvas). Re-run `node scripts/trim-cbre-logo.mjs` after replacing the source asset (writes backup `cbre-logo-original.png` once; backup is gitignored). |
| `public/og-cbre-conversation.png` | Open Graph / Twitter preview (1200×630). Regenerate with `npm run generate-og` after editing `scripts/generate-og.mjs`. |
| `public/charley-forey-resume-2026.pdf` | Resume download (keep in sync with your latest PDF; copy into `public/` after export). |
| `public/charley.png` | Profile photo (from `profile_photo.png` or equivalent). If missing, an initials fallback is shown. |

## Selected videos

Embedded YouTube players live in `app/page.tsx` (`YOUTUBE_CLIPS`): video IDs, `start` seconds, and `title` (matches YouTube). Uses `youtube-nocookie.com` embeds with `loading="lazy"` on iframes.

## Favicon & tab title

- Browser tab title is set in `app/layout.tsx` (`metadata.title`).
- Favicon / app icons: [`app/icon.png`](app/icon.png) and [`app/apple-icon.png`](app/apple-icon.png) are derived from the profile photo; update `public/charley.png` and recopy if you change your headshot.

## Repository notes

Confidential role specification and duplicate resume copies in the project root are listed in `.gitignore` so they are not committed by mistake. The resume served on the site is the copy under `public/`.
