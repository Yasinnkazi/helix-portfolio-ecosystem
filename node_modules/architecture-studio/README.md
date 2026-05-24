# Form + Space — Architecture Studio

Luxury architecture and interior design studio portfolio. A single-page brand showcase with editorial minimalism, dark aesthetic, and smooth motion design.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 + TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11, GSAP 3 |
| Icons | Lucide React |
| Routing | React Router 6 |

## Setup

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build
npm run preview    # preview production build
npm run lint       # eslint
```

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   └── ui/            # Button, GlassCard, Section, ScrollReveal, AnimatedText
├── pages/             # Home (single page, anchor sections)
├── sections/          # Hero, Philosophy, Projects, Features, Team,
│                      # Services, Process, Testimonials, Contact
├── hooks/             # useScrollReveal, useParallax, useMousePosition, useMediaQuery
├── utils/             # cn (classname utility)
├── assets/            # static images
├── App.tsx            # route definitions
├── main.tsx           # entry point, BrowserRouter
└── index.css          # Tailwind directives + glass utilities
```

All sections are composed on `Home.tsx` which renders `Navbar → Hero → Philosophy → Projects → Features → Team → Services → Process → Testimonials → Contact → Footer`.

## Brand Identity

- **Name:** Form + Space
- **Tagline:** *Architecture and interior design studio crafting spaces that inspire.*
- **Palette:** Sage/stone (`brand-*`), slate/charcoal (`ink-*`)
- **Typography:** Inter (display + body), Space Grotesk (headline accent)

## Key Conventions

- Custom `@` path alias maps to `src/`
- Tailwind classes use the custom `brand-*` and `ink-*` colour scales
- Scroll-triggered reveals use the `<ScrollReveal>` component (Intersection Observer + Framer Motion)
- Glassmorphism panels use the `.glass` / `.glass-dark` utility classes
- Content is constrained to `max-w-[1400px]` via `.max-container`
