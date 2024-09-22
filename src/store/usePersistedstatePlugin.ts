import type { Pinia } from 'pinia'
import PiniaPersistedstatePlugin, {
  type StorageLike
} from 'pinia-plugin-persistedstate'

export function usePersistedstatePlugin(pinia: Pinia) {
  pinia.use(PiniaPersistedstatePlugin)
}

export const customStorage: StorageLike = {
  getItem(key) {
    return uni.getStorageSync(key)
  },
  setItem(key, value) {
    uni.setStorageSync(key, value)
  }
}
