# APEX Design System

## Philosophy: Aggressive Athletic Minimalism

Every pixel serves performance. The design strips away decorative excess and leaves only what demands attention — bold typography, high-contrast color, and motion that feels like impact. The aesthetic is futuristic, dark, and unapologetically intense, mirroring the ethos of elite athleticism.

## Color Palette

### Brand (Red/Orange Spectrum)
```css
brand-50:  #fff1f1
brand-100: #ffe1e1
brand-200: #ffc7c7
brand-300: #ffa0a0
brand-400: #ff6b6b
brand-500: #f83e3e  /* Primary — CTAs, highlights, accents */
brand-600: #e51d1d
brand-700: #c11414
brand-800: #991515
brand-900: #811818
brand-950: #450808
```

### Ink (Dark Neutrals)
```css
ink-50:   #f2f2f2
ink-100:  #e6e6e6
ink-200:  #cccccc
ink-300:  #a6a6a6
ink-400:  #808080
ink-500:  #666666
ink-600:  #4d4d4d
ink-700:  #333333
ink-800:  #1f1f1f
ink-900:  #0a0a0a  /* Section backgrounds */
ink-950:  #000000  /* Page background / dark sections */
```

The red operates as both an accent and a structural color — it fills buttons, underlines headlines, tints hover states, and bleeds into gradient overlays. On the near-black canvas, it reads like fire in darkness.

## Typography

- **Primary font**: Inter (300–900 weight scale)
- **Headline**: Inter, weight 900, tight tracking (`tracking-tighter`), sizes up to `8xl`/`9xl`
- **Body**: Inter, weight 400–500, generous line-height for readability on dark backgrounds
- **Meta/Labels**: Inter, weight 600–700, uppercase with wide letter-spacing (`tracking-[0.2em]`)

Headlines aim for maximum impact — they span full viewport width, use `leading-[0.85]` for density, and frequently split between white and brand-colored segments.

## Motion Identity

Motion at APEX is deliberate and physical, never decorative.

| Element | Behavior |
|---------|----------|
| Scroll entrance | Items fade + translate upward with cubic-bezier `[0.25, 0.1, 0.25, 1]` (custom ease-out) |
| Pulse rings | Expanding translucent circles in Hero, infinite loop at 4s |
| Slash effects | Diagonal gradient lines that grow and fade — like a blade cut |
| Geometric shapes | Rotating wireframe squares that appear and disappear on a slow loop |
| Button press | Scale up to 1.02 on hover, scale down to 0.98 on tap |
| Card hover | Lift on Y-axis (–4px) with smooth transition |
| Testimonials | Slide + fade carousel with direction-aware exit/enter |
| Parallax | Scroll-driven Y translation on background elements |
| Animated text | Words or characters fade in with staggered delay on scroll |
| Counter | Animated number count-ups when section enters viewport |
| Mouse parallax | Hero container shifts based on cursor position (CSS custom properties) |
| Diagonal gradient | Repeating diagonal line pattern in CTA that slowly scrolls |

The overall feel is quick but weighty — nothing floats, everything has mass.

## Glassmorphism

Two glass layers provide depth:
- **`.glass`**: Light variant (`rgba(255,255,255,0.05)` background, `blur(16px)`)
- **`.glass-dark`**: Dark variant (`rgba(0,0,0,0.4)` background, `blur(20px)`)

Applied to Navbar on scroll, schedule cards, GlassCard component, and membership plan cards.

## Inspiration

- **Gymshark** — Monochrome dark palette with neon accent, athlete-first imagery
- **Nike Training** — Bold typographic hierarchy, motivational copy, movement-focused UI
- **Hyperice** — Glassmorphism, futuristic minimalism
- **WHOOP** — Data-forward dark UI, red as a signal color

## Section Architecture (scroll order)

1. **Navbar** — Fixed glass-dark on scroll, transparent at top
2. **Hero** — Pulse rings, athlete SVG silhouette, "FORGE YOUR LEGEND" headline
3. **Stats** — Animated counters (5,000+ members, 50+ trainers, etc.)
4. **Transformations** — Flip-card before/after with 3D rotate on hover
5. **Trainers** — 4 coach cards with expandable credentials
6. **Membership** — 3-tier pricing (Core $29, Pro $59, Elite $99), feature comparison
7. **Schedule** — Horizontal scrollable 7-day class calendar
8. **App Section** — Phone mockup, app store download buttons
9. **Testimonials** — Auto-rotating carousel (5s interval)
10. **CTA** — Diagonal pattern, "Ready to Transform?" with free week offer
11. **Footer** — 4-column link grid with scroll-to-top button
