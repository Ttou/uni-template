import { uniPostcssPlugin } from '@dcloudio/uni-cli-shared'
import uni from '@dcloudio/vite-plugin-uni'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: {
      plugins: [uniPostcssPlugin(), autoprefixer()]
    }
  },
  plugins: [uni()],
  server: {
    port: 8080
  }
})
