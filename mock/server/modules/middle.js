const Mock = require('mockjs');
function getDataByPage (page, pagesize, data, key) { // 根据页码 页尺寸 来过滤数据
  const start = (page - 1) * pagesize;
  const end = page * pagesize > data[key].length ? data[key].length : page * pagesize;
  const result = [];
  for (let i = start; i < end; i++) {
    for (var item in data[key][i]) {
      if (data[key][i][item] instanceof Object) {
        data[key][i][item] = data[key][i][item].name;
      }
    }
    result.push(data[key][i]);//
  }
  const ret = {};
  ret[key] = result;
  ret['currentPage'] = page;
  ret['totalRows'] = data[key].length;
  ret['rowsPerPage'] = pagesize;
  return ret;
}
const apache = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': [{ nameId: 1, name: '锦江中间件' }, { nameId: 2, name: '邑州中间件' }, { nameId: 3, name: '川西中间件' }, { nameId: 4, name: '川北中间件' }, { nameId: 5, name: '乐山中间件' }],
    'runstate|1': [1, 2, 3],
    'totalRequest': '@integer(30, 100)',
    'totalSize': '@integer(30, 100)',
    'threadCount': '@integer(30, 100)',
    'cpuLoad': '@integer(10, 300)',
    'dataSendSpeed': '@integer(10, 300)',
    'dataReceptionSpeed': '@integer(10, 300)',
    'serve': function () {
      var val = this.name.nameId === 1 && '锦江一体化平台数据服务器' || this.name.nameId === 2 && '邑州体罚系统运行服务器' || this.name.nameId === 3 && '川西数据备份系统服务器' || this.name.nameId === 4 && '川北OA系统运行服务器' || this.name.nameId === 5 && '乐山应急指挥平台数据服务器'
      return val
    }
  }]
})
const flume = Mock.mock({
  'items|43': [{
    id: '@increment',
    'name|1': [{ nameId: 1, name: '锦江中间件' }, { nameId: 2, name: '邑州中间件' }, { nameId: 3, name: '川西中间件' }, { nameId: 4, name: '川北中间件' }, { nameId: 5, name: '乐山中间件' }],
    'runstate|1': [1, 2, 3],
    'readEvents': '@integer(30, 100)',
    'sendEvents': '@integer(30, 100)',
    'channelCapacity': '@integer(30, 100)',
    'serve': function () {
      var val = this.name.nameId === 1 && '锦江一体化平台数据服务器' || this.name.nameId === 2 && '邑州体罚系统运行服务器' || this.name.nameId === 3 && '川西数据备份系统服务器' || this.name.nameId === 4 && '川北OA系统运行服务器' || this.name.nameId === 5 && '乐山应急指挥平台数据服务器'
      return val
    }
  }]
})
const redis = Mock.mock({
  'items|50': [{
    id: '@increment',
    'name|1': [{ nameId: 1, name: '锦江中间件' }, { nameId: 2, name: '邑州中间件' }, { nameId: 3, name: '川西中间件' }, { nameId: 4, name: '川北中间件' }, { nameId: 5, name: '乐山中间件' }],
    'runstate|1': [1, 2, 3],
    'connectUser': '@integer(30, 100)',
    'connectLib': '@integer(30, 100)',
    'minuteConnect': '@integer(1, 10)',
    'blockCus': '@integer(1, 100)',
    'cacheHit': '@integer(1, 100)',
    'mem': '@integer(1, 10)',
    'minuteExecute': '@integer(1, 10)',
    'serve': function () {
      var val = this.name.nameId === 1 && '锦江一体化平台数据服务器' || this.name.nameId === 2 && '邑州体罚系统运行服务器' || this.name.nameId === 3 && '川西数据备份系统服务器' || this.name.nameId === 4 && '川北OA系统运行服务器' || this.name.nameId === 5 && '乐山应急指挥平台数据服务器'
      return val
    }
  }]
})
const jvm = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': [{ nameId: 1, name: '锦江中间件' }, { nameId: 2, name: '邑州中间件' }, { nameId: 3, name: '川西中间件' }, { nameId: 4, name: '川北中间件' }, { nameId: 5, name: '乐山中间件' }],
    'runstate|1': [1, 2, 3],
    'heapMemory': '@integer(30, 100)',
    'threadCount': '@integer(30, 100)',
    'oldGc': '@integer(1, 10)',
    'youngGc': '@integer(1, 100)',
    'loadClass': '@integer(1, 100)',
    'serve': function () {
      var val = this.name.nameId === 1 && '锦江一体化平台数据服务器' || this.name.nameId === 2 && '邑州体罚系统运行服务器' || this.name.nameId === 3 && '川西数据备份系统服务器' || this.name.nameId === 4 && '川北OA系统运行服务器' || this.name.nameId === 5 && '乐山应急指挥平台数据服务器'
      return val
    }
  }]
})
const activemq = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': [{ nameId: 1, name: '锦江中间件' }, { nameId: 2, name: '邑州中间件' }, { nameId: 3, name: '川西中间件' }, { nameId: 4, name: '川北中间件' }, { nameId: 5, name: '乐山中间件' }],
    'runstate|1': [1, 2, 3],
    'costCount': '@integer(30, 100)',
    'prodCount': '@integer(30, 100)',
    'uncostMsg': '@integer(30, 100)',
    'Memory': '@integer(1, 100)',
    'storageSpace': '@integer(1, 100)',
    'stagingSpace': '@integer(1, 100)',
    'serve': function () {
      var val = this.name.nameId === 1 && '锦江一体化平台数据服务器' || this.name.nameId === 2 && '邑州体罚系统运行服务器' || this.name.nameId === 3 && '川西数据备份系统服务器' || this.name.nameId === 4 && '川北OA系统运行服务器' || this.name.nameId === 5 && '乐山应急指挥平台数据服务器'
      return val
    }
  }]
})
const iis = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': [{ nameId: 1, name: '锦江中间件' }, { nameId: 2, name: '邑州中间件' }, { nameId: 3, name: '川西中间件' }, { nameId: 4, name: '川北中间件' }, { nameId: 5, name: '乐山中间件' }],
    'runstate|1': [1, 2, 3],
    'connectCount': '@integer(30, 100)',
    'activeReq': '@integer(30, 100)',
    'fileSave': '@integer(1, 10)',
    'cpuUseage': '@integer(1, 100)',
    'serve': function () {
      var val = this.name.nameId === 1 && '锦江一体化平台数据服务器' || this.name.nameId === 2 && '邑州体罚系统运行服务器' || this.name.nameId === 3 && '川西数据备份系统服务器' || this.name.nameId === 4 && '川北OA系统运行服务器' || this.name.nameId === 5 && '乐山应急指挥平台数据服务器'
      return val
    }
  }]
})
const flink = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': [{ nameId: 1, name: '锦江中间件' }, { nameId: 2, name: '邑州中间件' }, { nameId: 3, name: '川西中间件' }, { nameId: 4, name: '川北中间件' }, { nameId: 5, name: '乐山中间件' }],
    'runstate|1': [1, 2, 3],
    'heapMemony': '@integer(30, 100)',
    'threadCount': '@integer(30, 100)',
    'oldGc': '@integer(1, 10)',
    'youngGc': '@integer(1, 100)',
    'registerNum': '@integer(1, 100)',
    'taskNum': '@integer(1, 100)',
    'serve': function () {
      var val = this.name.nameId === 1 && '锦江一体化平台数据服务器' || this.name.nameId === 2 && '邑州体罚系统运行服务器' || this.name.nameId === 3 && '川西数据备份系统服务器' || this.name.nameId === 4 && '川北OA系统运行服务器' || this.name.nameId === 5 && '乐山应急指挥平台数据服务器'
      return val
    }
  }]
})
const kafka = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': [{ nameId: 1, name: '锦江中间件' }, { nameId: 2, name: '邑州中间件' }, { nameId: 3, name: '川西中间件' }, { nameId: 4, name: '川北中间件' }, { nameId: 5, name: '乐山中间件' }],
    'runstate|1': [1, 2, 3],
    'heapMemony': '@integer(30, 100)',
    'threadCount': '@integer(30, 100)',
    'oldGc': '@integer(1, 10)',
    'youngGc': '@integer(1, 100)',
    'inMsg': '@integer(1, 100)',
    'inByte': '@integer(1, 100)',
    'outByte': '@integer(1, 100)',
    'discardByte': '@integer(1, 100)',
    'errorFetch': '@integer(1, 100)',
    'errorProducer': '@integer(1, 100)',
    'serve': function () {
      var val = this.name.nameId === 1 && '锦江一体化平台数据服务器' || this.name.nameId === 2 && '邑州体罚系统运行服务器' || this.name.nameId === 3 && '川西数据备份系统服务器' || this.name.nameId === 4 && '川北OA系统运行服务器' || this.name.nameId === 5 && '乐山应急指挥平台数据服务器'
      return val
    }
  }]
})
export default [
  {
    url: '/apache/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, apache, 'items')
      }
    }
  },
  {
    url: '/flume/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, flume, 'items')
      }
    }
  },
  {
    url: '/redis/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, redis, 'items')
      }
    }
  },
  {
    url: '/jvm/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, jvm, 'items')
      }
    }
  },
  {
    url: '/activemq/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, activemq, 'items')
      }
    }
  },
  {
    url: '/iis/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, iis, 'items')
      }
    }
  },
  {
    url: '/flink/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, flink, 'items')
      }
    }
  },
  {
    url: '/kafka/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, kafka, 'items')
      }
    }
  }
]
