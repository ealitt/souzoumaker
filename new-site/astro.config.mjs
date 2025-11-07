import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { remarkObsidian } from './src/lib/remark-obsidian.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.souzoumaker.com',
  output: 'static',
  adapter: cloudflare({
    mode: 'static'
  }),
  integrations: [
    react(),
    mdx()
  ],
  markdown: {
    remarkPlugins: [remarkObsidian],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
