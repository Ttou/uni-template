import * as Pinia from 'pinia'
import { createSSRApp } from 'vue'

import App from './App.vue'
import tmui from './tmui'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = Pinia.createPinia()

  app.use(pinia)
  app.use(tmui, { autoDark: false } as Tmui.tmuiConfig)

  return {
    app,
    Pinia
  }
}
