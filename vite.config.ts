import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/styles/_variables.scss" as *; @use "/src/styles/_mixins.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@scss": path.resolve(__dirname, "src/styles"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@images": path.resolve(__dirname, "src/assets/images"),
    },
  },
})
