import * as Pinia from 'pinia'
import { createSSRApp } from 'vue'

import App from './App.vue'
import { piniaPluginPersist } from './store/plugins/persist'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = Pinia.createPinia()

  pinia.use(piniaPluginPersist)

  app.use(pinia)

  return {
    app,
    Pinia
  }
}
