<template>
  <view class="view">
    <text>内容</text>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  min-height: 100%;
}
</style>
