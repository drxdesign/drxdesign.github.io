import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://drxdesign.github.io',
  // base: '/',  ← leave this out for a username repo
});