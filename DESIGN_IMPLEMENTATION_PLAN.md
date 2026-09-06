# WAMU Web Redesign — Implementation Plan

Source of truth: `/home/jerichokatende/Downloads/wamu.pen` (Pencil design file).
Ground-truth export already generated at:
`/tmp/claude-1000/-home-jerichokatende-Documents-GitHub-WAMU-WEB/b9816dff-0c26-4922-8e11-2a24130cc465/scratchpad/pen-export/homepage.html`
(exact HTML/Tailwind export of all 8 sections — regenerate via Pencil `Export` if this scratchpad path is gone).

Status: **implemented** (2026-09-06). Full rebrand shipped: new palette + Fraunces in `src/index.css` / `index.html`; all 8 sections rebuilt (`Hero`, `Problem`, `HowItWorks`, `Features`, `BuiltForEA`, `Trust`, `CTA`, `Footer`), `Navigation` restyled, `App.tsx` render order updated; `RealityToday` / `WhatChanges` / `WhyDifferent` / `Ecosystem` / `Roadmap` / `Wishlist` deleted; images copied to `public/images/`. `npm run lint` and `npm run build` clean; grep gates in §5 pass. Built by 4 parallel agents + one harsh visual-fidelity critic pass; verified against a rendered copy of the Pencil export.

Known deviations from the 1440px export (all minor, deliberate):
- Whole page ~2% taller than the export's 6930px — fixed-px design translated to responsive flow; desktop layout matches at 1440.
- Hero photo sits in normal flow (below the nav) rather than absolute `top-64` overlapping the nav band.
- `Navigation` is `position: fixed` (export nav is static) — standard for a live site, no visual change at rest.
- Footer "Platform" list keeps "VSLAs"; the export literal "VSAs" is a typo (correct term used everywhere else on the page).
- BuiltForEA card 4 sub-label wraps to 2 lines at the 4-col desktop width instead of the export's `nowrap` overflow.

## 1. What's changing

This is a full rebrand, not a tweak. Old palette (teal/green, Inter-only) is fully replaced.

New design tokens (from Pencil `GetVariables`):

| Token | Value | Use |
|---|---|---|
| `brand-dark` | `#0D2016` | darkest bg / headings |
| `brand-green` | `#1A4029` | dark section bg |
| `brand-mid` | `#2D6A4F` | accents, labels |
| `brand-accent` | `#E8A020` | gold CTA/highlight |
| `brand-accent-light` | `#FFF3D6` | light gold surface |
| `bg-cream` | `#F7F4EE` | light section bg |
| `bg-white` | `#FFFFFF` | cards |
| `text-primary` | `#1A1A1A` | body text on light |
| `text-muted` | `#6B7A6D` | secondary text |
| `text-inverse` | `#F5F2E8` | body text on dark |
| `text-accent` | `#E8A020` | gold text |
| `border-light` | `#E4DED2` | hairlines |
| `font-head` | `Fraunces` | serif display headings |
| `font-body` | `Inter` | body/UI (already loaded) |

## 2. Section → component mapping

| Pencil frame | New/replaces component | Notes |
|---|---|---|
| Nav (in `MJrSc`) | `Navigation.tsx` (rewrite) | Logo "◆ WAMU", links: How It Works / Products / Security / Pricing, gold "Start on WhatsApp" button |
| `MJrSc` Hero C — Restored | `Hero.tsx` (rewrite) | Label "GROUP FINANCE · UGANDA"; H1 "Stop losing track. / Start trusting / your records." (3rd line in `brand-green`); payment chips (MTN MoMo, Airtel Money, WhatsApp native, No app needed); CTA "Message WAMU on WhatsApp →"; photo + "Trusted by VSLAs, SACCOs & Investment Clubs" badge; bottom stat strip (No app / Instant / Live) |
| `b2BoRE` S2 Problem | new `Problem.tsx`, **replaces** `RealityToday.tsx` + `WhatChanges.tsx` | "THE PROBLEM" / "Savings groups run on trust. Not systems." / 3 pain-point cards + dark "4M+" stat card |
| `U6hQlP` S3 How It Works | `HowItWorks.tsx` (rewrite) | "From WhatsApp chat to digital ledger." / 4 numbered steps, one highlighted in `brand-green` |
| `rYbGP` S4 Features | new `Features.tsx`, **replaces** `WhyDifferent.tsx` + `Ecosystem.tsx` | Asymmetric grid: cooperative-ledger copy, dark WhatsApp stats card, phone mockup, contributions-tracking copy, gold "Stop moving cash by hand" mobile-money band |
| `tYpyz` S5 Who We Serve | `BuiltForEA.tsx` (rewrite) | "WAMU savings products built for how your group actually works." / photo + 4 cards: VSLAs, SACCOs, Investment Clubs, Merry-go-round |
| `GeKTl` S6 Trust | new `Trust.tsx` | Dark section, "Your group's money and records, protected properly." + floating verification/security cards |
| `hoiZX` S7 CTA | new `CTA.tsx` | Dark band, "Ready to bring your group online?" + WhatsApp button |
| `y9hRT` S8 Footer | `Footer.tsx` (rewrite) | Dark footer, WAMU mark + tagline, Platform / Company / Get Started columns |
| — | `Roadmap.tsx`, `Wishlist.tsx` | **Delete** — no counterpart in new design |

## 3. Assets

Source images referenced by the design (`images/generated-*.png`, relative to the `.pen` file) live at:
`/home/jerichokatende/Downloads/images/*.png`

Copy the ones actually used (hero photo, "who we serve" group photo, "how it works" photo, phone mockup if not built from Tailwind) into `public/images/` and reference locally — do not hotlink `/home/jerichokatende/Downloads/...`. Check `public/` and `assets/` first for anything already checked in before re-copying.

## 4. Code changes, in order

1. **`src/index.css`** — replace the `@theme` `--color-brand-*` block with the new palette (§1). Add `--font-head: "Fraunces", ...serif` alongside the existing `--font-sans`.
2. **`index.html`** — add Google Fonts `Fraunces` (keep existing Inter link, don't duplicate).
3. **`Navigation.tsx`** — rewrite per §2.
4. **`Hero.tsx`** — rewrite per §2.
5. **New `Problem.tsx`** — build; delete `RealityToday.tsx`, `WhatChanges.tsx`.
6. **`HowItWorks.tsx`** — rewrite.
7. **New `Features.tsx`** — build; delete `WhyDifferent.tsx`, `Ecosystem.tsx`.
8. **`BuiltForEA.tsx`** — rewrite.
9. **New `Trust.tsx`** — build.
10. **New `CTA.tsx`** — build.
11. **`Footer.tsx`** — rewrite (carry forward the still-valid privacy/terms links already fixed on this branch).
12. **Delete** `Roadmap.tsx`, `Wishlist.tsx`.
13. **`App.tsx`** — update lazy-import list and render order to: `Navigation → Hero → Problem → HowItWorks → Features → BuiltForEA → Trust → CTA → Footer`. Keep existing chrome as-is: `ScrollSection` motion wrapper, `CustomCursor`, `BackToTop`, scroll-progress bar, Lenis smooth scroll.
14. Responsive pass on every new/rewritten section — the Pencil frames are all fixed at 1440px desktop; no mobile frame exists, so mobile/tablet breakpoints must be designed to match the desktop hierarchy and spacing ratios, not just squeezed.
15. Accessibility pass — alt text on all images, semantic heading order (one `h1` in Hero, `h2` per section), focus-visible states on links/buttons, contrast check on gold-on-dark and muted-text-on-cream.

## 5. Verification (must actually run, not just claim)

- `npm install` if `node_modules` missing.
- `npm run lint` (`tsc --noEmit`) — zero errors.
- `npm run dev`, load in a browser, confirm all 8 sections render in order with no console errors.
- Screenshot each section and compare against the Pencil reference screenshots already captured this session (or re-screenshot via Pencil `TakeScreenshot` on `MJrSc`, `b2BoRE`, `U6hQlP`, `rYbGP`, `tYpyz`, `GeKTl`, `hoiZX`, `y9hRT`) — flag and fix any section that's off on color, copy, or layout before calling it done.
- `grep -r "brand-primary\|brand-highlight\|brand-mist\|brand-grove\|brand-moss\|brand-logo-bg\|brand-light-1\|brand-light-2\|brand-text-dark" src/` — should return nothing once the rebrand is complete (all old teal/green Tailwind classes gone).
- `grep -r "Roadmap\|Wishlist" src/` — should return nothing (dangling imports check).

## 6. Explicitly out of scope

- No git commits/pushes — user handles git.
- No changes outside `WEB/WAMU`.
- No swapping the stack (Vite/React/Tailwind v4/motion/lucide/lenis stay as-is).
