<template>
  <div class="body-content">
    <div class="head-menu">
      <div class="head-menu-left">
        <span class="head-menu-title">云平台监控列表</span>
      </div>
      <div class="head-menu-right">
        <el-input
          v-model="listQuery.serachName"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="handleSerchKey"
        >
          <i slot="suffix" class="el-input__icon el-icon-search" />
        </el-input>
        <el-button
          v-waves
          class="filter-item"
          type="primary"
          style="margin-left: 10px;"
          @click="handleSerchKey"
        >管理云平台</el-button>
        <el-button
          v-waves
          class="filter-item"
          type="primary"
          style="margin-left: 10px;"
          @click="handleSerchKey"
        >管理</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 列表查询
      listQuery: {
        page: 1,
        limit: 20,
        total: 0,
        searchEnvironmentId: '',
        serachName: '请输入要搜索的关键字'
      }
    }
  },
  created: {},
  methods: {
    handleSerchKey () {

    }
  }
}
</script>

<style scoped>
@import '~@/styles/element-ui.scss';
.monitor .content {
  padding: 0;
}
.body-content {
  border-width: 0px;
  width: 100%;
  height: 400px;
  background: inherit;
  border: none;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.head-menu-left {
  float: left;
}
.head-menu-right {
  float: right;
}
.head-menu-title {
  font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
  font-weight: 650;
  font-style: normal;
  font-size: 18px;
  color: #bdc8c8;
}
</style>
