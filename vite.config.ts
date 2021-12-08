import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // brotliSize: false, //关闭打包计算
    outDir: '../docs',
    assetsDir: './',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    },
    terserOptions: {
      compress: {
        keep_infinity: true
        // drop_console: VITE_DROP_CONSOLE
      }
    }
  }
})
