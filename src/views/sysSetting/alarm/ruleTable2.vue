<template>
  <div>
    <v-table
      ref="table"
      :field-arr="fieldArr"
      :table-setting="tableSetting"
      :show-check-box="true"
      class="pdNone"
      @edit="edit"
      @delete="deleteItem"
      @selection-change="handleSelectionChange"
    />
  </div>
</template>

<script>
export default {
  name: 'RuleTable2',
  data () {
    return {
      fieldArr: [
        {
          label: '序号',
          key: 'num',
          formatter: ''
        }, {
          label: '规则名称',
          key: 'name',
          width: '140'
        }, {
          label: '告警源',
          key: 'source',
          width: '200',
          filters: [{ text: '门禁告警一', value: '门禁告警一' }, { text: '服务器告警2', value: '服务器告警2' }, { text: '应用软件告警三', value: '应用软件告警三' }, { text: '广播告警', value: '广播告警' }]
        }, {
          label: '告警类别',
          key: 'type',
          width: '140',
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
          filters: [{ text: '致命', value: '致命' }, { text: '严重', value: '严重' }, { text: '提示', value: '提示' }, { text: '一般', value: '一般' }]
        }, {
          label: '邮件地址',
          key: 'email',
          width: '240'
        }, {
          label: '运行状态',
          key: 'runstate',
          filters: [{ text: '运行中', value: '运行中' }, { text: '已停止', value: '已停止' }],
          formatter: [{
            key: 1,
            label: '运行中',
            color: '#15B000'
          }, {
            key: 2,
            label: '已停止',
            color: '#f00'
          }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '262',
          buttons: [{
            label: '停止',
            type: 'button',
            method: 'stop',
            colorType: 'runstate'
          }, {
            label: '编辑',
            type: 'button',
            method: 'edit',
            colorType: 'edit'
          }, {
            label: '删除',
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
        apiUrl: 'ruleEmail',
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
  methods: {
    edit (data) {
      this.dialogVisible = true;
      this.ruleForm = data;
    },
    deleteItem (data) {
      const deleteIds = [];
      deleteIds.push(data.id);
      this.$refs.table.deleteItem(deleteIds)
    },
    remove () {
      this.$refs.table.deleteItem(this.ids)
    },
    handleSelectionChange (data) {
      data.forEach((item) => {
        this.ids.push(item.id)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pdNone {
  padding: 0 !important;
}
</style>
