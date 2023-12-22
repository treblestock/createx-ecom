import type { Account, BlogPostComment, Order, Product, ProductPreview, ProductReview, User, UserBio } from "~/types"
import useLocalStorage from '~/composables/useLocalStorage'

declare module '~/composables/useLocalStorage' {
  export interface LocalStorageRecords {
    ['localStorage.isInstalled']: boolean
    
    ['users']: User[]
    ['users.lastId']: number
    ['blogPostComments']: BlogPostComment[]
    ['blogPostComments.lastId']: number
    ['productReviews']: ProductReview[]
    ['productReviews.lastId']: number
    ['orders']: Order[]

    ['auth.accounts']: Account[]

    ['profile.account']: Account | null
    ['profile.userBio']: UserBio
    ['profile.favourite']: Product['id'][]
    ['profile.recientlyViewed']: Product['id'][]

  }
}
const account: Account = {
  id: 1,
  email: 'annblack@gmail.com',
  fullname: 'Ann Black',
  password:  'user',
}
const accounts: Account[] = [account]
const users: [] = []
const usersLastId = 12
const blogPostLastId = 40
const productReviewsLastId = 60
const userBlogPostComments: [] = []
const userProductReviews: [] = []
const userOrders: [] = []
const recientlyViewedIds = [12, 34, 1, 14, 18]
const favouriteIds = [10, 36, 11, 34, 19]
const userBio: UserBio = {
  firstName: 'Ann',
  lastName: 'Black',
  email: 'annblack@gmail.com',
  phone: '',
  password: 'user',
  country: '',
  city: '',
  address: '',
  zipCode: '',
}
const initialUserBio = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  country: '',
  city: '',
  address: '',
  zipCode: '',
}
  

const localStorageApi = useLocalStorage()
export function initLocalStorageMockData() {
  const isInstalled = localStorageApi.get('localStorage.isInstalled')
  if (isInstalled) return
  
  localStorageApi.set('auth.accounts', accounts)
  localStorageApi.set('profile.account', account)
  localStorageApi.set('users', users)
  localStorageApi.set('users.lastId', usersLastId)
  localStorageApi.set('blogPostComments', userBlogPostComments)
  localStorageApi.set('blogPostComments.lastId', blogPostLastId)
  localStorageApi.set('productReviews', userProductReviews)
  localStorageApi.set('productReviews.lastId', productReviewsLastId)
  localStorageApi.set('orders', userOrders)
  
  localStorageApi.set('profile.recientlyViewed', recientlyViewedIds)
  localStorageApi.set('profile.favourite', favouriteIds)
  localStorageApi.set('profile.userBio', userBio)
  localStorageApi.set('localStorage.isInstalled', true)
}


export function withLocalStorageData({productReviews, blogPostComments, orders}: {
    productReviews: ProductReview[]
    blogPostComments: BlogPostComment[]
    orders: Order[]
  }) {
  productReviews = productReviews.concat(localStorageApi.get('productReviews'))
  blogPostComments = blogPostComments.concat(localStorageApi.get('blogPostComments'))
  orders = orders.concat(localStorageApi.get('orders'))
  return {productReviews, blogPostComments, orders}
}

export function clearCurrentUserProfile() {
  localStorageApi.set('profile.account', null)
  localStorageApi.set('profile.recientlyViewed', [])
  localStorageApi.set('profile.favourite', [])
  localStorageApi.set('profile.userBio', initialUserBio)
}