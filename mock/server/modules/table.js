const Mock = require('mockjs');

const data = Mock.mock({
  'items|30': [{
    id: '@increment',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: '@cname()',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

module.exports = [
  { // 创建文章和批量删除
    name: '创建文章和批量删除',
    url: '/V03R00C028B001/articleService/articles',
    type: 'post',
    response: (req, res) => {
      const method = req.body.method;
      if (method === 'create') {
        const items = req.body.items || [];
        const display_time = Mock.mock('@datetime');
        const pageviews = Mock.mock('@integer(300, 5000)');
        items.forEach(element => {
          const id = Mock.mock('@id');
          const item = { id, ...element, display_time, pageviews };
          data.items.push(item);
        });
        return {
          'statusText': '创建成功',
          'statusCode': 0,
          'data': null
        }
      } else {
        const ids = req.body.items || [];
        ids.filter((id) => {
          for (const i = 0, len = data.items.length; i < len; i++) {
            if (data.items[i].id === Number(id)) {
              data.items.splice(i, 1);
              break;
            }
          }
        });
        return {
          'statusText': '删除成功',
          'statusCode': 0,
          'data': null
        }
      }
    }
  },
  { // 删除文章
    name: '删除文章',
    url: '/V03R00C028B001/articleService/articles/:id',
    type: 'delete',
    response: (req, res) => {
      const id = Number(req.params.id)
      let i;
      deletedItem = undefined;
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
        'data': {
          ...deletedItem
        }
      }
    }
  },
  { // 查询文章列表
    name: '查询文章列表',
    url: '/V03R00C028B001/articleService/articles',
    type: 'get',
    response: config => {
      const page = parseInt(config.query.page) || 1;
      const row = parseInt(config.query.row) || 10;
      let items = [];
      const totalRows = data.items.length || 0;
      let totalPages = totalRows / row || 0;
      if (totalRows % row) {
        totalPages++;
      }
      let resp = {};
      if (page === page && page > 0) {
        if (page * row <= totalRows) {
          const startIndex = (page - 1) * row
          items = data.items.slice(startIndex, startIndex + row);
        }
        resp = {
          items,
          currentPage: page,
          totalRows,
          totalPages
        };
      } else {
        page = 1;
        items = data.items.slice(page, row);
        resp = {
          items,
          currentPage: page,
          totalRows,
          totalPages
        };
      }
      return {
        'statusText': '查询成功',
        'statusCode': 0,
        'data': resp
      }
    }
  },
  { // 查询文章详细
    name: '查询文章详细',
    url: '/V03R00C028B001/articleService/articles/:id',
    type: 'get',
    response: (req, res) => {
      const id = req.params.id;
      const item = null;
      data.items.filter((item) => {
        if (item.id === id) {
          item === item;
        }
      });
      return {
        'statusText': '通讯成功',
        'statusCode': 0,
        'data': {
          ...item
        }
      }
    }
  },
  { // 修改文章
    name: '修改文章',
    url: '/V03R00C028B001/articleService/articles',
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
