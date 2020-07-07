const Mock = require('mockjs');
// function getDataByPage (page, pagesize, data, key) { // 根据页码 页尺寸 来过滤数据
//   const start = (page - 1) * pagesize;
//   const end = page * pagesize > data[key].length ? data[key].length : page * pagesize;
//   const result = [];
//   for (let i = start; i < end; i++) {
//     result.push(data[key][i]);//
//   }
//   const ret = {};
//   ret[key] = result;
//   ret['currentPage'] = page;
//   ret['totalRows'] = data[key].length;
//   ret['rowsPerPage'] = pagesize;
//   return ret;
// }
function removeData (id) {
  data.items.forEach((item1, index1) => {
    item1.topoList.forEach((item2, index2) => {
      if (id === item2.id) {
        data.items[index1].topoList.splice(index2, 1);
      }
    })
  });
}
function addData (val) {
  data.items.forEach((item1) => {
    if (item1.topoTypeId === val.topoTypeId) {
      item1.topoList.unshift(val);
    }
  });
}
const data = Mock.mock({
  'items': [{ 'topoTypeId': 1000, 'topoTypeName': '应用组网图', 'topoTypeDesc': '用于描述设备与设备之间的通信组网情况', 'topoList': [{ 'id': '0b0dcde921444491b5885c64a1e1d2ff', 'createDateTime': 1592637659000, 'updateDateTime': 1592637659000, 'deleteStatus': false, 'areaName': '锦江监狱', 'userId': '1', 'userName': 'admin', 'parentAreaId': '111', 'areaId': '123', 'topoName': '一楼机房服务器拓扑图', 'topoTypeId': 1000, 'topoDesc': '拓扑图描述' }, { 'id': '95bcc9be83804bbcb8ef0f5c24ad7edd', 'createDateTime': 1592637370000, 'updateDateTime': 1592637370000, 'deleteStatus': false, 'areaName': '锦江监狱', 'userId': '1', 'userName': 'admin', 'parentAreaId': '111', 'areaId': '123', 'topoName': '报警设备拓扑图', 'topoTypeId': 1000, 'topoDesc': '拓扑图描述' }, { 'id': 'edb5cf30f6c34aaba7311cf4ecefd500', 'createDateTime': 1592637714000, 'updateDateTime': 1592637714000, 'deleteStatus': false, 'areaName': '锦江监狱', 'userId': 'a4b7ace7fbf544e7a32ef92c539757cf', 'userName': 'huchao', 'parentAreaId': '111', 'areaId': '1', 'topoName': '自发现拓扑图', 'topoTypeId': 1000, 'topoDesc': '22' }] }, { 'topoTypeId': 1001, 'topoTypeName': '网络交互图', 'topoTypeDesc': '用于描述应用软件与应用软件之间的交互情况', 'topoList': [{ 'id': '0bbe140184754566a301c257c5758a65', 'createDateTime': 1592637682000, 'updateDateTime': 1592637682000, 'deleteStatus': false, 'areaName': '锦江监狱', 'userId': '1', 'userName': 'admin', 'parentAreaId': '111', 'areaId': '123', 'topoName': '机房网络交互图', 'topoTypeId': 1001, 'topoDesc': '拓扑图描述' }, { 'id': '354f8422174f4d17883f5f361327e3de', 'createDateTime': 1592637696000, 'updateDateTime': 1592637696000, 'deleteStatus': false, 'areaName': '锦江监狱', 'userId': '1', 'userName': 'admin', 'parentAreaId': '111', 'areaId': '123', 'topoName': '告警交互图', 'topoTypeId': 1001, 'topoDesc': '拓扑图描述' }, { 'id': '9c4ac4d9befd4e35a1a0bc89c52b067a', 'createDateTime': 1592637565000, 'updateDateTime': 1592637565000, 'deleteStatus': false, 'areaName': '锦江监狱', 'userId': '1', 'userName': 'admin', 'parentAreaId': '111', 'areaId': '123', 'topoName': '应用交互图', 'topoTypeId': 1001, 'topoDesc': '拓扑图描述' }] }]
})
export default [
  {
    url: '/topo',
    type: 'get',
    response: config => {
      return {
        'statusText': '拉取列表成功',
        'statusCode': 0,
        'data': data
      }
    }
  },
  {
    url: '/topo',
    type: 'post',
    response: (req, res) => {
      addData(req.body);
      return {
        'statusText': '新增成功',
        'statusCode': 0,
        'data': null
      }
    }
  },
  {
    url: '/topo',
    type: 'delete',
    response: (req, res) => {
      removeData(req.body.id)
      return {
        'statusText': '删除成功',
        'statusCode': 0,
        'data': '删除成功'
      }
    }
  },
  {
    name: '',
    url: '/topo',
    type: 'put',
    response: (req, res) => {
      const item = req.body;
      for (let i = 0, len = data.items.length; i < len; i++) {
        if (data.items[i].id === item.id) {
          data.items.splice(i, 1, item);
          break;
        }
      }
      return {
        'statusText': '修改成功',
        'statusCode': 0,
        'data': null
      }
    }
  }
]
