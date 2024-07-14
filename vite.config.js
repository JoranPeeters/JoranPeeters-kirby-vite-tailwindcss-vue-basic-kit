import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import kirby from 'vite-plugin-kirby'

export default ({ mode }) => ({
  root: 'src',
  base: mode === 'development' ? '/' : '/dist/',

  build: {
    outDir: resolve(process.cwd(), 'public/dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(process.cwd(), 'src/main.js')
    }
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },

  plugins: [vue(), kirby()]
})
