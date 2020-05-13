const state = {
  area: [
    {
      id: '1',
      name: '锦江监狱'
    },
    {
      id: '2',
      name: '川西监狱'
    },
    {
      id: '3',
      name: '川北监狱'
    }
  ],
  deviceType: [
    {
      id: '1',
      name: '门禁'
    },
    {
      id: '2',
      name: '报警'
    }
  ]
}

const mutations = {

  getArea: (state, list) => {
    // Chanage state
    state.area = list
  },
  getDeviceType: (state, list) => {
    state.deviceType = list
  }

}

const actions = {
  getArea ({ commit }) {
    // get api data
    commit('getArea')
  },
  getDeviceType ({ commit }) {
    // get api data
    commit('getDeviceType')
  }
}
const getters = {
  area: state => state.area,
  deviceType: state => state.deviceType
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
