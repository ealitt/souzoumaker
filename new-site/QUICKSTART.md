# Quick Start Guide

Get your Astro site running in 5 minutes!

## 1. Install Dependencies

```bash
cd new-site
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

Visit http://localhost:4321

## 3. Create Your First Post

Create a file in `src/content/blog/my-first-post.md`:

```markdown
---
title: "My First Astro Post"
date: 2024-01-15
language: english
thumbnail:
  url: "https://via.placeholder.com/800x600"
  dimensions: [800, 600]
categories: ["project"]
draft: false
---

# Hello Astro!

This is my first post using Astro and Cloudflare Pages.

> [!note]
> Obsidian-style callouts work great!

Check out [[another-post]] using wikilinks.
```

## 4. Build for Production

```bash
npm run build
```

Output will be in `dist/` directory.

## 5. Deploy to Cloudflare Pages

### Option A: Via Git

1. Push to GitHub
2. Go to Cloudflare Dashboard → Pages
3. Connect repository
4. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
   - Node version: 22

### Option B: Direct Upload

```bash
npm run build
npx wrangler pages deploy dist
```

## What's Next?

- Read [README.md](README.md) for full documentation
- See [MIGRATION.md](MIGRATION.md) to migrate from Jekyll
- Check example content in `src/content/`
- Customize styles in `src/styles/global.css`

## Common Tasks

### Add a Page

Create `src/pages/my-page.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="My Page">
  <h1>Hello!</h1>
</BaseLayout>
```

### Add a Three.js Experiment

1. Install Three.js:
   ```bash
   npm install three
   ```

2. Create experiment in `src/content/experiments/my-demo.mdx`

3. Import and use your React component with `client:visible`

### Customize Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --color-accent: #your-color;
  --color-bg: #your-bg;
}
```

## Troubleshooting

**Build errors?**
- Clear cache: `rm -rf .astro node_modules && npm install`
- Check Node.js version: `node -v` (should be 22+)

**Images not showing?**
- Check URL format in frontmatter
- Verify image URLs are accessible

**Wikilinks not working?**
- Ensure `remarkObsidian` is in `astro.config.mjs`
- Format: `[[slug]]` not `[[path/to/file]]`

## Resources

- [Astro Docs](https://docs.astro.build)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- [Cloudflare R2 Docs](https://developers.cloudflare.com/r2)

Happy building! 🚀
