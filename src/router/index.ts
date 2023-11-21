import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import { propsParser } from './utils/index.ts'

import authMiddleware from '~/middleware/auth.ts'



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
        path: 'test',
        name: 'test',
        props: propsParser,
        component: () => import('~/pages/_test.vue'),
        children: [
          
        ],
      },
      {
        path: 'account',
        name: 'account',
        props: propsParser,
        component: () => import('~/pages/account/index.vue'),
        redirect: {name: 'accountProfile'},
        meta: {
          isAuthOnly: true
        },
        children: [
          {
            path: 'profile',
            name: 'accountProfile',
            props: propsParser,
            component: () => import('~/pages/account/profile.vue'),
            children: [
              
            ],
          },
          {
            path: 'orders',
            name: 'accountOrders',
            props: propsParser,
            component: () => import('~/pages/account/orders.vue'),
            children: [
              
            ],
          },
          {
            path: 'favourite',
            name: 'accountFavourite',
            props: propsParser,
            component: () => import('~/pages/account/favourite.vue'),
            children: [
              
            ],
          },
          {
            path: 'recientlyViewed',
            name: 'accountRecientlyViewed',
            props: propsParser,
            component: () => import('~/pages/account/recientlyViewed.vue'),
            children: [
              
            ],
          },
          {
            path: 'reviews',
            name: 'accountReviews',
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
        meta: {isAuthOnly: true},
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
        path: 'products/:id',
        name: 'product',
        props: propsParser,
        component: () => import('~/pages/product/index.vue'),
        redirect: {name: 'productGeneralInfo'},
        children: [
          {
            path: 'generalInfo',
            name: 'productGeneralInfo',
            props: propsParser,
            component: () => import('~/pages/product/generalInfo.vue'),
            children: [
              
            ],
          },
          {
            path: 'details',
            name: 'productDetails',
            props: propsParser,
            component: () => import('~/pages/product/details.vue'),
            children: [
              
            ],
          },
          {
            path: 'reviews',
            name: 'productReviews',
            props: propsParser,
            component: () => import('~/pages/product/reviews.vue'),
            children: [
              
            ],
          },
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
  scrollBehavior(to, from, savedPostition) {
    if (to.hash) return {
      el: to.hash,
      top: 0,
    }
    if (savedPostition) return savedPostition
    return {
      top: 0
    }
  }
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




router.beforeEach(authMiddleware)






export default router