<template>
  <div class="body-content">
    <HeadMenu
      title="安防设备"
      :smalltitle="smalltitle"
      :btnarr="btnarr"
      @getValue="searchKey"
      @getEvent="judgeEvent"
    />
    <dynamic-table
      :show-check-box="showCheckBox"
      :field-arr="fieldArr"
      :getters="getters"
      @edit="edit"
    />
  </div>
</template>

<script>
import HeadMenu from '@/components/HeadMenu';
import DynamicTable from '@/components/DynamicTable/index';
export default {
  components: { HeadMenu, DynamicTable },
  data () {
    return {
      getters: 'sysSetting/deviceLayout/cloudManage/list',
      showCheckBox: true,
      // 列表查询
      listQuery: {
        serachName: '请输入要搜索的关键字'
      },
      btnarr: [{ id: '1', value: '增加', eventName: 'addHandle', type: 'primary' }, { id: '2', value: '批量导入', eventName: 'importHandle', type: 'success' }, { id: '3', value: '删除', eventName: 'deleteHandle', type: 'warning' }],
      smalltitle: { name: '查看监控列表', path: '/cloud' },
      fieldArr: [
        {
          label: '设备名称',
          key: 'cloudName',
          formatter: ''
        }, {
          label: '设备类型',
          key: 'access',
          formatter: '',
          filters: 'layout/area'
        }, {
          label: '接入方式',
          key: 'gateway',
          filters: [{ text: '网管接入', value: '网管接入' }]
        }, {
          label: '网关',
          key: 'equipmentId',
          formatter: ''
        }, {
          label: '设备ID',
          key: 'area',
          formatter: ''
        }, {
          label: '所在区域',
          key: 'describe',
          formatter: '',
          filters: 'layout/deviceType'
        }, {
          label: '设备描述',
          key: 'describe',
          formatter: ''
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '200px',
          buttons: [{
            label: '编辑',
            type: 'url',
            path: '/detail',
            colorType: 'edit',
            query: ['id', 'name']
          }, {
            label: '删除',
            type: 'button',
            colorType: 'delete',
            method: 'edit'
          }]
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('sysSetting/deviceLayout/cloudManage/getList')
  },
  methods: {
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
      console.log(data)
    }
  }
}
</script>

<style scoped>
@import "~@/styles/element-ui.scss";
</style>
