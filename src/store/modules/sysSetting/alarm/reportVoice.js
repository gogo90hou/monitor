/**

* 应用软件api接口字段，表示返回api的数据结构.

* @typedef {(Object)} getSoftlist

* @property {string} id - 告警级别id.
* @property {string} level- 告警级别.
* @property {string} voiceFile- 声音文件.
* @property {string} runState- 运行状态.
*/

const data = [
  {
    id: '1',
    level: '致命',
    voiceFile: '警报声音.mp3',
    runState: '运行中'
  }
]
// vuex的基本数据，用来存储变量
const state = {
  list: []
}
// 同步提交更新数据的方法
const mutations = {

  getList: (state, list) => {
    // Chanage state
    state.list = list
  }

}
// 异步提交更新数据的方法
const actions = {
  getList ({ commit }) {
    // get api data
    commit('getList', data)
  }
}
// 相当于state的计算属性
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
