<template>
  <div class="body-content">
    <HeadMenu
      title="云平台监控列表"
      :search="true"
      :btnarr="btnarr"
      @getValue="searchKey"
      @getEvent="judgeEvent"
    />
    <dynamic-table :field-arr="fieldArr" :getters="getters" @edit="edit" />
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
      getters: 'monitor/cloud/list',
      // 分页列表
      listQuery: {
        total: 36,
        page: 1,
        limit: 10
      },
      btnarr: [{ id: '1', value: ' 管理云平台', eventName: 'manageHandle', type: 'primary' }],
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
    },
    pagination (val) {
      this.listQuery.page = val.page;
    }
  }
}
</script>

<style scoped>
@import "~@/styles/element-ui.scss";
</style>
