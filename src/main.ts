import * as Pinia from 'pinia'
import { createSSRApp } from 'vue'

import App from './App.vue'
import uvUI from './uni_modules/uv-ui-tools'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = Pinia.createPinia()

  app.use(pinia)
  app.use(uvUI)

  uni.$uv.setConfig({
    config: {
      unit: 'rpx'
    }
  })

  return {
    app,
    Pinia
  }
}
