
const state = {
  warnList: ''
}

const mutations = {

  UPDATE_WARN_LIST: (state, list) => {
    state.warnList = JSON.parse(list)
  }

}

const actions = {
  updateWranList ({ commit }, data) {
    commit('UPDATE_WARN_LIST', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
