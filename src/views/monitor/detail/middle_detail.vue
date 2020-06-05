<template>
  <div>
    <div class="headNav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/middle' }">中间件监控列表</el-breadcrumb-item>
        <el-breadcrumb-item>{{ queryData.type }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ queryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button @click="$router.back(-1)">返回</el-button>
    </div>
    <Apache v-if="queryData.type == 'Apache'"></Apache>
    <Flume v-if="queryData.type == 'Flume'"></Flume>
    <Redis v-if="queryData.type == 'Redis'"></Redis>
    <JVM v-if="queryData.type == 'JVM'"></JVM>
    <ActiveMQ v-if="queryData.type == 'ActiveMQ'"></ActiveMQ>
    <IIS v-if="queryData.type == 'IIS'"></IIS>
    <Flink v-if="queryData.type == 'Flink'"></Flink>
    <Kafka v-if="queryData.type == 'Kafka'"></Kafka>
  </div>
</template>
<script>
import Apache from '../../monitor_detail/middle/apache.vue';
import Flume from '../../monitor_detail/middle/flume';
import Redis from '../../monitor_detail/middle/redis';
import JVM from '../../monitor_detail/middle/jvm';
import ActiveMQ from '../../monitor_detail/middle/activeMQ';
import IIS from '../../monitor_detail/middle/iis';
import Flink from '../../monitor_detail/middle/flink';
import Kafka from '../../monitor_detail/middle/kafka';
export default {
  components: {
    Apache,
    Flume,
    Redis,
    JVM,
    ActiveMQ,
    IIS,
    Flink,
    Kafka
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
