import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/webpack'; // Import the svgr plugin


export default defineConfig({
  plugins: [
    react(),
    ],
  resolve: {
    alias: {
      // Define aliases to resolve file paths
      '@': '/src',
      // Add more aliases as needed
    },
  },
  
});
