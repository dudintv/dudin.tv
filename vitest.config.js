import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['nuxt-link'].includes(tag),
        },
      },
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});