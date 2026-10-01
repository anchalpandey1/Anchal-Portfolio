# Anchal Pandey — Portfolio

A premium personal portfolio website built with React, Vite, TailwindCSS, Framer Motion, and shadcn/ui-inspired components.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — fast dev server and build tooling
- **TailwindCSS v4** — utility-first styling
- **Framer Motion** — subtle, professional animations
- **Lucide Icons** — clean iconography
- **Radix UI** — accessible primitives (shadcn/ui pattern)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, SectionWrapper
│   ├── sections/     # Hero, About, Skills, Experience, Projects, etc.
│   └── ui/           # Reusable UI primitives (Button, Badge, Card)
├── data/
│   └── portfolio.ts  # All content and configuration
├── hooks/
│   └── useScrollSpy.ts
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

Edit `src/data/portfolio.ts` to update personal information, projects, experience, and contact links.

Place your resume PDF at `public/resume/Anchal_Pandey_SE_Resume.pdf`.

Add your profile photo at `public/profile/anchal-pandey.jpg` (recommended: 800×800px, square crop). A placeholder SVG is used until the JPG is added.

## License

Private — All rights reserved.
