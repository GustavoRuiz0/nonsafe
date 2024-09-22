import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://nonsafeapi-production.up.railway.app',
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
