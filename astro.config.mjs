// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: 'https://giallogialloproject.com',
  image: {
    domains: ["admin.giallogialloproject.com"],
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
