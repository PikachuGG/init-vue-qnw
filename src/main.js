import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueLazyload from 'vue-lazyload'
import store from './store/store'
import './assets/css/initcss/reset.css'
import './assets/css/initcss/border1px.css'
import './assets/css/hotcss/hotcss.js'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueLazyload, {
  // error: 'dist/error.png',
  loading: require('./assets/img/default-img.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
