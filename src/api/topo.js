import request from '@/utils/request';
const apiUrl = 'http://192.168.0.197:9527/smm-monitor-web/';

// 拓扑图列表
export function getTopoList (id) {
  return request({
    url: apiUrl + 'topo/list',
    method: 'get',
    areaId: id
  });
}
// 拓扑图类型
export function getTypeList () {
  return request({
    url: apiUrl + 'topo/type',
    method: 'get'
  });
}
// 拓扑图图元类型
export function getImageTypeList () {
  return request({
    url: apiUrl + 'topo/image/type',
    method: 'get'
  });
}
// 拓扑图详情
export function getTopoDetail (topoId) {
  return request({
    url: apiUrl + `topo/detail/${topoId}`,
    method: 'get'
  });
}
// 删除拓扑图
export function deleteTopo (topoId) {
  return request({
    url: apiUrl + `topo/del/${topoId}`,
    method: 'delete'
  });
}
// 新增或更新拓扑图
export function createTopo (data) {
  // console.log(qs.stringify(data));
  return request({
    url: apiUrl + 'topo/add',
    method: 'post',
    data: data
  });
}

// 以下为mock假数据的调用
export function getTopo (id) {
  return request({
    url: '/topo',
    method: 'get',
    areaId: id
  });
}

export function deleteTopoMock (id) {
  return request({
    url: '/topo',
    method: 'delete',
    data: { id: id }
  });
}

export function createTopoMock (data) {
  return request({
    url: '/topo',
    method: 'post',
    data: data
  });
}
