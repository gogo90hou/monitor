<template>
  <div>
    <div class="body-content">
      <HeadMenu
        title="中间件监控列表"
        :search="true"
        :btnarr="btnarr"
        @getValue="searchKey"
        @getSelectId="selectIdHandle"
        @getEvent="judgeEvent"
      />
    </div>
    <el-tabs v-model="activeName" type="card" class="tab_body" @tab-click="handleClick">
      <el-tab-pane label="Apache" name="Apache">
        <v-table :field-arr="apacheArr" :table-setting="apacheSetting" class="pdNone" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="Flume" name="Flume">
        <v-table :field-arr="flumeArr" :table-setting="flumeSetting" class="pdNone" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="Redis" name="Redis">
        <v-table :field-arr="redisArr" :table-setting="redisSetting" class="pdNone" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="JVM" name="JVM">
        <v-table :field-arr="jvmArr" :table-setting="jvmSetting" class="pdNone" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="ActiveMQ" name="ActiveMQ">
        <v-table :field-arr="activeMQArr" :table-setting="activeMQSetting" class="pdNone" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="IIS" name="IIS">
        <v-table :field-arr="iisArr" :table-setting="iisSetting" class="pdNone" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="Flink" name="Flink">
        <v-table :field-arr="flinkArr" :table-setting="flinkSetting" class="pdNone" @edit="edit" />
      </el-tab-pane>
      <el-tab-pane label="Kafka" name="Kafka">
        <v-table :field-arr="kafkaArr" :table-setting="kafkaSetting" class="pdNone" @edit="edit" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: this.$route.query.type || 'Apache',
      btnarr: [{ id: '1', value: ' 管理中间件', eventName: 'manageHandle', type: 'info' }],
      apacheSetting: {
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
        apiUrl: '/apache/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      flumeSetting: {
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
        apiUrl: '/flume/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      redisSetting: {
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
        apiUrl: '/redis/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      jvmSetting: {
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
        apiUrl: '/jvm/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      activeMQSetting: {
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
        apiUrl: '/activemq/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      iisSetting: {
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
        apiUrl: '/iis/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      flinkSetting: {
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
        apiUrl: '/flink/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      },
      kafkaSetting: {
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
        apiUrl: '/kafka/list',
        socket: {
          url: 'http://localhost:9999/echo',
          subscribe: 'data',
          tagName: 'id'
        }
      }
    }
  },
  computed: {
    apacheArr: function () {
      return [
        {
          label: '中间件名称',
          key: 'name',
          width: '140',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runstate',
          formatter: [{
            key: 1,
            label: '正常',
            color: '#15B000',
            className: 'iconicon_successfully',
            iconColor: '#15B000'
          }, {
            key: 2,
            label: '异常',
            color: '#f00',
            className: 'iconicon_error-triangle',
            iconColor: '#f00'
          }, {
            key: 3,
            label: '断连',
            color: '#999999',
            className: 'iconicon_power_failure',
            iconColor: '#626262'
          }],
          filters: 'layout/runState2'
        }, {
          label: '总请求数',
          key: 'totalRequest'
        }, {
          label: '总字节数',
          key: 'totalSize'
        }, {
          label: '运行线程数',
          key: 'threadCount'
        }, {
          label: '数据发送速率',
          key: 'dataSendSpeed',
          formatter: '(dataSendSpeed)kb/s'
        }, {
          label: '数据接收速率',
          key: 'dataReceptionSpeed',
          formatter: '(dataReceptionSpeed)kb/s'
        },
        {
          label: '所在服务器',
          key: 'serve',
          width: '220',
          formatter: '',
          filters: [{ text: '服务器1', value: '1' }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '230',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/middle_detail?type=Apache',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    },
    flumeArr: function () {
      return [
        {
          label: '中间件名称',
          key: 'name',
          width: '140',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runstate',
          formatter: [{
            key: 1,
            label: '正常',
            color: '#15B000',
            className: 'iconicon_successfully',
            iconColor: '#15B000'
          }, {
            key: 2,
            label: '异常',
            color: '#f00',
            className: 'iconicon_error-triangle',
            iconColor: '#f00'
          }, {
            key: 3,
            label: '断连',
            color: '#999999',
            className: 'iconicon_power_failure',
            iconColor: '#626262'
          }],
          filters: 'layout/runState2'
        }, {
          label: '读取事件总数',
          key: 'readEvents',
          formatter: ''
        }, {
          label: '发送事件总数',
          key: 'sendEvents'
        }, {
          label: '通道容量',
          key: 'channelCapacity'
        },
        {
          label: '所在服务器',
          key: 'serve',
          width: '220',
          formatter: '',
          filters: [{ text: '服务器1', value: '1' }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '230',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/middle_detail?type=Flume',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    },
    redisArr: function () {
      return [
        {
          label: '中间件名称',
          key: 'name',
          width: '140',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runstate',
          formatter: [{
            key: 1,
            label: '正常',
            color: '#15B000',
            className: 'iconicon_successfully',
            iconColor: '#15B000'
          }, {
            key: 2,
            label: '异常',
            color: '#f00',
            className: 'iconicon_error-triangle',
            iconColor: '#f00'
          }, {
            key: 3,
            label: '断连',
            color: '#999999',
            className: 'iconicon_power_failure',
            iconColor: '#626262'
          }],
          filters: 'layout/runState2'
        }, {
          label: '连接客户数',
          key: 'connectUser',
          formatter: ''
        }, {
          label: '连接从库数',
          key: 'connectLib'
        }, {
          label: '每分钟连接数',
          key: 'minuteConnect',
          formatter: '(minuteConnect) / min'
        }, {
          label: '阻塞客户数',
          key: 'blockCus'
        }, {
          label: '缓存命中率',
          key: 'cacheHit',
          formatter: '(cacheHit)%'
        }, {
          label: '占用内存',
          key: 'mem',
          formatter: '(mem)%'
        }, {
          label: '每分钟执行命令数',
          key: 'minuteExecute',
          formatter: '(minuteExecute) / min'
        },
        {
          label: '所在服务器',
          key: 'serve',
          width: '220',
          formatter: '',
          filters: [{ text: '服务器1', value: '1' }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '230',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/middle_detail?type=Redis',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    },
    jvmArr: function () {
      return [
        {
          label: '中间件名称',
          key: 'name',
          width: '140',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runstate',
          formatter: [{
            key: 1,
            label: '正常',
            color: '#15B000',
            className: 'iconicon_successfully',
            iconColor: '#15B000'
          }, {
            key: 2,
            label: '异常',
            color: '#f00',
            className: 'iconicon_error-triangle',
            iconColor: '#f00'
          }, {
            key: 3,
            label: '断连',
            color: '#999999',
            className: 'iconicon_power_failure',
            iconColor: '#626262'
          }],
          filters: 'layout/runState2'
        }, {
          label: '堆内存使用百分比',
          key: 'heapMemory',
          formatter: '(heapMemory)%'
        }, {
          label: '线程数',
          key: 'threadCount'
        }, {
          label: '老年代GC执行次数',
          key: 'oldGc'
        }, {
          label: '年轻代GC执行次数',
          key: 'youngGc'
        }, {
          label: '当前类加载数量',
          key: 'loadClass'
        },
        {
          label: '所在服务器',
          key: 'serve',
          width: '220',
          formatter: '',
          filters: [{ text: '服务器1', value: '1' }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '230',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/middle_detail?type=JVM',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    },
    activeMQArr: function () {
      return [
        {
          label: '中间件名称',
          key: 'name',
          width: '140',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runstate',
          formatter: [{
            key: 1,
            label: '正常',
            color: '#15B000',
            className: 'iconicon_successfully',
            iconColor: '#15B000'
          }, {
            key: 2,
            label: '异常',
            color: '#f00',
            className: 'iconicon_error-triangle',
            iconColor: '#f00'
          }, {
            key: 3,
            label: '断连',
            color: '#999999',
            className: 'iconicon_power_failure',
            iconColor: '#626262'
          }],
          filters: 'layout/runState2'
        }, {
          label: '消费者数量',
          key: 'costCount',
          formatter: ''
        }, {
          label: '生产者数量',
          key: 'prodCount'
        }, {
          label: '未消费消息数量',
          key: 'uncostMsg'
        }, {
          label: '内存使用量',
          key: 'Memory',
          formatter: '(Memory)%'
        }, {
          label: '存储空间使用量',
          key: 'storageSpace',
          formatter: '(storageSpace)%'
        }, {
          label: '临时空间使用量',
          key: 'stagingSpace',
          formatter: '(stagingSpace)%'
        },
        {
          label: '所在服务器',
          key: 'serve',
          width: '220',
          formatter: '',
          filters: [{ text: '服务器1', value: '1' }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '230',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/middle_detail?type=ActiveMQ',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    },
    iisArr: function () {
      return [
        {
          label: '中间件名称',
          key: 'name',
          width: '140',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runstate',
          formatter: [{
            key: 1,
            label: '正常',
            color: '#15B000',
            className: 'iconicon_successfully',
            iconColor: '#15B000'
          }, {
            key: 2,
            label: '异常',
            color: '#f00',
            className: 'iconicon_error-triangle',
            iconColor: '#f00'
          }, {
            key: 3,
            label: '断连',
            color: '#999999',
            className: 'iconicon_power_failure',
            iconColor: '#626262'
          }],
          filters: 'layout/runState2'
        }, {
          label: '当前连接数',
          key: 'connectCount',
          formatter: ''
        }, {
          label: '活跃请求数',
          key: 'activeReq'
        }, {
          label: '文件缓存数',
          key: 'fileSave'
        }, {
          label: 'CPU使用率',
          key: 'cpuUseage',
          formatter: '(cpuUseage)%'
        },
        {
          label: '所在服务器',
          key: 'serve',
          width: '220',
          formatter: '',
          filters: [{ text: '服务器1', value: '1' }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '230',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/middle_detail?type=IIS',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    },
    flinkArr: function () {
      return [
        {
          label: '中间件名称',
          key: 'name',
          width: '140',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runstate',
          formatter: [{
            key: 1,
            label: '正常',
            color: '#15B000',
            className: 'iconicon_successfully',
            iconColor: '#15B000'
          }, {
            key: 2,
            label: '异常',
            color: '#f00',
            className: 'iconicon_error-triangle',
            iconColor: '#f00'
          }, {
            key: 3,
            label: '断连',
            color: '#999999',
            className: 'iconicon_power_failure',
            iconColor: '#626262'
          }],
          filters: 'layout/runState2'
        }, {
          label: '堆内存使用百分比',
          key: 'heapMemony',
          formatter: ''
        }, {
          label: '线程数',
          key: 'threadCount'
        }, {
          label: '老年代GC执行次数',
          key: 'oldGc'
        }, {
          label: '年轻代GC执行次数',
          key: 'youngGc'
        }, {
          label: '注册任务管理器的数量',
          key: 'registerNum'
        }, {
          label: '可用任务槽的数量',
          key: 'taskNum'
        },
        {
          label: '所在服务器',
          key: 'serve',
          width: '220',
          formatter: '',
          filters: [{ text: '服务器1', value: '1' }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '230',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/middle_detail?type=Flink',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    },
    kafkaArr: function () {
      return [
        {
          label: '中间件名称',
          key: 'name',
          width: '140',
          formatter: ''
        }, {
          label: '运行状态',
          key: 'runstate',
          formatter: [{
            key: 1,
            label: '正常',
            color: '#15B000',
            className: 'iconicon_successfully',
            iconColor: '#15B000'
          }, {
            key: 2,
            label: '异常',
            color: '#f00',
            className: 'iconicon_error-triangle',
            iconColor: '#f00'
          }, {
            key: 3,
            label: '断连',
            color: '#999999',
            className: 'iconicon_power_failure',
            iconColor: '#626262'
          }],
          filters: 'layout/runState2'
        }, {
          label: '平均入消息速率',
          key: 'inMsg',
          formatter: '(inMsg)%'
        }, {
          label: '平均输入字节速率',
          key: 'inByte',
          formatter: '(inByte)%'
        }, {
          label: '平均输出字节速率',
          key: 'outByte',
          formatter: '(outByte)%'
        }, {
          label: '平均扔掉字节速率',
          key: 'discardByte',
          formatter: '(discardByte)%'
        }, {
          label: '平均失败的fetch请求率',
          key: 'errorFetch',
          formatter: '(errorFetch)%'
        }, {
          label: '平均失败的producer请求率',
          key: 'errorProducer',
          formatter: '(errorProducer)%'
        },
        {
          label: '所在服务器',
          key: 'serve',
          width: '220',
          formatter: '',
          filters: [{ text: '服务器1', value: '1' }]
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '230',
          buttons: [{
            label: '查看详情',
            type: 'url',
            path: '/middle_detail?type=Kafka',
            query: ['id', 'name'],
            colorType: 'tableBlue'
          }]
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('monitor/soft/getList')
  },
  methods: {
    edit (data) {
      console.log(data)
    },
    handleClick () { },
    searchKey (val) {
      console.log(val);
    },
    judgeEvent (val) {
      if (val === 'manageHandle') {
        this.$router.push('/middleManage')
      }
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
</style>
