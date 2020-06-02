<template>
  <div>
    <div class="headNav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/system' }">操作系统和数据库</el-breadcrumb-item>
        <el-breadcrumb-item v-if="queryData.type==1">{{ queryData.sysName }}</el-breadcrumb-item>
        <el-breadcrumb-item
          v-if="queryData.type==2"
          :to="{ path: '/system?type=2&filterName='+ queryData.filterName}"
        >{{ queryData.filterName }}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="queryData.type==2">{{ queryData.databaseName }}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button @click="$router.back(-1)">返回</el-button>
    </div>
    <system v-if="queryData.type == 1"></system>
    <oracle v-if="queryData.type == 2 && queryData.filterName==='Oracle'"></oracle>
  </div>
</template>
<script>
import system from '../../monitor_detail/database/system';
import oracle from '../../monitor_detail/database/oracle';
export default {
  components: {
    system,
    oracle
  },
  data () {
    return {
      queryData: ''
    }
  },
  created () {
    this.queryData = this.$route.query;
    this.$store.dispatch('monitor/system/getSysDetail', { actualId: this.$route.query.id });
  }
}
</script>

<style lang="scss" scoped>
</style>

