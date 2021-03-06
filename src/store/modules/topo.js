const state = {
  topological: {
    'nodes': [
      {
        'value': 'service',
        'label': '交换机',
        'fontIcon': 'iconicon_IT_equipment',
        'text': '',
        'shape': 'monitorNode',
        'offsetX': 21,
        'offsetY': 47,
        'x': 776,
        'y': 54,
        'type': 'node',
        'id': 'node2',
        'to': [
          {
            'id': 'node16',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node9',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node23',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node9',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node16',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node23',
            'shape': 'monitorEdge'
          }
        ],
        'warning': {
          'source': '省局服务器',
          'level': 0,
          'description': '正常(告警描述)'
        }
      },
      {
        'value': 'service',
        'label': '服务器',
        'fontIcon': 'iconicon_server',
        'text': '',
        'shape': 'monitorNode',
        'offsetX': 46,
        'offsetY': 55,
        'x': 579,
        'y': 155,
        'type': 'node',
        'id': 'node9',
        'from': [
          {
            'id': 'node2',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node2',
            'shape': 'monitorEdge'
          }
        ],
        'warning': {
          'source': '省局服务器',
          'level': 0,
          'description': '正常(告警描述)'
        }
      },
      {
        'value': 'service',
        'label': '服务器',
        'fontIcon': 'iconicon_server',
        'text': '',
        'shape': 'monitorNode',
        'offsetX': 72,
        'offsetY': 45,
        'x': 776,
        'y': 158,
        'type': 'node',
        'id': 'node16',
        'from': [
          {
            'id': 'node2',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node2',
            'shape': 'monitorEdge'
          }
        ],
        'to': [
          {
            'id': 'node141',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node141',
            'shape': 'monitorEdge'
          }
        ],
        'warning': {
          'source': '省局服务器',
          'level': 0,
          'description': '正常(告警描述)'
        }
      },
      {
        'value': 'service',
        'label': '服务器',
        'fontIcon': 'iconicon_server',
        'text': '',
        'shape': 'monitorNode',
        'offsetX': 35,
        'offsetY': 31,
        'x': 1008,
        'y': 154,
        'type': 'node',
        'id': 'node23',
        'from': [
          {
            'id': 'node2',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node2',
            'shape': 'monitorEdge'
          }
        ],
        'warning': {
          'source': '省局服务器',
          'level': 0,
          'description': '正常(告警描述)'
        }
      },
      {
        'value': 'service',
        'label': '交换机',
        'fontIcon': 'iconicon_IT_equipment',
        'text': '',
        'shape': 'monitorNode',
        'offsetX': 42,
        'offsetY': 45,
        'x': 776,
        'y': 276,
        'type': 'node',
        'id': 'node141',
        'from': [
          {
            'id': 'node16',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node16',
            'shape': 'monitorEdge'
          }
        ],
        'to': [
          {
            'id': 'node215',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node181',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node195',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node181',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node195',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node215',
            'shape': 'monitorEdge'
          }
        ],
        'warning': {
          'source': '省局服务器',
          'level': 0,
          'description': '正常(告警描述)'
        }
      },
      {
        'value': 'app',
        'label': '应用软件',
        'fontIcon': 'iconicon_Application_software',
        'text': '',
        'shape': 'monitorNode',
        'offsetX': 48,
        'offsetY': 30,
        'x': 585,
        'y': 405,
        'type': 'node',
        'id': 'node181',
        'from': [
          {
            'id': 'node141',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node141',
            'shape': 'monitorEdge'
          }
        ],
        'to': [
          {
            'id': 'node234',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node188',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node188',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node234',
            'shape': 'monitorEdge'
          }
        ],
        'warning': {
          'source': '省局服务器',
          'level': 0,
          'description': '正常(告警描述)'
        }
      },
      {
        'value': 'app',
        'label': '应用软件',
        'fontIcon': 'iconicon_Application_software',
        'text': '',
        'shape': 'monitorNode',
        'offsetX': 32,
        'offsetY': 54,
        'x': 636,
        'y': 544,
        'type': 'node',
        'id': 'node188',
        'from': [
          {
            'id': 'node181',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node181',
            'shape': 'monitorEdge'
          }
        ],
        'warning': {
          'source': '省局服务器',
          'level': 0,
          'description': '正常(告警描述)'
        }
      },
      {
        'value': 'app',
        'label': '应用软件',
        'fontIcon': 'iconicon_Application_software',
        'text': '',
        'shape': 'monitorNode',
        'offsetX': 39,
        'offsetY': 43,
        'x': 1027,
        'y': 406,
        'type': 'node',
        'id': 'node195',
        'from': [
          {
            'id': 'node141',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node141',
            'shape': 'monitorEdge'
          }
        ],
        'to': [
          {
            'id': 'node248',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node255',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node248',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node255',
            'shape': 'monitorEdge'
          }
        ],
        'warning': {
          'source': '省局服务器',
          'level': 0,
          'description': '正常(告警描述)'
        }
      },
      {
        // 'groupId': 'group3',
        'value': 'service',
        'label': '存储',
        'fontIcon': 'iconicon_data_base',
        'text': '',
        'shape': 'monitorNode',
        'offsetX': 48,
        'offsetY': 50,
        'x': 776,
        'y': 399,
        'type': 'node',
        'id': 'node215',
        'from': [
          {
            'id': 'node141',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node141',
            'shape': 'monitorEdge'
          }
        ],
        'to': [
          {
            'id': 'node241',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node241',
            'shape': 'monitorEdge'
          }
        ],
        'warning': {
          'source': '省局服务器',
          'level': 0,
          'description': '正常(告警描述)'
        }
      },
      {
        'value': 'app',
        'label': '应用软件',
        'fontIcon': 'iconicon_Application_software',
        'text': '',
        'shape': 'monitorNode',
        'offsetX': 44,
        'offsetY': 46,
        'x': 483,
        'y': 544,
        'type': 'node',
        'id': 'node234',
        'from': [
          {
            'id': 'node181',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node181',
            'shape': 'monitorEdge'
          }
        ],
        'warning': {
          'source': '省局服务器',
          'level': 0,
          'description': '正常(告警描述)'
        }
      },
      {
        // 'groupId': 'group3',
        'value': 'app',
        'label': '应用软件',
        'fontIcon': 'iconicon_Application_software',
        'text': '',
        'shape': 'monitorNode',
        'offsetX': 27,
        'offsetY': 56,
        'x': 776,
        'y': 537,
        'type': 'node',
        'id': 'node241',
        'from': [
          {
            'id': 'node215',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node215',
            'shape': 'monitorEdge'
          }
        ],
        'warning': {
          'source': '省局服务器',
          'level': 0,
          'description': '正常(告警描述)'
        }
      },
      {
        // 'groupId': 'group2',
        'value': 'app',
        'label': '应用软件',
        'fontIcon': 'iconicon_Application_software',
        'text': '',
        'shape': 'monitorNode',
        'offsetX': 69,
        'offsetY': 48,
        'x': 1002,
        'y': 533,
        'type': 'node',
        'id': 'node248',
        'from': [
          {
            'id': 'node195',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node195',
            'shape': 'monitorEdge'
          }
        ],
        'warning': {
          'source': '省局服务器',
          'level': 4,
          'description': '提示(告警描述)'
        }
      },
      {
        // 'groupId': 'group2',
        'value': 'app',
        'label': '应用软件',
        'fontIcon': 'iconicon_Application_software',
        'text': '',
        'shape': 'monitorNode',
        'offsetX': 18,
        'offsetY': 50,
        'x': 1142,
        'y': 533,
        'type': 'node',
        'id': 'node255',
        'from': [
          {
            'id': 'node195',
            'shape': 'monitorEdge'
          },
          {
            'id': 'node195',
            'shape': 'monitorEdge'
          }
        ],
        'warning': {
          'source': '省局服务器',
          'level': 4,
          'description': '提示(告警描述)'
        }
      }
    ]
    // ,
    // 'groups': [
    //   {
    //     'id': 'group2'
    //   },
    //   {
    //     'id': 'group3'
    //   }
    // ]
  }
}

const mutations = {
  SET_TOPO: (state, data) => {
    state.topological = data;
  }
}

const actions = {
  setTopo ({ commit }, data) {
    commit('SET_TOPO', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

