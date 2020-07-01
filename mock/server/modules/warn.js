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
    'source|1': ['刑罚执行系统', '行政楼大门-门禁', '锦江监狱-二楼楼梯报警设备', '锦江监狱数据备份服务器 ', '雷马屏监狱-大门门禁'],
    'type|1': ['门禁告警一', '服务器告警', '应用软件告警', '广播告警'],
    'level|1': [1, 2, 3, 4],
    'des|1': ['服务器异常', '服务器温度过高', '风扇异常'],
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
    'source|1': [{ nameId: 1, name: '新增IT设备' }, { nameId: 2, name: '告警清除' }, { nameId: 3, name: '修改告警声音提示' }],
    'eventTime': '@datetime("yyyy-MM-dd HH:mm:ss")',
    'des|1': function () {
      var val = this.source.nameId === 1 && '用户新增IT设备服务器' || this.source.nameId === 2 && '系统自动清除已处理告警' || this.source.nameId === 3 && '更换致命告警的声音提示'
      return val
    }
  }]
})
const data3 = Mock.mock({
  'items|30': [{
    id: '@increment',
    'num|+1': 100000,
    'source|1': ['锦江监狱-大门门禁', '邑州监狱-大门门禁', '川西监狱-大门门禁', '川北监狱-大门门禁', '雷马屏监狱-大门门禁'],
    'type|1': ['门禁告警一', '服务器告警', '应用软件告警三', '广播告警'],
    'level|1': [1, 2, 3, 4],
    'des|1': ['服务器异常', '服务器温度过高', '风扇异常'],
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
    'source|1': ['锦江监狱-大门门禁', '邑州监狱-大门门禁', '川西监狱-大门门禁', '川北监狱-大门门禁', '雷马屏监狱-大门门禁'],
    'type|1': ['门禁告警一', '服务器告警', '应用软件告警三', '广播告警'],
    'level|1': [1, 2, 3, 4],
    'des|1': ['服务器异常', '服务器温度过高', '风扇异常'],
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
