export default [
  {
    url: '/database/mysql/innodbBufferPoolReadSec/:actualid', // mysql物理磁盘读取次数(折线图)
    type: 'get',
    response: (req, res) => {
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': [
          {
            'additionalProp1': {},
            'additionalProp2': {},
            'additionalProp3': {}
          }
        ]
      }
    }
  },
  {
    url: '/database/mysql/kpi/:actualid', // mysql性能指标
    type: 'get',
    response: (req, res) => {
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': {
          'bytesReceived': 'string',
          'bytesSent': 'string',
          'comCommit': 'string',
          'comDelete': 'string',
          'comInsert': 'string',
          'comSelect': 'string',
          'comUpdate': 'string',
          'connections': 'string',
          'createdTmpDiskTables': 'string',
          'createdTmpTables': 'string',
          'innodbBufferPoolReadRequests': 'string',
          'innodbBufferPoolReadSec': 'string',
          'innodbBufferPoolReads': 'string',
          'keyReadRequests': 'string',
          'keyReads': 'string',
          'keyWrite': 'string',
          'keyWriteRequests': 'string',
          'qcacheHits': 'string',
          'slowQueryNum': 'string',
          'threadRunning': 'string',
          'threadsCreated': 'string',
          'uptime': 'string'
        }
      }
    }
  }, {
    url: '/database/mysql/queryCacheHitRate/:actualid', // mysql线程缓存命中率(折线图)
    type: 'get',
    response: (req, res) => {
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': [

        ]
      }
    }
  }
]
