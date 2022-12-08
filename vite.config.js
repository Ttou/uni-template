import uni from '@dcloudio/vite-plugin-uni'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [uni(), eslint(), stylelint()],
  server: {
    port: 8080
  }
})
