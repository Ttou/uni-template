<template>
  <tm-app>
    <image class="logo" src="../../static/logo.png" />
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
  </tm-app>
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
.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx;
}

.textWrap {
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
