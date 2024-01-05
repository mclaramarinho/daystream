import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '@/views/SplashScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SplashScreen
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: <h1>About</h1>
    //   // () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
