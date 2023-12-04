<template>
  <view class="view">
    <text>内容</text>
    <view class="btn">
      <uv-button type="primary" @click="handleBack">返回</uv-button>
    </view>
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
  flex-flow: column nowrap;
  min-height: 100%;

  .btn {
    margin-top: 20rpx;
  }
}
</style>
