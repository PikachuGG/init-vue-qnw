import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './assets/css/initcss/reset.css'
import './assets/css/initcss/border1px.css'
import './assets/css/hotcss/hotcss.js'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
