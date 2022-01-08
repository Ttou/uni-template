<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <text class="count">{{ count }}</text>
      <button @click="handleClick">点击</button>
    </view>
  </view>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

import { useMainStore } from '@/store'

export default defineComponent({
  setup() {
    const title = ref('Hello')

    const mainStore = useMainStore()

    const count = computed(() => mainStore.count)

    function handleClick() {
      mainStore.add()
    }

    return {
      title,
      count,
      handleClick
    }
  }
})
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
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
</style>
