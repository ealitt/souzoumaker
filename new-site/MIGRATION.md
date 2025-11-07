# Migration Guide: Jekyll to Astro

This guide will help you migrate your existing Jekyll site to the new Astro-based architecture.

## Overview

**Current (Jekyll):**
- ~33 blog posts (2017-2020)
- Images hosted on Google Photos
- Jekyll layouts and includes
- Bilingual content (English/Japanese)

**New (Astro):**
- Content collections with type safety
- Cloudflare R2 for images
- Obsidian markdown compatibility
- Better performance and flexibility

## Step 1: Content Migration

### Automated Script

Create `scripts/migrate-posts.js`:

```javascript
import fs from 'fs';
import path from 'path';

const oldPostsDir = '../_posts';
const newPostsDir = './src/content/blog';

fs.readdirSync(oldPostsDir).forEach(file => {
  if (!file.endsWith('.markdown')) return;

  const content = fs.readFileSync(path.join(oldPostsDir, file), 'utf-8');

  // Extract frontmatter
  const [, frontmatter, body] = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  // Parse Jekyll frontmatter
  const jekyllData = {};
  frontmatter.split('\n').forEach(line => {
    const [key, ...values] = line.split(':');
    if (key) jekyllData[key.trim()] = values.join(':').trim();
  });

  // Convert to Astro frontmatter
  const astroFrontmatter = `---
title: ${jekyllData.title || '"Untitled"'}
date: ${jekyllData.date || new Date().toISOString().split('T')[0]}
language: ${jekyllData.language || 'english'}
thumbnail:
  url: "${jekyllData.thumbnail?.['thumbnail-url'] || ''}"
  dimensions: [${jekyllData.thumbnail?.dimensions?.join(', ') || '1200, 800'}]
categories: [${jekyllData.categories ? `"${jekyllData.categories}"` : '"project"'}]
---`;

  const newContent = `${astroFrontmatter}\n\n${body}`;
  const newFilename = file.replace('.markdown', '.md');

  fs.writeFileSync(
    path.join(newPostsDir, newFilename),
    newContent
  );

  console.log(`✓ Migrated: ${file} → ${newFilename}`);
});
```

Run it:
```bash
node scripts/migrate-posts.js
```

### Manual Adjustments

After running the script, check each post for:

1. **Image URLs**: Verify Google Photos links still work
2. **Code blocks**: Ensure they're properly formatted
3. **Links**: Update any site-internal links
4. **Custom HTML**: May need conversion to Markdown or components

## Step 2: Image Migration to R2

### Option A: Keep Google Photos Links (Quick)

No action needed! Your existing Google Photos URLs will continue to work.

**Pros:**
- No migration effort
- Immediate deployment

**Cons:**
- Dependent on Google Photos
- Potential future breaking changes
- No control over image optimization

### Option B: Migrate to Cloudflare R2 (Recommended)

**Benefits:**
- Full control over images
- No egress fees
- Better performance
- $1.50-2/month for 100GB

**Steps:**

1. **Create R2 Bucket**
   ```bash
   # Using Wrangler CLI
   npx wrangler r2 bucket create souzoumaker-photos
   ```

2. **Download Images from Google Photos**
   - Use Google Takeout or download individually
   - Organize by post/collection

3. **Upload to R2**
   ```bash
   # Using Wrangler
   npx wrangler r2 object put souzoumaker-photos/2017/bottle-cutter-1.jpg --file ./images/bottle-cutter-1.jpg

   # Or use the dashboard for bulk upload
   ```

4. **Enable Public Access**
   - In R2 dashboard, enable public access for your bucket
   - Or use signed URLs for more control

5. **Update URLs**

   Create `scripts/update-image-urls.js`:

   ```javascript
   import fs from 'fs';
   import path from 'path';

   const R2_PUBLIC_URL = 'https://pub-xxxxxx.r2.dev'; // Your R2 public URL
   const postsDir = './src/content/blog';

   // Map of old Google Photos URLs to new R2 URLs
   const urlMap = {
     'https://lh3.googleusercontent.com/xxx': `${R2_PUBLIC_URL}/2017/bottle-cutter-1.jpg`,
     // ... add more mappings
   };

   fs.readdirSync(postsDir).forEach(file => {
     const filepath = path.join(postsDir, file);
     let content = fs.readFileSync(filepath, 'utf-8');

     Object.entries(urlMap).forEach(([oldUrl, newUrl]) => {
       content = content.replace(oldUrl, newUrl);
     });

     fs.writeFileSync(filepath, content);
   });

   console.log('✓ Updated all image URLs');
   ```

## Step 3: Data Files Migration

Your Jekyll site uses `_data/` for additional images. Convert these to:

### Option A: Move to Content Collections

For post-specific data, embed in frontmatter:

```yaml
---
title: "Kaiten Speaker"
gallery:
  - url: "https://r2-url/image1.jpg"
    category: "thumbnail"
  - url: "https://r2-url/image2.jpg"
    category: "parts"
---
```

### Option B: Keep as JSON

For shared data, create `src/data/`:

```javascript
// src/data/kaiten-speaker.json
[
  {
    "img-url": "https://r2-url/image1.jpg",
    "category": "thumbnail"
  }
]
```

Import in Astro:
```astro
---
import kaitenData from '../data/kaiten-speaker.json';
---
```

## Step 4: Layout Conversion

Your Jekyll layouts map to Astro layouts:

| Jekyll | Astro |
|--------|-------|
| `_layouts/default.html` | `src/layouts/BaseLayout.astro` |
| `_layouts/post.html` | `src/layouts/BlogPost.astro` |
| `_layouts/home.html` | `src/pages/index.astro` |
| `_layouts/about.html` | `src/pages/about.astro` |

Most conversion is already done. Just verify:
- Header content matches
- Footer information is current
- Navigation links are correct

## Step 5: Styling Migration

Your current CSS in `assets/css/` can be:

1. **Merged into global.css**: For site-wide styles
2. **Moved to component styles**: For component-specific CSS
3. **Converted to scoped styles**: In `.astro` files

Example migration:
```css
/* Old: assets/css/style.css */
.project-card { ... }

/* New: In component or global.css */
.project-card { ... }
```

## Step 6: Japanese Content

Your bilingual setup continues to work:

**Jekyll:**
```yaml
language: english
```

**Astro:**
```yaml
language: japanese
```

Filtering already works in `ProjectGrid.astro`:
```astro
const allBlogPosts = await getCollection('blog', ({ data }) => {
  return data.language === 'english';
});
```

To add a Japanese version of the site:
1. Create `/jp/` pages
2. Filter by language
3. Add language switcher in header

## Step 7: Testing Checklist

Before going live:

- [ ] All posts migrated and displaying correctly
- [ ] Images loading properly
- [ ] Internal links working
- [ ] Code blocks rendering with syntax highlighting
- [ ] Mobile responsive design working
- [ ] Dark mode functioning
- [ ] Navigation working
- [ ] About page content updated
- [ ] 404 page exists
- [ ] Favicon added
- [ ] Meta tags/SEO correct

## Step 8: Deployment

### Update DNS

1. Keep your old site running during migration
2. Deploy new site to Cloudflare Pages
3. Test on provided `*.pages.dev` URL
4. When ready, update DNS:
   - Remove GitHub Pages DNS records
   - Add Cloudflare Pages custom domain
5. DNS propagates in ~5 minutes with Cloudflare

### Zero-Downtime Migration

```bash
# 1. Deploy to Pages under custom domain preview
# Test at: https://preview.souzoumaker.pages.dev

# 2. When satisfied, update production
# Cloudflare will automatically handle the switch

# 3. Old GitHub Pages site remains accessible until DNS changes
```

## Step 9: Post-Migration

### Redirect Old URLs

If URL structure changed, add redirects in `public/_redirects`:

```
/old-path/* /new-path/:splat 301
```

### Update External Links

Update links to your site on:
- GitHub profile
- Social media
- Other websites
- Email signature

### Monitor

- Check Cloudflare Pages analytics
- Monitor R2 storage usage
- Verify Core Web Vitals (should be excellent!)

## Rollback Plan

If issues arise:

1. **DNS**: Change DNS back to GitHub Pages (5-minute switchover)
2. **Content**: Old Jekyll site still in git history
3. **Images**: Keep Google Photos URLs during transition period

## Timeline Estimate

- **Automated migration**: 1-2 hours
- **Manual cleanup**: 2-4 hours
- **Image migration to R2**: 2-6 hours (depending on volume)
- **Testing**: 2-3 hours
- **Deployment**: 30 minutes

**Total**: 1-2 days for complete migration

## Getting Help

If you encounter issues:
1. Check build logs in Cloudflare Pages
2. Review Astro docs: https://docs.astro.build
3. Astro Discord: https://astro.build/chat

## Benefits After Migration

- **Performance**: 90+ Lighthouse scores
- **Cost**: $0-2/month (vs GitHub Pages free but with limitations)
- **Flexibility**: Easy to add Three.js experiments
- **Modern DX**: Better developer experience
- **Obsidian**: Direct integration with your notes

Good luck with the migration!
