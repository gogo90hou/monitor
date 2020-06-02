<template>
  <div class="body-content">
    <HeadMenu
      title="操作系统和数据库监控列表"
      :search="true"
      :btnarr="btnarr"
      @getValue="searchKey"
      @getEvent="managementHandle"
    />
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="操作系统" name="first">
        <dynamic-table :field-arr="fieldArr" :getters="getters" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="数据库" name="second">
        <div class="database-filter">
          <span
            :class="{'filter-active':filterName==='Oracle'}"
            @click="filterTab('Oracle')"
          >Oracle (43)</span>
          <span
            :class="{'filter-active':filterName==='sqlserver'}"
            @click="filterTab('sqlserver')"
          >sqlserver (21)</span>
          <span
            :class="{'filter-active':filterName==='Mysql'}"
            @click="filterTab('Mysql')"
          >Mysql (32)</span>
        </div>
        <dynamic-table :field-arr="databaseFieldArr" :getters="databaseGetters" @edit="edit" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      getters: 'monitor/system/list',
      databaseGetters: 'monitor/system/databaseList',
      activeName: 'first',
      // 选中的过滤器名
      filterName: 'Oracle',
      btnarr: [{ id: '1', value: ' 管理系统和数据库', eventName: 'manageHandle', type: 'info' }],
      fieldArr: [
        {
          label: '序号',
          key: 'sysNum',
          formatter: ''
        }, {
          label: '操作系统名称',
          key: 'sysName',
          formatter: ''
        }, {
          label: '系统类别',
          key: 'sysCategory',
          formatter: '',
          filters: [{ text: 'windows操作系统', value: 'windows操作系统' }, { text: 'liunx操作系统', value: 'liunx操作系统' }]
        }, {
          label: '运行状态',
          key: 'runState',
          formatter: '',
          filters: [{ text: '正常', value: '正常' }, { text: '异常', value: '异常' }, { text: '断连', value: '断连' }]
        }, {
          label: '硬盘状态',
          key: 'disk',
          formatter: '',
          filters: [{ text: '正常', value: '正常' }, { text: '异常', value: '异常' }]
        }, {
          label: '内存状态',
          key: 'memory',
          formatter: '',
          filters: [{ text: '正常', value: '正常' }, { text: '异常', value: '异常' }]
        }, {
          label: 'cpu负载',
          key: 'cpu',
          formatter: '',
          filters: [{ text: '正常', value: '正常' }, { text: '异常', value: '异常' }]
        }, {
          label: '所在服务器',
          key: 'hostServer',
          formatter: '',
          filters: [{ text: '服务器1', value: '服务器1' }]
        }, {
          label: '操作',
          key: 'operation',
          width: '200px',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/system_detail',
            query: ['id', 'memory'],
            colorType: 'tableBlue'
          }]
        }
      ],
      databaseFieldArr: [
        {
          label: '数据库名称',
          key: 'databaseName',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runState',
          formatter: [{
            key: '1',
            label: '正常',
            className: 'iconicon_check_alt',
            iconColor: 'stateNormal'
          }, {
            key: '2',
            label: '异常',
            className: 'iconicon_error-triangle',
            iconColor: 'red'
          }, {
            key: '3',
            label: '维护中',
            className: 'iconicon_power_failure',
            iconColor: 'stateMaintenance'
          }],
          filters: [{ text: '正常', value: '正常' }, { text: '异常', value: '异常' }, { text: '维护中', value: '维护中' }]
        }, {
          label: '数据库文件大小',
          key: 'databaseFileSize',
          formatter: ''
        }, {
          label: '进程数量',
          key: 'processNum',
          formatter: ''
        }, {
          label: '活动对话',
          key: 'activitySession',
          formatter: ''
        }, {
          label: '审计',
          key: 'audit',
          formatter: ''
        }, {
          label: '数据库连接数',
          key: 'databaseConnectionNum',
          formatter: ''
        }, {
          label: '所在位置',
          key: 'area',
          formatter: '',
          filters: [{ text: '省局服务器1', value: '省局服务器1' }, { text: '省局服务器2', value: '省局服务器2' }, { text: '省局服务器3', value: '省局服务器3' }]
        }, {
          label: '操作',
          key: 'operation',
          width: '200px',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/oracle_detail',
            query: ['id', 'memory'],
            colorType: 'tableBlue'
          }]
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('monitor/system/getList', { currentPage: 1, queryParam: {}, rowsPerPage: 10 });
    this.$store.dispatch('monitor/system/getDatabaseList');
  },
  methods: {
    handleClick () { },
    searchKey (val) {
      console.log(val);
    },
    managementHandle (val) {
      console.log(val);
    },
    edit (data) {
      console.log(data)
    },
    filterTab (val) {
      this.filterName = val;
    }
  }
}
</script>

<style lang="scss" scoped>
.database-filter {
  width: 100%;
  height: 56px;
  background-color: #c9cbf5;
  font-size: 14px;
  opacity: 80%;
  span {
    display: block;
    width: 205px;
    line-height: 56px;
    text-align: center;
    float: left;
    color: #888888;
    cursor: pointer;
  }
  .filter-active {
    color: #38ace1;
  }
  span:after {
    content: '';
    width: 1px;
    height: 17px;
    display: block;
    float: right;
    margin-top: 20px;
    background-color: #dddee0;
  }
  span:nth-last-child(1):after {
    content: '';
    width: 0;
    height: 0;
  }
}
</style>
