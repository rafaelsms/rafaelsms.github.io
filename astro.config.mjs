import { defineConfig } from "astro/config";

// Integrations
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://rafaelsms.com",
  integrations: [tailwind(), sitemap(), robotsTxt()]
});