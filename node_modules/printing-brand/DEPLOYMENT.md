# ThreadForge — Deployment Guide

## Vercel Deployment

1. Push to Git repository
2. Import project in Vercel
3. Set framework preset to Vite
4. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Manual Build

```bash
npm install
npm run build
```

Serve the `dist/` directory with any static server.

## Environment Requirements

- Node.js >= 18
- npm or yarn

## Domain

Configure custom domain in Vercel dashboard. Add CNAME record pointing to cname.vercel-dns.com.
