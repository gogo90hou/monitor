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
      text: '邑州监狱'
    },
    {
      value: '3',
      text: '川西监狱'
    },
    {
      value: '4',
      text: '川北监狱'
    },
    {
      value: '5',
      text: '雷马屏监狱'
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
  ],
  runState: [
    {
      value: '1',
      text: '正常'
    },
    {
      value: '2',
      text: '异常'
    },
    {
      value: '3',
      text: '维护中'
    }
  ],
  state: [
    {
      value: '1',
      text: '正常'
    },
    {
      value: '2',
      text: '异常'
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
  },
  getRunState: (state, list) => {
    state.runState = list
  },
  getState: (state, list) => {
    state.state = list;
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
  },
  getRunState ({ commit }) {
    // get api data
    commit('getRunState')
  },
  getState ({ commit }) {
    // get api data
    commit('getState')
  }
}
const getters = {
  area: state => state.area,
  deviceType: state => state.deviceType,
  runState: state => state.runState,
  state: state => state.state
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
