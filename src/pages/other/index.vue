<template>
  <view class="view">
    <view class="btn">
      <sar-button type="default" @click="handleBack">返回</sar-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
function handleBack() {
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.view {
  .btn {
    margin-top: 20rpx;
  }
}
</style>
