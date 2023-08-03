<template>
  <view class="view">
    <view class="logoWrap">
      <image class="logo" src="@/static/logo.png" />
    </view>
    <view class="textWrap">
      <Welcome :msg="title" />
      <text class="count">{{ count }}</text>
      <nut-button custom-class="btn" type="primary" @click="handleCount">
        计数
      </nut-button>
      <nut-button custom-class="btn" type="primary" @click="handleOpen">
        弹窗
      </nut-button>
    </view>
    <nut-popup v-model:visible="show" closeable>
      <view class="dialog">
        <view class="content">
          <text>Hello World</text>
        </view>
      </view>
    </nut-popup>
  </view>
</template>

<script lang="ts">
import { onLoad, onShow } from '@dcloudio/uni-app'
import { defineComponent } from 'vue'

import { useCount, useDialog, useInit } from './hooks'

export default defineComponent({
  setup() {
    const initHook = useInit()
    const countHook = useCount()
    const dialogHook = useDialog()

    onLoad(options => {
      console.log('page load', options)
    })

    onShow(options => {
      console.log('page show', options)
    })

    return {
      ...initHook,
      ...countHook,
      ...dialogHook
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

    .count {
      margin: 20rpx auto;
    }
  }

  :deep(.btn + .btn) {
    margin-top: 20rpx;
  }

  .dialog {
    width: 400rpx;
    height: 200rpx;

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      font-size: 28rpx;
    }
  }
}
</style>
