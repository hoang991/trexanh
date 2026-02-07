import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Vital for assets to load correctly on Netlify/GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});