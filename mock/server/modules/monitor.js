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
const data = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': [{ nameId: 1, name: '大门门禁' }, { nameId: 2, name: '二楼门禁' }, { nameId: 3, name: '三楼机房门禁' }, { nameId: 4, name: '保密室' }],
    'type|1': ['门禁', '报警', '广播'],
    'state|1': [1, 2, 3],
    'area|1': ['锦江监狱', '邑州监狱', '川西监狱', '川北监狱', '雷马屏监狱'],
    'position': function () {
      var val = this.name.nameId === 1 && '一楼大门左侧' || this.name.nameId === 2 && '二楼大门左侧' || this.name.nameId === 3 && '机房门口' || this.name.nameId === 4 && '保密室入口'
      return val
    },
    'des|1': ['异常请求过多', '运行异常', '风扇转数异常']
  }]
})
export default [
  {
    url: '/monitor/list',
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
  }
]
