/**

* 应用软件api接口字段，表示返回api的数据结构.

* @typedef {(Object)} getSoftlist

* @property {string} id - 系统id.
* @property {string} sysNum- 系统标识.
* @property {string} sysCategory- 系统类别.
* @property {string} disk- 磁盘.
* @property {string} diskUtilization- 磁盘利用率.
* @property {string} memory- 内存.
* @property {string} memoryUtilization- 内存利用率.
* @property {string} cpuUtilization- CPU利用率.
* @property {string} processNum - 进程数.
* @property {string} fileState - 文件状态.
* @property {string} loginUser - 登录用户.
*/

const data = [
  {
    id: '1',
    sysNum: 'k3-3353',
    sysCategory: 'windows操作系统',
    disk: '32G / 1TB',
    diskUtilization: '34%',
    memory: '32G / 1TB',
    memoryUtilization: '34%',
    cpuUtilization: '40%',
    processNum: '32',
    fileState: '只读',
    loginUser: '3'
  }
]
const state = {
  list: []
}

const mutations = {

  getList: (state, list) => {
    // Chanage state
    state.list = list
  }

}

const actions = {
  getList ({ commit }) {
    // get api data
    commit('getList', data)
  }
}
const getters = {
  list: state => state.list
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
