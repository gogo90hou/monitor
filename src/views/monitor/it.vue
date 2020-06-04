<template>
  <div>
    <div class="body-content"><HeadMenu title="IT设备监控列表" :options="options" :search="true" @getValue="searchKey" @getSelectId="selectIdHandle" /></div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="服务器" name="first">
        <dynamic-table :field-arr="fieldArr" :getters="getters" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="交换机" name="second">
        <dynamic-table :field-arr="switchesFieldArr" :getters="switchesGetters" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="防火墙" name="third">防火墙</el-tab-pane>
      <el-tab-pane label="存储" name="four">存储</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      getters: 'monitor/it/list',
      switchesGetters: 'monitor/it/switchesList',
      activeName: 'first',
      options: [{ selectId: '1', label: '锦江监狱' }, { selectId: '2', label: '川北监狱' }, { selectId: '3', label: '川西监狱' }],
      fieldArr: [
        {
          label: '服务器名称',
          key: 'name',
          formatter: '',
          filters: [{ text: '2016-05-01', value: '2016-05-01' }, { text: '2016-05-02', value: '2016-05-02' }, { text: '2016-05-03', value: '2016-05-03' }, { text: '2016-05-04', value: '2016-05-04' }]
        }, {
          label: '运行状态',
          key: 'area',
          formatter: ''
        }, {
          label: '硬盘状态',
          key: 'runState',
          formatter: ''
        }, {
          label: '风扇状态',
          key: 'num',
          formatter: '(num)/(area)'
        }, {
          label: '内存状态',
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
          label: '电源状态',
          key: 'time',
          formatter: ''
        }, {
          label: 'cpu温度',
          key: 'reason',
          formatter: ''
        }, {
          label: 'cpu负载',
          key: 'err',
          formatter: ''
        }, {
          label: '操作',
          key: 'operation',
          width: '200px',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/it_detail?type=1',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    }
  },
  computed: {
    switchesFieldArr: function () {
      return [
        {
          label: '交换机名称',
          key: 'name',
          formatter: '',
          filters: [{ text: '2016-05-01', value: '2016-05-01' }, { text: '2016-05-02', value: '2016-05-02' }, { text: '2016-05-03', value: '2016-05-03' }, { text: '2016-05-04', value: '2016-05-04' }]
        }, {
          label: '运行状态',
          key: 'area',
          formatter: ''
        }, {
          label: '硬盘状态',
          key: 'runState',
          formatter: ''
        }, {
          label: '风扇状态',
          key: 'num',
          formatter: '(num)/(area)'
        }, {
          label: '内存状态',
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
          label: '电源状态',
          key: 'time',
          formatter: ''
        }, {
          label: 'cpu温度',
          key: 'reason',
          formatter: ''
        }, {
          label: 'cpu负载',
          key: 'err',
          formatter: ''
        }, {
          label: '操作',
          key: 'operation',
          width: '200px',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/it_detail?type=2',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('monitor/it/getList');
    this.$store.dispatch('monitor/it/getSwitchesList');
  },
  methods: {
    edit (data) {
      console.log(data)
    },
    searchKey (val) {
      console.log(val);
    },
    selectIdHandle (id) {
      console.log(id);
    },
    handleClick () {

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
