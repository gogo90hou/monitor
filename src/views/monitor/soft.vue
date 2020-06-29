<template>
  <div>
    <HeadMenu
      title="应用软件监控列表"
      :search="true"
      :btnarr="btnarr"
      @getValue="searchKey"
      @getEvent="judgeEvent"
    />
    <v-table :field-arr="fieldArr" :table-setting="tableSetting" @edit="edit" />
  </div>
</template>
<script>
export default {

  data () {
    return {
      btnarr: [{ id: '1', value: ' 管理设备', eventName: 'manageHandle', type: 'info' }],
      tableSetting: {
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
        apiUrl: 'soft/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      fieldArr: [
        {
          label: '应用软件名称',
          key: 'name',
          width: '220'
        }, {
          label: '运行状态',
          key: 'runstate',
          formatter: [{
            key: 1,
            label: '正常',
            color: 'stateNormal',
            className: 'iconicon_check_alt',
            iconColor: '#14AD00'
          }, {
            key: 2,
            label: '异常',
            color: 'stateNormal',
            className: 'iconicon_error-triangle',
            iconColor: 'red'
          }, {
            key: 3,
            label: '维护中',
            color: 'stateNormal',
            className: 'iconicon_power_failure',
            iconColor: 'stateMaintenance'
          }],
          filters: 'layout/runState'
        }, {
          label: '当前审批流程',
          key: 'approvalProcess',
          formatter: ''
        }, {
          label: '今日访问量',
          key: 'todayPv',
          formatter: ''
        }, {
          label: '所在区域',
          key: 'area',
          filters: 'layout/area'
        }, {
          label: '所在位置',
          key: 'position',
          formatter: ''
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '200px',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/soft_detail',
            query: ['id', 'name']
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
    judgeEvent (val) {
      if (val === 'manageHandle') {
        this.$router.push('/softManage')
      }
    }
  }
}
</script>
<style lang="scss">
@import '~@/styles/element-ui.scss';
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
