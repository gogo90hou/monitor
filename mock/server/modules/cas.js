export default [
  {
    url: '/permitThrough',
    type: 'get',
    response: config => {
      return { 'statusCode': 0, 'statusText': '重定向到CAS服务器进行验证', 'data': false };
    }
  },
  {
    url: '/permitThrough',
    type: 'get',
    response: config => {
      return { 'statusCode': 0, 'statusText': '检测成功', 'data': true };
    }
  }
]