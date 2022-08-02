import * as Pinia from 'pinia'
// @ts-ignore
import uviewPlus from 'uview-plus'
import { createSSRApp } from 'vue'

import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = Pinia.createPinia()

  app.use(pinia)
  app.use(uviewPlus)

  return {
    app,
    Pinia
  }
}
