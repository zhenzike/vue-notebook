import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from '@/components/menus/MyUsers'
import Goods from '@/components/menus/MyGoods'
import Rights from '@/components/menus/MyRights'
import Orders from '@/components/menus/MyOrders'
import Settings from '@/components/menus/MySettings'
import UserDetail from '@/components/user/MyUserDetail'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home ,redirect:'/home/users',
    children:[
      {path:'users',component:Users},//由于是子路由所以没有加 /
      {path:'rights',component:Rights},
      {path:'goods',component:Goods},
      {path:'orders',component:Orders},
      {path:'settings',component:Settings},
      //用户详情页的路由规则
      {path:'userinfo/:id',component:UserDetail,props:true},
    ]}
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/home') {
    if (localStorage.getItem('token')) {
      next()
    }else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
