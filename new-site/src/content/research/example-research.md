---
title: "Astro vs Traditional SSGs"
date: 2024-01-12
description: "Comparing modern static site generators for portfolio sites"
authors: ["Example Author"]
firstAuthor: false
venue: "Example Venue"
year: 2024
tags: ["web-development", "performance", "astro"]
draft: true
---

This is an example research post demonstrating long-form technical writing.

## Why Astro?

Astro's **Islands Architecture** is perfect for portfolios that mix static content with interactive elements:

> [!tip]
> Islands Architecture means your site ships zero JavaScript by default, only hydrating interactive components when needed.

### Performance Comparison

| Framework | Initial JS | Build Time | Learning Curve |
|-----------|-----------|------------|----------------|
| Astro | 0KB | Fast | Low |
| Next.js | ~80KB | Moderate | Moderate |
| Gatsby | ~150KB | Slow | High |

## Real-World Benefits

For a portfolio with:
- 30 blog posts
- 5 interactive Three.js experiments
- Photography gallery

**Astro advantage:**
- Blog posts: 0KB JS (pure HTML/CSS)
- Experiments: JS only loads when visible
- Total bundle: ~50KB (vs 150KB+ with React-based SSGs)

## Code Example

```astro
---
// This runs at build time (server)
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---

<!-- Pure HTML/CSS by default -->
<ul>
  {posts.map(post => (
    <li><a href={`/blog/${post.slug}`}>{post.data.title}</a></li>
  ))}
</ul>
```

This approach keeps your portfolio fast and cost-effective!
