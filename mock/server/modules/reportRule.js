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
function removeData2 (id) {
  data2.items.forEach((item, index) => {
    if (id === item.id) {
      data2.items.splice(index, 1);
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
    'num|+1': 1000,
    'name|1': [{ nameId: 1, name: '服务器规则' }, { nameId: 2, name: '中间件规则' }, { nameId: 3, name: '浏览器规则' }, { nameId: 4, name: '数据库规则' }, { nameId: 5, name: '操作系统规则' }],
    'source|1': ['门禁告警', '服务器告警', '应用软件告警', '广播告警'],
    'type|1': ['安防设备', '应用软件', 'IT设备', '中间件', '云平台', '操作系统和数据库'],
    'level|1': [1, 2, 3, 4],
    'des|1': function () {
      var val = this.name.nameId === 1 && '服务器规则描述信息' || this.name.nameId === 2 && '中间件规则描述信息' || this.name.nameId === 3 && '浏览器规则描述信息' || this.name.nameId === 4 && '数据库规则描述信息' || this.name.nameId === 5 && '操作系统规则描述信息'
      return val
    },
    'runstate|1': [1, 2]
  }]
})
const data2 = Mock.mock({
  'items|30': [{
    id: '@increment',
    'num|+1': 2000,
    'name|1': [{ nameId: 1, name: '服务器规则' }, { nameId: 2, name: '中间件规则' }, { nameId: 3, name: '浏览器规则' }, { nameId: 4, name: '数据库规则' }, { nameId: 5, name: '操作系统规则' }],
    'source|1': ['门禁告警', '服务器告警', '应用软件告警', '广播告警'],
    'type|1': ['安防设备', '应用软件', 'IT设备', '中间件', '云平台', '操作系统和数据库'],
    'level|1': [1, 2, 3, 4],
    'email|1': function () {
      var val = this.name.nameId === 1 && '服务器规则邮件地址' || this.name.nameId === 2 && '中间件规则邮件地址' || this.name.nameId === 3 && '浏览器规则邮件地址' || this.name.nameId === 4 && '数据库规则邮件地址' || this.name.nameId === 5 && '操作系统规则邮件地址'
      return val
    },
    'runstate|1': [1, 2]
  }]
})
const data3 = Mock.mock({
  'items|30': [{
    id: '@increment',
    'num|+1': 3000,
    'name|1': [{ nameId: 1, name: '服务器规则' }, { nameId: 2, name: '中间件规则' }, { nameId: 3, name: '浏览器规则' }, { nameId: 4, name: '数据库规则' }, { nameId: 5, name: '操作系统规则' }],
    'source|1': ['门禁告警', '服务器告警', '应用软件告警', '广播告警'],
    'type|1': ['安防设备', '应用软件', 'IT设备', '中间件', '云平台', '操作系统和数据库'],
    'level|1': [1, 2, 3, 4],
    'redirectLevel|1': [1, 2, 3, 4]
  }]
})
export default [
  {
    url: '/ruleFilter',
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
    url: '/ruleEmail',
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
    url: '/ruleRedirect',
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
    url: '/ruleFilter',
    type: 'post',
    response: (req, res) => {
      const id = Mock.mock('@id');
      const item = { id, ...req.body };
      data.items.unshift(item);
      return {
        'statusText': '新增成功',
        'statusCode': 0,
        'data': null
      }
    }
  },
  {
    url: '/ruleEmail',
    type: 'post',
    response: (req, res) => {
      const id = Mock.mock('@id');
      const item = { id, ...req.body };
      data2.items.unshift(item);
      return {
        'statusText': '新增成功',
        'statusCode': 0,
        'data': null
      }
    }
  },
  {
    url: '/ruleRedirect',
    type: 'post',
    response: (req, res) => {
      const id = Mock.mock('@id');
      const item = { id, ...req.body };
      data3.items.unshift(item);
      return {
        'statusText': '新增成功',
        'statusCode': 0,
        'data': null
      }
    }
  },
  {
    url: '/ruleFilter',
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
    url: '/ruleEmail',
    type: 'delete',
    response: (req, res) => {
      const ids = req.query.ids;
      ids.forEach((id) => {
        removeData2(id)
      })
      return {
        'statusText': '删除成功',
        'statusCode': 0,
        'data': {}
      }
    }
  },
  {
    url: '/ruleRedirect',
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
  },
  {
    name: '',
    url: '/ruleFilter',
    type: 'put',
    response: (req, res) => {
      const item = req.body;
      for (let i = 0, len = data.items.length; i < len; i++) {
        if (data.items[i].id === item.id) {
          data.items.splice(i, 1, item);
          break;
        }
      }
      return {
        'statusText': '修改成功',
        'statusCode': 0,
        'data': null
      }
    }
  },
  {
    name: '',
    url: '/ruleEmail',
    type: 'put',
    response: (req, res) => {
      const item = req.body;
      for (let i = 0, len = data2.items.length; i < len; i++) {
        if (data2.items[i].id === item.id) {
          data2.items.splice(i, 1, item);
          break;
        }
      }
      return {
        'statusText': '修改成功',
        'statusCode': 0,
        'data': null
      }
    }
  },
  {
    name: '',
    url: '/ruleRedirect',
    type: 'put',
    response: (req, res) => {
      const item = req.body;
      for (let i = 0, len = data3.items.length; i < len; i++) {
        if (data3.items[i].id === item.id) {
          data3.items.splice(i, 1, item);
          break;
        }
      }
      return {
        'statusText': '修改成功',
        'statusCode': 0,
        'data': null
      }
    }
  }
]
