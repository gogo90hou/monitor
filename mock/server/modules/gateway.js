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
    'name|1': ['网关1', '网关2', '网关三'],
    'collecting|1': ['网关采集源1', '网关采集源2', '网关采集源3'],
    'area|1': ['锦江监狱', '乐山监狱', '监狱'],
    'des': '这是一段描述'
  }]
})
module.exports = [
  {
    url: '/gateway',
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
    url: '/gateway',
    type: 'post',
    response: (req, res) => {
      const id = Mock.mock('@id');
      const item = { id, ...req.body };
      data.items.push(item);
      return {
        'statusText': '新增成功',
        'statusCode': 0,
        'data': null
      }
    }
  },
  {
    url: '/gateway/',
    type: 'delete',
    response: (req, res) => {
      const id = req.params.ids;
      let i;
      let deletedItem;
      data.items.findIndex((item, index) => {
        if (item.id === id) {
          i = index;
        }
      });
      if (i !== undefined) {
        deletedItem = data.items.splice(i, 1);
      }
      return {
        'statusText': deletedItem !== undefined ? '删除成功' : '删除失败',
        'statusCode': deletedItem !== undefined ? 0 : 1,
        'data': {}
      }
    }
  },
  {
    name: '',
    url: '/gateway',
    type: 'put',
    response: (req, res) => {
      const items = req.body.items;
      items.filter((item) => {
        for (let i = 0, len = data.items.length; i < len; i++) {
          if (data.items[i].id === item.id) {
            data.items.splice(i, 1, item);
            break;
          }
        }
      });
      return {
        'statusText': '修改成功',
        'statusCode': 0,
        'data': null
      }
    }
  }
]
