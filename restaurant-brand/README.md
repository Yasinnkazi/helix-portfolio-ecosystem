# Aura — Modern European Dining

A single-page brand website for Aura, a luxury Modern European restaurant in Manhattan. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Language | TypeScript (strict) |
| Bundler | Vite 6 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11, GSAP 3 |
| Icons | Lucide React |
| Routing | React Router 6 |

## Setup

```bash
# Install dependencies
npm install

# Start development server
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
restaurant-brand/
├── public/                  # Static assets
│   └── vite.svg
├── src/
│   ├── assets/              # Images, fonts (empty — uses placeholder gradients)
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   └── ui/              # AnimatedText, Button, GlassCard, ScrollReveal, Section
│   ├── hooks/               # useMediaQuery, useMousePosition, useParallax, useScrollReveal
│   ├── pages/               # Home (single-page SPA)
│   ├── sections/            # 9 sections: Hero, Story, Menu, Chef, Gallery,
│   │                        #   Testimonials, Events, Reservation, Contact
│   ├── utils/               # cn() classname utility
│   ├── App.tsx              # Router root
│   ├── main.tsx             # Entry point (BrowserRouter)
│   └── index.css            # Tailwind directives, glass utilities, scrollbar hide
├── index.html               # Root HTML with Google Fonts preconnect
├── tailwind.config.js       # Brand color palette, font families
├── vite.config.ts           # Vite config with @ alias
├── tsconfig*.json           # TypeScript configs
└── package.json
```

## Color Palette

- **Brand/Amber:** 50–950 (warm orange-amber spectrum)
- **Ink/Warm Grays:** 50–950 (warm charcoal neutrals)
- **Accent:** Brand-500 (`#f97316`) for CTAs and highlights

## Typography

- **Display:** Space Grotesk (headings, hero text)
- **Body:** Inter (body copy, labels, descriptions)

## Key Features

- Dark-themed editorial luxury aesthetic
- Ambient gradient orbs and particle animations
- Glassmorphism cards with backdrop blur
- Scroll-triggered reveal animations
- Interactive menu with tab switching and mobile accordion
- Gallery with category filtering and lightbox
- Testimonial carousel with auto-rotation
- Multi-step reservation form with confirmation state
- Responsive design across all breakpoints
