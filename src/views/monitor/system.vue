<template>
  <div class="body-content">
    <HeadMenu title="操作系统和数据库监控列表" :search="true" :btnarr="btnarr" @getValue="searchKey" @getEvent="judgeEvent" />
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="操作系统" name="first">
        <dynamic-table :field-arr="fieldArr" :getters="getters" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="数据库" name="second">数据库</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import HeadMenu from '@/components/HeadMenu';
import DynamicTable from '@/components/DynamicTable/index';
export default {
  components: { HeadMenu, DynamicTable },
  data () {
    return {
      getters: 'monitor/system/list',
      activeName: 'first',
      // 列表查询
      listQuery: {
        serachName: '请输入要搜索的关键字'
      },
      btnarr: [{ id: '1', value: ' 管理系统和数据库', eventName: 'addHandle' }],
      fieldArr: [
        {
          label: '系统标识',
          key: 'sysNum',
          formatter: ''
        }, {
          label: '系统类别',
          key: 'sysCategory',
          formatter: '',
          filters: [{ text: 'windows操作系统', value: 'windows操作系统' }, { text: 'liunx操作系统', value: 'liunx操作系统' }]
        }, {
          label: '磁盘',
          key: 'disk',
          formatter: ''
        }, {
          label: '磁盘利用率',
          key: 'diskUtilization',
          formatter: ''
        }, {
          label: '内存',
          key: 'memory',
          formatter: ''
        }, {
          label: '内存使用率',
          key: 'memoryUtilization',
          formatter: ''
        }, {
          label: 'CPU使用率',
          key: 'cpuUtilization',
          formatter: ''
        }, {
          label: '进程数量',
          key: 'processNum',
          formatter: ''
        }, {
          label: '文件读写状态',
          key: 'fileState',
          formatter: '',
          filters: [{ text: '只读', value: '只读' }, { text: '只写', value: '只写' }, { text: '可读可写', value: '可读可写' }]
        }, {
          label: '登录用户',
          key: 'loginUser',
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
    this.$store.dispatch('monitor/system/getList')
  },
  methods: {
    searchKey (val) {
      console.log(val);
    },
    judgeEvent (event) {
      this.managementHandle();
    },
    managementHandle () {
      console.log('管理系统和数据库事件');
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
