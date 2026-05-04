## Goal
On `/proceduri`, each block animates **in as it enters** the viewport and **out as it leaves** — Apple-style: a smooth fade + slight upward translate + gentle scale + soft blur, driven entirely by scroll position (so reversing the scroll reverses the animation).

## Approach
Use CSS `animation-timeline: view()` with a keyframe sequence that goes hidden → visible → hidden across the full pass through the viewport. Because the animation is bound to scroll progress (not time), scrolling up naturally plays it in reverse — blocks disappear smoothly when leaving.

## Changes

### 1. `src/index.css` — new reveal utilities

Add a new utility, e.g. `.reveal-apple`:

- `animation: reveal-apple-pass linear both;`
- `animation-timeline: view();`
- `animation-range: cover 0% cover 100%;` (full pass through viewport)
- Keyframes `reveal-apple-pass`:
  - `0%` — `opacity: 0; transform: translateY(40px) scale(0.96); filter: blur(10px);`
  - `25%` — fully visible: `opacity: 1; transform: none; filter: blur(0);`
  - `75%` — still fully visible (hold while in view).
  - `100%` — `opacity: 0; transform: translateY(-30px) scale(0.98); filter: blur(8px);` (gentle exit upward).
- Easing handled via cubic-bezier-style keyframe spacing (Apple feel: `cubic-bezier(0.22, 1, 0.36, 1)`).

Add a softer variant `.reveal-apple-soft` (smaller translate, no blur) for headings/CTAs where blur would feel heavy.

Add a stagger helper `.reveal-stagger > *:nth-child(n)` with small `animation-delay` offsets so sibling cards cascade.

Fallbacks (kept consistent with existing `.scroll-reveal`):
- `@supports not (animation-timeline: view())` → no animation, content fully visible.
- `@media (prefers-reduced-motion: reduce)` → no animation.

### 2. `src/pages/ProcedureDetails.tsx` — apply classes

- Hero inner column (eyebrow + `<h1>` + lead paragraph): `reveal-apple-soft`.
- Each `<article>` inside the procedures loop: `reveal-apple` so the whole block fades/blurs in on entry and out on exit.
- Bottom CTA ("Vezi galeria foto completă"): `reveal-apple-soft`.

### 3. Notes
- Pure CSS, scroll-linked — guarantees the appear/disappear is perfectly synced with scroll direction (no JS, no IntersectionObserver flicker).
- No new dependencies. No changes to other pages.

## Files touched
- `src/index.css`
- `src/pages/ProcedureDetails.tsx`
