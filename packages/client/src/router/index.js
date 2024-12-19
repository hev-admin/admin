import { setupGuards } from './guards'

const BASE = import.meta.env.VITE_BASE || '/'

const ROUTER_MODES = {
  HISTORY: createWebHistory(BASE),
  MEMORY: createMemoryHistory(BASE),
  HASH: createWebHashHistory(BASE),
}

const routerMode = import.meta.env.VITE_ROUTER_MODE || 'HASH'

export const basicRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    redirect: '/welcome',
    children: [
      {
        path: 'welcome',
        name: 'Welcome',
        component: () => import('@/views/Welcome.vue'),
        meta: {
          menu: false,
        },
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: {
          menu: true,
          title: '控制台',
          icon: '',
        },
      },
      {
        path: 'forbidden',
        name: 'Forbidden',
        component: () => import('@/views/Errors/Forbidden.vue'),
        meta: {
          menu: false,
          title: '403 Forbidden',
        },
      },
      {
        path: ':pathMatch(.*)*',
        name: 'LayoutNotFound',
        component: () => import('@/views/Errors/NotFound.vue'),
        meta: {
          menu: false,
          title: '404 Not Found',
        },
      },
    ],
    meta: {
      menu: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      menu: false,
    },
  },
  {
    path: '/404',
    name: 'GlobalNotFound',
    component: () => import('@/views/Errors/NotFound.vue'),
    meta: {
      title: '404 Not Found',
      meta: {
        menu: false,
      },
    },
  },
]

const router = createRouter({
  history: ROUTER_MODES[routerMode],
  routes: [
    ...basicRoutes,
  ],
})

export function setupRouter(app) {
  app.use(router)
  setupGuards(router)
}

export default router
