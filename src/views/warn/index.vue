<!--
 * @Author: your name
 * @Date: 2020-04-27 17:00:58
 * @LastEditTime: 2020-05-20 14:26:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \monitor\src\views\warn\index.vue
-->
<template>
  <div>123</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapGetters([
      'warnList'
    ])
  }
}
</script>
