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
    'name|1': function () {
      var val = this.gateway.nameId === 1 && '浏览器中间件' || this.gateway.nameId === 2 && '数据库中间件' || this.gateway.nameId === 3 && '服务器中间件'
      return val
    },
    'type|1': ['Nginx', 'Apache', 'Redis', 'JVM'],
    'gateway|1': [{ nameId: 1, name: '浏览器采集网关' }, { nameId: 2, name: '数据库采集网关' }, { nameId: 3, name: '服务器采集网关' }],
    'access|1': function () {
      var val = this.gateway.nameId === 1 && '浏览器网关接入' || this.gateway.nameId === 2 && '数据库网关接入' || this.gateway.nameId === 3 && '服务器网关接入'
      return val
    },
    'accessEquipment|1': ['服务器', '交换机', '防火墙'],
    'area|1': ['锦江监狱', '邑州监狱', '川西监狱', '川北监狱', '乐山监狱'],
    'location|1': function () {
      var val = this.gateway.nameId === 1 && '锦江一体化平台数据服务器' || this.gateway.nameId === 2 && '邑州体罚系统运行服务器' || this.gateway.nameId === 3 && '川西数据备份系统服务器' || this.gateway.nameId === 4 && '川北OA系统运行服务器' || this.gateway.nameId === 5 && '乐山应急指挥平台数据服务器'
      return val
    }
  }]
})
export default [
  {
    url: '/middleManage',
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
    url: '/middleManage',
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
    url: '/middleManage/',
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
    url: '/middleManage',
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
