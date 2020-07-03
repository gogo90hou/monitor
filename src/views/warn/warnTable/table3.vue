<template>
  <div>
    <v-table
      :field-arr="fieldArr"
      :table-setting="tableSetting"
      class="pdNone"
      @edit="edit"
      @delete="deleteItem"
    />
  </div>
</template>

<script>
export default {
  name: 'RuleTable3',
  props: {
    filtersParam: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      fieldArr: [
        {
          label: '序号',
          key: 'num',
          formatter: ''
        }, {
          label: '告警源',
          key: 'source',
          width: '200'
        }, {
          label: '告警类别',
          key: 'type',
          width: '180',
          filters: [{ text: '安防设备', value: '安防设备' }, { text: '应用软件', value: '应用软件' }, { text: 'IT设备', value: 'IT设备' }, { text: '中间件', value: '中间件' }, { text: '云平台', value: '云平台' }, { text: '操作系统和数据库', value: '操作系统和数据库' }]
        }, {
          label: '告警级别',
          key: 'level',
          formatter: [{
            key: 1,
            label: '致命',
            color: '',
            className: 'iconicon_close_alt',
            iconColor: 'red'
          }, {
            key: 2,
            label: '严重',
            color: '',
            className: 'iconicon_Critical_warning',
            iconColor: '#FA7C00'
          }, {
            key: 3,
            label: '一般',
            color: '',
            className: 'iconicon_minus_alt',
            iconColor: '#FFC600'
          }, {
            key: 4,
            label: '提示',
            color: '',
            className: 'iconicon_info',
            iconColor: '#A09116'
          }],
          filters: [{ text: '致命', value: '致命' }, { text: '严重', value: '严重' }, { text: '一般', value: '一般' }, { text: '提示', value: '提示' }]
        }, {
          label: '告警描述',
          key: 'des',
          width: '180'
        }, {
          label: '告警时间',
          key: 'alarmTime',
          width: '180'
        }, {
          label: '告警状态',
          key: 'state',
          formatter: [{
            key: 1,
            label: '已确认'
          }, {
            key: 2,
            label: '未确认'
          }, {
            key: 3,
            label: '已清除'
          }, {
            key: 4,
            label: '未清除'
          }],
          filters: [{ text: '已确认', value: '已确认' }, { text: '未确认', value: '未确认' }, { text: '已清除', value: '已清除' }, { text: '未清除', value: '未清除' }]
        }, {
          label: '确认时间',
          key: 'setTime',
          width: '180'
        }, {
          label: '处理状态',
          key: 'dealState',
          formatter: [{
            key: 1,
            label: '待处理'
          }, {
            key: 2,
            label: '已派单'
          }, {
            key: 3,
            label: '已处理'
          }],
          filters: [{ text: '待处理', value: '待处理' }, { text: '已派单', value: '已派单' }, { text: '已处理', value: '已处理' }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '180',
          buttons: [
            {
              label: '确认',
              type: 'button',
              method: 'turnOrder',
              query: ['id', 'name'],
              colorType: 'edit',
              showRule: [{
                key: 'state',
                value: 2
              }, {
                key: 'dealState',
                value: 1
              }]
            },
            {
              label: '工单详情',
              type: 'button',
              method: 'turnOrder',
              query: ['id', 'name'],
              colorType: 'edit',
              showRule: [{
                key: 'state',
                value: 1
              }, {
                key: 'dealState',
                value: 2
              }]
            }, {
              label: '转工单',
              type: 'button',
              method: 'turnOrder',
              query: ['id', 'name'],
              colorType: 'edit',
              showRule: [{
                key: 'state',
                value: 1
              }, {
                key: 'dealState',
                value: 1
              }]
            }, {
              label: '清除',
              type: 'button',
              method: 'delete',
              colorType: 'delete'
            }]
        }
      ],
      tableSetting: {
        pagination: {
          show: true,
          rowsPerPage: [10, 20, 30]
        },
        param: this.filtersParam,
        apiUrl: '/smart/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      // 选中数据ID
      ids: []
    }
  },
  watch: {
    filtersParam: {
      handler (val) {
        this.tableSetting.param = val;
      },
      deep: true
    }
  },
  methods: {
    deleteItem (data) {
      const deleteIds = [];
      deleteIds.push(data.id);
      this.$refs.table.deleteItem(deleteIds)
    },
    remove () {
      this.$refs.table.deleteItem(this.ids)
    },
    edit () { }
  }
}
</script>

<style lang="scss" scoped>
.pdNone {
  padding: 0 !important;
}
.pdNone >>> .el-table {
  .el-table__body {
    .dynamicTable__operation {
      text-align: left;
      .el-button--medium {
        width: 80px;
        padding: 0;
        padding-left: 10px;
      }
      .el-button--medium:nth-last-child(1) {
        width: auto;
      }
    }
  }
}
</style>

