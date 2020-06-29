<template>
  <div>
    <v-table
      :field-arr="fieldArr"
      :table-setting="tableSetting"
      class="pdNone"
    />
  </div>
</template>

<script>
export default {
  name: 'RuleTable1',
  data () {
    return {
      fieldArr: [
        {
          label: '事件编号',
          key: 'num'
        }, {
          label: '事件源',
          key: 'source'
        }, {
          label: '事件时间',
          key: 'eventTime'
        }, {
          label: '事件描述',
          key: 'des'
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
        apiUrl: '/event/list',
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
  }
}
</script>

<style lang="scss" scoped>
.pdNone {
  padding: 0 !important;
}
</style>
