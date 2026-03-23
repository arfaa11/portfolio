# My Portfolio

Personal portfolio site. Built from scratch with Next.js 15, TypeScript, and Tailwind CSS.

**Live:** [arfaa.ca](https://arfaa.ca)

---

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | CSS keyframes + Framer Motion |
| Fonts | Geist Sans, Geist Mono |
| Hosting | Vercel |
| Domain | Cloudflare |

---

## Structure

```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   │   └── header.tsx
│   │
│   ├── portfolio/
│   │   ├── animated-portfolio.tsx
│   │   └── sections/
│   │       ├── hero-section.tsx
│   │       ├── projects-section.tsx
│   │       ├── skills-section.tsx
│   │       ├── about-section.tsx
│   │       └── contact-section.tsx
│   │
│   └── ui/
│       ├── button.tsx
│       └── section-card.tsx
│
└── lib/
    ├── design-tokens.ts
    ├── portfolio-data.ts
    └── use-portfolio-hooks.ts
```

`animated-portfolio.tsx` is the top-level orchestrator. It imports each section component and arranges them in order. The file itself is under 150 lines. All the actual content lives in `portfolio-data.ts` so there is one place to go when anything needs updating. Shared hooks (`useReveal` and `useTypewriter`) live in `use-portfolio-hooks.ts` separately from any UI code.

---

## Sections

**Hero** — Full-screen opening with a typewriter effect that cycles through different role titles. The name heading uses a fluid `clamp()` font size so it scales cleanly across screen sizes without breakpoint hacks. The surname has a shimmer gradient animation running through it.

**Projects** — Divided into two subsections: Personal Projects and University Research Projects. Each card shows the project status, date range, tech tags, and for research work, the affiliated institution. Two placeholder cards sit in the personal section ready to be filled in later.

**Skill Stack** — Six categories laid out in a grid. Frontend, Backend, Databases, Tools and DevOps, Data and Analysis, and Security and Systems.

**About Me** — A short bio sits alongside a quick-facts sidebar. Below that is a vertical career and education timeline that takes up most of the section. Each entry is colour-coded by type (Education, Work, Project, Achievement) and shows the date range, organisation, and a few bullet points. The coloured accent bar on each card extends on hover.

**Contact** — The main email button has a CSS-only animation where two arcs rotate around it in opposite directions continuously. No JavaScript involved. On desktop, a floating card sits to the right showing current availability status.

---

## Design Notes

The scroll animation system uses the `IntersectionObserver` API rather than anything scroll-position-driven. When a section enters the viewport it gets a `.visible` class added, which triggers a CSS transition. This approach means navigation links jump directly to the right place without fighting any scroll logic.

The header detects which section is currently in view and highlights the matching nav item. It also renders a thin purple progress bar across the very top of the page that fills as you scroll down.

All keyframe animations are defined in `globals.css`. The site uses a consistent set of CSS variables for colours so the purple accent tone stays uniform across every component.

The favicon is a bold letter A on a circular radial gradient background going from dark indigo at the centre to neon purple at the edges. Faint monospace symbols are layered in the background as texture. It was generated with Python using Pillow.

---

*Arfaa Mumtaz — Edmonton, AB*
