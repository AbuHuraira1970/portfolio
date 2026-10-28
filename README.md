# Abu Huraira Nadeem — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production check: `npm run build` then `npm start`.

## Edit content

All text lives in **`data/projects.ts`**: hero, about, receipt, habits, skills, experience, review, contact and the six case studies.
Inside any string, `**bold**` makes bold text and `[label](https://…)` makes a link.

Images are in `public/img/` and are imported at the top of `data/projects.ts`. To swap one, replace the file (same name) or change the import.
The CV download is `public/Abu_Huraira_Nadeem_CV.pdf`.

## Where things are

| Path | What |
| --- | --- |
| `app/page.tsx` | Home page section order |
| `app/work/[slug]/page.tsx` | Case study template (one static page per project) |
| `app/globals.css` | Colour tokens (light + dark), hero load sequence, receipt, marquee, reveal system |
| `components/home/*` | Home sections; `stack.tsx` is the sticky stacked project cards |
| `components/transition-link.tsx` | Page transitions (View Transitions API, falls back to a normal navigation) |
| `components/cursor.tsx` | Figma-style cursor (desktop mouse only) |
| `components/reveal.tsx` | Scroll reveals for anything with `data-reveal` |
| `app/opengraph-image.tsx`, `lib/og.tsx` | Generated social share images |

## Motion rules

- Content is only hidden for an entrance animation when JavaScript ran **and** the visitor allows motion.
  If the app fails to hydrate, everything is revealed after 2.5s. With JS off, nothing is hidden.
- `prefers-reduced-motion: reduce` turns off the hero sequence, reveals, stacking, marquee, magnetic buttons, cursor and page transitions.
- Only `transform` and `opacity` are animated.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com: **Add New → Project**, import the repo, keep the defaults (Framework: Next.js), **Deploy**.

Or with the CLI: `npx vercel` (preview) and `npx vercel --prod`.

Open Graph URLs use Vercel's production domain automatically. If you add a custom domain, set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` in the Vercel project's environment variables.
