import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use({
  install (Vue) {
    Vue.prototype.$axios = axios.create({
      // 検証用
      baseURL: './'
      // 本番用
      // baseURL: 'https://example/'
    })
  }
})
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
