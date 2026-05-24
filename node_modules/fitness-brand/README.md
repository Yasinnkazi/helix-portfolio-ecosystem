# APEX — Elite Fitness

Premium fitness brand landing page built with aggressive athletic minimalism and futuristic dark UI. A single-page React application showcasing a modern gym's digital presence with rich animations, glassmorphism, and a red/orange/black color identity.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11, GSAP 3 |
| Routing | React Router DOM 6 |
| Icons | Lucide React |
| Lint | ESLint |

## Setup

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

Production output lands in `dist/`.

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   └── ui/              # Button, GlassCard, ScrollReveal, AnimatedText, Section
├── hooks/               # useParallax, useMousePosition, useMediaQuery, useScrollReveal
├── pages/               # Home
├── sections/            # Hero, Stats, Transformations, Trainers, Membership, Schedule, AppSection, Testimonials, CTA
├── utils/               # cn (classname utility)
├── App.tsx
├── main.tsx
└── index.css            # Tailwind directives, glass utilities, selection theming
```

## Routes

- `/` — Single-page landing (all sections scroll-linked via anchor nav)

## Key Design Tokens

- **Brand primary**: `#f83e3e` (brand-500)
- **Background**: `#0a0a0a` (ink-900), `#000000` (ink-950)
- **Font**: Inter (display + body)
- **Glass effect**: `backdrop-filter: blur()` with semi-transparent backgrounds
