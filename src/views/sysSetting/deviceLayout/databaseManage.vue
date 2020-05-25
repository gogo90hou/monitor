<template>
  <div class="body-content">
    <HeadMenu
      title="操作系统和数据库"
      :smalltitle="smalltitle"
      :search="false"
      :btnarr="btnarr"
      @getValue="searchKey"
      @getEvent="judgeEvent"
    />
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="操作系统" name="first">
        <dynamic-table
          :field-arr="fieldArr"
          :show-check-box="showCheckBox"
          :getters="getters"
          @edit="edit"
        />
      </el-tab-pane>
      <el-tab-pane label="数据库" name="second">
        <dynamic-table
          :field-arr="fieldArr"
          :show-check-box="showCheckBox"
          :getters="getters"
          @edit="edit"
        />
      </el-tab-pane>
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
      getters: 'sysSetting/deviceLayout/databaseManage/list',
      activeName: 'first',
      showCheckBox: true,
      // 分页列表
      listQuery: {
        total: 36,
        page: 1,
        limit: 10
      },
      btnarr: [{ id: '1', value: '增加', eventName: 'addHandle', type: 'primary' }, { id: '2', value: '批量导入', eventName: 'importHandle', type: 'success' }, { id: '3', value: '删除', eventName: 'deleteHandle', type: 'warning' }],
      smalltitle: { name: '监控列表', path: '/system' },
      fieldArr: [
        {
          label: '操作系统名称',
          key: 'sysName',
          formatter: ''
        }, {
          label: '系统类型',
          key: 'sysCategory',
          formatter: '',
          filters: [{ text: 'windows操作系统', value: 'windows操作系统' }, { text: 'liunx操作系统', value: 'liunx操作系统' }]
        }, {
          label: '接入方式',
          key: 'access',
          formatter: '',
          filters: [{ text: '网管接入', value: '网管接入' }]
        }, {
          label: '网关',
          key: 'gateway',
          formatter: '',
          filters: [{ text: '网关1', value: '网关1' }, { text: '网关2', value: '网关2' }, { text: '网关3', value: '网关3' }]
        }, {
          label: '设备ID',
          key: 'equipmentId',
          formatter: ''
        }, {
          label: '所在区域',
          key: 'area',
          formatter: '',
          filters: [{ text: '锦江监狱', value: '锦江监狱' }, { text: '邑州监狱', value: '邑州监狱' }, { text: '川西监狱', value: '川西监狱' }, { text: '川北监狱', value: '川北监狱' }, { text: '雷马屏监狱', value: '雷马屏监狱' }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '200px',
          buttons: [{
            label: '编辑',
            type: 'url',
            path: '/detail',
            query: ['id', 'name'],
            colorType: 'delete'
          }, {
            label: '删除',
            type: 'button',
            method: 'edit',
            colorType: 'edit'
          }]
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('sysSetting/deviceLayout/databaseManage/getList')
  },
  methods: {
    handleClick () { },
    searchKey (val) {
      console.log(val);
    },
    judgeEvent (event) {
      if (event === 'addHandle') {
        this.addHandle();
      } else if (event === 'importHandle') {
        this.importHandle();
      } else if (event === 'deleteHandle') {
        this.deleteHandle();
      }
    },
    addHandle () {
      console.log('我是添加事件');
    },
    importHandle () {
      console.log('我是批量导入事件');
    },
    deleteHandle () {
      console.log('我是删除事件事件');
    },
    edit (data) {
      console.log(data);
    },
    pagination (val) {
      this.listQuery.page = val.page;
      this.listQuery.limit = val.limit;
    }
  }
}
</script>

<style scoped>
</style>
