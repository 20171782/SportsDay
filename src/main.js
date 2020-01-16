import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cor from '@/components/carousel.vue'
import houses from '@/components/houses.vue'
Vue.component('cor',cor)
Vue.component('houses',houses)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
