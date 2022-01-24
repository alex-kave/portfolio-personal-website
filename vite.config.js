import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "./svelte.config";

export default {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/global';`,
      },
    },
  },
  plugins: [
    svelte({
      ...sveltePreprocess,
    }),
  ],
};
