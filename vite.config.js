// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import the 'path' module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Set up the import alias for '@/'.
      // This maps '@' to the absolute path of your 'src' directory.
      '@': path.resolve(__dirname, './src'),
    },
  },
});