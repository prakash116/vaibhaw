# RestoCare — Premium Technology Company Website

A world-class, award-worthy marketing website built with **Next.js 14 (App Router)**,
**TypeScript**, **Tailwind CSS** and **Framer Motion**. Frontend / UI-UX only — no backend.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Design system

| Token        | Value                                   |
| ------------ | --------------------------------------- |
| Primary      | `#E53935` (brand-500) + red-only scale  |
| Background   | `#FAFAFA` (surface)                      |
| Dark section | `#111111` (night)                       |
| Text         | `#1A1A1A` (ink)                          |
| Typography   | Inter (display + body)                   |
| Radius       | 16 / 20 / 24 / 32px                      |
| Spacing      | 8px grid rhythm                          |
| Shadows      | soft · lift · glow                       |

Tokens live in [`tailwind.config.ts`](tailwind.config.ts) and
[`app/globals.css`](app/globals.css) (component classes: `.btn-*`, `.card`,
`.glass`, `.eyebrow`, `.section-title`, `.skeleton`).

## Structure

```
app/
  layout.tsx          # fonts, SEO metadata, viewport, skip-link
  page.tsx            # section composition
  globals.css         # design tokens + component/utility layers
components/
  Navbar, Preloader, BackToTop, WhatsAppButton
  ui/                 # Reveal, Counter, Marquee, Orbs, Tilt, SectionHeading
  sections/           # Hero, TrustedBy, Services, Products, Industries,
                      # Portfolio, Process, TechStack, WhyChooseUs,
                      # Testimonials, Blog, FAQ, Contact, Footer
lib/
  motion.ts           # shared Framer Motion variants
  site.ts             # brand + nav constants
```

## Highlights

- Sticky transparent navbar → glass on scroll, with **mega menu** + mobile drawer
- Parallax hero with animated dashboard mockup & floating UI cards
- Animated counters, logo marquee, scroll-triggered reveals, card tilt/hover
- Animated horizontal **process timeline** (vertical on mobile)
- Testimonial carousel, FAQ accordion, split contact layout + map placeholder
- Premium branded **preloader**, back-to-top, floating WhatsApp button
- Fully responsive (mobile-first), dark sections, reduced-motion friendly, SEO metadata
