// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ["es", "en"],
        defaultLocale: "es",
        routing: {
            prefixDefaultLocale: false,
            fallbackType: "rewrite"
        },
        fallback: {
            en: 'es'
        }
    },
    vite: {
        plugins: [tailwindcss()],
    },
    site: "https://ricardoguzman.dev",
    integrations: [sitemap()],
});
