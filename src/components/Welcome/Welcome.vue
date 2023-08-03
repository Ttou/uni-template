<template>
  <text class="welcome">{{ msg }}</text>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { welcomeProps } from './Welcome.constant'

export default defineComponent({
  name: 'Welcome',
  props: welcomeProps()
})
</script>

<style scoped>
.welcome {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
