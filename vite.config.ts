import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { resolve } from 'path'
import ViteComponents, {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components({
    resolvers: [
      AntDesignVueResolver(),
    ]
  })],
  base: './',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      },
      {
        find: '@c',
        replacement: resolve(__dirname, './src/components')
      },
    ]
  },
  build: {
    // brotliSize: false, //关闭打包计算
    outDir: './docs',
    assetsDir: './',
    // rollupOptions: {
    //   output: {
    //     chunkFileNames: 'static/js/[name]-[hash].js',
    //     entryFileNames: 'static/js/[name]-[hash].js',
    //     assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
    //   }
    // },
    terserOptions: {
      compress: {
        keep_infinity: true
        // drop_console: VITE_DROP_CONSOLE
      }
    }
  }
})
