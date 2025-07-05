<template>
  <text class="welcome">{{ msg }}</text>
</template>

<script lang="ts" setup>
import { welcomeProps } from './Welcome.define'

defineProps(welcomeProps())
</script>

<style scoped>
.welcome {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
