import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), svelte()],
  output: "server",
  adapter: vercel()
});