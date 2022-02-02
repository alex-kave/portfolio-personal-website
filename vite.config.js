import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
import sveltePreprocess from "./svelte.config";
import handlebars from "vite-plugin-handlebars";

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
      compilerOptions: {
        customElement: true,
      },
    }),
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        creativePlayground: resolve(
          __dirname,
          "/creativeplayground/index.html"
        ),
        impressum: resolve(__dirname, "/impressum/index.html"),
        datenschutz: resolve(__dirname, "/datenschutz/index.html"),
      },
    },
  },
};
