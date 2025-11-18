#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const OUTPUT_DIR = path.join(__dirname, '../downloaded-images');

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Function to extract frontmatter from markdown file
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const frontmatterText = match[1];
  const lines = frontmatterText.split('\n');

  let result = {
    title: '',
    thumbnail: null,
    galleries: {}
  };

  let currentKey = null;
  let currentGallery = null;
  let indentLevel = 0;

  for (let line of lines) {
    const leadingSpaces = line.match(/^(\s*)/)[1].length;
    const trimmed = line.trim();

    if (trimmed.startsWith('title:')) {
      result.title = trimmed.replace('title:', '').trim().replace(/^["']|["']$/g, '');
    } else if (trimmed === 'thumbnail:') {
      currentKey = 'thumbnail';
    } else if (trimmed === 'galleries:') {
      currentKey = 'galleries';
    } else if (currentKey === 'thumbnail' && trimmed.startsWith('url:')) {
      result.thumbnail = trimmed.replace('url:', '').trim().replace(/^["']|["']$/g, '');
    } else if (currentKey === 'galleries') {
      if (leadingSpaces === 2 && trimmed.endsWith(':')) {
        currentGallery = trimmed.replace(':', '');
        result.galleries[currentGallery] = [];
      } else if (currentGallery && trimmed.startsWith('- url:')) {
        const url = trimmed.replace('- url:', '').trim().replace(/^["']|["']$/g, '');
        result.galleries[currentGallery].push(url);
      } else if (currentGallery && trimmed.startsWith('url:')) {
        const url = trimmed.replace('url:', '').trim().replace(/^["']|["']$/g, '');
        result.galleries[currentGallery].push(url);
      }
    }
  }

  return result;
}

// Function to download a file
function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    const file = fs.createWriteStream(filepath);
    protocol.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        downloadFile(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Function to get filename from URL
function getFilenameFromUrl(url, index) {
  // Extract the Google Photos ID or create a unique name
  const match = url.match(/\/([^/=]+)(?:=w\d+-h\d+)?$/);
  if (match) {
    return `${index + 1}-${match[1].substring(0, 20)}.jpg`;
  }
  return `${index + 1}-image.jpg`;
}

// Main function
async function main() {
  console.log('📸 Starting image download...\n');

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
  const manifest = {};

  for (const file of files) {
    const filepath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(filepath, 'utf-8');
    const data = parseFrontmatter(content);

    if (!data) continue;

    const slug = file.replace('.md', '');
    const projectDir = path.join(OUTPUT_DIR, slug);

    // Create project directory
    if (!fs.existsSync(projectDir)) {
      fs.mkdirSync(projectDir, { recursive: true });
    }

    manifest[slug] = {
      title: data.title,
      thumbnail: null,
      galleries: {}
    };

    console.log(`📁 ${data.title || slug}`);

    // Download thumbnail
    if (data.thumbnail) {
      try {
        const filename = 'thumbnail.jpg';
        const destPath = path.join(projectDir, filename);
        await downloadFile(data.thumbnail, destPath);
        manifest[slug].thumbnail = filename;
        console.log(`  ✓ Thumbnail downloaded`);
      } catch (err) {
        console.log(`  ✗ Thumbnail failed: ${err.message}`);
      }
    }

    // Download gallery images
    for (const [galleryName, urls] of Object.entries(data.galleries)) {
      const galleryDir = path.join(projectDir, galleryName);
      if (!fs.existsSync(galleryDir)) {
        fs.mkdirSync(galleryDir, { recursive: true });
      }

      manifest[slug].galleries[galleryName] = [];

      for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        try {
          const filename = getFilenameFromUrl(url, i);
          const destPath = path.join(galleryDir, filename);
          await downloadFile(url, destPath);
          manifest[slug].galleries[galleryName].push(filename);
          console.log(`  ✓ ${galleryName}/${filename}`);
        } catch (err) {
          console.log(`  ✗ ${galleryName}/${i + 1} failed: ${err.message}`);
        }
      }
    }

    console.log('');
  }

  // Write manifest file
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  console.log('✅ Download complete!');
  console.log(`📂 Images saved to: ${OUTPUT_DIR}`);
  console.log(`📋 Manifest saved to: ${path.join(OUTPUT_DIR, 'manifest.json')}`);
}

main().catch(console.error);
