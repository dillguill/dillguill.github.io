# Portfolio

Personal portfolio website built with Next.js, Tailwind CSS, and MDX.

**Live:** https://dillguill.github.io

## Stack

- **Next.js** — static export via `output: 'export'`
- **Tailwind CSS** — utility-first styling with `@tailwindcss/typography`
- **Framer Motion** — scroll-aware navbar and page animations
- **MDX** — project content authored as `.mdx` files with frontmatter
- **next-mdx-remote** — dynamic MDX rendering for project detail pages
- **next-themes** — dark/light mode with system preference detection
- **Deployed to GitHub Pages** via `gh-pages`

## Project Structure

```
├── pages/              # Next.js pages (index, about, resume, projects)
│   └── projects/[id].js  # Dynamic MDX-driven project detail pages
├── src/
│   ├── components/     # Header, Navbar, Home, About, Projects
│   └── projects/       # MDX files for each project
├── styles/             # Global CSS and CSS custom properties (light/dark)
└── public/             # Static assets
```

## Getting Started

```bash
git clone https://github.com/dillguill/dillguill.github.io.git
cd dillguill.github.io
npm install
npm run dev
```

## Adding a Project

Create a new `.mdx` file in `src/projects/`:

```mdx
---
title: "Project Title"
description: "Short description"
github: "https://github.com/..."
demo: "https://..."
tech: ["React", "TypeScript"]
---

# Project Title

Full project write-up in MDX...
```

The file name (without `.mdx`) becomes the URL slug at `/projects/<slug>`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run export` | Build + touch `out/.nojekyll` |
| `npm run deploy` | Export + push to `gh-pages` branch |

## Environment Variables

`pages/resume.js` fetches resume data from [Reactive Resume](https://rxresu.me) at build time:

```
RXRESUME_API_KEY=your_api_key
```

Required for the resume page to render. Without it, the page falls back to a "Resume not found" message.