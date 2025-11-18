/**
 * Migration script: Jekyll → Astro  
 * No external dependencies needed
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const JEKYLL_POSTS_DIR = path.resolve(__dirname, '../../_posts');
const JEKYLL_DATA_DIR = path.resolve(__dirname, '../../_data');
const ASTRO_BLOG_DIR = path.resolve(__dirname, '../src/content/blog');

if (!fs.existsSync(ASTRO_BLOG_DIR)) fs.mkdirSync(ASTRO_BLOG_DIR, { recursive: true });

function parseSimpleYAML(yamlContent) {
  const items = [];
  const lines = yamlContent.split('\n');
  let currentItem = null;
  for (const line of lines) {
    if (line.match(/^-\s+name:/)) {
      if (currentItem) items.push(currentItem);
      currentItem = {};
      const nameMatch = line.match(/name:\s*"([^"]*)"/);
      if (nameMatch) currentItem.name = nameMatch[1];
    } else if (currentItem) {
      const catMatch = line.match(/category:\s*"([^"]*)"/);
      if (catMatch) currentItem.category = catMatch[1];
      const urlMatch = line.match(/img-url:\s*"([^"]*)"/);
      if (urlMatch) currentItem['img-url'] = urlMatch[1];
    }
  }
  if (currentItem && currentItem['img-url']) items.push(currentItem);
  return items;
}

function convertFrontmatter(jekyllFrontmatter, imageGalleries = {}) {
  const titleMatch = jekyllFrontmatter.match(/title:\s*"([^"]*)"/);
  const dateMatch = jekyllFrontmatter.match(/date:\s*(\d{4}-\d{2}-\d{2})/);
  const langMatch = jekyllFrontmatter.match(/language:\s*(\w+)/);
  const catMatch = jekyllFrontmatter.match(/categories:\s*(\w+)/);
  const thumbnailMatch = jekyllFrontmatter.match(/thumbnail:\s*\n\s+dimensions:\s*\n\s+-\s+(\d+)\s*\n\s+-\s+(\d+)\s*\n\s+thumbnail-url:\s+"([^"]+)"/);
  
  const title = titleMatch ? titleMatch[1] : 'Untitled';
  const date = dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];
  const language = langMatch ? langMatch[1] : 'english';
  const categories = catMatch ? [catMatch[1]] : ['project'];
  
  let frontmatter = `---
title: ${JSON.stringify(title)}
date: ${date}
language: ${language}
categories: ${JSON.stringify(categories)}
draft: false`;

  if (thumbnailMatch) {
    const [, width, height, url] = thumbnailMatch;
    frontmatter += `
thumbnail:
  url: ${JSON.stringify(url)}
  dimensions: [${width}, ${height}]`;
  }

  if (Object.keys(imageGalleries).length > 0) {
    frontmatter += '\ngalleries:';
    for (const [category, images] of Object.entries(imageGalleries)) {
      frontmatter += `\n  ${category}:`;
      images.forEach(img => {
        frontmatter += `\n    - url: ${JSON.stringify(img['img-url'])}\n      alt: ${JSON.stringify(img.name || '')}`;
      });
    }
  }
  
  frontmatter += '\n---';
  return frontmatter;
}

function loadImageData(slug) {
  const dataFile = path.join(JEKYLL_DATA_DIR, `${slug.replace(/-/g, "_")}.yml`);
  if (!fs.existsSync(dataFile)) return {};
  try {
    const yamlContent = fs.readFileSync(dataFile, 'utf-8');
    const images = parseSimpleYAML(yamlContent);
    const galleries = {};
    images.forEach(img => {
      const category = img.category || 'default';
      if (!galleries[category]) galleries[category] = [];
      galleries[category].push(img);
    });
    return galleries;
  } catch (error) {
    return {};
  }
}

function convertContent(content) {
  let converted = content;

  // Remove Jekyll liquid gallery loops
  converted = converted.replace(/{%\s*for\s+img\s+in\s+site\.data\.\w+\s*%}[\s\S]*?{%\s*endfor\s*%}/g, '');

  // Remove other Jekyll liquid tags
  converted = converted.replace(/{%\s*assign\s+.*?%}/g, '');
  converted = converted.replace(/{{\s*.*?\s*}}/g, '');

  // Remove slide-gallery divs and controls
  converted = converted.replace(/<div[^>]*class="slide-gallery"[^>]*>/g, '');
  converted = converted.replace(/<div[^>]*id="[^"]*"[^>]*class="slide-gallery"[^>]*>/g, '');
  converted = converted.replace(/<ul[^>]*class="controls"[^>]*>[\s\S]*?<\/ul>/g, '');

  // Remove standalone gallery img tags (these are now in frontmatter)
  converted = converted.replace(/<img[^>]*class="slides"[^>]*>/g, '');

  // Remove empty divs
  converted = converted.replace(/<div>\s*<\/div>/g, '');

  // Remove main tags
  converted = converted.replace(/<main>/g, '');
  converted = converted.replace(/<\/main>/g, '');

  // Clean up excessive whitespace
  converted = converted.replace(/\n\s*\n\s*\n+/g, '\n\n');

  return converted.trim();
}

function getSlugFromFilename(filename) {
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.markdown$/, '');
}

function migrateAllPosts() {
  if (!fs.existsSync(JEKYLL_POSTS_DIR)) {
    console.error(`❌ Jekyll posts directory not found: ${JEKYLL_POSTS_DIR}`);
    process.exit(1);
  }
  const files = fs.readdirSync(JEKYLL_POSTS_DIR);
  let migrated = 0;
  let skipped = 0;
  
  files.forEach(file => {
    if (!file.endsWith('.markdown')) {
      skipped++;
      return;
    }
    try {
      const filepath = path.join(JEKYLL_POSTS_DIR, file);
      const content = fs.readFileSync(filepath, 'utf-8');
      const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      if (!match) {
        skipped++;
        return;
      }
      const [, frontmatter, body] = match;
      const slug = getSlugFromFilename(file);
      const galleries = loadImageData(slug);
      const astroFrontmatter = convertFrontmatter(frontmatter, galleries);
      const astroContent = convertContent(body);
      const astroPost = `${astroFrontmatter}\n\n${astroContent}`;
      const outputFile = path.join(ASTRO_BLOG_DIR, `${slug}.md`);
      fs.writeFileSync(outputFile, astroPost);
      const galleryCount = Object.keys(galleries).length;
      const galleryInfo = galleryCount > 0 ? ` (${galleryCount} galleries)` : '';
      console.log(`✓ ${file} → ${slug}.md${galleryInfo}`);
      migrated++;
    } catch (error) {
      console.error(`✗ Error migrating ${file}:`, error.message);
      skipped++;
    }
  });
  
  console.log(`\n📊 Migration complete!`);
  console.log(`   ✓ Migrated: ${migrated} posts`);
  console.log(`   ⚠ Skipped: ${skipped} files`);
}

console.log('🚀 Starting Jekyll → Astro migration...\n');
migrateAllPosts();
