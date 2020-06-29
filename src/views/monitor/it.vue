<template>
  <div>
    <div class="body-content">
      <HeadMenu
        title="IT设备监控列表"
        :options="options"
        :search="true"
        :btnarr="btnarr"
        @getValue="searchKey"
        @getSelectId="selectIdHandle"
        @getEvent="judgeEvent"
      />
    </div>
    <el-tabs v-model="activeName" type="card" class="tab_body" @tab-click="handleClick">
      <el-tab-pane label="服务器" name="first">
        <v-table :field-arr="fieldArr" :table-setting="serverSetting" class="pdNone" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="交换机" name="second">
        <v-table :field-arr="switchesFieldArr" :table-setting="switchSetting" class="pdNone" @edit="edit" />
      </el-tab-pane>
      <!-- <el-tab-pane label="防火墙" name="third">
        <v-table :field-arr="firewallFieldArr" :table-setting="firewallSetting" class="pdNone" @edit="edit" />
      </el-tab-pane> -->
      <!-- <el-tab-pane label="存储" name="four">
        <v-table :field-arr="storageFieldArr" :table-setting="storageSetting" class="pdNone" @edit="edit" />
      </el-tab-pane> -->
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      serverSetting: {
        pagination: {
          show: true,
          rowsPerPage: [10, 20, 30]
        },
        param: {
          page: 1,
          rows: 10,
          sord: 'desc',
          _search: false,
          filters: {
            groupOp: 'AND',
            rules: []
          }
        },
        apiUrl: 'server/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      switchSetting: {
        pagination: {
          show: true,
          rowsPerPage: [10, 20, 30]
        },
        param: {
          page: 1,
          rows: 10,
          sord: 'desc',
          _search: false,
          filters: {
            groupOp: 'AND',
            rules: []
          }
        },
        apiUrl: 'interchanger/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      firewallSetting: {
        pagination: {
          show: true,
          rowsPerPage: [10, 20, 30]
        },
        param: {
          page: 1,
          rows: 10,
          sord: 'desc',
          _search: false,
          filters: {
            groupOp: 'AND',
            rules: []
          }
        },
        apiUrl: 'interchanger/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      storageSetting: {
        pagination: {
          show: true,
          rowsPerPage: [10, 20, 30]
        },
        param: {
          page: 1,
          rows: 10,
          sord: 'desc',
          _search: false,
          filters: {
            groupOp: 'AND',
            rules: []
          }
        },
        apiUrl: 'interchanger/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      activeName: 'first',
      btnarr: [{ id: '1', value: ' 管理设备', eventName: 'manageHandle', type: 'info' }],
      options: [{ selectId: '1', label: '锦江监狱' }, { selectId: '2', label: '邑州监狱' }, { selectId: '3', label: '川西监狱' }, { selectId: '4', label: '川北监狱' }, { selectId: '5', label: '雷马屏监狱' }],
      fieldArr: [
        {
          label: '序号',
          key: 'id'
        }, {
          label: '服务器名称',
          key: 'name',
          width: '220'
        }, {
          label: '运行状态',
          key: 'runstate',
          formatter: [{
            key: 1,
            label: '正常',
            color: '#15B000',
            className: 'iconicon_successfully',
            iconColor: '#15B000'
          }, {
            key: 2,
            label: '异常',
            color: '#f00',
            className: 'iconicon_error-triangle',
            iconColor: '#f00'
          }, {
            key: 3,
            label: '断连',
            color: '#999999',
            className: 'iconicon_power_failure',
            iconColor: '#999999'
          }],
          filters: 'layout/runState'
        }, {
          label: '硬盘状态',
          key: 'diskstate',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }],
          filters: 'layout/state'
        }, {
          label: '风扇状态',
          key: 'fanstate',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }],
          filters: 'layout/state'
        }, {
          label: '内存状态',
          key: 'memorystate',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }],
          filters: 'layout/state'
        }, {
          label: '电源状态',
          key: 'powerstate',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }],
          filters: 'layout/state'
        }, {
          label: 'cpu温度',
          key: 'cpuT',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }],
          filters: 'layout/state'
        }, {
          label: 'cpu负载',
          key: 'cpuLoad',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }],
          filters: 'layout/state'
        }, {
          label: '所在区域',
          key: 'area',
          filters: 'layout/area'
        }, {
          label: '所在位置',
          key: 'position',
          width: '140'
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
          label: '序号',
          key: 'id'
        }, {
          label: '交换机名称',
          key: 'name',
          width: '220'
        }, {
          label: '运行状态',
          key: 'runstate',
          formatter: [{
            key: 1,
            label: '正常',
            color: '#15B000',
            className: 'iconicon_successfully',
            iconColor: '#15B000'
          }, {
            key: 2,
            label: '异常',
            color: '#f00',
            className: 'iconicon_error-triangle',
            iconColor: '#f00'
          }, {
            key: 3,
            label: '断连',
            color: '#999999',
            className: 'iconicon_power_failure',
            iconColor: '#999999'
          }],
          filters: 'layout/runState'
        }, {
          label: '端口数量',
          key: 'portNum'
        }, {
          label: 'cpu负载',
          key: 'cpuLoad',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }],
          filters: 'layout/state'
        }, {
          label: 'cpu利用率',
          key: 'cpuMemory',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }],
          filters: 'layout/state'
        }, {
          label: '所在区域',
          key: 'area',
          filters: 'layout/area'
        }, {
          label: '所在位置',
          key: 'position',
          width: '140'
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
    },
    firewallFieldArr: function () {
      return [
        {
          label: '序号',
          key: 'id'
        },
        {
          label: '防火墙主机IP',
          key: 'name'
        }, {
          label: '运行状态',
          key: 'runstate',
          formatter: [{
            key: 1,
            label: '正常',
            color: '#15B000',
            className: 'iconicon_successfully',
            iconColor: '#15B000'
          }, {
            key: 2,
            label: '异常',
            color: '#f00',
            className: 'iconicon_error-triangle',
            iconColor: '#f00'
          }, {
            key: 3,
            label: '断连',
            color: '#999999',
            className: 'iconicon_power_failure',
            iconColor: '#999999'
          }],
          filters: 'layout/runState'
        }, {
          label: '硬盘状态',
          key: 'portNum',
          formatter: '(portNum)TB'
        }, {
          label: 'ping服务器状态',
          key: 'cpuLoad',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }]
        }, {
          label: '内存使用',
          key: 'cpuLoad',
          formatter: '(cpuLoad)G/1TB'
        }, {
          label: '内存利用率',
          key: 'cpuMemory',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }]
        }, {
          label: 'cpu使用率',
          key: 'cpuMemory',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }]
        }, {
          label: '会话状态',
          key: 'cpuLoad',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }]
        }, {
          label: '接口状态',
          key: 'cpuLoad',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }]
        }, {
          label: '流量统计',
          key: 'portNum',
          formatter: '(portNum)m/s'
        }, {
          label: '数据包状态',
          key: 'cpuLoad',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }]
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
    },
    storageFieldArr: function () {
      return [
        {
          label: '序号',
          key: 'id'
        },
        {
          label: '存储标识',
          key: 'name'
        }, {
          label: '运行状态',
          key: 'runstate',
          formatter: [{
            key: 1,
            label: '正常',
            color: '#15B000',
            className: 'iconicon_successfully',
            iconColor: '#15B000'
          }, {
            key: 2,
            label: '异常',
            color: '#f00',
            className: 'iconicon_error-triangle',
            iconColor: '#f00'
          }, {
            key: 3,
            label: '断连',
            color: '#999999',
            className: 'iconicon_power_failure',
            iconColor: '#999999'
          }],
          filters: 'layout/runState'
        }, {
          label: '存储大小',
          key: 'portNum',
          formatter: '(portNum)TB'
        }, {
          label: '配置信息',
          key: 'cpuLoad',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }],
          filters: 'layout/state'
        }, {
          label: '控制机柜',
          key: 'cpuMemory',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 2, color: '#f00' }],
          filters: 'layout/state'
        }, {
          label: '矩阵机柜',
          key: 'area',
          filters: 'layout/area'
        }, {
          label: 'trap事件历史',
          key: 'position'
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
  created () {
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

    },
    judgeEvent (val) {
      if (val === 'manageHandle') {
        this.$router.push('/itManage')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tab_body {
  padding: 17px 12px;
  background-color: #fff;
  .pdNone {
    padding: 0 !important;
  }
}
</style>
