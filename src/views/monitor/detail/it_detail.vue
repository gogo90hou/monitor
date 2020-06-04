<template>
  <div>
    <div class="headNav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/system' }">IT设备</el-breadcrumb-item>
        <el-breadcrumb-item>{{ queryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button @click="$router.back(-1)">返回</el-button>
    </div>
    <server v-if="queryData.type == 1"></server>
  </div>
</template>
<script>
import server from '../../monitor_detail/it/server';
export default {
  components: {
    server
  },
  data () {
    return {
      queryData: ''
    }
  },
  created () {
    this.queryData = this.$route.query;
  }
}
</script>

<style lang="scss" scoped>
</style>
