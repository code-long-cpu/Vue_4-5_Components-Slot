import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import router_2 from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  router_2
}).$mount('#app')
