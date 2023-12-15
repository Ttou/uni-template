<template>
  <view class="view">
    <view class="logoWrap">
      <image class="logo" src="@/static/logo.png" />
    </view>
    <view class="textWrap">
      <Welcome :msg="title" />
      <text class="count">{{ count }}</text>
      <view class="btn">
        <uv-button type="primary" @click="handleCount">计数</uv-button>
      </view>
      <view class="btn">
        <uv-button type="primary" @click="handleOpen">弹窗</uv-button>
      </view>
      <view class="btn">
        <uv-button type="primary" @click="handleJump">跳转</uv-button>
      </view>
    </view>
    <uv-popup ref="popupRef" closeable>
      <view class="dialog">
        <view class="content">
          <uv-cell-group :border="false" customStyle="width: 100%">
            <uv-cell title="设备类型" :value="info.deviceType"></uv-cell>
            <uv-cell title="浏览器类型" :value="info.browserName"></uv-cell>
            <uv-cell title="浏览器版本" :value="info.browserVersion"></uv-cell>
          </uv-cell-group>
        </view>
      </view>
    </uv-popup>
  </view>
</template>

<script lang="ts">
import { onHide, onLoad, onShow } from '@dcloudio/uni-app'
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

    onHide(() => {
      console.log('Page Hide')
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
      margin-top: 20rpx;
    }

    .btn {
      margin-top: 20rpx;
    }
  }

  .dialog {
    width: 400rpx;

    .content {
      padding: 40rpx 0;
    }
  }
}
</style>
