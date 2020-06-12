
module.exports = [
  { // 创建文章和批量删除
    url: '/V03R00C028B001/articleService/articles',
    type: 'post',
    response: (req, res) => {
      return {
        'statusText': '创建成功',
        'statusCode': 0,
        'data': {
          'ioMetricREsp': {
            'cpuUsaged': 0,
            'ioInByteSpeed': 0,
            'ioInByteSpeedMetricRespList': [
              {
                'speed': 0,
                'time': 0
              }
            ],
            'ioOutByteSpeed': 0,
            'ioOutByteSpeedMetricRespList': [
              {
                'speed': 0,
                'time': 0
              }
            ],
            'threads': 0
          },
          'middlewareBaseInfo': {
            'actualId': 'string',
            'area': 'string',
            'description': 'string',
            'id': 0,
            'name': 'string',
            'place': 'string',
            'type': 'string',
            'version': 'string'
          },
          'middlewareRunInfo': {
            'runStatus': {},
            'runTime': {}
          },
          'networdMetricResp': {
            'connections': 0,
            'curRequestNum': 0,
            'inByte': 0,
            'inByteSpeed': 0,
            'inByteSpeedMetricRespList': [
              {
                'speed': 0,
                'time': 0
              }
            ],
            'outByte': 0,
            'outByteSpeed': 0,
            'outByteSpeedMetricRespList': [
              {
                'speed': 0,
                'time': 0
              }
            ],
            'requestNum': 0
          }
        }
      }
    }
  },
  { // 删除文章
    name: '删除文章',
    url: '/V03R00C028B001/articleService/articles/:id',
    type: 'delete',
    response: (req, res) => {
    }
  },
  { // 查询文章列表
    name: '查询文章列表',
    url: '/V03R00C028B001/articleService/articles',
    type: 'get',
    response: config => {

    }
  },
  { // 查询文章详细
    name: '查询文章详细',
    url: '/V03R00C028B001/articleService/articles/:id',
    type: 'get',
    response: (req, res) => {

    }
  },
  { // 修改文章
    name: '修改文章',
    url: '/V03R00C028B001/articleService/articles',
    type: 'put',
    response: (req, res) => {

    }
  }
]
