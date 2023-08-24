import { reactive, toRefs } from 'vue'

export function useDialog() {
  const state = reactive({
    popupRef: {} as UvPopupRef
  })

  function handleOpen() {
    state.popupRef.open()
  }

  return {
    ...toRefs(state),
    handleOpen
  }
}
