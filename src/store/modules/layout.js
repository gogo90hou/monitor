/*
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 */

const state = {
  area: [
    {
      value: '1',
      text: '锦江监狱'
    },
    {
      value: '2',
      text: '川西监狱'
    },
    {
      value: '3',
      text: '川北监狱'
    }
  ],
  deviceType: [
    {
      value: '1',
      text: '门禁'
    },
    {
      value: '2',
      text: '报警'
    },
    {
      value: '3',
      text: '周边电网'
    },
    {
      value: '4',
      text: '广播'
    }, {
      value: '5',
      text: '监控对讲'
    }, {
      value: '6',
      text: '摄像头'
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
