import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import embeds from "astro-embed/integration";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? "https://jwestendorp.github.io"
    : "http://localhost:4321",
  base: process.env.CI ? "zombie-media-archive" : "",
  markdown: {},
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),

    mdx(),
  ],
});
