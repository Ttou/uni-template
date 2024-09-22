import { onLoad } from '@dcloudio/uni-app'
import { reactive, toRefs } from 'vue'

export function useInit() {
  const state = reactive({
    title: '- -'
  })

  function init() {
    uni.showLoading({ title: '加载中...' })

    setTimeout(() => {
      state.title = 'Hello UniApp'
      uni.hideLoading()
    }, 1500)
  }

  onLoad(() => {
    init()
  })

  return {
    ...toRefs(state)
  }
}
