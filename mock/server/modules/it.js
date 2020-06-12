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
    'name|1': ['服务器1', '服务器2', '服务器3', '服务器4', '服务器5'],
    'runstate|1': [1, 2, 3],
    'diskstate|1': [1, 2],
    'fanstate|1': [1, 2],
    'memorystate|1': [1, 2],
    'powerstate|1': [1, 2],
    'cpuT|1': [1, 2],
    'cpuLoad|1': [1, 2],
    'area|1': ['锦江监狱', '乐山监狱', '监狱'],
    'position|1': ['一楼大门左侧', '二楼大门左侧', '机房门口']
  }]
})
const interchanger = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': ['服务器1', '服务器2', '服务器3', '服务器4', '服务器5'],
    'runstate|1': [1, 2, 3],
    'portNum|1': '@integer(30, 100)',
    'cpuMemory|1': [1, 2],
    'cpuLoad|1': [1, 2],
    'area|1': ['锦江监狱', '乐山监狱', '监狱'],
    'position|1': ['一楼大门左侧', '二楼大门左侧', '机房门口']
  }]
})
module.exports = [
  {
    url: '/server/list',
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
  },
  {
    url: '/interchanger/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, interchanger, 'items')
      }
    }
  }
]
