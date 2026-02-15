import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [vue(), tailwindcss()],

  base: mode === "production" ? "/portfolio-landing/" : "/",

  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets"),
      "@styles": resolve(__dirname, "src/styles"),
      "@scripts": resolve(__dirname, "src/scripts"),
    },
  },
}));
