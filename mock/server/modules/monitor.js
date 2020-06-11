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
    id: '@increment',
    'name|1': ['大门门禁', '二楼门禁', '三楼门禁', '摩天大楼', '保密室'],
    'type|1': ['门禁', '报警', '广播'],
    'state|1': [1, 2, 3, 4],
    'area|1': ['锦江监狱', '乐山监狱', '监狱'],
    'position|1': ['一楼大门左侧', '二楼大门左侧', '机房门口'],
    des: '设备描述'
  }]
})
module.exports = [
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
