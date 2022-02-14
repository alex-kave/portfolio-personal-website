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
        customElement: false,
      },
      exclude: /\.wc\.svelte$/,
    }),
    svelte({
      ...sveltePreprocess,
      compilerOptions: {
        customElement: true,
      },
      include: /\.wc\.svelte$/,
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
        error: resolve(__dirname, "/error/404.html"),
        cases: resolve(__dirname, "/cases/index.html"),
      },
    },
  },
};
