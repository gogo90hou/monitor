<!--
 * @Author: your name
 * @Date: 2020-05-26 11:15:27
 * @LastEditTime: 2020-05-26 11:25:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monitor\src\views\monitor\sysDetail.vue
-->
<template>
  <div>123</div>
</template>
<script>
export default {
  created () {
    this.$store.dispatch('monitor/system/getSysDetail', { actualId: this.$route.query.id });
  }
}
</script>
