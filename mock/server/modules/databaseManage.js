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
    if (id == item.id) {
      data.items.splice(index, 1);
    }
  });
}
function removeData2 (id) {
  data2.items.forEach((item, index) => {
    if (id == item.id) {
      data2.items.splice(index, 1);
    }
  });
}
const data = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': ['操作系统1', '操作系统2', '操作系统3', '操作系统4', '操作系统5'],
    'type|1': ['windows操作系统', 'liunx操作系统'],
    'gateway|1': ['网关1', '网关2', '网关3'],
    'accessSystem|1': ['操作系统1', '操作系统2', '操作系统3'],
    'area|1': ['锦江监狱', '邑州监狱', '川西监狱', '川北监狱', '雷马屏监狱'],
    'server|1': ['省局服务器1', '省局服务器2', '省局服务器3', '省局服务器4', '省局服务器5']
  }]
})
const data2 = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': ['数据库1', '数据库2', '数据库3', '数据库4', '数据库5'],
    'type|1': ['Orcle', 'MySQL', 'SqlServer'],
    'gateway|1': ['网关1', '网关2', '网关3'],
    'accessDatabase|1': ['数据库1', '数据库2', '数据库3'],
    'area|1': ['锦江监狱', '邑州监狱', '川西监狱', '川北监狱', '雷马屏监狱'],
    'server|1': ['省局服务器1', '省局服务器2', '省局服务器3', '省局服务器4', '省局服务器5']
  }]
})
module.exports = [
  {
    url: '/systemManage',
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
    url: '/databaseManage',
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
    url: '/systemManage',
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
    url: '/databaseManage',
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
    url: '/systemManage',
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
    url: '/databaseManage',
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
    name: '',
    url: '/systemManage',
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
    url: '/databaseManage',
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
  }
]
