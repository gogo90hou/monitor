<template>
  <div class="sysSetting">
    <div class="bar">
      <system-bar />
    </div>
    <div class="content">
      <log-manage />
    </div>
  </div>
</template>
<script>
import SystemBar from '@/components/SystemBar';
import logManage from './sysManage/logManage';
export default {
  components: {
    SystemBar,
    logManage
  }
}
</script>
<style lang="scss">
.sysSetting {
  font-size: 0;
  min-height: calc(100vh - 78px);
  .bar {
    width: 200px;
    display: inline-block;
    vertical-align: top;
  }
  .content {
    width: calc(100% - 200px);
    display: inline-block;
    background-color: #1a1c1c;
    min-height: calc(100vh - 78px);
    vertical-align: top;
    font-size: 20px;
  }
}
</style>
