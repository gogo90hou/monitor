/**

* 应用软件api接口字段，表示返回api的数据结构.

* @typedef {(Object)} getlist

* @property {string} id - 系统id.
* @property {string} sysNum- 序号.
* @property {string} sysName- 操作系统名称.
* @property {string} sysCategory- 系统类别.
* @property {string} runState- 运行状态.
* @property {string} memory- 内存.
* @property {string} cpu- cpu.
* @property {string} hostServer- 所在服务器.

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
import { getSysList, getSysDetail } from '@/api/monitor';
const detail = {
  'data': {
    'memoryMetric': {
      'memoryUsedRate': 58.34,
      'memoryUsed': 9498.98,
      'memoryTotal': 16282.57,
      'memoryList': [{
        'memoryUsedRate': 58.34,
        'time': 1
      }, {
        'memoryUsedRate': 58.06,
        'time': 2
      }, {
        'memoryUsedRate': 59.5,
        'time': 3
      }, {
        'memoryUsedRate': 60.4,
        'time': 4
      }, {
        'memoryUsedRate': 58.37,
        'time': 5
      }, {
        'memoryUsedRate': 53.21,
        'time': 6
      }, {
        'memoryUsedRate': 49.63,
        'time': 7
      }, {
        'memoryUsedRate': 64.38,
        'time': 8
      }, {
        'memoryUsedRate': 63.77,
        'time': 9
      }, {
        'memoryUsedRate': 64.39,
        'time': 10
      }, {
        'memoryUsedRate': 64.46,
        'time': 11
      }, {
        'memoryUsedRate': 64.39,
        'time': 12
      }, {
        'memoryUsedRate': 63.64,
        'time': 13
      }, {
        'memoryUsedRate': 64.22,
        'time': 14
      }, {
        'memoryUsedRate': 64.17,
        'time': 15
      }]
    },
    'diskMetric': {
      'diskCount': 8,
      'diskUsedRate': 0.15,
      'diskUsed': 164484.88,
      'diskTotal': 1074391.8599999999,
      'diskList': [{
        'diskName': '光盘 (L:)',
        'diskUsedRate': 0.0,
        'diskUsed': 0.0,
        'diskTotal': 0.0,
        'state': 1
      }, {
        'diskName': '本地固定磁盘 (C:)',
        'diskUsedRate': 87.19,
        'diskUsed': 59752.73,
        'diskTotal': 68528.86,
        'state': 1
      }, {
        'diskName': '本地固定磁盘 (D:)',
        'diskUsedRate': 1.98,
        'diskUsed': 4687.010000000009,
        'diskTotal': 237068.0,
        'state': 1
      }, {
        'diskName': '本地固定磁盘 (E:)',
        'diskUsedRate': 20.49,
        'diskUsed': 20984.259999999995,
        'diskTotal': 102399.0,
        'state': 1
      }, {
        'diskName': '本地固定磁盘 (F:)',
        'diskUsedRate': 0.66,
        'diskUsed': 1353.7600000000093,
        'diskTotal': 204799.0,
        'state': 1
      }, {
        'diskName': '本地固定磁盘 (G:)',
        'diskUsedRate': 35.15,
        'diskUsed': 71986.85999999999,
        'diskTotal': 204799.0,
        'state': 1
      }, {
        'diskName': '本地固定磁盘 (H:)',
        'diskUsedRate': 0.22,
        'diskUsed': 457.8099999999977,
        'diskTotal': 204799.0,
        'state': 1
      }, {
        'diskName': '本地固定磁盘 (I:)',
        'diskUsedRate': 10.12,
        'diskUsed': 5262.449999999997,
        'diskTotal': 51999.0,
        'state': 1
      }]
    },
    'cpuMetric': {
      'cpuUsedRate': 9.95,
      'cpuList': [{
        'cpuUsedRate': 9.95,
        'time': 1
      }, {
        'cpuUsedRate': 28.33,
        'time': 2
      }, {
        'cpuUsedRate': 19.53,
        'time': 3
      }, {
        'cpuUsedRate': 11.34,
        'time': 4
      }, {
        'cpuUsedRate': 16.34,
        'time': 5
      }, {
        'cpuUsedRate': 25.98,
        'time': 6
      }, {
        'cpuUsedRate': 32.03,
        'time': 7
      }, {
        'cpuUsedRate': 4.89,
        'time': 8
      }, {
        'cpuUsedRate': 8.59,
        'time': 9
      }, {
        'cpuUsedRate': 14.84,
        'time': 10
      }, {
        'cpuUsedRate': 6.66,
        'time': 11
      }, {
        'cpuUsedRate': 18.96,
        'time': 12
      }, {
        'cpuUsedRate': 5.87,
        'time': 13
      }, {
        'cpuUsedRate': 7.8,
        'time': 14
      }, {
        'cpuUsedRate': 6.64,
        'time': 15
      }]
    },
    'diskIoMetric': {
      'ioInBytes': 3900416,
      'ioOutBytes': 16089088,
      'ioInBytesList': [{
        'ioInBytes': 3900416,
        'time': 1
      }, {
        'ioInBytes': 195486208,
        'time': 2
      }, {
        'ioInBytes': 288256,
        'time': 3
      }, {
        'ioInBytes': 20672000,
        'time': 4
      }, {
        'ioInBytes': 16305664,
        'time': 5
      }, {
        'ioInBytes': 219648,
        'time': 6
      }, {
        'ioInBytes': -3993303040,
        'time': 7
      }, {
        'ioInBytes': 52241920,
        'time': 8
      }, {
        'ioInBytes': 807424,
        'time': 9
      }, {
        'ioInBytes': 674816,
        'time': 10
      }, {
        'ioInBytes': 527872,
        'time': 11
      }, {
        'ioInBytes': 1073152,
        'time': 12
      }, {
        'ioInBytes': 4096,
        'time': 13
      }, {
        'ioInBytes': 0,
        'time': 14
      }, {
        'ioInBytes': 2796544,
        'time': 15
      }],
      'ioOutBytesList': [{
        'ioOutBytes': 16089088,
        'time': 1
      }, {
        'ioOutBytes': 609821696,
        'time': 2
      }, {
        'ioOutBytes': 48729600,
        'time': 3
      }, {
        'ioOutBytes': 386382336,
        'time': 4
      }, {
        'ioOutBytes': 145464320,
        'time': 5
      }, {
        'ioOutBytes': 61760000,
        'time': 6
      }, {
        'ioOutBytes': 27949568,
        'time': 7
      }, {
        'ioOutBytes': 9255936,
        'time': 8
      }, {
        'ioOutBytes': 66484224,
        'time': 9
      }, {
        'ioOutBytes': -4120847360,
        'time': 10
      }, {
        'ioOutBytes': 154426368,
        'time': 11
      }, {
        'ioOutBytes': 68102656,
        'time': 12
      }, {
        'ioOutBytes': 3676160,
        'time': 13
      }, {
        'ioOutBytes': 3097600,
        'time': 14
      }, {
        'ioOutBytes': 48952832,
        'time': 15
      }]
    },
    'runInfo': {
      'upTime': 1590022256,
      'runState': 1,
      'processCount': 216,
      'threadCount': 3388,
      'handleMax': 16711680,
      'handleCurrent': 108092
    },
    'baseInfo': {
      'osType': null,
      'osVer': null,
      'osModel': null,
      'areaName': null,
      'cpuModel': null,
      'description': null
    }
  }
}
const data = [
  {
    id: '1',
    sysNum: '363',
    sysName: '操作系统名称1',
    sysCategory: 'windows操作系统',
    runState: '正常',
    disk: '正常',
    memory: '异常',
    cpu: '正常',
    hostServer: '省局服务器1'
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
  databaseList: databaseData,
  sysDetail: ''
}
// 同步提交更新数据的方法
const mutations = {
  getList: (state, list) => {
    // Chanage state
    state.list = list
  },
  getSysDetail: (state, data) => {
    // Chanage state
    state.sysDetail = data
  },
  getDatabaseList: (state, databaseList) => {
    // Chanage state
    state.list = databaseList
  }
}
// 异步提交更新数据的方法
const actions = {
  getList ({ commit }, parma) {
    // get api data
    getSysList(parma).then((data) => {
      commit('getList', data)
    })
  },
  getSysDetail ({ commit }, parma) {
    // get api data
    getSysDetail(parma).then((data) => {
      commit('getSysDetail', data)
    })
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
