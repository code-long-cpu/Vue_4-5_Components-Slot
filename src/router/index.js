import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 5-1：创建需要导向到的组件页面
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'
// 5-1：配置路由规则：数组对象,路径对应页面组件
const router = new VueRouter({
  routes: [
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },
  ]
})

// 导出路由实例
export default router