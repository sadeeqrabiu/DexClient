import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills'


export default defineConfig({
  plugins: [react(), nodePolyfills],
  define: {
    'process.env': process.env
  },
  server: {
    port: 3000
  }
});