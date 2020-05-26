<!--
 * @Author: your name
 * @Date: 2020-05-12 09:27:09
 * @LastEditTime: 2020-05-26 11:20:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monitor\src\views\monitor\index.vue
-->

<template>
  <div class="monitor">
    <div class="bar">
      <monitor-bar />
    </div>
    <div class="content">
      <it v-if="currentRoute == '/it'" />
      <middlePage v-if="currentRoute == '/middle'" />
      <cloud v-if="currentRoute == '/cloud'" />
      <monitor v-if="currentRoute == '/monitor'" />
      <soft v-if="currentRoute == '/soft'" />
      <system v-if="currentRoute == '/system'" />
      <systemDetail v-if="currentRoute == '/system_detail'" />
    </div>
  </div>
</template>
<script>
import MonitorBar from '@/components/MonitorBar';
import it from './it';
import middlePage from './middlePage';
import cloud from './cloud';
import monitor from './monitor';
import soft from './soft';
import system from './system';
import systemDetail from './sysDetail';
export default {
  components: {
    MonitorBar,
    it,
    middlePage,
    cloud,
    monitor,
    soft,
    system,
    systemDetail
  },
  data () {
    return {
      currentRoute: this.$route.path
    }
  }
}
</script>
<style lang="scss">
.monitor {
  font-size: 0;
  background-color: #eff0f5;
  .bar {
    display: inline-block;
    width: 120px;
    vertical-align: top;
    font-size: 14px;
  }
  .content {
    width: calc(100% - 120px);
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    padding: 50px 30px;
    box-sizing: border-box;
  }
}
</style>
