<template>
  <div class="body-content"><HeadMenu title="云平台监控列表" smalltitle="小标题" :search="true" :btnarr="btnarr" /></div>
</template>

<script>
import HeadMenu from '@/components/HeadMenu';
export default {
  components: { HeadMenu },
  data () {
    return {
      // 列表查询
      listQuery: {
        page: 1,
        limit: 20,
        total: 0,
        searchEnvironmentId: '',
        serachName: '请输入要搜索的关键字'
      },
      btnarr: [{ id: '1', value: '+ 增加' }, { id: '2', value: '批量导入' }, { id: '3', value: '删除' }]
    }
  },
  created: {},
  methods: {
    handleSerchKey () {

    }
  }
}
</script>

<style scoped>
@import '~@/styles/element-ui.scss';
.monitor .content {
  padding: 0;
}
.body-content {
  border-width: 0px;
  width: 100%;
  height: 400px;
  background: inherit;
  border: none;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
