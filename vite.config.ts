import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '@features': path.resolve(__dirname, './src/features'),
      '@infrastructure': path.resolve(__dirname, './src/infrastructure'),
      '@screens': path.resolve(__dirname, './src/screens'),
      '@ui-library': path.resolve(__dirname, './src/ui-library'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
