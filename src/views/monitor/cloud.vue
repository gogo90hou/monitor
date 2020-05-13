<template>
  <div class="body-content">
    <HeadMenu title="云平台监控列表" :search="true" :btnarr="btnarr" @getValue="searchKey" @getEvent="judgeEvent" />
    <dynamic-table :field-arr="fieldArr" :getters="getters" @edit="edit" />
  </div>
</template>

<script>
import HeadMenu from '@/components/HeadMenu';
import DynamicTable from '@/components/DynamicTable/index';
export default {
  components: { HeadMenu, DynamicTable },
  data () {
    return {
      getters: 'monitor/cloud/list',
      // 列表查询
      listQuery: {
        serachName: '请输入要搜索的关键字'
      },
      btnarr: [{ id: '1', value: ' 管理云平台', eventName: 'addHandle' }],
      fieldArr: [
        {
          label: '序号',
          key: 'serialNumber',
          formatter: ''
        }, {
          label: '主机信息',
          key: 'host',
          formatter: '',
          filters: [{ text: 'windows操作系统', value: 'windows操作系统' }, { text: 'liunx操作系统', value: 'liunx操作系统' }]
        }, {
          label: '所在区域',
          key: 'area',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runState',
          formatter: ''
        }, {
          label: '虚拟机',
          key: 'virtualMachine',
          formatter: ''
        }, {
          label: '磁盘',
          key: 'disk',
          formatter: ''
        }, {
          label: '内存',
          key: 'memory',
          formatter: ''
        }, {
          label: '网卡流量',
          key: 'networkTraffic',
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
    this.$store.dispatch('monitor/cloud/getList')
  },
  methods: {
    searchKey (val) {
      console.log(val);
    },
    judgeEvent (event) {
      this.managementHandle();
    },
    managementHandle () {
      console.log('管理云平台事件');
    },
    edit (data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>
@import '~@/styles/element-ui.scss';
</style>
