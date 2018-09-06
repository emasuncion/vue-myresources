import Vue from 'vue'
import App from './App.vue'

require('@/assets/css/go_core.css')
require('@/assets/css/style.css')
require('@/assets/css/bootstrap.min.css')
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).
$mount('#app')
