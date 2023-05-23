<template>
  <tm-app>
    <view class="flex flex-1 flex-col flex-start">
      <view class="logoWrap">
        <image class="logo" src="../../static/logo.png" />
      </view>
      <view class="textWrap">
        <text class="title">{{ title }}</text>
        <text class="count">{{ count }}</text>
        <tm-button class="btn" @click="handleCount">计数</tm-button>
        <tm-button class="btn" @click="handleOpen">弹窗</tm-button>
      </view>
      <tm-drawer :show="show" placement="center" closeable @close="handleClose">
        <view class="dialog">
          <view class="content">
            <text>Hello World</text>
          </view>
        </view>
      </tm-drawer>
    </view>
  </tm-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useCount, useDialog, useInit } from './hooks'

export default defineComponent({
  setup() {
    const initHook = useInit()
    const countHook = useCount()
    const dialogHook = useDialog()

    return {
      ...initHook,
      ...countHook,
      ...dialogHook
    }
  }
})
</script>

<style lang="scss" scoped>
.logoWrap {
  height: 200rpx;
  width: 200rpx;
  margin-top: 40rpx;

  .logo {
    width: 100%;
    height: 100%;
  }
}

.textWrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50rpx;

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }

  .count {
    margin: 20rpx auto;
  }
}

.btn + .btn {
  margin-top: 20rpx;
}

.dialog {
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16rpx;
    font-size: 28rpx;
  }
}
</style>
