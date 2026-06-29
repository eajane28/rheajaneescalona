// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from '@astrojs/cloudflare';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  output: "server",
  adapter: cloudflare(),
});
