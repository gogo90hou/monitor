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
    'name|1': ['大门门禁', '二楼门禁', '三楼门禁', '摩天大楼', '保密室'],
    'type|1': ['门禁', '报警', '广播', '存储'],
    'gateway|1': [{ nameId: 1, name: '浏览器采集网关' }, { nameId: 2, name: '数据库采集网关' }, { nameId: 3, name: '服务器采集网关' }],
    'accessEquipment|1': ['服务器', '交换机', '防火墙'],
    'area|1': ['锦江监狱', '邑州监狱', '川西监狱', '川北监狱', '乐山监狱'],
    'location': function () {
      var val = this.gateway.nameId === 1 && '浏览器一楼机房' || this.gateway.nameId === 2 && '数据库二楼机房' || this.gateway.nameId === 3 && '服务器三楼机房'
      return val
    }
  }]
})
export default [
  {
    url: '/itManage',
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
    url: '/itManage',
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
    url: '/itManage/',
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
    url: '/itManage',
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
