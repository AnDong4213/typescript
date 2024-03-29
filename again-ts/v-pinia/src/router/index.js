import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/plugin',
    name: 'plugin',
    component: () => import(/* webpackChunkName: "plugin" */ '../components/plugin.vue'),
  },
  {
    path: '/draggable',
    name: 'draggable',
    component: () => import(/* webpackChunkName: "draggable" */ '../views/Draggable.vue'),
  },
  {
    path: '/compf',
    name: 'compf',
    component: () => import(/* webpackChunkName: "CombFunction" */ '../views/CombinationFunction.vue'),
  },
  {
    path: '/directive',
    name: 'directive',
    component: () => import(/* webpackChunkName: "directives" */ '../views/Directives.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
