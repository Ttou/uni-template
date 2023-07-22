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

<style lang="scss">
/* stylelint-disable-next-line import-notation */
@import 'uniapp-nutui/styles/index';
</style>
