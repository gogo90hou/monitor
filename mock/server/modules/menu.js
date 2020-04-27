const Mock = require('mockjs');

const data = [
  {
    'id': 'fb344731ec2e4bc6b25dc1a08f3be65a',
    'menuName': 'CAS管理',
    'menuType': 'directory',
    'menuValue': null,
    'pxNum': 1,
    'icon': null,
    'memo': null,
    'parent': null,
    'appClientId': '0'
  },
  {
    'id': 'e2a33c33d9304902a1836e580401b13c',
    'menuName': '应用客户端管理',
    'menuType': 'url',
    'menuValue': 'appclient/index',
    'pxNum': 1,
    'icon': 'icon_cone',
    'memo': null,
    'parent': {
      'id': 'fb344731ec2e4bc6b25dc1a08f3be65a',
      'menuName': 'CAS管理',
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
    'id': '87a521ea1721452dbd09fa07a5f8ac34',
    'menuName': '系统用户管理',
    'menuType': 'url',
    'menuValue': 'systemUser/index',
    'pxNum': 1,
    'icon': 'icon_key',
    'memo': null,
    'parent': {
      'id': 'ac8ca24a522f4012b77f1de467952808',
      'menuName': '全局系统数据维护',
      'menuType': 'directory',
      'menuValue': null,
      'pxNum': 2,
      'icon': null,
      'memo': null,
      'parent': null,
      'appClientId': '0'
    },
    'appClientId': '0'
  },
  {
    'id': 'ac8ca24a522f4012b77f1de467952808',
    'menuName': '全局系统数据维护',
    'menuType': 'directory',
    'menuValue': null,
    'pxNum': 2,
    'icon': null,
    'memo': null,
    'parent': null,
    'appClientId': '0'
  },
  {
    'id': '994d64ba8ce0499e9487d506e6d428e5',
    'menuName': '用户登录信息',
    'menuType': 'url',
    'menuValue': 'userLogin/index',
    'pxNum': 2,
    'icon': 'icon_pin',
    'memo': null,
    'parent': {
      'id': 'fb344731ec2e4bc6b25dc1a08f3be65a',
      'menuName': 'CAS管理',
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
    'id': 'a977153f22b0477b989b6565a9798a79',
    'menuName': '菜单角色管理',
    'menuType': 'url',
    'menuValue': 'systemRole/index',
    'pxNum': 2,
    'icon': 'icon_group',
    'memo': null,
    'parent': {
      'id': 'ac8ca24a522f4012b77f1de467952808',
      'menuName': '全局系统数据维护',
      'menuType': 'directory',
      'menuValue': null,
      'pxNum': 2,
      'icon': null,
      'memo': null,
      'parent': null,
      'appClientId': '0'
    },
    'appClientId': '0'
  },
  {
    'id': 'a1b59c7264cf4fb6ac8c808ff9d2d0a4',
    'menuName': '菜单权限管理',
    'menuType': 'url',
    'menuValue': 'systemMenu/index',
    'pxNum': 3,
    'icon': 'icon_lock',
    'memo': null,
    'parent': {
      'id': 'ac8ca24a522f4012b77f1de467952808',
      'menuName': '全局系统数据维护',
      'menuType': 'directory',
      'menuValue': null,
      'pxNum': 2,
      'icon': null,
      'memo': null,
      'parent': null,
      'appClientId': '0'
    },
    'appClientId': '0'
  },
  {
    'id': '1d858a08839f4caaa42a8535e8197e57',
    'menuName': '数据字典管理',
    'menuType': 'url',
    'menuValue': 'systemCode/index',
    'pxNum': 4,
    'icon': 'icon_bag',
    'memo': null,
    'parent': {
      'id': 'ac8ca24a522f4012b77f1de467952808',
      'menuName': '全局系统数据维护',
      'menuType': 'directory',
      'menuValue': null,
      'pxNum': 2,
      'icon': null,
      'memo': null,
      'parent': null,
      'appClientId': '0'
    },
    'appClientId': '0'
  },
  {
    'id': '92DF91A4429D412BE053D000A8C0C1C3',
    'menuName': '流程角色管理',
    'menuType': 'url',
    'menuValue': 'systemFlowRole/index',
    'pxNum': 4,
    'icon': null,
    'memo': null,
    'parent': {
      'id': 'ac8ca24a522f4012b77f1de467952808',
      'menuName': '全局系统数据维护',
      'menuType': 'directory',
      'menuValue': null,
      'pxNum': 2,
      'icon': null,
      'memo': null,
      'parent': null,
      'appClientId': '0'
    },
    'appClientId': '0'
  },
  {
    'id': 'd705e97a883f4dad848d735c4a6d0b01',
    'menuName': '组织机构管理',
    'menuType': 'url',
    'menuValue': 'organization/index',
    'pxNum': 5,
    'icon': 'icon_quotations_alt',
    'memo': null,
    'parent': {
      'id': 'ac8ca24a522f4012b77f1de467952808',
      'menuName': '全局系统数据维护',
      'menuType': 'directory',
      'menuValue': null,
      'pxNum': 2,
      'icon': null,
      'memo': null,
      'parent': null,
      'appClientId': '0'
    },
    'appClientId': '0'
  },
  {
    'id': 'cda580ee04d0490ba175bce2550a324e',
    'menuName': '系统人员管理',
    'menuType': 'url',
    'menuValue': 'systemPerson/index',
    'pxNum': 6,
    'icon': 'icon_profile',
    'memo': null,
    'parent': {
      'id': 'ac8ca24a522f4012b77f1de467952808',
      'menuName': '全局系统数据维护',
      'menuType': 'directory',
      'menuValue': null,
      'pxNum': 2,
      'icon': null,
      'memo': null,
      'parent': null,
      'appClientId': '0'
    },
    'appClientId': '0'
  },
  {
    'id': '1f9455c9eac94ec4ba41eb5b0f8db399',
    'menuName': '系统日志查询',
    'menuType': 'url',
    'menuValue': 'systemLog/index',
    'pxNum': 7,
    'icon': 'icon_tag',
    'memo': null,
    'parent': {
      'id': 'ac8ca24a522f4012b77f1de467952808',
      'menuName': '全局系统数据维护',
      'menuType': 'directory',
      'menuValue': null,
      'pxNum': 2,
      'icon': null,
      'memo': null,
      'parent': null,
      'appClientId': '0'
    },
    'appClientId': '0'
  },
  {
    'id': '62e352c7c5444f08bf07dc487ae0e153',
    'menuName': '机构类型管理',
    'menuType': 'url',
    'menuValue': 'systemOrgNodeType/index',
    'pxNum': 9,
    'icon': null,
    'memo': null,
    'parent': {
      'id': 'ac8ca24a522f4012b77f1de467952808',
      'menuName': '全局系统数据维护',
      'menuType': 'directory',
      'menuValue': null,
      'pxNum': 2,
      'icon': null,
      'memo': null,
      'parent': null,
      'appClientId': '0'
    },
    'appClientId': '0'
  },
  {
    'id': 'cc458cf9ac3b441a84c467fa3defbe52',
    'menuName': '用户主页配置',
    'menuType': 'url',
    'menuValue': 'userPortal/index',
    'pxNum': 9,
    'icon': null,
    'memo': null,
    'parent': {
      'id': 'ac8ca24a522f4012b77f1de467952808',
      'menuName': '全局系统数据维护',
      'menuType': 'directory',
      'menuValue': null,
      'pxNum': 2,
      'icon': null,
      'memo': null,
      'parent': null,
      'appClientId': '0'
    },
    'appClientId': '0'
  },
  {
    'id': '3a496cee427f43799e4ff8327f76b190',
    'menuName': '行政区划管理',
    'menuType': 'url',
    'menuValue': 'systemRegion/index',
    'pxNum': 11,
    'icon': null,
    'memo': null,
    'parent': {
      'id': 'ac8ca24a522f4012b77f1de467952808',
      'menuName': '全局系统数据维护',
      'menuType': 'directory',
      'menuValue': null,
      'pxNum': 2,
      'icon': null,
      'memo': null,
      'parent': null,
      'appClientId': '0'
    },
    'appClientId': '0'
  }
]
const permList = [{ 'isParent': false, 'name': '新增', 'id': '92DF91A44283412BE053D000A8C0C1C3' }, { 'isParent': false, 'name': '删除', 'id': '92DF91A44284412BE053D000A8C0C1C3' }, { 'isParent': false, 'name': '编辑', 'id': '92DF91A44285412BE053D000A8C0C1C3' }, { 'isParent': false, 'name': '导出', 'id': '92DF91A44286412BE053D000A8C0C1C3' }, { 'isParent': false, 'name': '导出到json', 'id': '92DF91A44287412BE053D000A8C0C1C3' }, { 'isParent': false, 'name': '从json导入', 'id': '92DF91A44288412BE053D000A8C0C1C3' }]
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
