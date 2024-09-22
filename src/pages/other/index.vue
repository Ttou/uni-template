<template>
  <view class="view flexColumnCenter">
    <nut-button type="primary" @click="handleBack">返回</nut-button>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    function handleBack() {
      uni.navigateBack()
    }

    return {
      handleBack
    }
  }
})
</script>

<style lang="scss" scoped>
.view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: $sub-page-height;
}
</style>
