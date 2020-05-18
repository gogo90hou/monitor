<template>
  <div>
    <div class="publicheader">
      <h2>中间件监控列表</h2>
      <div class="right-wrapper head-menu-right">
        <el-input type="text" placeholder="输入要搜索的关键字" suffix-icon="el-icon-search" />
        <el-button class="filter-item" type="primary" style="margin-left: 10px;">管理中间件</el-button>
      </div>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="Nginx" name="first">
        <dynamic-table :field-arr="fieldArr" :getters="getters" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="Apache" name="second">Apache</el-tab-pane>
      <el-tab-pane label="Redis" name="third">Redis</el-tab-pane>
      <el-tab-pane label="JVM" name="fourth">JVM</el-tab-pane>
      <el-tab-pane label="ActiveMQ" name="five">ActiveMQ</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {

  data () {
    return {
      getters: 'monitor/soft/list',
      activeName: 'first',
      fieldArr: [
        {
          label: '唯一标识',
          key: 'name',
          formatter: '',
          filters: [{ text: '2016-05-01', value: '2016-05-01' }, { text: '2016-05-02', value: '2016-05-02' }, { text: '2016-05-03', value: '2016-05-03' }, { text: '2016-05-04', value: '2016-05-04' }]
        }, {
          label: '吞吐率',
          key: 'area',
          formatter: ''
        }, {
          label: '并发连接数',
          key: 'runState',
          formatter: ''
        }, {
          label: '持久连接利用率',
          key: 'num',
          formatter: '(num)/(area)'
        }, {
          label: '所在区域',
          key: 'resState',
          formatter: [{
            key: '1',
            label: '正常',
            color: 'highLight'
          }, {
            key: '2',
            label: '缓慢',
            color: 'state3'
          }, {
            key: '3',
            label: '错误',
            color: 'state2'
          }, {
            key: '4',
            label: '非常慢',
            color: 'state1'
          }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '200px',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/detail',
            query: ['id', 'name']
          }, {
            label: '查看详情',
            type: 'button',
            method: 'edit'
          }]
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('monitor/soft/getList')
  },
  methods: {
    edit (data) {
      console.log(data)
    }
  }
}
</script>
<style lang="scss">
.publicheader {
  overflow: hidden;
  padding: 10px 0;
  h2 {
    float: left;
  }
  .right-wrapper {
    float: right;
    width: 50%;
    text-align: right;
    .el-input {
      width: 200px;
    }
  }
}
</style>
