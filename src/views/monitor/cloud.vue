<template>
  <div class="body-content"><HeadMenu title="云平台监控列表" :search="true" :btnarr="btnarr" @getValue="searchKey" @getEvent="judgeEvent" /></div>
</template>

<script>
import HeadMenu from '@/components/HeadMenu';
export default {
  components: { HeadMenu },
  data () {
    return {
      // 列表查询
      listQuery: {
        serachName: '请输入要搜索的关键字'
      },
      btnarr: [{ id: '1', value: ' 管理云平台', eventName: 'addHandle' }]
    }
  },
  created: {},
  methods: {
    searchKey (val) {
      console.log(val);
    },
    judgeEvent (event) {
      this.managementHandle();
    },
    managementHandle () {
      console.log('管理云平台事件');
    }
  }
}
</script>

<style scoped>
@import '~@/styles/element-ui.scss';
</style>
