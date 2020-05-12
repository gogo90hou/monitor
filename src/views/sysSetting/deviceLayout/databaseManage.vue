<template>
  <div class="body-content"><HeadMenu title="操作系统和数据库" :smalltitle="smalltitle" :search="false" :btnarr="btnarr" @getValue="searchKey" @getEvent="judgeEvent" /></div>
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
      btnarr: [{ id: '1', value: '+ 增加', eventName: 'addHandle' }, { id: '2', value: '批量导入', eventName: 'importHandle' }, { id: '3', value: '删除', eventName: 'deleteHandle' }],
      smalltitle: { name: '监控列表', path: '/system' }
    }
  },
  created: {},
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
    }
  }
}
</script>

<style scoped>
@import '~@/styles/element-ui.scss';
</style>
