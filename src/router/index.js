import Vue from 'vue'
import Router from 'vue-router'

import routerConfig from '../routerConfig.js'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: routerConfig
})
