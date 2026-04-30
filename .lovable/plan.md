# Implementation Plan

Six focused changes across the navbar, footer, contact, testimonials, procedures section, and gallery page.

## 1. Navbar — "Socials" dropdown next to "Programare"

In `src/components/site/Navbar.tsx`:
- Add a new `Socials` button immediately to the **left** of the existing `Programare` button (same `hidden lg:flex` cluster), so the order becomes: nav links → Socials → Programare.
- Build the dropdown using shadcn's `DropdownMenu` (already installed at `src/components/ui/dropdown-menu.tsx`) for accessibility + keyboard nav + click-outside out of the box.
- Trigger: ghost-style button with label "Socials" + small chevron, matching the existing pill/rounded button language.
- Menu content styled for glassmorphism: `bg-background/70 backdrop-blur-xl border border-border/60 shadow-elegant rounded-xl`, with `data-[state=open]:animate-in fade-in-0 zoom-in-95 slide-in-from-top-2` (Radix data-state animations already supported by shadcn defaults).
- Three items, each an `<a target="_blank" rel="noopener noreferrer">` with a brand SVG icon (16–18px) on the left and label on the right, padded generously, hover `bg-secondary/60` and slight `translate-x-0.5` motion:
  - Facebook → `https://www.facebook.com/DrChirurgORLMarinVOICA/`
  - Instagram → `https://www.instagram.com/dr.marin_voica?igsh=MWxpdm94eXBmYXl2dw==`
  - TikTok → `https://www.tiktok.com/@drmarinvoica?_r=1&_t=ZN-95ycR3VUULe`
- Mobile menu (the existing collapsible panel): add the same three social links as a horizontal icon row below the "Programare" button so mobile users get them too.

### Brand icons
Lucide doesn't ship Instagram/TikTok marks reliably for all versions; create a tiny shared component `src/components/site/SocialIcons.tsx` exporting clean inline SVGs (`FacebookIcon`, `InstagramIcon`, `TikTokIcon`) plus a `SOCIAL_LINKS` array reused by Navbar and Footer, so links live in one place.

## 2. Footer — social icons row

In `src/components/site/Footer.tsx`:
- Convert the current 3-column grid into a layout that still fits the brand block, the "Powered by" line, and the copyright, then add a centered icon row directly under the brand block on mobile and aligned to the right column on `md+`.
- Render the three icons from `SOCIAL_LINKS` as 36px circular buttons with `border-primary-foreground/15`, `text-primary-foreground/70`, hover `text-primary-foreground bg-primary-foreground/10` with a subtle 200ms transition. `aria-label` per platform.

## 3. Contact section — two phone CTAs

In `src/components/site/Contact.tsx`:
- Replace the single Telefon card with **two stacked phone cards**, sharing the existing card styling but with stronger hierarchy:
  1. **"Sună pentru intervenție"** — uses the `gradient-primary` icon badge (kept prominent), eyebrow label "Urgențe & intervenții", number `0722.307.818` rendered with `<PhoneNumber>` in `font-serif text-xl text-primary`. Add a small `Button` (size sm, rounded-full) "Sună acum" that links `tel:0722307818` — visible on all viewports, since on desktop the `<PhoneNumber>` is non-tappable.
  2. **"Sună pentru programare"** — uses the lighter `bg-secondary` icon badge, eyebrow "Programări consultații", number `0721.173.670` (`tel:0721173670`), same "Sună acum" button.
- Keep the existing Program (hours), Locație (map), and WhatsApp CTA blocks unchanged below.

## 4. Testimonials — "Lasă o recenzie" CTAs

In `src/components/site/Testimonials.tsx`, after the carousel and its arrows, add a centered CTA block:
- Eyebrow: "— Părerea ta contează"
- Heading-style line: "Ai fost pacientul nostru? Lasă o recenzie."
- Two buttons side-by-side (stack on mobile), elegant and restrained on the dark section:
  - **Google** → `https://share.google/XWJTgxcAIRYyZugsb` — solid light pill (`bg-primary-foreground text-primary hover:bg-primary-foreground/90`), generous padding (`px-7 h-12 rounded-full`), Google "G" mark + "Lasă o recenzie pe Google".
  - **Facebook** → `https://www.facebook.com/DrChirurgORLMarinVOICA/` — outline pill on dark (`border border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10`), Facebook "f" mark + "Lasă o recenzie pe Facebook".
- Both `target="_blank" rel="noopener noreferrer"`, with the existing hover `-translate-y-0.5 shadow-soft` motif.

## 5. Procedures CTA — fix anchor scroll target

The button "Apasă pentru mai mulți clienți fericiți" in `src/components/site/Procedures.tsx` currently uses `<Link to="/proceduri">`, which on the new page leaves you at the top hero (above the procedure list) — but the user reports it lands at the bottom, which happens because `Index` may have been at a deep scroll position; React Router doesn't reset scroll on route change here.

Fix:
- Change the link to `<Link to="/proceduri#proceduri-detaliu">`.
- In `src/pages/ProcedureDetails.tsx`, give the section that wraps the procedure articles (line 231 `<section className="py-20 lg:py-28">`) the id `proceduri-detaliu` and `scroll-mt-24` (so the fixed navbar doesn't cover the heading).
- Add a small `useEffect` in `ProcedureDetails` that, on mount, reads `location.hash` and calls `document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })` after a `requestAnimationFrame`. If no hash, `window.scrollTo({ top: 0 })`. This guarantees smooth scrolling to "Proceduri în detaliu" instead of landing at the bottom.

## 6. Gallery — Apple-style premium carousel

Replace the masonry grid in `src/pages/Gallery.tsx` with an Embla-based slider (already in deps via `@/components/ui/carousel`).

Behavior (Apple-like):
- One large image per "page", centered, with peek of the next/previous slide on `md+` (basis ~`80%`, on `lg` ~`70%`); on mobile basis `100%`.
- Embla options: `{ align: "center", loop: true, dragFree: false, containScroll: "trimSnaps", duration: 28 }` — `duration: 28` gives that slow, weighted Apple transition; snap is automatic, swipe is fluid.
- Each slide: rounded-2xl card with `aspect-[4/5]`, `object-cover`, subtle `shadow-elegant`, scale + opacity fade for non-selected slides (`transition-all duration-500`, inactive → `scale-95 opacity-60`) driven by Embla's `selectedScrollSnap` + `slidesInView` (tracked in state).
- Controls:
  - Discrete dot pagination centered below the carousel — small dots (`h-1.5 w-1.5` inactive, active `w-6 bg-primary` rounded-full) with smooth width transitions; clicking jumps to slide.
  - Minimal arrow buttons (Lucide `ChevronLeft`/`ChevronRight`) absolutely positioned at left/right edges on `md+`, hidden on mobile (swipe only). Glass styling: `bg-background/70 backdrop-blur border border-border/60`.
- Tapping/clicking a slide opens the existing fullscreen lightbox modal (keep the current `openIndex` modal logic; just trigger it from the active slide).
- Keep the page header and the lightbox unchanged. Remove the `columns-*` masonry block.

### Technical notes

- New file: `src/components/site/SocialIcons.tsx` — exports `FacebookIcon`, `InstagramIcon`, `TikTokIcon` (inline SVGs, `currentColor`, sized via `className`) and `SOCIAL_LINKS` constant.
- Edited files: `Navbar.tsx`, `Footer.tsx`, `Contact.tsx`, `Testimonials.tsx`, `Procedures.tsx`, `ProcedureDetails.tsx`, `Gallery.tsx`.
- No new dependencies — Embla, Radix dropdown, and Lucide are already installed.
- All external links use `target="_blank" rel="noopener noreferrer"`. Phone links use `<PhoneNumber>` so desktop stays non-tappable but mobile gets `tel:` behavior; explicit "Sună acum" buttons provide a tappable affordance everywhere.
