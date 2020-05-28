/*
 * @Author: your name
 * @Date: 2020-05-22 15:00:41
 * @LastEditTime: 2020-05-28 14:16:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hy-cli\module\src\store\socket.js
 */

import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
const state = {
  stompClient: '',
  connectState: false,
  subscribeList: {},
  waitList: []
}
const getters = {
  subscribeList: state => state.subscribeList
}
const mutations = {
  connect: (state, data) => {
    state.stompClient = data;
    state.connectState = true;
  },
  waitList: (state, data) => {
    state.waitList.push(data)
  },
  disconnect: (state) => {
    state.stompClient.disconnect();
  },
  subscribe: (state, data) => {
    state.subscribeList[data.data.dataName] = data.message.body;
    const obj = {};
    obj[data.data.dataName] = data.message.body;
    const someObject = Object.assign({}, state.subscribeList, obj)
    state.subscribeList = someObject;
  },
  sendMessage: (state, data) => {
    state.stompClient.send(data.congfigUrl, {}, JSON.stringify(data.msg))
  }
}

const actions = {
  connect ({ commit }) {
    const socket = new SockJS('http://192.168.0.89:30000/ws');
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, () => {
      commit('connect', stompClient);
      this.state.socket.waitList.forEach((item) => {
        this.dispatch('socket/subscribe', item)
      })
    })
  },
  disconnect () {
    if (this.stompClient) {
      this.stompClient.disconnect();
    }
  },
  subscribe ({ commit }, data) {
    if (this.state.socket.connectState) {
      this.state.socket.stompClient.subscribe(data.subscribeUrl, (message) => {
        commit('subscribe', { data, message })
      })
    } else {
      commit('waitList', data)
    }
  },
  sendMessage ({ commit }, data) {
    commit('sendMessage', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
