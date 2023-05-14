import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'


import { propsParser } from './utils/index.ts'


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
        component: () => import('~/pages/account.vue'),
        redirect: {name: 'accountProfile'},
        children: [
          {
            path: 'accountProfile',
            name: 'accountProfile',
            props: propsParser,
            component: () => import('~/pages/accountProfile.vue'),
            children: [
              
            ],
          },
          {
            path: 'accountOrders',
            name: 'accountOrders',
            props: propsParser,
            component: () => import('~/pages/accountOrders.vue'),
            children: [
              
            ],
          },
          {
            path: 'accountFavourite',
            name: 'accountFavourite',
            props: propsParser,
            component: () => import('~/pages/accountFavourite.vue'),
            children: [
              
            ],
          },
          {
            path: 'accountRecentlyViewed',
            name: 'accountRecentlyViewed',
            props: propsParser,
            component: () => import('~/pages/accountRecentlyViewed.vue'),
            children: [
              
            ],
          },
          {
            path: 'accountReviews',
            name: 'accountReviews',
            props: propsParser,
            component: () => import('~/pages/accountReviews.vue'),
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
        component: () => import('~/pages/contacts.vue'),
        redirect: {name: 'contactsFeedback'},
        children: [
          {
            path: 'contactsFeedback',
            name: 'contactsFeedback',
            props: propsParser,
            component: () => import('~/pages/contactsFeedback.vue'),
            children: [
              
            ],
          },
          {
            path: 'contactsOutletStores',
            name: 'contactsOutletStores',
            props: propsParser,
            component: () => import('~/pages/contactsOutletStores.vue'),
            children: [
              
            ],
          },
          {
            path: 'contactsFAQ',
            name: 'contactsFAQ',
            props: propsParser,
            component: () => import('~/pages/contactsFAQ.vue'),
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
        path: 'product/:id',
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
})


export default router