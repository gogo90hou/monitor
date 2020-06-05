<template>
  <div>
    <div class="publicheader">
      <h2>中间件监控列表</h2>
      <div class="right-wrapper head-menu-right">
        <el-input type="text" placeholder="输入要搜索的关键字" suffix-icon="el-icon-search" />
        <el-button class="filter-item" type="info" style="margin-left: 10px;">管理中间件</el-button>
      </div>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="Apache" name="first">
        <dynamic-table :field-arr="apacheArr" :getters="getters" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="Flume" name="second">
        <dynamic-table :field-arr="flumeArr" :getters="getters" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="Redis" name="third">
        <dynamic-table :field-arr="redisArr" :getters="getters" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="JVM" name="fourth">
        <dynamic-table :field-arr="jvmArr" :getters="getters" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="ActiveMQ" name="five">
        <dynamic-table :field-arr="activeMQArr" :getters="getters" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="IIS" name="six">
        <dynamic-table :field-arr="iisArr" :getters="getters" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="Flink" name="seven">
        <dynamic-table :field-arr="flinkArr" :getters="getters" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="Kafka" name="eight">
        <dynamic-table :field-arr="kafkaArr" :getters="getters" @edit="edit" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {

  data () {
    return {
      getters: 'monitor/soft/list',
      activeName: 'first'
    }
  },
  computed: {
    apacheArr: function () {
      return [
        {
          label: '中间件名称',
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
            path: '/middle_detail?type=Apache',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    },
    flumeArr: function () {
      return [
        {
          label: '中间件名称',
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
            path: '/middle_detail?type=Flume',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    },
    redisArr: function () {
      return [
        {
          label: '中间件名称',
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
            path: '/middle_detail?type=Redis',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    },
    jvmArr: function () {
      return [
        {
          label: '中间件名称',
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
            path: '/middle_detail?type=JVM',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    },
    activeMQArr: function () {
      return [
        {
          label: '中间件名称',
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
            path: '/middle_detail?type=ActiveMQ',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    },
    iisArr: function () {
      return [
        {
          label: '中间件名称',
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
            path: '/middle_detail?type=IIS',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    },
    flinkArr: function () {
      return [
        {
          label: '中间件名称',
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
            path: '/middle_detail?type=Flink',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    },
    kafkaArr: function () {
      return [
        {
          label: '中间件名称',
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
            path: '/middle_detail?type=Kafka',
            query: ['id', 'name'],
            colorType: 'tableBlue'
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
    },
    handleClick () { }
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
