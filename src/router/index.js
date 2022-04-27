import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  // 商品说明页
  {
    path: '/introduce',
    name: 'introduce',
    component: () => import('../views/introduce.vue')
  },
  // 答题页
  {
    path: '/answer',
    name: 'answer',
    component: () => import('../views/answer.vue')
  },
  // 答题页
  // {
  //   path: '/answer1',
  //   name: 'answer1',
  //   component: () => import('../views/answer.vue')
  // },
  // 信息收集
  {
    path: '/userForm',
    name: 'userForm',
    component: () => import('../views/userForm.vue')
  }
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   let openId = VueCookies.get("openId")
//   if (openId) {
//     next()
//   } else {
//     if (to.path === '/' || to.path === '/login') { //这就是跳出循环的关键
//       next()
//     } else {
//       next('/')
//     }
//   }
// })

export default router
