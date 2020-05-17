<template>
  <div class="body-content">
    <HeadMenu title="告警声音列表" />
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
import HeadMenu from '@/components/HeadMenu';
import DynamicTable from '@/components/DynamicTable/index';
import Pagination from '@/components/Pagination/index';

export default {
  components: { HeadMenu, DynamicTable, Pagination },
  data () {
    return {
      getters: 'sysSetting/alarm/reportVoice/list',
      // 分页列表
      listQuery: {
        total: 36,
        page: 1,
        limit: 10
      },
      fieldArr: [
        {
          label: '告警级别',
          key: 'level',
          formatter: ''
        }, {
          label: '声音文件',
          key: 'voiceFile',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runState',
          formatter: '',
          filters: [{ text: '运行中', value: '运行中' }, { text: '已停止', value: '已停止' }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '200px',
          buttons: [{
            label: '停止',
            type: 'url',
            path: '/detail',
            query: ['id', 'name']
          }]
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('sysSetting/alarm/reportVoice/getList')
  },
  methods: {
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
@import '~@/styles/element-ui.scss';
</style>
