import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: '/src/pages',
      assets: '/src/assets',
      shared: '/src/shared',
      app: '/src/app',
      modules: 'src/modules'
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "@/path/to/modules.scss";',
  //     }
  //   }
  // }
});
