# Portfolio

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
