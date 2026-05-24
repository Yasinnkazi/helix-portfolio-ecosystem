# Design System

## Philosophy

**Premium minimalism meets cinematic presentation.** Every element serves a purpose. The design prioritizes atmosphere, motion, and spatial depth over decorative excess.

- **Dark-first** — Deep ink backgrounds (`ink-950: #131316`) create a stage for content
- **Glassmorphism** — Frosted surfaces with backdrop blur convey depth and sophistication
- **Cursor-reactive** — The hero responds to mouse movement, making the interface feel alive
- **Scroll-driven narrative** — Progress bars, staggered reveals, and parallax guide the user through the story
- **Monochromatic with purpose** — The violet/indigo accent is reserved for interactive elements, highlights, and gradients

## Color Palette

### Brand (Violet / Indigo)

```
brand-50:  #f4f0ff    (lightest)
brand-100: #ebe4ff
brand-200: #d9cdff
brand-300: #bda6ff
brand-400: #9b75ff    (accent text)
brand-500: #7c42ff    (primary)
brand-600: #6d1ff7
brand-700: #5e0ee3
brand-800: #4e0bbf
brand-900: #410e9c
brand-950: #27066a    (deepest)
```

### Ink (Neutral)

```
ink-50:   #f5f5f6    (lightest)
ink-200:  #cfcfd2
ink-400:  #87878f
ink-600:  #5c5c63
ink-800:  #444449
ink-900:  #26262b    (section bg)
ink-950:  #131316    (page bg)
```

### Usage Rules

- Page background: `ink-950`
- Section alternation: `ink-900` / `ink-950`
- Text body: `white/50` to `white/80`
- Interactive: `brand-400` (hover) → `brand-500` (default)
- Borders: `white/5` to `white/10`
- Glass: `bg-white/5 backdrop-blur-md border-white/10`

## Typography

| Role | Font | Weight |
|------|------|--------|
| Display / Headlines | Space Grotesk | 600–700 |
| Body / UI | Inter | 300–500 |
| Monospace | (system) | — |

### Scale

- Hero heading: `text-5xl` → `text-9xl` (responsive)
- Section headings: `text-4xl` → `text-6xl`
- Card titles: `text-xl` → `text-2xl`
- Body: `text-sm` → `text-lg`
- Labels: `text-sm uppercase tracking-[0.2em]`

## Motion

| Pattern | Implementation | Duration |
|---------|---------------|----------|
| Staggered word reveal | `AnimatedText` with per-word delay | 0.5s per word |
| Scroll reveal | `ScrollReveal` (opacity + translate) | 0.7s |
| Glass card hover | Scale + y-offset via `whileHover` | 0.3s |
| Button press | Scale 0.98 via `whileTap` | instant |
| Mouse-follow glow | CSS `radial-gradient` on mousemove | 1s |
| Infinite marquee | Framer `animate` x-loop | 30s linear |
| Testimonial carousel | `AnimatePresence` fade + slide | 0.5s |
| Scroll progress bars | `useScroll` → width/height | passive |
| Floating shapes | Keyframe opacity + y + rotate loops | 6–10s |

All easings use the custom cubic bezier: `[0.25, 0.1, 0.25, 1]` (quart out).

## Inspiration

- **Linear** — Clean UI, muted palette, brand accent restraint
- **Framer** — Motion-first interactions, glass surfaces, dark theme depth
- **Awwwards winners** — Cinematic scroll narratives, typographic hierarchy

## Layout

- Max container width: `1400px`
- Section padding: `px-6 md:px-12 lg:px-24`, `py-20 md:py-28 lg:py-36`
- Navbar: `h-16 md:h-20`, fixed with glass-dark on scroll
- Grid: 12-column implied; commonly `grid-cols-2`, `grid-cols-3`, `grid-cols-4`
