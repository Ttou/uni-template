<template>
  <view :class="$style.page">
    <image :class="$style.logo" src="../../static/logo.png" />
    <view :class="$style.textArea">
      <text :class="$style.title">{{ title }}</text>
      <text :class="$style.count">{{ count }}</text>
      <tui-button :class="$style.btn" @click="handleCount">计数</tui-button>
      <tui-button :class="$style.btn" @click="handleOpen">弹窗</tui-button>
    </view>
    <uni-popup ref="dialogRef">
      <view :class="$style.dialog">
        <view :class="$style.dialogContent">
          <text>Hello World</text>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { useCount, useDialog } from './hooks'

export default defineComponent({
  setup() {
    const title = ref('Hello UniApp')

    const { ...countHook } = useCount()
    const { ...dialogHook } = useDialog()

    return {
      title,
      ...countHook,
      ...dialogHook
    }
  }
})
</script>

<style module>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx;
}

.textArea {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.count {
  margin: 20rpx auto;
}

.btn {
  width: 250rpx;
}

.btn + .btn {
  margin-top: 20rpx;
}

.dialog {
}

.dialogContent {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400rpx;
  height: 300rpx;
  background-color: #fff;
  border-radius: 16rpx;
  font-size: 28rpx;
}
</style>
