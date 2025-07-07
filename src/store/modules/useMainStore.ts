import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

export const useMainStore = defineStore(
  'main',
  () => {
    const state = reactive({
      token: ''
    })

    return {
      ...toRefs(state)
    }
  },
  {
    persist: {
      pick: ['token']
    }
  }
)
