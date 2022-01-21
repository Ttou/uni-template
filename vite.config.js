import uni from '@dcloudio/vite-plugin-uni'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    modules: {
      generateScopedName: '[local]__[hash:base64:5]'
    }
  },
  plugins: [uni()]
})
