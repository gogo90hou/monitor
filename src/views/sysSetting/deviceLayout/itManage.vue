<template>
  <div class="body-content">
    <HeadMenu
      title="IT设备"
      :smalltitle="smalltitle"
      :search="false"
      :btnarr="btnarr"
      @getEvent="judgeEvent"
    />
    <dynamic-table
      :field-arr="fieldArr"
      :show-check-box="showCheckBox"
      :getters="getters"
      @edit="edit"
    />
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
      getters: 'sysSetting/deviceLayout/itManage/list',
      activeName: 'first',
      showCheckBox: true,
      // 分页列表
      listQuery: {
        total: 36,
        page: 1,
        limit: 10
      },
      btnarr: [{ id: '1', value: '增加', eventName: 'addHandle', type: 'primary' }, { id: '2', value: '删除', eventName: 'deleteHandle', type: 'warning' }],
      smalltitle: { name: '监控列表', path: '/it' },
      fieldArr: [
        {
          label: '设备名称',
          key: 'equipmentName',
          formatter: ''
        }, {
          label: '设备类型',
          key: 'equipmentCategory',
          formatter: '',
          filters: [{ text: '服务器', value: '服务器' }, { text: '交换机', value: '交换机' }, { text: '防火墙', value: '防火墙' }, { text: '存储', value: '存储' }]
        }, {
          label: '采集网关',
          key: 'gateway',
          formatter: '',
          filters: [{ text: '网关1', value: '网关1' }, { text: '网关2', value: '网关2' }, { text: '网关3', value: '网关3' }]
        }, {
          label: '接入设备',
          key: 'accessEquipment',
          formatter: ''
        }, {
          label: '所在区域',
          key: 'area',
          formatter: '',
          filters: [{ text: '锦江监狱', value: '锦江监狱' }, { text: '邑州监狱', value: '邑州监狱' }, { text: '川西监狱', value: '川西监狱' }, { text: '川北监狱', value: '川北监狱' }, { text: '雷马屏监狱', value: '雷马屏监狱' }]
        }, {
          label: '当前位置',
          key: 'currentArea',
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
    this.$store.dispatch('sysSetting/deviceLayout/itManage/getList')
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
