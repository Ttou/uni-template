import uni from '@dcloudio/vite-plugin-uni'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: [
        ...(mode === 'production'
          ? [
              {
                find: 'vue-types',
                replacement: 'vue-types/shim'
              }
            ]
          : [])
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "uniapp-nutui/styles/variables.scss";'
        }
      }
    },
    plugins: [uni()],
    server: {
      port: 8080
    }
  }
})
