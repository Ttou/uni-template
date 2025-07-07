<template>
  <view class="view">
    <view class="wrap">
      <Welcome msg="Hello UniApp" />
    </view>
    <view class="btn">
      <sar-button type="default" @click="handleJump">跳转</sar-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onHide, onLoad, onShow } from '@dcloudio/uni-app'

function handleJump() {
  uni.navigateTo({ url: '/pages/other/index' })
}

onLoad(options => {
  console.log('page load', options)
})

onShow(options => {
  console.log('page show', options)
})

onHide(() => {
  console.log('Page Hide')
})
</script>

<style lang="scss" scoped>
.view {
  .wrap {
    display: flex;
    justify-content: center;
  }

  .btn {
    width: 200rpx;
    margin: 20rpx auto 0;
  }
}
</style>
