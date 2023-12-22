import type { Product, BlogPost, BlogPostComment, ProductReview, Order, Collection, User, Account, SubscribeMailing, ContactUsForm, SubscribeMailingForSale, UserBio, OfflineStore } from '~/types'
import blogPostCommentsMock from '~/assets/data/blogPostComments.json'
// const blogPostComments = blogPostCommentsMock as BlogPostComment[]
import blogPostsMock from '~/assets/data/blogPosts.json'
const blogPosts = blogPostsMock as BlogPost[]
import collectionsMock from '~/assets/data/collections.json'
const collections = collectionsMock as Collection[]
import differentMock from '~/assets/data/different.json'
const different = differentMock
import ordersMock from '~/assets/data/orders.json'
// const orders = ordersMock as Order[]
import productReviewsMock from '~/assets/data/productReviews.json'
// const productReviews = productReviewsMock as ProductReview[]
import productsMock from '~/assets/data/products.json'
const products = productsMock as Product[]
import usersMock from '~/assets/data/users.json'
const users = usersMock as User[]
import offlineStoresMock from '~/assets/data/offlineStores.json'
const offlineStores = offlineStoresMock as OfflineStore[]

import {
  initLocalStorageMockData,
  withLocalStorageData,
  clearCurrentUserProfile,
} from './initLocalStorage'
import useLocalStorage from '~/composables/useLocalStorage'

initLocalStorageMockData()


function getNextOrderId(): string {
  const bigNumber = Math.random() * 1e15
  return Math.floor(bigNumber).toString(32).toUpperCase()
}


const {
  productReviews, 
  blogPostComments, 
  orders,
} = withLocalStorageData({
  productReviews: productReviewsMock as ProductReview[],
  blogPostComments: blogPostCommentsMock,
  orders: ordersMock as Order[],
})


const productsNewIds = [21, 22, 32, 43, 17, 25, 11, 13, 18]
const trendingNowIds = [11, 32, 2, 13, 17, 24, 12, 38, 39]
const RECIENTLY_VIEWED_MAX_SIZE = 20

const localStorageApi = useLocalStorage()

const clientOnlyApi = {
  // users
  async createUser(fullname: string): Promise<User> {
    let lastUserId = localStorageApi.get('users.lastId')
    const newUser: User = {
      id: ++lastUserId,
      fullname,
    }
    const users = localStorageApi.get('users')
    users.push(newUser)
    
    localStorageApi.set('users.lastId', lastUserId)
    localStorageApi.set('users', users)

    return newUser
  },
  async updateUser(fullname: string): Promise<User> {
    let lastUserId = localStorageApi.get('users.lastId')
    const newUser: User = {
      id: ++lastUserId,
      fullname,
    }
    const users = localStorageApi.get('users')
    users.push(newUser)
    
    localStorageApi.set('users.lastId', lastUserId)
    localStorageApi.set('users', users)

    return newUser
  },
  async findUserById(id: User['id']): Promise<User | null> {
    return users.find(item => item.id === id) || null
  },

  // products
  async getProducts(count?: number): Promise<Product[]> {
    return count ? products.slice(0, count) : products
  },
  async findProductById(id: Product['id']): Promise<Product | null> {
    return products.find(item => item.id === id) || null
  },
  async findProductsById(ids: Product['id'][]): Promise<Product[]> {
    return products.filter(item => ids.includes(item.id))
  },
  async getProductsByOrder(from: number, to: number): Promise<Product[]> {
    return products.slice(from, to)
  },

  // product slices
  async getProductsNew(): Promise<Product[]> {
    return clientOnlyApi.findProductsById(productsNewIds)
  },
  async getTrendingNowProducts(): Promise<Product[]> {
    return clientOnlyApi.findProductsById(trendingNowIds)
  },
  async getSaleProducts(): Promise<Product[]> {
    return products.filter(i => 'discount' in i)
  },
  async getCompleteLookProducts(id: Product['id']): Promise<Product[]> {
    const foundProdct = await clientOnlyApi.findProductById(id)
    if (!foundProdct) return []
    const color = foundProdct.colors[0]
    return products.filter(item => item.colors.includes(color))
  },
  
  // user favourite
  async addFavouriteProduct(productId: Product['id']): Promise<Product['id'][]> {
    const favouriteIds = localStorageApi.get('profile.favourite')
    favouriteIds.push(productId)
    localStorageApi.set('profile.favourite', favouriteIds)
    return localStorageApi.get('profile.favourite')
  },
  async removeFavouriteProduct(productId: Product['id']): Promise<Product['id'][]> {
    const favouriteIds = localStorageApi.get('profile.favourite')
    const newFavourite = favouriteIds.filter(i => i !== productId)
    localStorageApi.set('profile.favourite', newFavourite)
    return newFavourite
  },
  async getFavouriteProductsIds(): Promise<Product['id'][]> {
    return localStorageApi.get('profile.favourite')
  },
  async getFavouriteProducts(): Promise<Product[]> {
    return clientOnlyApi.findProductsById(localStorageApi.get('profile.favourite'))
  },
  async deleteFavouriteProducts(): Promise<void> {
    localStorageApi.set('profile.favourite', [])
  },

  // user reviently viewed
  async pushRecientlyViewedProdcts(productId: Product['id']): Promise<void> {
    const recientlyViewedIds = localStorageApi.get('profile.recientlyViewed')
    if (recientlyViewedIds.length >= RECIENTLY_VIEWED_MAX_SIZE) {
      recientlyViewedIds.unshift()
    }
    recientlyViewedIds.push(productId)
    localStorageApi.set('profile.recientlyViewed', recientlyViewedIds)
  },
  async getRecientlyViewedProdctsIds(): Promise<Product['id'][]> {
    return localStorageApi.get('profile.recientlyViewed')
  },
  async getRecientlyViewedProdcts(): Promise<Product[]> {
    return clientOnlyApi.findProductsById(localStorageApi.get('profile.recientlyViewed'))
  },
  async deleteRecientlyViewedProdcts(): Promise<void> {
    localStorageApi.set('profile.recientlyViewed', [])
  },

  // user recomendations
  async getUserRecomendedProducts(): Promise<Product[]> {
    const account = localStorageApi.get('profile.account')
    if (!account) return products.slice(0, 10)

    const favouriteIds = localStorageApi.get('profile.favourite')
    if (favouriteIds.length === 0) return products.slice(0, 10)
    const recomendedIds = favouriteIds.map(id => id + 1)
    
    const recomendedProducts = await clientOnlyApi.findProductsById(recomendedIds)
    return recomendedProducts
  },

  // collections
  async getCollections(): Promise<Collection[]> {
    return collections
  },
  
  // product reviews
  async findReviewById(id: ProductReview['id']): Promise<ProductReview | null> {
    return productReviews.find(item => item.id === id) || null
  },
  async findReviewsById(ids: ProductReview['id'][]): Promise<ProductReview[]> {
    return productReviews.filter(item => ids.includes(item.id))
  },

  async getProductReviews(productId: Product['id']): Promise<ProductReview[]> {
    return productReviews.filter(item => item.productId === productId)
  },
  async getUserProductReviews(userId: User['id']): Promise<ProductReview[]> {
    return productReviews.filter(item => item.userId === userId)
  },
  async leaveProductReview(productReview: Omit<ProductReview, 'id'>): Promise<ProductReview> {
    const storageProductReviews = localStorageApi.get('productReviews')
    let lastId = localStorageApi.get('productReviews.lastId')
    
    const newProductReview = {
      id: ++lastId,
      ...productReview,
    }
    // productReviews.push(newProductReview)
    storageProductReviews.push(newProductReview)
    localStorageApi.set('productReviews', storageProductReviews)
    localStorageApi.set('productReviews.lastId', lastId)
    return newProductReview
  },

  // product reviews likes & dislikes
  async toggleBlogPostLike(reviewId: ProductReview['id']): Promise<true | false> {
    // doNothing()
    return true
  },
  async toggleBlogPostDislike(reviewId: ProductReview['id']): Promise<true | false> {
    // doNothing()
    return true
  },
  

  // blog posts
  async getBlogPosts(count?: number): Promise<BlogPost[]> {
    return blogPosts.slice(0, count)
  },
  async findBlogPostById(id: BlogPost['id']): Promise<BlogPost | null> {
    return blogPosts.find(item => item.id === id) || null
  },
  async findBlogPostsById(ids: BlogPost['id'][]): Promise<BlogPost[]> {
    return blogPosts.filter(item => ids.includes(item.id))
  },
  async getBlogPostsByOrder(from: number, to: number): Promise<BlogPost[]> {
    return blogPosts.slice(from, to)
  },
  async getRelatedBlogPosts(id: BlogPost['id'], count?: number): Promise<BlogPost[]> {
    const foundBlogPost = await clientOnlyApi.findBlogPostById(id)
    if (!foundBlogPost) return []
    const category = foundBlogPost.category[0]
    const sameCategory = blogPosts.filter(item => item.category.includes(category))
    return count ? sameCategory.slice(0, count) : sameCategory
  },

  // blog posts' comments
  async getBlogPostComments(count?: number): Promise<BlogPostComment[]> {
    return count ? blogPostComments.slice(0, count) : blogPostComments
  },
  async findBlogPostCommentById(id: BlogPostComment['id']): Promise<BlogPostComment | null> {
    return blogPostComments.find(item => item.id === id) || null
  },
  async findBlogPostCommentsById(ids: BlogPostComment['id'][]): Promise<BlogPostComment[]> {
    return blogPostComments.filter(item => ids.includes(item.id))
  },
  async leaveBlogPostComment(blogPostComment: Omit<BlogPostComment, 'id'>): Promise<BlogPostComment> {
    const storageBlogPostComments = localStorageApi.get('blogPostComments')
    let lastId = localStorageApi.get('blogPostComments.lastId')
    
    const newBlogPostComment = {
      id: ++lastId,
      ...blogPostComment,
    }
    // blogPostComments.push(newBlogPostComment)
    storageBlogPostComments.push(newBlogPostComment)
    localStorageApi.set('blogPostComments', storageBlogPostComments)
    localStorageApi.set('blogPostComments.lastId', lastId)
    return newBlogPostComment
  },



  // differen forms 
  async leaveFeedback(feedback: ContactUsForm): Promise<true | false> {
    // doNothing()
    return true
  },
  async subscrbeEmailing(subscribeMailing: SubscribeMailing): Promise<true | false> {
    // doNothing()
    return true
  },
  async subscrbeEmailingForSale(email: SubscribeMailingForSale['email']): Promise<true | false> {
    // doNothing()
    return true
  },


  // profile
  async getUserBio(): Promise<UserBio> {
    return localStorageApi.get('profile.userBio')
  },
  async updateUserBio(newUserBioData: Partial<UserBio>): Promise<UserBio> {
    const userBio = localStorageApi.get('profile.userBio')
    const updatedUserBio = Object.assign(userBio, newUserBioData)
    localStorageApi.set('profile.userBio', updatedUserBio)
    return updatedUserBio
  },

  // profile orders
  async getOrders(): Promise<Order[]> {
    const account = localStorageApi.get('profile.account')
    if (!account) return []
    const userId = account.id
    return orders.filter(i => i.userId === userId)  
  },
  async makeOrder(order: Omit<Order, 'id'>): Promise<Order | null> {
    const storageOrders = localStorageApi.get('orders')
    const nextId = getNextOrderId()
    const newOrder = {
      id: nextId,
      ...order
    }
    orders.push(newOrder)
    storageOrders.push(newOrder)
    localStorageApi.set('orders', storageOrders)
    return newOrder
  },
  async getOrderTracking(orderId: Order['id']): Promise<Order['tracking'] | null> {
    const foundOrder = orders.find(i => i.id === orderId)
    if (!foundOrder) return null
    return foundOrder.tracking
  },
  
  // offline stores
  async getOfflineStores(): Promise<OfflineStore[]> {
    return offlineStores
  },


  // auth
  async updateAccount(newAccountData: Partial<Account> & {id: Account['id']}): Promise<Account> {
    let accounts = localStorageApi.get('auth.accounts')
    let account = localStorageApi.get('profile.account') as Account
    const {
      id,
      fullname,
      email,
      password,
    } = newAccountData

    const updatedAccount: Account = {
      id,
      fullname: fullname || account.fullname,
      email: email || account.email,
      password: password || account.password,
    }

    accounts = accounts.filter(acc => acc.id !== id ) as Account[]
    accounts.push(updatedAccount)
    localStorageApi.set('auth.accounts', accounts)
    localStorageApi.set('profile.account', updatedAccount)
    return updatedAccount
  },
  async signup(email: string, password: string, fullname: string): Promise<Account | null> {
    const accounts = localStorageApi.get('auth.accounts')
    if (accounts.find(acc => acc.email === email) ) return null

    // new public user
    const newUser = await clientOnlyApi.createUser(fullname)

    // new account
    const newAccount: Account = {
      id: newUser.id,
      email, 
      fullname, 
      password
    }
    accounts.push(newAccount)
    localStorageApi.set('auth.accounts', accounts)
    localStorageApi.set('profile.account', newAccount)

    await clientOnlyApi.updateUserBio({
      password,
      firstName: fullname.split(' ')[0],
      lastName: fullname.split(' ')[1],
      email,
    })
    return newAccount
  },
  async signin(email: string, password: string): Promise<Account | null> {
    const accounts = localStorageApi.get('auth.accounts')
    const foundAccount = accounts.find(acc => acc.email === email)
    if (!foundAccount || foundAccount.password !== password) return null
    return foundAccount
  },
  async signout(): Promise<boolean> {
    localStorageApi.set('profile.account', null)
    return true
  },
  async deleteAccount(email: string, password: string): Promise<boolean> {
    const accounts = localStorageApi.get('auth.accounts')
    const foundAccount = accounts.find(acc => acc.email === email)
    if (!foundAccount || foundAccount.password !== password) return false
    
    const updatedAccounts = accounts.filter(acc => acc !== foundAccount)
    localStorageApi.set('auth.accounts', updatedAccounts)
    clearCurrentUserProfile()
    return true
  },
}


export default clientOnlyApi


/*
  localStorage:
  profile.favourite
  profile.recientlyViewed
  profile.orders
  profile.bio


  auth.account
  auth.delete
  auth.signin
  auth.signup

  ?comments
  ?reviews
  ?localStorage.Installation

*/ 