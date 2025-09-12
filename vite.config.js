// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages үчүн base './', локалдык иштетүүдө да туура иштейт
export default defineConfig({
  base: './', 
  plugins: [react()],
})
