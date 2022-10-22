import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://lumisxh.github.io",
  integrations: [compress(), sitemap(), tailwind({config: { applyBaseStyles: true },}), svelte()]
});