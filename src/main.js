import Vue from 'vue'
import App from './App.vue'

require('@/assets/go_core.css')
require('@/assets/style.css')
require('@/assets/bootstrap.min.css')
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).
$mount('#app')
