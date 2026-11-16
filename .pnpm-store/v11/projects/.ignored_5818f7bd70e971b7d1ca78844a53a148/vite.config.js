import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // 使用相对路径，构建产物可放在任意子目录下直接访问
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // 单文件预览需要把图片、字体等资源全部内联进 HTML
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
    cssCodeSplit: false,
    chunkSizeWarningLimit: 1024,
  },
})
