<template>
  <div>
    <div class="publicheader">
      <h2>IT设备监控列表</h2>
      <div class="right-wrapper">
        <el-input type="text" placeholder="输入要搜索的关键字" suffix-icon="el-icon-search" />
        <el-button>管理软件</el-button>
      </div>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="服务器" name="first">服务器</el-tab-pane>
      <el-tab-pane label="交换机" name="second">交换机</el-tab-pane>
      <el-tab-pane label="防火墙" name="third">防火墙</el-tab-pane>
      <el-tab-pane label="存储" name="fourth">存储</el-tab-pane>
    </el-tabs>
    <dynamic-table :field-arr="fieldArr" :getters="getters" @edit="edit" />
  </div>
</template>
<script>
import DynamicTable from '@/components/DynamicTable/index'
export default {
  components: {
    DynamicTable
  },

  data () {
    return {
      getters: 'monitor/soft/list',
      fieldArr: [
        {
          label: '应用软件名称',
          key: 'name',
          formatter: '',
          filters: [{ text: '2016-05-01', value: '2016-05-01' }, { text: '2016-05-02', value: '2016-05-02' }, { text: '2016-05-03', value: '2016-05-03' }, { text: '2016-05-04', value: '2016-05-04' }]
        }, {
          label: '所在区域',
          key: 'area',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runState',
          formatter: ''
        }, {
          label: '进程数',
          key: 'num',
          formatter: '(num)/(area)'
        }, {
          label: '响应状态',
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
          label: '响应时间',
          key: 'time',
          formatter: ''
        }, {
          label: '请求异常原因',
          key: 'reason',
          formatter: ''
        }, {
          label: '进程异常数',
          key: 'err',
          formatter: ''
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
