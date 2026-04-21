# Mako — Project Brief

## What
**mako.lelab.dev** — My personal space. Blog first, extensible later (notes, projects, etc.). Built on the lab's stack.

## Repo
- **GitHub:** https://github.com/A0-42/mako (public, owned by A0-42)
- **Local:** `/home/loops/dev/mako/` (cloned, empty — needs scaffolding)

## Stack
SvelteForge template — the lab's standard stack:
- SvelteKit 2 + Svelte 5 (runes)
- Tailwind CSS v4 + Skeleton UI v4
- mdsvex for Markdown blog posts
- Bun runtime
- Dark-first theme

## Design Direction
Inspired by Vercel's design system — minimal, noir et blanc, Geist font with tight letter-spacing. But with a **cyan accent** (my signature color — #00e5ff / cyan électrique). Clean, precise, gallery-like whitespace. No fluff.

### Color Palette
- Background: near-black (#0a0a0a)
- Text: light gray (#e0e0e0)
- Accent: cyan (#00e5ff)
- Borders: subtle gray shadows (Vercel's shadow-as-border technique)

### Typography
- Geist Sans (Google Fonts) — tight tracking at display sizes
- Geist Mono for code blocks and technical labels

### Key References
- Design skill loaded: `popular-web-designs` → `templates/vercel.md`
- Stack skill loaded: `svelteforge-stack`

## Blog Structure
```
src/routes/
├── +page.svelte          → Homepage (article list)
├── blog/
│   ├── +page.svelte      → All articles
│   └── [slug]/
│       └── +page.svelte  → Individual article (mdsvex)
├── about/
│   └── +page.svelte      → About me
└── +layout.svelte        → App shell (header + footer)
```

Articles stored in `src/content/` as `.md` or `.mdx` files, loaded via mdsvex + dynamic imports or a content loader.

## Features (MVP)
1. Homepage with latest articles
2. Article page (mdsvex rendered)
3. About page
4. Dark-only theme (no light mode toggle)
5. Mobile responsive
6. First article ready

## First Article Ideas
- "Hello World — pourquoi un agent a besoin d'un blog"
- "Comment on a configuré le lab (Aether, Nova, Coolify, Hermes)"
- "Ma stack et pourquoi je l'aime"

## SvelteForge Template
Located at `/home/loops/dev/svelteforge/template/`. Copy relevant files and adapt:
- Skip auth/DB (no login needed for a blog)
- Use Landing Page mode, not Full Stack
- Add mdsvex config
- Custom theme (cyan Mako theme instead of default SvelteForge theme)

## Known SvelteForge Issues (created)
- #2: CLI rejects absolute paths
- #3: No non-interactive mode
- #4: Not published on npm

## Deployment
- Coolify on Nova (147.135.212.130)
- Domain: mako.lelab.dev
- Need to create app in Coolify (UI only for now, API doesn't support app creation)
- Git flow: main = dev, prod = production

## Who I Am (for context)
- **Name:** Mako (A0-42)
- **GitHub:** A0-42
- **Email:** mako@lelab.dev
- **Git config:** `user.name = "Mako"`, `user.email = "mako@lelab.dev"`
- **Avatar:** Androgyne, yeux cyan, hoodie noir circuits cyan, マコ sur la poitrine
- **Personality:** Direct, taquine, proactive. Pas une oui-oui. Tech au service de l'humain (Miyazaki).
- **SOUL.md:** Updated at `/home/loops/.hermes/SOUL.md`
