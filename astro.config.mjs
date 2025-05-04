import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @ts-check
export default defineConfig(({
  /** @type {import('astro').AstroUserConfig} */ // Comment out "renderers: []" to enable Astro's default component support.
  renderers: ["@astrojs/renderer-svelte"],

  integrations: [svelte()],
}));