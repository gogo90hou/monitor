<template>
  <div class="body-content">
    <HeadMenu
      title="操作系统和数据库监控列表"
      :search="true"
      :btnarr="btnarr"
      @getValue="searchKey"
      @getEvent="managementHandle"
    />
    <el-tabs v-model="activeName" type="card" class="tab_body" @tab-click="handleClick">
      <el-tab-pane label="操作系统" name="first">
        <v-table :field-arr="fieldArr" :table-setting="tableSetting" class="pdNone" />
      </el-tab-pane>
      <el-tab-pane label="数据库" name="second">
        <div class="database-filter">
          <span
            :class="{'filter-active':filterName==='Oracle'}"
            @click="filterTab('Oracle')"
          >Oracle ({{ $refs.oracle && $refs.oracle.tableData ? $refs.oracle.tableData.totalRows : '0' }})</span>
          <span
            :class="{'filter-active':filterName==='Sqlserver'}"
            @click="filterTab('Sqlserver')"
          >sqlserver ({{ $refs.sqlserver && $refs.sqlserver.tableData ? $refs.sqlserver.tableData.totalRows : '0' }})</span>
          <span
            :class="{'filter-active':filterName==='Mysql'}"
            @click="filterTab('Mysql')"
          >Mysql ({{ $refs.mysql && $refs.mysql.tableData ? $refs.mysql.tableData.totalRows : '0' }})</span>
        </div>
        <v-table
          v-show="filterName==='Mysql'"
          ref="mysql"
          :field-arr="databaseFieldArr"
          :table-setting="mysqlSetting"
          class="pdNone"
          @edit="edit"
        />
        <v-table
          v-show="filterName==='Oracle'"
          ref="oracle"
          :field-arr="databaseFieldArr"
          :table-setting="oracleSetting"
          class="pdNone"
          @edit="edit"
        />
        <v-table
          v-show="filterName==='Sqlserver'"
          ref="sqlserver"
          :field-arr="databaseFieldArr"
          :table-setting="sqlserverSetting"
          class="pdNone"
          @edit="edit"
        />
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
      activeName: this.$route.query.type === '2' ? 'second' : 'first',
      // 选中的过滤器名
      filterName: this.$route.query.filterName || 'Oracle',
      btnarr: [{ id: '1', value: ' 管理系统和数据库', eventName: 'manageHandle', type: 'info' }],
      tableSetting: {
        pagination: {
          show: true,
          rowsPerPage: [10, 20, 20]
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
        apiUrl: '/os/metric/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      fieldArr: [
        {
          label: '操作系统名称',
          key: 'osName',
          formatter: ''
        }, {
          label: '系统类别',
          key: 'osTypeName',
          width: '200',
          filters: [{ text: 'windows操作系统', value: 'windows操作系统' }, { text: 'liunx操作系统', value: 'liunx操作系统' }]
        }, {
          label: '运行状态',
          key: 'runStateName',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 0 }],
          filters: [{ text: '正常', value: '1' }, { text: '异常', value: '0' }]
        }, {
          label: '硬盘状态',
          key: 'diskStateName',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 0 }],
          filters: [{ text: '正常', value: '1' }, { text: '异常', value: '0' }]
        }, {
          label: '内存状态',
          key: 'memoryStateName',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 0 }],
          filters: [{ text: '正常', value: '1' }, { text: '异常', value: '0' }]
        }, {
          label: 'cpu负载',
          key: 'cpuStateName',
          formatter: [{ label: '正常', key: 1 }, { label: '异常', key: 0 }],
          filters: [{ text: '正常', value: '1' }, { text: '异常', value: '0' }]
        }, {
          label: '所在服务器',
          key: 'areaName',
          width: '220'
        }, {
          label: '操作',
          key: 'operation',
          width: '200px',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/system_detail?type=1',
            query: ['actualId', 'osName'],
            colorType: 'tableBlue'
          }]
        }
      ],
      mysqlSetting: {
        pagination: {
          show: true,
          rowsPerPage: [10, 20, 20]
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
        apiUrl: '/database/mysql/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      oracleSetting: {
        pagination: {
          show: true,
          rowsPerPage: [10, 20, 20]
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
        apiUrl: '/database/oracle/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      sqlserverSetting: {
        pagination: {
          show: true,
          rowsPerPage: [10, 20, 20]
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
        apiUrl: '/database/sqlserver/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      }
    }
  },
  computed: {
    databaseFieldArr: function () {
      return [
        {
          label: '数据库名称',
          key: 'databaseName',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runState',
          formatter: [{
            key: 1,
            label: '正常',
            color: 'stateNormal',
            className: 'iconicon_check_alt',
            iconColor: '#14AD00'
          }, {
            key: 2,
            label: '异常',
            color: 'stateNormal',
            className: 'iconicon_error-triangle',
            iconColor: 'red'
          }, {
            key: 3,
            label: '维护中',
            color: 'stateNormal',
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
          width: '220',
          filters: [{ text: '锦江一体化平台数据服务器', value: '锦江一体化平台数据服务器' }, { text: '邑州体罚系统运行服务器', value: '邑州体罚系统运行服务器' }, { text: '乐山应急指挥平台数据服务器', value: '乐山应急指挥平台数据服务器' }, { text: '川北OA系统运行服务器', value: '川北OA系统运行服务器' }, { text: '川西数据备份系统服务器', value: '川西数据备份系统服务器' }]
        }, {
          label: '操作',
          key: 'operation',
          width: '200px',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/system_detail?type=2&filterName=' + this.filterName,
            query: ['id', 'databaseName'],
            colorType: 'tableBlue'
          }]
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    handleClick () { },
    searchKey (val) {
      console.log(val);
    },
    managementHandle (val) {
      if (val === 'manageHandle') {
        this.$router.push('/databaseManage')
      }
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
.tab_body {
  padding: 17px 12px;
  background-color: #fff;
  .pdNone {
    padding: 0 !important;
  }
}
.database-filter {
  width: 100%;
  height: 56px !important;
  background-color: rgba(201, 203, 245, 0.2);
  font-size: 14px;
  border-bottom: 3px solid #c1c5ff;
  span {
    display: block;
    float: left;
    width: 205px;
    height: 56px;
    line-height: 56px;
    text-align: center;
    box-sizing: border-box;
    color: #888888;
    cursor: pointer;
  }
  .filter-active {
    position: relative;
    color: #38ace1;
    border-bottom: 3px solid #5466e0;
  }
  .filter-active:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    background-color: transparent;
    border: 6px solid;
    border-color: transparent transparent #5466e0;
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
