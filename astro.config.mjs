import { defineConfig } from 'astro/config'
export default defineConfig({
  site: 'https://superzero17.github.io',
  base: '/my-astro-website',
  renderers: ["@astrojs/renderer-svelte"],
})