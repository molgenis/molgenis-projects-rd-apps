import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import GetStartedPage from '../views/GetStarted.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomePage,
      meta: {
        title: 'Home'
      }
    },
    {
      name: 'get-started',
      path: '/get-started',
      component: GetStartedPage,
      meta: {
        title: 'Get Started'
      }
    },
    {
      name: 'login',
      path: '/login',
    }
  ]
})

// router.beforeEach(async (to, from, next) => {
//   const response = await fetch('/app-ui-context')
//   const data = response.json()
//   if (to.name == 'get-started' && !data.authenticated) {
//     next({ to: 'login' })
//   } else {
//     next()
//   }
// })

router.afterEach((to) => {
  document.title = `${to.meta.title} | RD3` || 'RD3'
})

export default router