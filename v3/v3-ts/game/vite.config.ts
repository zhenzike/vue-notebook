import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, join } from 'path'

import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
  base: './',

  resolve: {
    // 配置路径别名
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
