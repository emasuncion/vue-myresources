import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'
require('@/assets/css/style.css')
require('@/assets/css/bootstrap.min.css')
require('@/assets/css/go_core.css')

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).
$mount('#app')
