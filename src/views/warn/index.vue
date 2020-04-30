<template>
  <div>
    <el-table v-if="warnList" :data="warnList" tooltip-effect="dark" style="width: 100%">
      <el-table-column label="网络流水号" prop="netSerial" />
      <el-table-column label="级别" prop="alarmLevel" />
      <el-table-column label="告警名称" prop="alarmName" />
      <el-table-column label="发生时间" prop="occurTime" />
      <el-table-column label="设备名称" prop="deviceName" />
      <el-table-column label="定位信息" prop="locationInfo" />
      <el-table-column label="种类ID" prop="typeId" />
      <el-table-column label="设备流水号" prop="deviceSerial" />
    </el-table>
  </div>
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
