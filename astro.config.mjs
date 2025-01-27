// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
const DIRECTUS_URL = import.meta.env.DIRECTUS_URL || "https://admin.giallogialloproject.com";
const SITE_URL = import.meta.env.SITE_URL || 'https://giallogialloproject.com';

export default defineConfig({
  site: SITE_URL,
  image: {
    domains: [DIRECTUS_URL.replace('https://', '').replace('http://', '')],
    remotePatterns: [{ protocol: "https" }, { protocol: "http" }],
  },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
