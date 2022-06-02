import { ref } from 'vue'

export function useDialog() {
  const dialogRef = ref<ComponentRef>(null)

  function handleOpen() {
    dialogRef.value?.open()
  }

  return {
    dialogRef,
    handleOpen
  }
}
