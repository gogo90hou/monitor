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
function removeData (id) {
  data.items.forEach((item, index) => {
    if (id === item.id) {
      data.items.splice(index, 1);
    }
  });
}
function removeData3 (id) {
  data3.items.forEach((item, index) => {
    if (id === item.id) {
      data3.items.splice(index, 1);
    }
  });
}
const data = Mock.mock({
  'items|30': [{
    id: '@increment',
    'num|+1': 100000,
    'source|1': ['甘孜监狱-大门门禁1', '甘孜监狱-大门门禁2', '甘孜监狱-大门门禁3', '甘孜监狱-大门门禁4', '甘孜监狱-大门门禁5'],
    'type|1': ['门禁告警一', '服务器告警2', '应用软件告警三', '广播告警'],
    'level|1': [1, 2, 3, 4],
    'des|1': ['描述1', '描述2', '描述3', '描述4'],
    'alarmTime': '@datetime("yyyy-MM-dd")',
    'state|1': [1, 2, 3, 4],
    'setTime': '@datetime("yyyy-MM-dd")',
    'dealState|1': [1, 2, 3]
  }]
})
const data2 = Mock.mock({
  'items|30': [{
    id: '@increment',
    'num|+1': 100000,
    'source|1': ['甘孜监狱-大门门禁1', '甘孜监狱-大门门禁2', '甘孜监狱-大门门禁3', '甘孜监狱-大门门禁4', '甘孜监狱-大门门禁5'],
    'eventTime': '@datetime("yyyy-MM-dd HH:mm:ss")',
    'des|1': ['用户新增IT设备服务器1', '用户新增IT设备服务器2', '用户新增IT设备服务器3']
  }]
})
const data3 = Mock.mock({
  'items|30': [{
    id: '@increment',
    'num|+1': 100000,
    'source|1': ['甘孜监狱-大门门禁1', '甘孜监狱-大门门禁2', '甘孜监狱-大门门禁3', '甘孜监狱-大门门禁4', '甘孜监狱-大门门禁5'],
    'type|1': ['门禁告警一', '服务器告警2', '应用软件告警三', '广播告警'],
    'level|1': [1, 2, 3, 4],
    'des|1': ['描述1', '描述2', '描述3', '描述4'],
    'alarmTime': '@datetime("yyyy-MM-dd")',
    'state|1': [1, 2, 3, 4],
    'setTime': '@datetime("yyyy-MM-dd")',
    'dealState|1': [1, 2, 3]
  }]
})
const data4 = Mock.mock({
  'items|30': [{
    id: '@increment',
    'num|+1': 100000,
    'source|1': ['甘孜监狱-大门门禁1', '甘孜监狱-大门门禁2', '甘孜监狱-大门门禁3', '甘孜监狱-大门门禁4', '甘孜监狱-大门门禁5'],
    'type|1': ['门禁告警一', '服务器告警2', '应用软件告警三', '广播告警'],
    'level|1': [1, 2, 3, 4],
    'des|1': ['描述1', '描述2', '描述3', '描述4'],
    'alarmTime': '@datetime("yyyy-MM-dd")',
    'state|1': [1, 2, 3, 4],
    'setTime': '@datetime("yyyy-MM-dd")',
    'dealState|1': [1, 2, 3]
  }]
})
export default [
  {
    url: '/warn/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '拉取列表成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, data, 'items')
      }
    }
  },
  {
    url: '/event/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '拉取列表成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, data2, 'items')
      }
    }
  },
  {
    url: '/smart/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '拉取列表成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, data3, 'items')
      }
    }
  },
  {
    url: '/histroy/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '拉取列表成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, data4, 'items')
      }
    }
  },
  {
    url: '/warn/list',
    type: 'delete',
    response: (req, res) => {
      const ids = req.query.ids;
      ids.forEach((id) => {
        removeData(id)
      })
      return {
        'statusText': '删除成功',
        'statusCode': 0,
        'data': {}
      }
    }
  },
  {
    url: '/smart/list',
    type: 'delete',
    response: (req, res) => {
      const ids = req.query.ids;
      ids.forEach((id) => {
        removeData3(id)
      })
      return {
        'statusText': '删除成功',
        'statusCode': 0,
        'data': {}
      }
    }
  }
]
