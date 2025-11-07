# Souzou Maker Portfolio

Modern portfolio website built with Astro, optimized for performance and cost-effectiveness.

## Features

- **Astro Islands Architecture**: Zero JavaScript by default, hydrates only interactive components
- **Obsidian Markdown Compatible**: Use wikilinks `[[page]]` and callouts `> [!note]`
- **Multiple Content Types**: Blog posts, research, interactive experiments, photography
- **Cloudflare Integration**: Pages for hosting, R2 for media storage
- **Three.js Ready**: Built-in support for interactive 3D experiments
- **Bilingual Support**: English/Japanese content filtering
- **Cost-Effective**: $0-2/month hosting on Cloudflare

## Tech Stack

- **Framework**: Astro 5.0+
- **Hosting**: Cloudflare Pages (free tier)
- **Storage**: Cloudflare R2 ($0.015/GB/month)
- **Styling**: CSS with CSS Variables (dark mode included)
- **Content**: Markdown/MDX with Obsidian extensions

## Project Structure

```
/
├── src/
│   ├── content/
│   │   ├── blog/          # Maker projects & posts
│   │   ├── research/      # Technical writing
│   │   ├── experiments/   # Three.js & interactive demos
│   │   └── photography/   # Photo collections
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── BlogPost.astro
│   │   └── ExperimentLayout.astro
│   ├── components/
│   │   ├── ProjectGrid.astro
│   │   ├── ImageGallery.astro
│   │   └── ThreeScene.jsx
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── [...dynamic routes]
│   └── styles/
│       └── global.css
├── public/              # Static assets
├── astro.config.mjs     # Astro config
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 22+
- npm 10+

### Installation

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Management

### Blog Posts (Projects)

Create markdown files in `src/content/blog/`:

```markdown
---
title: "My Project"
date: 2024-01-15
language: english
thumbnail:
  url: "https://your-r2-url.com/image.jpg"
  dimensions: [1200, 800]
categories: ["project", "3d-printing"]
---

Your content here...
```

### Research Posts

Create markdown files in `src/content/research/`:

```markdown
---
title: "Technical Analysis"
date: 2024-01-15
description: "Brief summary"
tags: ["web-dev", "performance"]
---

Long-form technical content...
```

### Interactive Experiments

Create MDX files in `src/content/experiments/`:

```mdx
---
title: "Three.js Demo"
date: 2024-01-15
description: "Interactive 3D graphics"
technologies: ["Three.js", "WebGL"]
---

import MyComponent from '../../components/MyComponent.jsx';

<MyComponent client:visible />
```

### Photography

Create markdown files in `src/content/photography/`:

```markdown
---
title: "Collection Name"
date: 2024-01-15
location: "Vermont"
images:
  - url: "https://r2-url.com/photo1.jpg"
    alt: "Description"
    width: 1600
    height: 1200
---
```

## Obsidian Integration

This site fully supports Obsidian markdown:

### Wikilinks

```markdown
Check out [[another-post]] for more info.
```

### Callouts

```markdown
> [!note]
> This is a note callout.

> [!warning]
> Important warning!

> [!tip]
> Helpful tip here.
```

Available callout types: `note`, `warning`, `info`, `tip`, `important`, `caution`

## Cloudflare Setup

### 1. Cloudflare Pages Deployment

1. Push your code to GitHub
2. Go to Cloudflare Dashboard → Pages
3. Connect your repository
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment: Node.js 22

### 2. Cloudflare R2 for Images

1. Create R2 bucket in Cloudflare Dashboard
2. Upload images
3. Enable public access or use signed URLs
4. Update image URLs in content frontmatter

**R2 Pricing:**
- Storage: $0.015/GB/month
- No egress fees (bandwidth is FREE!)
- ~$1-2/month for 100GB of photos

### 3. Custom Domain

1. In Cloudflare Pages, go to Custom domains
2. Add `www.souzoumaker.com`
3. DNS records are automatically configured

## Migration from Jekyll

### Content Migration

Your existing Jekyll posts can be migrated:

1. Copy `_posts/*.markdown` to `src/content/blog/`
2. Update frontmatter format (see examples)
3. Update image URLs to R2 if migrating from Google Photos
4. Run search/replace for Jekyll-specific syntax

### Image Migration

Options for migrating Google Photos links:
1. **Keep existing URLs**: No changes needed (but relies on Google)
2. **Migrate to R2**: Download → upload to R2 → update URLs (recommended)

A migration script is provided in `scripts/migrate-images.js` (see below).

## Adding Three.js Experiments

1. Install Three.js:
   ```bash
   npm install three
   ```

2. Create a React component in `src/components/`
3. Import in MDX with `client:visible` directive
4. The component only loads when scrolled into view

Example:
```jsx
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

export default function MyScene() {
  // Three.js code here
}
```

## Performance

This architecture ensures:
- **Fast Initial Load**: 0KB JS for static pages
- **Lazy Loading**: Interactive components load on-demand
- **Optimized Images**: Automatic lazy loading
- **CDN Distribution**: Cloudflare's global network

## Development

### Adding a New Content Type

1. Add to `src/content/config.ts`
2. Create directory in `src/content/`
3. Create index and dynamic route pages
4. Add to navigation in `BaseLayout.astro`

### Customizing Styles

Edit `src/styles/global.css` to customize:
- Colors (CSS variables in `:root`)
- Typography
- Layout spacing
- Dark mode (in `@media (prefers-color-scheme: dark)`)

## Cost Breakdown

| Service | Usage | Cost |
|---------|-------|------|
| Cloudflare Pages | Hosting + bandwidth | **FREE** |
| Cloudflare R2 | 100GB storage | $1.50/month |
| Domain | souzoumaker.com | ~$10/year |
| **Total** | | **$1.50-2/month** |

## Troubleshooting

### Build Fails

- Check Node.js version (must be 22+)
- Clear cache: `rm -rf .astro node_modules && npm install`

### Images Not Loading

- Verify R2 bucket is public or using signed URLs
- Check CORS settings in R2 bucket

### Wikilinks Not Working

- Ensure remarkObsidian plugin is in `astro.config.mjs`
- Check link format: `[[slug]]` not `[[path/to/file]]`

## License

MIT

## Author

Eammon Littler
- Website: https://www.souzoumaker.com
- Email: souzumaker@gmail.com
