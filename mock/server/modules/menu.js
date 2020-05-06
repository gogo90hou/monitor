const Mock = require('mockjs');

const data = [
  {
    'id': 'fb344731ec2e4bc6b25dc1a08f3be65a',
    'menuName': '安防运维',
    'menuType': 'directory',
    'menuValue': null,
    'pxNum': 1,
    'icon': null,
    'memo': null,
    'parent': null,
    'appClientId': '0'
  },
  {
    'id': 'fb344731ec2e4bc6b25dc1a08f3be65aaa',
    'menuName': '报警',
    'menuType': 'url',
    'menuValue': '/warn',
    'pxNum': 1,
    'icon': null,
    'memo': null,
    'parent': {
      'id': 'fb344731ec2e4bc6b25dc1a08f3be65a',
      'menuName': '安防运维',
      'menuType': 'directory',
      'menuValue': null,
      'pxNum': 1,
      'icon': null,
      'memo': null,
      'parent': null,
      'appClientId': '0'
    },
    'appClientId': '0'
  },
  {
    'id': 'fb344731ec2e4bc6b25dc1a08f3be65aaa123',
    'menuName': '设备',
    'menuType': 'url',
    'menuValue': '/device',
    'pxNum': 1,
    'icon': null,
    'memo': null,
    'parent': {
      'id': 'fb344731ec2e4bc6b25dc1a08f3be65a',
      'menuName': '安防运维',
      'menuType': 'directory',
      'menuValue': null,
      'pxNum': 1,
      'icon': null,
      'memo': null,
      'parent': null,
      'appClientId': '0'
    },
    'appClientId': '0'
  }
]
const permList =
  [
    { 'isParent': false, 'name': '新增', 'id': '92DF91A44283412BE053D000A8C0C1C3' },
    { 'isParent': false, 'name': '删除', 'id': '92DF91A44284412BE053D000A8C0C1C3' },
    { 'isParent': false, 'name': '编辑', 'id': '92DF91A44285412BE053D000A8C0C1C3' },
    { 'isParent': false, 'name': '导出', 'id': '92DF91A44286412BE053D000A8C0C1C3' }, { 'isParent': false, 'name': '导出到json', 'id': '92DF91A44287412BE053D000A8C0C1C3' }, { 'isParent': false, 'name': '从json导入', 'id': '92DF91A44288412BE053D000A8C0C1C3' }]
module.exports = [
  {
    url: '/list',
    type: 'post',
    response: (req, res) => {
      const id = req.body.id;
      let menus = [];
      let layout = [];
      if (id) {
        layout = data.filter((item) => { return item.parent && item.parent.id === id });
      } else {
        layout = data.filter((item) => { return item.parent === null });
      }
      if (layout.length > 0) {
        layout.forEach((item, index) => {
          menus.push({
            id: item.id,
            isParent: true,
            name: item.menuName
          })
        })
      } else {
        menus = permList
      }
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': menus
      }
    }
  }, {
    url: '/getDetail/:id',
    type: 'get',
    response: (req, res) => {
      const id = req.params.id;
      const info = data.find((item) => { return item.id === id });
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': info
      }
    }
  },
  {
    url: '/loadMenu',
    type: 'get',
    response: (req, res) => {
      // const id = req.params.id;
      // const info = data.find((item) => { return item.id === id });
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': data
      }
    }
  }, {
    url: '/systemMenu/:id',
    type: 'post',
    response: (req, res) => {
      const id = req.params.id;
      data.forEach((item) => {
        if (item.id === id) {
          item.menuName = req.body.menuName;
          console.log(1)
        }
      });
      return {
        'statusText': '修改成功',
        'statusCode': 0,
        'data': req.body
      }
    }
  }, {
    url: '/systemMenu',
    type: 'post',
    response: (req, res) => {
      const id = new Date().getTime().toString();
      const info = req.body;
      if (info.menuType === 'perm') {
        permList.push(
          {
            'isParent': false, 'name': info.menuName, 'id': id
          }
        )
      } else {
        const parent = data.find((item) => { return item.id === info.parentMenuId });
        data.push({
          'id': id,
          'menuName': info.menuName,
          'menuType': info.menuType,
          'menuValue': info.menuValue,
          'pxNum': info.pxNum,
          'icon': info.icon,
          'memo': info.memo,
          'parent': parent,
          'appClientId': '0'
        })
      }

      return {
        'statusText': '修改成功',
        'statusCode': 0,
        'data': req.body
      }
    }
  }
]
