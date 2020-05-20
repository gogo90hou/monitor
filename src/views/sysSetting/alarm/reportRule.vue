<template>
  <div class="body-content">
    <HeadMenu
      title="告警规则设置"
      :btnarr="btnarr"
      @getEvent="addReportRule"
    />
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="告警过滤" name="first">
        <dynamic-table
          :field-arr="fieldArr"
          :getters="getters"
          @edit="edit"
        />
      </el-tab-pane>
      <el-tab-pane label="告警邮件转发" name="second">告警邮件转发</el-tab-pane>
      <el-tab-pane label="级别重定义" name="three">级别重定义</el-tab-pane>
    </el-tabs>
    <pagination
      v-show="listQuery.total>0"
      :total="listQuery.total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="pagination"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      getters: 'sysSetting/alarm/reportRule/list',
      activeName: 'first',
      // 分页列表
      listQuery: {
        total: 23,
        page: 1,
        limit: 20
      },
      btnarr: [{ id: '1', value: '增加', eventName: 'addHandle', type: 'primary' }],
      fieldArr: [
        {
          label: '告警规则序号',
          key: 'ruleNum',
          formatter: ''
        }, {
          label: '规则名称',
          key: 'ruleName',
          formatter: ''
        }, {
          label: '告警源',
          key: 'alarmSource',
          formatter: '',
          filters: [{ text: '门禁告警一', value: '门禁告警一' }, { text: '服务器告警2', value: '服务器告警2' }, { text: '应用软件告警三', value: '应用软件告警三' }, { text: '广播告警', value: '广播告警' }]
        }, {
          label: '告警类别',
          key: 'alarmCategory',
          formatter: '',
          filters: [{ text: '安防设备', value: '安防设备' }, { text: '应用软件', value: '应用软件' }, { text: 'IT设备', value: 'IT设备' }, { text: '中间件', value: '中间件' }, { text: '云平台', value: '云平台' }, { text: '操作系统和数据库', value: '操作系统和数据库' }]
        }, {
          label: '告警级别',
          key: 'level',
          formatter: [{
            key: '1',
            label: '致命',
            color: '',
            className: 'iconicon_close_alt',
            iconColor: 'red'
          }, {
            key: '2',
            label: '严重',
            color: '',
            className: 'iconicon_Critical_warning',
            iconColor: 'levelSerious'
          }, {
            key: '3',
            label: '一般',
            color: '',
            className: 'iconicon_minus_alt',
            iconColor: 'levelGeneral'
          }, {
            key: '4',
            label: '提示',
            color: '',
            className: 'iconicon_info',
            iconColor: 'levelprompt'
          }],
          filters: [{ text: '致命', value: '致命' }, { text: '严重', value: '严重' }, { text: '提示', value: '提示' }, { text: '一般', value: '一般' }]
        }, {
          label: '规则描述',
          key: 'ruleDescription',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runState',
          filters: [{ text: '运行中', value: '运行中' }, { text: '已停止', value: '已停止' }],
          formatter: [{
            key: '1',
            label: '运行中',
            color: ''
          }, {
            key: '2',
            label: '已停止',
            color: 'red'
          }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '200px',
          buttons: [{
            label: '停止',
            type: 'url',
            path: '/detail',
            query: ['id', 'name'],
            colorType: 'runState'
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
      ]
    }
  },
  created () {
    this.$store.dispatch('sysSetting/alarm/reportRule/getList')
  },
  methods: {
    addReportRule (val) {
      console.log(val);
    },
    pagination (val) {
      this.listQuery.page = val.page;
      this.listQuery.limit = val.limit;
    },
    handleClick () { },
    edit (data) {
      console.log(data);
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
