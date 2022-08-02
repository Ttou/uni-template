import { ref } from 'vue'

export function useDialog() {
  const show = ref(false)

  function handleOpen() {
    show.value = true
  }

  function handleClose() {
    show.value = false
  }

  return {
    show,
    handleOpen,
    handleClose
  }
}
