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
const data = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': [{ nameId: 1, name: '锦江操作系统' }, { nameId: 2, name: '邑州操作系统' }, { nameId: 3, name: '川西操作系统' }, { nameId: 4, name: '川北操作系统' }, { nameId: 5, name: '雷马屏操作系统' }],
    'type|1': ['windows操作系统', 'liunx操作系统'],
    'gateway': function () {
      var val = this.name.nameId === 1 && '锦江浏览器网关' || this.name.nameId === 2 && '邑州数据库网关' || this.name.nameId === 3 && '川西服务器网关' || this.name.nameId === 4 && '川北数据库网关' || this.name.nameId === 5 && '雷马屏服务器网关'
      return val
    },
    'accessSystem': function () {
      var val = this.name.nameId === 1 && '浏览器网关接入' || this.name.nameId === 2 && '数据库网关接入' || this.name.nameId === 3 && '服务器网关接入' || this.name.nameId === 4 && '川北数据库网关接入' || this.name.nameId === 5 && '雷马屏服务器网关接入'
      return val
    },
    'area': function () {
      var val = this.name.nameId === 1 && '锦江监狱' || this.name.nameId === 2 && '邑州监狱' || this.name.nameId === 3 && '川西监狱' || this.name.nameId === 4 && '川北监狱' || this.name.nameId === 5 && '雷马屏监狱'
      return val
    },
    'server': function () {
      var val = this.name.nameId === 1 && '锦江服务器' || this.name.nameId === 2 && '邑州服务器' || this.name.nameId === 3 && '川西服务器' || this.name.nameId === 4 && '川北服务器' || this.name.nameId === 5 && '雷马屏服务器'
      return val
    }
  }]
})
const data2 = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': [{ nameId: 1, name: '锦江数据库' }, { nameId: 2, name: '邑州数据库' }, { nameId: 3, name: '川西数据库' }, { nameId: 4, name: '川北数据库' }, { nameId: 5, name: '雷马屏数据库' }],
    'type|1': ['Orcle', 'MySQL', 'SqlServer'],
    'gateway|1': function () {
      var val = this.name.nameId === 1 && '锦江浏览器网关' || this.name.nameId === 2 && '邑州数据库网关' || this.name.nameId === 3 && '川西服务器网关' || this.name.nameId === 4 && '川北数据库网关' || this.name.nameId === 5 && '雷马屏服务器网关'
      return val
    },
    'accessDatabase|1': function () {
      var val = this.name.nameId === 1 && '浏览器网关接入' || this.name.nameId === 2 && '数据库网关接入' || this.name.nameId === 3 && '服务器网关接入' || this.name.nameId === 4 && '川北数据库网关接入' || this.name.nameId === 5 && '雷马屏服务器网关接入'
      return val
    },
    'area': function () {
      var val = this.name.nameId === 1 && '锦江监狱' || this.name.nameId === 2 && '邑州监狱' || this.name.nameId === 3 && '川西监狱' || this.name.nameId === 4 && '川北监狱' || this.name.nameId === 5 && '雷马屏监狱'
      return val
    },
    'server': function () {
      var val = this.name.nameId === 1 && '锦江服务器' || this.name.nameId === 2 && '邑州服务器' || this.name.nameId === 3 && '川西服务器' || this.name.nameId === 4 && '川北服务器' || this.name.nameId === 5 && '雷马屏服务器'
      return val
    }
  }]
})
export default [
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
