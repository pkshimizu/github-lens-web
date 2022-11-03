import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  root: "./src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  server: {
    open: true
  },
  plugins: [
    react(),
    pages({dirs: "./src/pages"})
  ]
})
