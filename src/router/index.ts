import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import {} from '~/router/types.ts'

import { propsParser } from './utils/index.ts'

import auth from '~/middleware/auth.ts'



const BASE_URL = import.meta.env.BASE_URL || '/'

const routes: RouteRecordRaw[] = [
  {
    path: BASE_URL,
    name: 'defaultLayout',
    props: true,
    component: () => import('~/layouts/default.vue'),
    redirect: {name: 'home'},
    children: [
      {
        path: 'account',
        name: 'account',
        props: propsParser,
        component: () => import('~/pages/account/index.vue'),
        redirect: {name: 'profile'},
        meta: {
          isAuthOnly: true
        },
        children: [
          {
            path: 'profile',
            name: 'profile',
            props: propsParser,
            component: () => import('~/pages/account/profile.vue'),
            children: [
              
            ],
          },
          {
            path: 'orders',
            name: 'orders',
            props: propsParser,
            component: () => import('~/pages/account/orders.vue'),
            children: [
              
            ],
          },
          {
            path: 'favourite',
            name: 'favourite',
            props: propsParser,
            component: () => import('~/pages/account/favourite.vue'),
            children: [
              
            ],
          },
          {
            path: 'recientlyViewed',
            name: 'recientlyViewed',
            props: propsParser,
            component: () => import('~/pages/account/recientlyViewed.vue'),
            children: [
              
            ],
          },
          {
            path: 'reviews',
            name: 'reviews',
            props: propsParser,
            component: () => import('~/pages/account/reviews.vue'),
            children: [
              
            ],
          },
        ],
      },
      {
        path: 'blog',
        name: 'blog',
        props: propsParser,
        component: () => import('~/pages/blog.vue'),
        children: [
          
        ],
      },
      {
        path: 'blogPost/:id',
        name: 'blogPost',
        props: propsParser,
        component: () => import('~/pages/blogPost.vue'),
        children: [
          
        ],
      },
      {
        path: 'checkout',
        name: 'checkout',
        props: propsParser,
        component: () => import('~/pages/checkout.vue'),
        children: [
          
        ],
      },
      {
        path: 'contacts',
        name: 'contacts',
        props: propsParser,
        component: () => import('~/pages/contacts/index.vue'),
        redirect: {name: 'feedback'},
        children: [
          {
            path: 'feedback',
            name: 'feedback',
            props: propsParser,
            component: () => import('~/pages/contacts/feedback.vue'),
            children: [
              
            ],
          },
          {
            path: 'stores',
            name: 'stores',
            props: propsParser,
            component: () => import('~/pages/contacts/stores.vue'),
            children: [
              
            ],
          },
          {
            path: 'faq',
            name: 'faq',
            props: propsParser,
            component: () => import('~/pages/contacts/faq.vue'),
            children: [
              
            ],
          },
        ],
      },
      {
        path: 'home',
        name: 'home',
        props: propsParser,
        component: () => import('~/pages/home.vue'),
        children: [
          
        ],
      },
      {
        path: 'products',
        name: 'products',
        props: propsParser,
        component: () => import('~/pages/products.vue'),
        children: [
          
        ],
      },
      {
        path: 'products/:id',
        name: 'product',
        props: propsParser,
        component: () => import('~/pages/product.vue'),
        children: [
          
        ],
      },
      {
        path: 'trackOrder',
        name: 'trackOrder',
        props: propsParser,
        component: () => import('~/pages/trackOrder.vue'),
        children: [
          
        ],
      },
    ]
  },
]





const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: '_active',
})

// declare module 'vue-router' {
//   export interface Router {
//     $api: RouterApi
//   }
// }

// interface RouterApi {
//   onSignout: () => void
// }

// router.$api = {
//   onSignout() {
//     router.$navigate('/')
//   },
// }




router.beforeEach(auth)






export default router