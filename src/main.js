/*
 * @Author: your name
 * @Date: 2020-05-18 13:53:01
 * @LastEditTime: 2020-05-28 14:23:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \monitor\src\main.js
 */
import Vue from 'vue'
import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'

// 暂时引入在线地址 后续icon更新完成统一下载到本地
// import '@/font/iconfont.css'

import i18n from './lang' // 国际化
import '@/icons' // icon
import '@/permission' // permission control
import './utils/error-log'; // error log
import './components/globalComponent'

// set ElementUI lang to EN
Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
