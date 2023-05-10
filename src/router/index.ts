import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'


import { propsParser } from './utils/index.ts'


const BASE_URL = import.meta.env.BASE_URL || '/'

const routes: RouteRecordRaw[] = [
  {
    path: BASE_URL,
    name: 'layoutDefault',
    props: true,
    component: () => import('~/layouts/default.vue'),
    redirect: {name: 'home'},
    children: [
      {
        path: 'home',
        name: 'home',
        props: propsParser,
        component: () => import('~/pages/home.vue'),
        children: [
          
        ],
      },
    ]
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})


export default router