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
const data = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': [{ nameId: 1, name: '锦江云平台' }, { nameId: 2, name: '邑州云平台' }, { nameId: 3, name: '川西云平台' }, { nameId: 4, name: '川北云平台' }, { nameId: 5, name: '雷马屏平台' }],
    'gateway': function () {
      var val = this.name.nameId === 1 && '锦江浏览器网关' || this.name.nameId === 2 && '邑州数据库网关' || this.name.nameId === 3 && '川西服务器网关' || this.name.nameId === 4 && '川北数据库网关' || this.name.nameId === 5 && '雷马屏服务器网关'
      return val
    },
    'accessCloud': function () {
      var val = this.name.nameId === 1 && '浏览器网关接入' || this.name.nameId === 2 && '数据库网关接入' || this.name.nameId === 3 && '服务器网关接入' || this.name.nameId === 4 && '川北数据库网关接入' || this.name.nameId === 5 && '雷马屏服务器网关接入'
      return val
    },
    'area': function () {
      var val = this.name.nameId === 1 && '锦江监狱' || this.name.nameId === 2 && '邑州监狱' || this.name.nameId === 3 && '川西监狱' || this.name.nameId === 4 && '川北监狱' || this.name.nameId === 5 && '雷马屏监狱'
      return val
    },
    'location': function () {
      var val = this.name.nameId === 1 && '锦江服务器' || this.name.nameId === 2 && '邑州服务器' || this.name.nameId === 3 && '川西服务器' || this.name.nameId === 4 && '川北服务器' || this.name.nameId === 5 && '雷马屏服务器'
      return val
    },
    'des': function () {
      var val = this.name.nameId === 1 && '锦江云平台描述' || this.name.nameId === 2 && '邑州云平台描述' || this.name.nameId === 3 && '川西云平台描述' || this.name.nameId === 4 && '川北云平台描述' || this.name.nameId === 5 && '雷马屏云平台描述'
      return val
    }
  }]
})
export default [
  {
    url: '/cloudManage',
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
    url: '/cloudManage',
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
    url: '/cloudManage',
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
    name: '',
    url: '/cloudManage',
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
  }
]
