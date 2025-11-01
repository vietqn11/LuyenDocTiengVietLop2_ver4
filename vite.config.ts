import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@google/genai',
        'react',
        'react-dom',
        /^react\//,
        /^react-dom\//,
      ]
    }
  }
});
