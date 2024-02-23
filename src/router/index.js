import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/secretMessage/:id',
    name: 'secretMessage',
    component: () => import('../views/secretMessageView.vue')
  },
  {
    path: '/selection',
    name: 'selection',
    component: () => import('../views/selectionView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
