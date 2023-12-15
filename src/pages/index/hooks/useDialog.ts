import { reactive, toRefs } from 'vue'

export function useDialog() {
  const state = reactive({
    popupRef: {} as UvPopupRef,
    info: {} as UniApp.GetSystemInfoResult
  })

  function handleOpen() {
    uni.getSystemInfo().then(res => {
      state.info = res
      state.popupRef.open()
    })
  }

  return {
    ...toRefs(state),
    handleOpen
  }
}
