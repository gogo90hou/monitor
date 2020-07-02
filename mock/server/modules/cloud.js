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
    'name|1': ['省局私有云', '监狱数据云平台'],
    'state|1': [1, 2, 3],
    'area|1': ['锦江监狱', '邑州监狱', '川西监狱', '川北监狱', '乐山监狱'],
    'vma|1': ['1', '2', '3'],
    'diskUsed': '@integer(30, 1024)',
    'allDisk': '1',
    'momeryUsed': '@integer(30, 1024)',
    'allMomery': '1',
    'flow': '@integer(30, 100)',
    'position|1': ['一楼大门左侧', '二楼大门左侧', '机房门口']
  }]
})
export default [
  {
    url: '/cloud/list',
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
