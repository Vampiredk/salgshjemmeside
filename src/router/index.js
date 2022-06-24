import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/kurv',
    name: 'kurv',

    component: () => import('../views/KurvView.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: () => import('../views/CheckoutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
