import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LayoutArea from './components/LayoutArea.vue'
import TaskCard from './components/TaskCard.vue'

Vue.config.productionTip = false

Vue.component('LayoutArea', LayoutArea) //全局布局组件
Vue.component('TaskCard', TaskCard) // 全局任务卡片组件

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
