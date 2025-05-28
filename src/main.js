import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LayoutArea from './components/LayoutArea.vue'

Vue.config.productionTip = false

Vue.component('LayoutArea', LayoutArea) //全局布局组件

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
