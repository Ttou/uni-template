<template>
  <view class="page">
    <image class="logo" src="../../static/logo.png" />
    <view class="text-wrap">
      <text class="title">{{ title }}</text>
      <text class="count">{{ count }}</text>
      <u-button class="btn" type="info" @click="handleCount">计数</u-button>
      <u-button class="btn" type="info" @click="handleOpen">弹窗</u-button>
    </view>
    <u-popup :show="show" mode="center" @close="handleClose">
      <view class="dialog">
        <view class="content">
          <text>Hello World</text>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

import { useCount, useDialog } from './hooks'

export default defineComponent({
  setup() {
    const state = reactive({
      title: 'Hello UniApp'
    })

    const countHook = useCount()
    const dialogHook = useDialog()

    return {
      ...toRefs(state),
      ...countHook,
      ...dialogHook
    }
  }
})
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin: 200rpx auto 50rpx;
  }

  .text-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .title {
      font-size: 36rpx;
      color: #8f8f94;
    }

    .count {
      margin: 20rpx auto;
    }
  }

  .btn {
    width: 250rpx;
  }

  .btn + .btn {
    margin-top: 20rpx;
  }

  .dialog {
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 400rpx;
      height: 300rpx;
      background-color: #fff;
      border-radius: 16rpx;
      font-size: 28rpx;
    }
  }
}
</style>
