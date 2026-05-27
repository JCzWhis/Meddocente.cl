# verifier-web

Verify web UI changes by taking screenshots of key pages.

## Description

Automated visual verification of ReumaIndex pages using Playwright. Captures screenshots of critical routes to verify design, layout, and content changes.

## Setup

Requires Playwright (should be installed as dev dependency):

```bash
npm install -D @playwright/test
```

## Routes to verify

Primary pages to screenshot:

1. `/` — Homepage (hero, features, ecosystem, CTA)
2. `/recursos` — Resources page (ReumaIndex + CapiChile downloads)
3. `/podcast` — Podcast preview
4. `/capichile` — CapiChile download page
5. `/aviso-legal` — Legal + privacy policy

## Usage

```bash
# Run dev server first
npm run dev

# Then capture screenshots
npx playwright codegen http://localhost:8080
# Or for automated screenshots:
npx playwright test --ui
```

## What to check

- ✅ Branding: "ReumaIndex" appears correctly, not "MedDocente"
- ✅ Typography: Headings, body text, links render correctly
- ✅ Colors: Brand colors match design (cyan #00C2CB, navy #002855)
- ✅ Layout: Grid, flex, responsive breakpoints work
- ✅ Links: All navigation and CTAs are clickable
- ✅ Images: Logos, badges, icons load and display
- ✅ Spacing: Padding, margins, gaps are consistent
- ✅ Mobile: Responsive design works on smaller screens (768px, 375px)

## Typical findings

- Missing or broken image links
- Incorrect font/color values
- Layout shifts on different breakpoints
- Text overflow or truncation
- Unclickable or misaligned buttons
