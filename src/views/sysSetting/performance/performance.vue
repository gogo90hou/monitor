<template>
  <div class="body-content">
    <HeadMenu title="性能门限设置" />
    <el-tabs v-model="activeName" type="card" class="tab_body">
      <el-tab-pane label="服务器" name="1">
        <Server />
      </el-tab-pane>
      <el-tab-pane label="交换机" name="2">
        <Interchanger />
      </el-tab-pane>
      <!-- <el-tab-pane label="防火墙" name="3">防火墙</el-tab-pane>
      <el-tab-pane label="存储" name="4">存储</el-tab-pane>
      <el-tab-pane label="中间件" name="5">中间件</el-tab-pane>
      <el-tab-pane label="应用软件" name="6">应用软件</el-tab-pane> -->
      <el-tab-pane label="数据库" name="7">
        <Database />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import HeadMenu from '@/components/HeadMenu';
import Server from './tabs/server'
import Interchanger from './tabs/interchanger'
import Database from './tabs/database'
export default {
  components: { HeadMenu, Server, Interchanger, Database },
  data () {
    return {
      // 列表查询
      activeName: '1',
      listQuery: {
        serachName: '请输入要搜索的关键字'
      },
      btnarr: [{ id: '1', value: '新增', eventName: 'addHandle', type: 'primary' }, { id: '3', value: '删除', eventName: 'deleteHandle', type: 'warning' }],
      smalltitle: { name: '查看监控列表', path: '/cloud' }
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

<style lang="scss" scoped>
.tab_body {
  padding: 17px 12px;
  background-color: #fff;
}
</style>
