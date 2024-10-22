<script lang="ts">
import { onShow } from '@dcloudio/uni-app'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    onShow(options => {
      console.log('app show', options)
    })
  }
})
</script>

<style lang="css">
@import './theme.css';
</style>
