import { resolve } from "node:path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "@primoui/utils",
      fileName: "index",
    },
    rollupOptions: {
      external: ["@sindresorhus/slugify"],
    },
    sourcemap: true,
  },
})
