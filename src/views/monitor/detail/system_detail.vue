<template>
  <div>
    <div class="headNav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/system' }">操作系统和数据库</el-breadcrumb-item>
        <el-breadcrumb-item>windows</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button @click="$router.back(-1)">返回</el-button>
    </div>
    <system v-if="routeValue.type == 1"></system>
    <oracle v-if="routeValue.type == 2 && routeValue.state == 1"></oracle>
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
      routeValue: ''
    }
  },
  created () {
    this.routeValue = this.$route.query;
    console.log(this.routeValue);
    this.$store.dispatch('monitor/system/getSysDetail', { actualId: this.$route.query.id });
  }
}
</script>

<style lang="scss" scoped>
</style>

