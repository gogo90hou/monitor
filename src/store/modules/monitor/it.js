const data = [
  {
    id: '2',
    name: '会见系统',
    area: '所在区域',
    runState: '运行',
    num: '2',
    resState: '2',
    time: '10ms',
    reason: '数据库占用内存过大',
    err: '2'
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
