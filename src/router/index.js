import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Shop from '../components/Shop'
import Cart from '../components/Cart'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
