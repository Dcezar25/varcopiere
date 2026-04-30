## Changes

### 1. Contact Section (`src/components/site/Contact.tsx`)

**Phone number typography** — Currently the two phone numbers use `font-serif` (Fraunces), which makes them stand out from the rest of the site. Update both `PhoneNumber` instances:

- Remove `font-serif` from the `className`
- Keep size/weight tuning (e.g. `text-xl font-medium tracking-tight`) so they inherit the global Inter font like the rest of the UI
- Apply to both "Sună pentru intervenție" (0722.307.818) and "Sună pentru programare" (0721.173.670)

**Hide "Sună acum" buttons on desktop** — Both `<Button asChild size="sm" variant="outline">` "Sună acum" buttons currently use `hidden sm:inline-flex` (visible from tablet up). Invert the visibility so they show only on mobile/small tablet:

- Replace `hidden sm:inline-flex` with `inline-flex md:hidden` (visible below `md` breakpoint, hidden on desktop/tablet-landscape).

### 2. Gallery — Scroll to Top on Navigation (`src/pages/Gallery.tsx`)

The "Deschide galeria foto" button in `ProcedureDetails.tsx` is a `<Link to="/galerie">`. React Router preserves the previous scroll position, which is why the user lands at the bottom. Fix by ensuring the Gallery page scrolls to the top on mount:

- In `Gallery.tsx`, add a `useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [])` near the top of the component (alongside the existing title/meta effect, or merged into it).
- This is a targeted fix for the Gallery page only and doesn't risk breaking any in-app smooth-scroll-to-anchor flows.

### 3. Navbar — Mobile/Tablet 3-Slot Layout (`src/components/site/Navbar.tsx`)

Currently the mobile/tablet navbar shows only **logo (left)** and **hamburger (right)**. Restructure to a balanced 3-slot layout: **logo (left) — Programare CTA (center) — hamburger (right)**, with equal spacing and perfect vertical alignment.

Implementation:

- Change the outer flex container of the mobile bar from `justify-between` semantics to a 3-column CSS grid for screens below `lg`: `grid grid-cols-3 items-center` on mobile/tablet, switching back to the current flex layout at `lg` (where the full desktop nav is shown).
- Slots:
  - **Left** — existing logo (`Dr. Marin Voica`), with `justify-self-start`. On very small screens hide the "ORL" subscript (already hidden on `<sm`) so the logo column doesn't overflow.
  - **Center** — a compact "Programare" pill button (reuse `<Button size="sm" className="rounded-full px-4 h-9">`), `justify-self-center`. Visible only `lg:hidden`. Tapping it triggers the existing `goToSection("contact")`.
  - **Right** — existing hamburger button, `justify-self-end`, `lg:hidden`.
- Keep the desktop layout (`lg:` and up) unchanged: logo left, nav links center-ish, Socials + Programare right.
- Verify vertical alignment: all three children use `items-center` on the grid; button heights tuned so they sit on the same baseline as the logo at `h-20` bar height.

The mobile sheet (full menu panel) below stays as-is — it already contains social icons and a larger "Programare" button for the expanded state.

## Technical Notes

- `Contact.tsx`: only className changes on existing JSX nodes — no structural edits.
- `Gallery.tsx`: a single extra effect; safe because the page is a route entry and always mounts fresh on navigation from `/proceduri`.
- `Navbar.tsx`: only the top-level row of the header changes. The dropdown menu, scroll-handling, and mobile sheet logic stay intact. The new center "Programare" button reuses existing handlers.
- No new dependencies, no design-token changes (`index.css`/Tailwind config untouched).

## Files Touched

- `src/components/site/Contact.tsx`
- `src/pages/Gallery.tsx`
- `src/components/site/Navbar.tsx`