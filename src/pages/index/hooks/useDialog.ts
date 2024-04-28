import { reactive, toRefs } from 'vue'

export function useDialog() {
  const state = reactive({
    dialogVisible: false,
    info: {} as UniApp.GetSystemInfoResult
  })

  function handleOpen() {
    uni.getSystemInfo().then(res => {
      state.info = res
      state.dialogVisible = true
    })
  }

  return {
    ...toRefs(state),
    handleOpen
  }
}
