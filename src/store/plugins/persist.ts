import type { PiniaPluginContext } from 'pinia'
import { Persist } from 'sard-uniapp'
import { watch } from 'vue'

declare module 'pinia' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface DefineStoreOptionsBase<S, Store> {
    persist?: {
      pick: (keyof S)[]
      ttl?: number
    }
  }
}

const persist = new Persist('sard')

export function piniaPluginPersist(context: PiniaPluginContext) {
  const {
    store,
    options: { persist: storePersist }
  } = context

  const pickKeys = storePersist?.pick || []
  const ttl = storePersist?.ttl || 0

  const persistKey = `pinia:${store.$id}`

  const localData = persist.get(persistKey) || {}

  store.$patch(localData)

  watch(
    pickKeys.map(key => () => store[key]),
    () => {
      persist.set(
        persistKey,
        Object.fromEntries(pickKeys.map(key => [key, store[key]])),
        ttl
      )
    }
  )
}
