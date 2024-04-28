<template>
  <view class="view flexColumnCenter">
    <view class="logoWrap">
      <image class="logo" src="@/static/logo.png" />
    </view>
    <view class="textWrap">
      <Welcome :msg="title" />
      <view class="count">{{ count }}</view>
      <view class="btn">
        <wd-button type="primary" @click="handleCount">计数</wd-button>
      </view>
      <view class="btn">
        <wd-button type="primary" @click="handleOpen">弹窗</wd-button>
      </view>
      <view class="btn">
        <wd-button type="primary" @click="handleJump">跳转</wd-button>
      </view>
    </view>
    <wd-popup v-model="dialogVisible" closable :safeAreaInsetBottom="false">
      <view class="dialog">
        <view class="content">
          <wd-cell-group :border="false" customStyle="width: 100%">
            <wd-cell title="设备类型" :value="info.deviceType"></wd-cell>
            <wd-cell title="浏览器类型" :value="info.browserName"></wd-cell>
            <wd-cell title="浏览器版本" :value="info.browserVersion"></wd-cell>
          </wd-cell-group>
        </view>
      </view>
    </wd-popup>
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
  min-height: $page-height;

  .logoWrap {
    height: 200rpx;
    width: 200rpx;
    padding: 20rpx;
    margin: 0 auto;
    box-sizing: border-box;

    .logo {
      width: 100%;
      height: 100%;
    }
  }

  .textWrap {
    align-items: center;
    margin-top: 50rpx;
    text-align: center;

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
