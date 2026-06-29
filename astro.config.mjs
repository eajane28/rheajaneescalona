// @ts-check
import { defineConfig } from "astro/config";
import awsAmplify from "astro-aws-amplify";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  trailingSlash: "always",
  output: "server",
  adapter: awsAmplify(),
});
