<template>
  <div class="sysSetting">
    <div class="bar">
      <system-bar />
    </div>
    <div class="content">
      <log-manage v-if="currentRoute === '/logManage'" />
      <version-manage v-if="currentRoute === '/versionManage'" />
      <sys-install v-if="currentRoute === '/sysInstall'" />
    </div>
  </div>
</template>
<script>
import SystemBar from '@/components/SystemBar';
import LogManage from './sysManage/LogManage';
import VersionManage from './sysManage/VersionManage';
import SysInstall from './sysManage/SysInstall';
export default {
  components: {
    SystemBar,
    VersionManage,
    SysInstall,
    LogManage
  },
  data () {
    return {
      currentRoute: this.$route.path
    }
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
