const Mock = require('mockjs');
function getDataByPage (page, pagesize, data, key) { // 根据页码 页尺寸 来过滤数据
  const start = (page - 1) * pagesize;
  const end = page * pagesize > data[key].length ? data[key].length : page * pagesize;
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(data[key][i]);//
  }
  const ret = {};
  ret[key] = result;
  ret['currentPage'] = page;
  ret['totalRows'] = data[key].length;
  ret['rowsPerPage'] = pagesize;
  return ret;
}
const data = Mock.mock({
  'items|30': [{
    actualId: '@increment',
    'areaName|1': ['省局服务器1', '省局服务器2'],
    'cpuStateName|1': [1, 0],
    'diskStateName|1': [1, 0],
    'memoryStateName|1': [1, 0],
    'osName|1': ['操作系统名称1', '操作系统名称2', '操作系统名称3', '操作系统名称4', '操作系统名称5'],
    'osTypeName|1': ['windows操作系统', 'linux操作系统'],
    'runStateName|1': [1, 0]
  }]
})
const mysqlList = Mock.mock({
  'items|51': [{
    id: '@increment',
    'databaseName|1': ['mysql1', 'mysql2', 'mysql3', 'mysql4'],
    'runState|1': [1, 2, 3],
    'databaseFileSize': '@integer(30, 100)',
    'processNum': '@integer(30, 100)',
    'activitySession': '@integer(30, 100)',
    'conversation': '@integer(30, 100)',
    'audit|1': ['1', '0'],
    'databaseConnectionNum': '@integer(30, 100)',
    'area|1': ['操作系统名称1', '操作系统名称2', '操作系统名称3', '操作系统名称4', '操作系统名称5']
  }]
})
const oracledata = Mock.mock({
  'items|31': [{
    id: '@increment',
    'databaseName|1': ['oracle1', 'oracle2', 'oracle3', 'oracle4'],
    'runState|1': [1, 2, 3],
    'processNum': '@integer(30, 100)',
    'databaseFileSize': '@integer(30, 100)',
    'activitySession': '@integer(30, 100)',
    'conversation': '@integer(30, 100)',
    'audit|1': ['1', '0'],
    'databaseConnectionNum': '@integer(30, 100)',
    'area|1': ['操作系统名称1', '操作系统名称2', '操作系统名称3', '操作系统名称4', '操作系统名称5']
  }]
})
const sqlserverData = Mock.mock({
  'items|71': [{
    id: '@increment',
    'databaseName|1': ['sqlserver1', 'sqlserver2', 'sqlserver3', 'sqlserver4'],
    'runState|1': [1, 2, 3],
    'processNum': '@integer(30, 100)',
    'databaseFileSize': '@integer(30, 100)',
    'activitySession': '@integer(30, 100)',
    'conversation': '@integer(30, 100)',
    'audit|1': ['1', '0'],
    'databaseConnectionNum': '@integer(30, 100)',
    'area|1': ['操作系统名称1', '操作系统名称2', '操作系统名称3', '操作系统名称4', '操作系统名称5']
  }]
})
module.exports = [
  {
    url: '/os/metric/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, data, 'items')
      }
    }
  },
  {
    url: '/database/mysql/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, mysqlList, 'items')
      }
    }
  },
  {
    url: '/database/oracle/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, oracledata, 'items')
      }
    }
  }, {
    url: '/database/sqlserver/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, sqlserverData, 'items')
      }
    }
  }
]
