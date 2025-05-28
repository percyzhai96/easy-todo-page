import Vue from "vue"
import VueRouter from "vue-router"
import HomePage from "@/view/Home/HomePage.vue"
// 使用路由
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },

  ]
})


export default router