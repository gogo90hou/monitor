import Mock from 'mockjs'
import { param2Obj } from '../../src/utils'

// const requireContext = require('require-context')
// const path = require('path')

// const context = requireContext(path.join(__dirname, '../server/modules'), false, /\.js$/)
// const APIS = context.keys().reduce((APIS, modulePath) => {
//   APIS = APIS.concat(context(modulePath))
//   return APIS
// }, [])

import cloud from '../server/modules/cloud';
import cloudManage from '../server/modules/cloudManage';
import database from '../server/modules/database';
import databaseManage from '../server/modules/databaseManage';
import gateway from '../server/modules/gateway';
import iis from '../server/modules/iis';
import it from '../server/modules/it';
import itManage from '../server/modules/itManage';
import menu from '../server/modules/menu';
import middle from '../server/modules/middle';
import middleManage from '../server/modules/middleManage';
import monitor from '../server/modules/monitor';
import reportRule from '../server/modules/reportRule';
import safety from '../server/modules/safety';
import soft from '../server/modules/soft';
import softManage from '../server/modules/softManage';
import sysMonitor from '../server/modules/sysMonitor';
import system from '../server/modules/system';
import table from '../server/modules/table';
import topo from '../server/modules/topo';
import users from '../server/modules/users';
import warn from '../server/modules/warn';
import cas from '../server/modules/cas';

const mocks = [
  ...cloud,
  ...cloudManage,
  ...database,
  ...databaseManage,
  ...gateway,
  ...iis,
  ...it,
  ...itManage,
  ...menu,
  ...middle,
  ...middleManage,
  ...monitor,
  ...reportRule,
  ...safety,
  ...soft,
  ...softManage,
  ...sysMonitor,
  ...system,
  ...table,
  ...topo,
  ...users,
  ...warn,
  ...cas
]

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
export function mockXHR () {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap (respond) {
    return function (options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}

// for mock server
const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
    type: type || 'get',
    response (req, res) {
      console.log('request invoke:' + req.path)
      res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
    }
  }
}

export default mocks.map(route => {
  return responseFake(route.url, route.type, route.response)
})
