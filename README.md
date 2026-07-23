# SensCore — Next.js Redesign

A full rebuild of senscoretech.com as a dark, futuristic, motion-driven
Next.js 14 site (App Router + TypeScript + Tailwind + Framer Motion).

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires internet access on first run so
`next/font` can fetch Chakra Petch, Inter, and JetBrains Mono from Google
Fonts (they're then self-hosted/cached by Next — no runtime dependency on
Google after build).

```bash
npm run build && npm run start   # production build
```

## Design system

- **Palette** — `#05070A` void background, `#00E5C7` teal (signal/telemetry
  accent), `#3D5AFE` indigo (secondary depth), `#FF7A45` amber (reserved,
  used sparingly), `#E8EDF2` ink text, `#8B98A8` muted text.
- **Type** — Chakra Petch (display/HUD headlines), Inter (body), JetBrains
  Mono (eyebrows, labels, data readouts).
- **Signature element** — `HUDBackground` (`src/components/HUDBackground.tsx`):
  a canvas that procedurally draws orthogonal "pipeline schematic" routes
  with particles flowing along them, echoing SensCore's actual product line
  (flow/process instrumentation) instead of generic decorative particles.
  Respects `prefers-reduced-motion`.

## Structure

```
src/
  app/
    layout.tsx            Root layout, fonts, Navbar/Footer
    page.tsx               Home (hero, about teaser, products, industries,
                            partner marquee, clients, CTA)
    about/page.tsx
    products/page.tsx
    industries/page.tsx
    contact/page.tsx        Working form -> /api/contact (stub)
    api/contact/route.ts     Wire this up to Resend/SendGrid/CRM
  components/               Navbar, Footer, HUDBackground, Reveal,
                             StatReadout, GlowButton, ContactForm, etc.
  lib/data.ts                All copy/content lives here — edit this file
                             to update products, industries, partners,
                             clients, and contact info in one place.
```

## What still needs real content

- Replace placeholder client/partner/brand lists in `src/lib/data.ts` with
  the verified current list.
- Wire `/api/contact` to an actual email/CRM service.
- Swap the generic Google Maps embed in `contact/page.tsx` for the exact
  pinned office location.
- Add real OG/social image + favicon in `src/app/` (currently using Next
  defaults).

## Notes on the "first autonomous AI platform in UAE" claim

The homepage hero states this as a positioning claim. Verify it's accurate
and defensible before shipping — competitors or regulators may challenge
unverified superlatives.
