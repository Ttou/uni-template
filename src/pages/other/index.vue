<template>
  <view class="view flexColumnCenter">
    <text>内容</text>
    <view class="btn">
      <wd-button type="primary" @click="handleBack">返回</wd-button>
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
  min-height: $sub-page-height;

  .btn {
    margin-top: 20rpx;
  }
}
</style>
