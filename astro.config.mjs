import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import auth from "auth-astro";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), auth(), db()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: false,
    },
  }),
});