import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://nopmk.github.io",
  base: "/raczbarni",
  integrations: [tailwind()],
});
