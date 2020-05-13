<template>
  <div class="sysSetting">
    <div class="bar">
      <system-bar />
    </div>
    <div class="content">
      <div :is="componentName" />
    </div>
  </div>
</template>
<script>
import SystemBar from '@/components/SystemBar';
import LogManage from './sysManage/LogManage';
import VersionManage from './sysManage/VersionManage';
import SysInstall from './sysManage/SysInstall';
import Gateway from './deviceLayout/gateway';
import CloudManage from './deviceLayout/cloudManage';
import ItManage from './deviceLayout/itManage';
import Safety from './deviceLayout/safety';
import SoftManage from './deviceLayout/softManage';
import DatabaseManage from './deviceLayout/databaseManage';
export default {
  components: {
    SystemBar,
    VersionManage,
    SysInstall,
    LogManage,
    Gateway,
    CloudManage,
    ItManage,
    Safety,
    SoftManage,
    DatabaseManage
  },
  data () {
    return {
      currentRoute: this.$route.path,
      componentName: this.$route.path.replace('/', '').firstUpperCase()
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
    background-color: #fff;
    min-height: calc(100vh - 78px);
    vertical-align: top;
    font-size: 20px;
    padding: 50px 30px;
  }
}
</style>
