<script lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    onLaunch(() => {
      console.log('App Launch')
    })

    onShow(() => {
      console.log('App Show')
    })

    onHide(() => {
      console.log('App Hide')
    })
  }
})
</script>

<style>
/* #ifdef APP-PLUS-NVUE */
@import url('./tmui/scss/nvue.css');

/* #endif */

/* #ifndef APP-PLUS-NVUE */
@import url('./tmui/scss/noNvue.css');

/* #endif */
</style>
