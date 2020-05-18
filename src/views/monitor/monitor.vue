<template>
  <div>
    <HeadMenu title="所有设备" />
    <HeadMenu
      title="安防设备监控列表"
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
      getters: 'monitor/system/list',
      activeName: 'first',
      // 分页列表
      listQuery: {
        total: 36,
        page: 1,
        limit: 10
      },
      btnarr: [{ id: '1', value: ' 管理设备', eventName: 'manageHandle', type: 'primary' }],
      fieldArr: [
        {
          label: '设备名称',
          key: 'sysNum',
          formatter: ''
        }, {
          label: '设备类型',
          key: 'sysCategory',
          formatter: '',
          filters: [{ text: 'windows操作系统', value: 'windows操作系统' }, { text: 'liunx操作系统', value: 'liunx操作系统' }]
        }, {
          label: '状态',
          key: 'disk',
          formatter: ''
        }, {
          label: '所在区域',
          key: 'diskUtilization',
          formatter: ''
        }, {
          label: '所在位置',
          key: 'memory',
          formatter: ''
        }, {
          label: '设备描述',
          key: 'memoryUtilization',
          formatter: ''
        }, {
          label: '操作',
          key: 'operation',
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
  }
}
</script>
