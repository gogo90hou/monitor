const data = [
  { 'id': 'b0770135887744d9b58e4b2f229f2144', 'menuName': '应用软件', 'menuType': 'url', 'menuValue': '/soft', 'pxNum': 2, 'icon': null, 'memo': null, 'parent': { 'id': 'd17f488a0b184193bfd4a1c3477faf41', 'menuName': '监控', 'menuType': 'directory', 'menuValue': null, 'pxNum': 1, 'icon': null, 'memo': null, 'parent': null, 'appClientId': '2493ebd832074abbbeffbb06da88245c' }, 'appClientId': '2493ebd832074abbbeffbb06da88245c' },
  { 'id': '1b82365c00254b83ad9f262a315db439', 'menuName': '安防运维', 'menuType': 'url', 'menuValue': '/monitor', 'pxNum': 1, 'icon': null, 'memo': null, 'parent': { 'id': 'd17f488a0b184193bfd4a1c3477faf41', 'menuName': '监控', 'menuType': 'directory', 'menuValue': null, 'pxNum': 1, 'icon': null, 'memo': null, 'parent': null, 'appClientId': '2493ebd832074abbbeffbb06da88245c' }, 'appClientId': '2493ebd832074abbbeffbb06da88245c' },
  { 'id': 'd17f488a0b184193bfd4a1c3477faf41', 'menuName': '监控', 'menuType': 'directory', 'menuValue': null, 'pxNum': 1, 'icon': null, 'memo': null, 'parent': null, 'appClientId': '2493ebd832074abbbeffbb06da88245c' },
  { 'id': '7fb75e78a6904e9ba00ce71763893c63', 'menuName': '云平台', 'menuType': 'url', 'menuValue': '/cloud', 'pxNum': 5, 'icon': null, 'memo': null, 'parent': { 'id': 'd17f488a0b184193bfd4a1c3477faf41', 'menuName': '监控', 'menuType': 'directory', 'menuValue': null, 'pxNum': 1, 'icon': null, 'memo': null, 'parent': null, 'appClientId': '2493ebd832074abbbeffbb06da88245c' }, 'appClientId': '2493ebd832074abbbeffbb06da88245c' },
  { 'id': '4fa18174cacc4a8e822d25fb7f577bd7', 'menuName': '系统设置', 'menuType': 'directory', 'menuValue': null, 'pxNum': 1, 'icon': null, 'memo': null, 'parent': null, 'appClientId': '2493ebd832074abbbeffbb06da88245c' },
  { 'id': 'b43928f434c9474a8c0c9c3620f41500', 'menuName': '拓扑图', 'menuType': 'url', 'menuValue': '/device', 'pxNum': 1, 'icon': null, 'memo': null, 'parent': null, 'appClientId': '2493ebd832074abbbeffbb06da88245c' },
  { 'id': '05030ded3e264f5fb90bbf593de54303', 'menuName': 'IT设备', 'menuType': 'url', 'menuValue': '/it', 'pxNum': 3, 'icon': null, 'memo': null, 'parent': { 'id': 'd17f488a0b184193bfd4a1c3477faf41', 'menuName': '监控', 'menuType': 'directory', 'menuValue': null, 'pxNum': 1, 'icon': null, 'memo': null, 'parent': null, 'appClientId': '2493ebd832074abbbeffbb06da88245c' }, 'appClientId': '2493ebd832074abbbeffbb06da88245c' },
  { 'id': '18dfc283163a4d4a9aec5f24cd35f655', 'menuName': '中间件', 'menuType': 'url', 'menuValue': '/middle', 'pxNum': 4, 'icon': null, 'memo': null, 'parent': { 'id': 'd17f488a0b184193bfd4a1c3477faf41', 'menuName': '监控', 'menuType': 'directory', 'menuValue': null, 'pxNum': 1, 'icon': null, 'memo': null, 'parent': null, 'appClientId': '2493ebd832074abbbeffbb06da88245c' }, 'appClientId': '2493ebd832074abbbeffbb06da88245c' },
  { 'id': '9deffc76ec6d4be1bdc564b9fda0d788', 'menuName': '告警', 'menuType': 'url', 'menuValue': '/warn', 'pxNum': 1, 'icon': null, 'memo': null, 'parent': null, 'appClientId': '2493ebd832074abbbeffbb06da88245c' },
  { 'id': '287925e40cff48a6aa476d9d39607eb4', 'menuName': '操作系统和数据库', 'menuType': 'url', 'menuValue': '/system', 'pxNum': 6, 'icon': null, 'memo': null, 'parent': { 'id': 'd17f488a0b184193bfd4a1c3477faf41', 'menuName': '监控', 'menuType': 'directory', 'menuValue': null, 'pxNum': 1, 'icon': null, 'memo': null, 'parent': null, 'appClientId': '2493ebd832074abbbeffbb06da88245c' }, 'appClientId': '2493ebd832074abbbeffbb06da88245c' }]
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
