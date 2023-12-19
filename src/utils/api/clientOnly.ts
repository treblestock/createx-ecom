import type { Product, BlogPost, BlogPostComment, ProductReview, Order, Collection, User, SubscribeMailing, ContactUsForm, SubscribeMailingForSale, UserBio, OfflineStore } from '~/types'
import blogPostCommentsMock from '~/assets/data/blogPostComments.json'
const blogPostComments = blogPostCommentsMock as BlogPostComment[]
import blogPostsMock from '~/assets/data/blogPosts.json'
const blogPosts = blogPostsMock as BlogPost[]
import collectionsMock from '~/assets/data/collections.json'
const collections = collectionsMock as Collection[]
import differentMock from '~/assets/data/different.json'
const different = differentMock
import ordersMock from '~/assets/data/orders.json'
const orders = ordersMock as Order[]
import productReviewsMock from '~/assets/data/productReviews.json'
const productReviews = productReviewsMock as ProductReview[]
import productsMock from '~/assets/data/products.json'
const products = productsMock as Product[]
import usersMock from '~/assets/data/users.json'
const users = usersMock as User[]
import offlineStoresMock from '~/assets/data/offlineStores.json'
const offlineStores = offlineStoresMock as OfflineStore[]


let productsNewIds = [21, 22, 32, 43, 17] 
let trendingNowIds = [11, 32, 2, 13, 17] 
let recientlyViewedIds = [12, 34, 1, 14, 18]
let RECIENTLY_VIEWED_MAX_SIZE = 20
let favouriteIds = [10, 36, 11, 34, 19]
let userBio = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  passNew: '',
  passConfirm: '',
  country: '',
  city: '',
  address: '',
  zipCode: '',
}


const clientOnlyApi = {
  // users
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
  async addFavouriteProduct(productId: Product['id']): Promise<Product['id']> {
    favouriteIds.push(productId)
    return productId
  },
  async removeFavouriteProduct(productId: Product['id']): Promise<Product['id']> {
    favouriteIds = favouriteIds.filter(i => i !== productId)
    return productId
  },
  async getFavouriteProducts(): Promise<Product[]> {
    return clientOnlyApi.findProductsById(favouriteIds)
  },

  // user reviently viewed
  async pushRecientlyViewedProdcts(productId: Product['id']): Promise<'push' | 'rewrite'> {
    let operationState = 'push'
    if (recientlyViewedIds.length >= RECIENTLY_VIEWED_MAX_SIZE) {
      operationState = 'rewrite'
      recientlyViewedIds.unshift()
    }
    recientlyViewedIds.push(productId)
    // @ts-ignore
    return operationState
  },
  async getRecientlyViewedProdcts(): Promise<Product[]> {
    return clientOnlyApi.findProductsById(recientlyViewedIds)
  },
  async deleteRecientlyViewedProdcts(): Promise<boolean> {
    recientlyViewedIds.length = 0
    return true
  },

  // user recomendations
  async getUserRecomendedProducts(userId: User['id']): Promise<Product[]> {
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
  async leaveProductReview(productReview: ProductReview): Promise<ProductReview | null> {
    productReviews.push(productReview)
    return productReview
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
    return count ? blogPosts.slice(0, count) : blogPosts
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
    return userBio
  },
  async updateUserBio(newUserBioData: Partial<UserBio>): Promise<UserBio> {
    Object.assign(userBio, newUserBioData)
    return userBio
  },

  // profile orders
  async getOrders(userId: User['id']): Promise<Order[]> {
    return orders.filter(i => i.userId === 1) // assume our user's id is 1
  },
  async makeOrder(order: Order): Promise<Order | null> {
    orders.push(order)
    return order
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
  async signup(email: string, fullname: string, password: string): Promise<boolean> {
    return true
  },
  async signin(email: string, password: string): Promise<boolean> {
    return true
  },
  async signout(): Promise<boolean> {
    return true
  },
  async deleteAccount(): Promise<boolean> {
    return true
  },
}


export default clientOnlyApi