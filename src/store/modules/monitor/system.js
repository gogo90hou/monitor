/**

* 应用软件api接口字段，表示返回api的数据结构.

* @typedef {(Object)} getlist

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

* @typedef {(Object)} getdatbaseList

* @property {string} id - 数据库id.
* @property {string} databaseName- 数据库名称.
* @property {string} runState- 运行状态.
* @property {string} databaseFileSize- 数据库文件大小.
* @property {string} processNum- 进程数量.
* @property {string} activitySession- 活动会话.
* @property {string} audit- 审计.
* @property {string} databaseConnectionNum- 数据库连接数量.
* @property {string} area - 所在位置.
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
const databaseData = [
  {
    id: '1',
    databaseName: '省局数据库1',
    runState: '3',
    databaseFileSize: '21G',
    processNum: '52',
    activitySession: '13',
    audit: '开启',
    databaseConnectionNum: '41',
    area: '省局服务器1'
  }
]
// vuex的基本数据，用来存储变量
const state = {
  list: data,
  databaseList: databaseData
}
// 同步提交更新数据的方法
const mutations = {

  getList: (state, list) => {
    // Chanage state
    state.list = list
  },
  getDatabaseList: (state, databaseList) => {
    // Chanage state
    state.list = databaseList
  }

}
// 异步提交更新数据的方法
const actions = {
  getList ({ commit }) {
    // get api data
    commit('getList', data)
  },
  getDatabaseList ({ commit }) {
    // get api data
    commit('getDatabaseList', data)
  }
}
// 相当于state的计算属性
const getters = {
  list: state => state.list,
  databaseList: state => state.databaseList
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
