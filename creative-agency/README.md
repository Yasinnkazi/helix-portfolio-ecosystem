# Helix Digital — Creative Agency

Ultra-premium digital creative studio portfolio. Violet/indigo palette with cinematic motion design, inspired by Linear and Framer.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite 6 |
| Routing | React Router DOM 6 |
| Styling | Tailwind CSS 3 |
| Motion | Framer Motion 11 + GSAP 3 |
| Icons | Lucide React |
| Linting | ESLint |

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Project Structure

```
src/
├── pages/           # Route pages (Home)
├── sections/        # Homepage sections
│   ├── Hero.tsx
│   ├── Showcase.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── CaseStudies.tsx
│   ├── Testimonials.tsx
│   ├── Clients.tsx
│   ├── Timeline.tsx
│   └── Contact.tsx
├── components/
│   ├── layout/      # Navbar, Footer
│   └── ui/          # Button, GlassCard, Section, AnimatedText, ScrollReveal
├── hooks/           # useParallax, useMousePosition, useMediaQuery, useScrollReveal
├── utils/           # cn (classname merge)
├── App.tsx          # Root router
├── main.tsx         # Entry point
└── index.css        # Tailwind directives, glass utilities
```

## Key Design Decisions

- **Custom brand color palette** (violet/indigo via `tailwind.config.js`)
- **Glassmorphism** components (`.glass`, `.glass-dark` utility classes)
- **Mouse-reactive hero** (radial gradient follows cursor)
- **Scroll-triggered animations** (Framer Motion `useInView`/`whileInView`)
- **Infinite marquee** for client logos
- **GSAP parity** via Framer Motion for all scroll-linked progress bars

## Configuration Files

- `vite.config.ts` — path alias `@/` → `./src`
- `tailwind.config.js` — brand + ink color scales, Space Grotesk + Inter fonts
- `tsconfig.json` — strict TypeScript, path aliases
- `postcss.config.js` — Tailwind + autoprefixer
