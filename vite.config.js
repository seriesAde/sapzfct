import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: 'sapzfct',
  build: {
    outDir: 'docs'     // 👈 build output goes into /docs
  }
})
