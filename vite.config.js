import { defineConfig } from "vite";

export default defineConfig({
  publicDir: "public",
  base: "/web-core-1_6/",
  build: {
    outDir: "dist",
    cssCodeSplit: true,
    emptyOutDir: true,
    assetsDir: "./",
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
