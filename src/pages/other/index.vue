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
  align-items: center;
  justify-content: center;
  min-height: $sub-page-height;

  .btn {
    margin-top: 20rpx;
  }
}
</style>
