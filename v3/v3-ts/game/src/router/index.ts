import { createWebHistory, createRouter } from 'vue-router'
const history = createWebHistory()



const router = createRouter({
  history, 
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },
   
    {
      path: '/dist/index.html',
      name: 'index',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/view/home/home.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/view/game/game.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/view/user/user.vue')
    },

  ]
})


export { router }