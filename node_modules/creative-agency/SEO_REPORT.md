# SEO Report — Helix Digital

## Target Keywords

### Primary
- creative agency
- digital design studio
- UI/UX design agency
- brand strategy
- premium web development
- motion design studio

### Secondary
- product design services
- San Francisco creative agency
- digital branding
- interactive web experiences
- design studio portfolio
- luxury web design

### Long-tail
- high-end digital creative agency San Francisco
- premium UI/UX design for startups
- brand identity and web development studio
- cinematic web design agency
- digital product design and strategy firm

## Current Metadata

| Field | Value | Status |
|-------|-------|--------|
| `<title>` | Helix Digital — Creative Agency | OK |
| `<meta description>` | missing | **NEEDS ADDING** |
| `<meta keywords>` | missing | optional |
| `<meta og:title>` | missing | **NEEDS ADDING** |
| `<meta og:description>` | missing | **NEEDS ADDING** |
| `<meta og:image>` | missing | **NEEDS ADDING** |
| `<meta twitter:card>` | missing | **NEEDS ADDING** |
| canonical | missing | **NEEDS ADDING** |
| favicon | `/vite.svg` | OK (replace with branded icon) |
| lang | `en` | OK |
| charset | `UTF-8` | OK |
| viewport | `width=device-width, initial-scale=1.0` | OK |

### Recommended `<head>` additions (`index.html`)

```html
<meta name="description"
      content="Helix Digital is an ultra-premium creative agency specializing in brand strategy, UI/UX design, web development, and motion design for ambitious brands." />
<meta property="og:title" content="Helix Digital — Premium Creative Agency" />
<meta property="og:description"
      content="A creative studio crafting premium digital experiences, product design, and brand storytelling." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://helixdigital.com" />
<meta property="og:image" content="https://helixdigital.com/og-image.png" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="canonical" href="https://helixdigital.com" />
```

## Semantic Structure

### Heading hierarchy

```
h1  "We Build Digital That Matters"
h2  "Projects"
h2  "Services"
h2  "Process"
h2  "Impact in Action"
h2  "Testimonials"
h2  "Clients"
h2  "Timeline"
h2  "Let's Create Together"
```

**Issues:**
- No `h1` outside the hero (fine for SPA, but confirm only one `h1` renders)
- Project cards use `h3` for titles — correct
- Service cards use `h3` for titles — correct
- Process steps use `h3` — correct

### Landmarks

| Role | Element | Present |
|------|---------|---------|
| `<nav>` | Navbar | Yes |
| `<main>` | Home wrapper | No (`<main>` exists) | Yes |
| `<footer>` | Footer | Yes |
| `<section>` | Each section | Yes (with `id` attributes) |
| `aria-label` | Buttons, nav toggle | Partial |

### Recommendations

1. **Add `aria-label`** to nav links for screen readers
2. **Add `alt` text** to any future imagery (currently no `<img>` tags)
3. **Add skip-to-content link** for accessibility
4. **Add JSON-LD structured data** for the organization:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Helix Digital",
  "description": "Premium creative agency specializing in digital experiences.",
  "url": "https://helixdigital.com",
  "email": "hello@helixdigital.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA"
  }
}
</script>
```

## Performance Considerations

- Vite output is fully static, minified, and tree-shaken
- Fonts load via Google Fonts with `preconnect` hints (already in `index.html`)
- No render-blocking resources beyond the critical path
- Framer Motion and GSAP add JS weight — consider dynamic import for non-critical sections
- Current bundle can be analyzed with `vite build --report`

## Action Items Priority

1. Add meta description and OG tags to `index.html`
2. Add JSON-LD structured data
3. Replace Vite favicon with branded Helix logo
4. Add `<h1>` confirmation logic (single `h1` per page)
5. Audit and add `aria-label` to all interactive elements
6. Generate and reference an OG image asset
