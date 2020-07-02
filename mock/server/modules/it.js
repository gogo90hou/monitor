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
    'name|1': [{ nameId: 1, name: '锦江一体化平台数据服务器' }, { nameId: 2, name: '邑州体罚系统运行服务器' }, { nameId: 3, name: '川西数据备份系统服务器' }, { nameId: 4, name: '川北OA系统运行服务器' }, { nameId: 5, name: '乐山应急指挥平台数据服务器' }],
    'runstate|1': [1, 2, 3],
    'diskstate|1': [1, 2],
    'fanstate|1': [1, 2],
    'memorystate|1': [1, 2],
    'powerstate|1': [1, 2],
    'cpuT|1': [1, 2],
    'cpuLoad|1': [1, 2],
    'area': function () {
      var val = this.name.nameId === 1 && '锦江监狱' || this.name.nameId === 2 && '邑州监狱' || this.name.nameId === 3 && '川西监狱' || this.name.nameId === 4 && '川北监狱' || this.name.nameId === 5 && '乐山监狱'
      return val
    },
    'position|1': ['机房门口', '新安装的设备', '二楼大门左侧', '机房内']
  }]
})
const interchanger = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': [{ nameId: 1, name: '锦江一体化平台数据服务器' }, { nameId: 2, name: '邑州体罚系统运行服务器' }, { nameId: 3, name: '川西数据备份系统服务器' }, { nameId: 4, name: '川北OA系统运行服务器' }, { nameId: 5, name: '乐山应急指挥平台数据服务器' }],
    'runstate|1': [1, 2, 3],
    'portNum|1': '@integer(30, 100)',
    'cpuMemory|1': [1, 2],
    'cpuLoad|1': [1, 2],
    'area': function () {
      var val = this.name.nameId === 1 && '锦江监狱' || this.name.nameId === 2 && '邑州监狱' || this.name.nameId === 3 && '川西监狱' || this.name.nameId === 4 && '川北监狱' || this.name.nameId === 5 && '乐山监狱'
      return val
    },
    'position|1': ['机房门口', '新安装的设备', '二楼大门左侧', '机房内']
  }]
})
const firewall = Mock.mock({
  'items|30': [{
    id: '@increment',
    'num': '@integer(1, 10000)',
    'ip|1-255': 1,
    'runState|1': [1, 2, 3],
    'diskState|1': [1, 2],
    'pingState|1': [1, 2],
    'memory|1-1024': 1,
    'memoryPrecent|1-100': 1,
    'cpuPrecent|1-100': 1,
    'sessionState|1': [1, 2],
    'apiState|1': [1, 2],
    'flow|1-1024': 1,
    'dataState|1': [1, 2]
  }]
})
export default [
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
  },
  {
    url: '/firewall/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, firewall, 'items')
      }
    }
  }
]
