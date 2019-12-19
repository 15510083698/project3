// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import Vuex from 'vuex'
import store from './store/index.js'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// Vue.use(Vuex)
Vue.use(Vant)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
