/*
 * @Author: your name
 * @Date: 2020-05-11 14:50:43
 * @LastEditTime: 2020-05-29 10:36:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \monitor\src\store\modules\monitor\soft.js
 */
/**

* 应用软件api接口字段，表示返回api的数据结构.

* @typedef {(Object)} getSoftlist

* @property {string} id - 软件id.
* @property {string} name - 应用软件名称.
* @property {string} area - 所在区域.
* @property {string} runState - 运行状态.
* @property {string} processNum - 进程数.
* @property {string} resState - 响应状态（1.正常，2。错误，3.非常慢，4.缓慢）.
*/

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
const flowList = [
  {
    name: '流程1',
    state: '进行中',
    time: '2020 03-12  12:33:22',
    payTime: '2min'
  },
  {
    name: '流程1',
    state: '进行中',
    time: '2020 03-12  12:33:22',
    payTime: '2min'
  }, {
    name: '流程1',
    state: '进行中',
    time: '2020 03-12  12:33:22',
    payTime: '2min'
  },
  {
    name: '流程1',
    state: '进行中',
    time: '2020 03-12  12:33:22',
    payTime: '2min'
  }, {
    name: '流程1',
    state: '进行中',
    time: '2020 03-12  12:33:22',
    payTime: '2min'
  },
  {
    name: '流程1',
    state: '进行中',
    time: '2020 03-12  12:33:22',
    payTime: '2min'
  }
]
const state = {
  list: [],
  flowList: flowList
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
  list: state => state.list,
  flowList: state => state.flowList
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
