const Mock = require('mockjs');
function getDataByPage (page, pagesize, data, key) { // 根据页码 页尺寸 来过滤数据
  const start = (page - 1) * pagesize;
  const end = page * pagesize > data[key].length ? data[key].length : page * pagesize;
  const result = [];
  for (let i = start; i < end; i++) {
    for (var item in data[key][i]) {
      if (data[key][i][item] instanceof Object) {
        data[key][i][item] = data[key][i][item].name;
      }
    }
    result.push(data[key][i]);
  }
  const ret = {};
  ret[key] = result;
  ret['currentPage'] = page;
  ret['totalRows'] = data[key].length;
  ret['rowsPerPage'] = pagesize;
  return ret;
}
const data = Mock.mock({
  'items|30': [{
    id: '@increment',
    'name|1': [{ nameId: 1, name: '锦江一体化平台数据服务器' }, { nameId: 2, name: '邑州体罚系统运行服务器' }, { nameId: 3, name: '川西数据备份系统服务器' }, { nameId: 4, name: '川北OA系统运行服务器' }, { nameId: 5, name: '雷马屏应急指挥平台数据服务器' }],
    'runstate|1': [1, 2, 3],
    'approvalProcess': '@integer(30, 100)',
    'todayPv|1': '@integer(1000, 3000)',
    'area': function () {
      var val = this.name.nameId === 1 && '锦江监狱' || this.name.nameId === 2 && '邑州监狱' || this.name.nameId === 3 && '川西监狱' || this.name.nameId === 4 && '川北监狱' || this.name.nameId === 5 && '雷马屏监狱'
      return val
    },
    'position|1': ['机房门口', '新安装的设备', '二楼大门左侧', '机房内'],
    des: '设备描述'
  }]
})
const detail = {
  'statusCode': 0,
  'statusText': '查询成功!',
  'httpCode': 200,
  'data': {
    'requestDurationResp': [
      {
        'url': 'http://127.0.0.1://8080',
        'duration': '3667.5834037082645',
        'reqCount': 8080
      },
      {
        'url': 'http://127.0.0.1://8081',
        'duration': '7781.265125531854',
        'reqCount': 8081
      },
      {
        'url': 'http://127.0.0.1://8082',
        'duration': '4266.9263641586995',
        'reqCount': 8082
      },
      {
        'url': 'http://127.0.0.1://8083',
        'duration': '7576.4266241409505',
        'reqCount': 8083
      },
      {
        'url': 'http://127.0.0.1://8084',
        'duration': '4143.107133568694',
        'reqCount': 8084
      },
      {
        'url': 'http://127.0.0.1://8085',
        'duration': '4724.856551744657',
        'reqCount': 8085
      },
      {
        'url': 'http://127.0.0.1://8086',
        'duration': '2552.8010844467026',
        'reqCount': 8086
      },
      {
        'url': 'http://127.0.0.1://8087',
        'duration': '7382.752035201381',
        'reqCount': 8087
      },
      {
        'url': 'http://127.0.0.1://8088',
        'duration': '3047.721072811992',
        'reqCount': 8088
      },
      {
        'url': 'http://127.0.0.1://8089',
        'duration': '4382.859531719754',
        'reqCount': 8089
      }
    ],
    'reqPerResp': [
      {
        'timePoint': '14:10',
        'count': 1310
      },
      {
        'timePoint': '14:20',
        'count': 294
      },
      {
        'timePoint': '14:30',
        'count': 1191
      },
      {
        'timePoint': '14:40',
        'count': 876
      },
      {
        'timePoint': '14:50',
        'count': 1170
      },
      {
        'timePoint': '14:60',
        'count': 711
      },
      {
        'timePoint': '14:70',
        'count': 266
      },
      {
        'timePoint': '14:80',
        'count': 96
      },
      {
        'timePoint': '14:90',
        'count': 630
      },
      {
        'timePoint': '15:00',
        'count': 439
      }
    ],
    'exceptionResp': [
      {
        'exceptionType': 'nullPointException',
        'exceptionTime': 1591949056162
      },
      {
        'exceptionType': 'nullPointException',
        'exceptionTime': 1591949056162
      },
      {
        'exceptionType': 'nullPointException',
        'exceptionTime': 1591949056162
      },
      {
        'exceptionType': 'nullPointException',
        'exceptionTime': 1591949056162
      },
      {
        'exceptionType': 'nullPointException',
        'exceptionTime': 1591949056162
      },
      {
        'exceptionType': 'nullPointException',
        'exceptionTime': 1591949056162
      },
      {
        'exceptionType': 'nullPointException',
        'exceptionTime': 1591949056162
      },
      {
        'exceptionType': 'nullPointException',
        'exceptionTime': 1591949056162
      },
      {
        'exceptionType': 'nullPointException',
        'exceptionTime': 1591949056162
      },
      {
        'exceptionType': 'nullPointException',
        'exceptionTime': 1591949056162
      },
      {
        'exceptionType': 'nullPointException',
        'exceptionTime': 1591949056162
      },
      {
        'exceptionType': 'nullPointException',
        'exceptionTime': 1591949056162
      }
    ],
    'processResp': {
      'totalProcess': 456,
      'currentProcess': 232,
      'finishProcess': 20,
      'rejectProcess': 3,
      'processListResp': [
        {
          'processName': '流程1',
          'processState': '已完成',
          'startTime': 1591949056162,
          'duration': '1h'
        },
        {
          'processName': '流程2',
          'processState': '运行中',
          'startTime': 1591949056162,
          'duration': '2h'
        },
        {
          'processName': '流程3',
          'processState': '已完成',
          'startTime': 1591949056162,
          'duration': '3h'
        },
        {
          'processName': '流程4',
          'processState': '运行中',
          'startTime': 1591949056162,
          'duration': '4h'
        },
        {
          'processName': '流程5',
          'processState': '已完成',
          'startTime': 1591949056162,
          'duration': '5h'
        },
        {
          'processName': '流程6',
          'processState': '运行中',
          'startTime': 1591949056162,
          'duration': '6h'
        },
        {
          'processName': '流程7',
          'processState': '已完成',
          'startTime': 1591949056162,
          'duration': '7h'
        },
        {
          'processName': '流程8',
          'processState': '运行中',
          'startTime': 1591949056162,
          'duration': '8h'
        },
        {
          'processName': '流程9',
          'processState': '已完成',
          'startTime': 1591949056162,
          'duration': '9h'
        },
        {
          'processName': '流程10',
          'processState': '运行中',
          'startTime': 1591949056162,
          'duration': '10h'
        }
      ]
    },
    'baseResp': {
      'runningTime': '10 d 2 h',
      'runStateName': '正常',
      'jappName': '狱政3.0',
      'version': 'V12.3',
      'areaName': '省监狱管理局',
      'serverName': '省局服务器0',
      'jappDescribe': '狱政管理3.0软件系统。。。。。'
    }
  }
}
export default [
  {
    url: '/soft/list',
    type: 'get',
    response: config => {
      const page = config.query.page;
      const rows = config.query.rows;
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': getDataByPage(page, rows, data, 'items')
      }
    }
  },
  {
    url: '/soft/detail',
    type: 'get',
    response: config => {
      return detail
    }
  }
]
