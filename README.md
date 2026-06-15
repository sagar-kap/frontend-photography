<div align="center">

# ✦ Capture

### _Light, held still._

A fine-art nature photography studio on the web — golden-hour landscapes,
quiet wilderness, and the light in between. Built as a cinematic, darkroom-grade
portfolio with film grain, drifting dust, and editorial motion.

<br/>

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-18-20232a?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-0b1120?style=for-the-badge&logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3-0ae448?style=for-the-badge&logo=greensock&logoColor=black)
![Embla](https://img.shields.io/badge/Embla-Carousel-c87b2d?style=for-the-badge)

</div>

---

## The look

A warm **darkroom at golden hour**. One molten amber accent against warm
near-black, an optical serif display face, and a mono used the way a camera
prints EXIF — frame counters, focal lengths, coordinates.

| Token | Value | Used for |
| --- | --- | --- |
| `ink` | `#0c0b09` | Warm near-black canvas |
| `bone` | `#f3ece0` | Primary type |
| `amber` | `#e0a04a` | The single sharp accent |
| Display | **Fraunces** | Editorial headlines (optical serif) |
| Body | **Manrope** | UI + prose |
| Mono | **JetBrains Mono** | EXIF labels, frame counters |

Every surface carries the photographer's eye: an animated **film-grain**
overlay, a **Ken Burns** hero, a hand-rolled **particle canvas** of drifting
golden dust, corner frame-ticks on each plate, and scroll-triggered reveals
throughout.

## Features

- 🎞️ **Cinematic hero** — Ken Burns background, GSAP entrance timeline, scroll
  parallax, live EXIF readout, and an animated scroll cue.
- 🖼️ **Embla gallery** — draggable/swipeable carousel with keyboard arrows, a
  frame counter, captions, a progress rail, and a thumbnail strip.
- ✨ **Particle canvas** — a zero-dependency `<ParticleCanvas />` rendering
  drifting golden-hour motes (respects `prefers-reduced-motion`).
- 🌍 **Live Work grid** — an editorial mosaic that pulls fresh nature frames
  from the Unsplash API on each visit, with graceful local fallbacks.
- 📨 **Contact studio** — floating-label form on a dark canvas with an inline
  "message received" state.
- ♿ **Considered motion** — all animation collapses under
  `prefers-reduced-motion`.

## Stack

- [**Next.js 16**](https://nextjs.org/) (Pages Router, Turbopack build)
- [**React 18**](https://react.dev/)
- [**Tailwind CSS 3**](https://tailwindcss.com/) — custom darkroom design tokens
- [**GSAP**](https://gsap.com/) — hero timeline + scroll parallax
- [**Embla Carousel**](https://www.embla-carousel.com/) — the gallery engine
- [**Unsplash API**](https://unsplash.com/developers) — live field photography
- [**next/font**](https://nextjs.org/docs/app/api-reference/components/font) —
  self-hosted Fraunces · Manrope · JetBrains Mono

> **A note on the carousel & particles:** the in-house
> [`@weburz/carousel`](https://www.npmjs.com/package/@weburz/carousel) and
> [`@weburz/particle-canvas`](https://www.npmjs.com/package/@weburz/particle-canvas)
> packages are **Nuxt 4 / Vue** modules and can't run in this React app. This
> site honours their spirit instead — the gallery is built on the same
> **Embla** engine the carousel wraps, and `ParticleCanvas.jsx` is a React port
> of the particle-canvas concept.

## Getting started

```bash
# install
npm install

# add your Unsplash access key (optional — the Work grid falls back gracefully)
echo "NEXT_PUBLIC_KEY=your_unsplash_access_key" > .env.local

# develop
npm run dev      # http://localhost:3000

# ship
npm run build
npm start

# lint (ESLint 9 flat config)
npm run lint
```

### Environment

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_KEY` | optional | Unsplash **Access Key**. Without it, the `/work` grid renders the bundled local plates. |

## Structure

```
src/
├── components/
│   ├── Hero.jsx            # Ken Burns + GSAP + EXIF + particles
│   ├── ParticleCanvas.jsx  # zero-dep golden-dust canvas
│   ├── Manifesto.jsx       # marquee band + philosophy + stats
│   ├── Slider.jsx          # Embla gallery (home #gallery)
│   ├── Portfolio.jsx       # live Unsplash mosaic (/work)
│   ├── Flickr.jsx          # grayscale → colour feed grid
│   ├── Contact.jsx         # floating-label studio form
│   ├── NavBar.jsx          # scroll-aware blur nav + mobile overlay
│   ├── Footer.jsx          # wordmark, links, back-to-top
│   └── Reveal.jsx          # IntersectionObserver reveal primitive
├── pages/                  # /, /work, /contact
└── styles/globals.css      # grain, scrollbar, reveal, glow
```

## Routes

| Route | What it is |
| --- | --- |
| `/` | Hero · manifesto · Embla gallery · feed |
| `/work` | Live Unsplash mosaic, fresh on every visit |
| `/contact` | Studio contact form |

---

<div align="center">
<sub>© 2020–present Capture Studio · Light, held still.</sub>
</div>
