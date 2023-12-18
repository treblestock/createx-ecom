import type { BlogPost, BlogPostComment, Collection, Product, ProductReview, User,  } from "~/types"


const API_BASE = import.meta.env.VITE_SERVER_BASE_URL + '/api'


function saveAccessToken(token: string) {
  localStorage.setItem('accessToken', token)
}
function deleteAccessToken() {
  localStorage.removeItem('accessToken')
}
function addAccessToken() {
  const cachedAccessToken = localStorage.getItem('accessToken')
  if (!cachedAccessToken) throw new Error(`There is no cachced access token in the localStorage. Sign in or refresh token`)
  return `Bearer ${cachedAccessToken}`
}



const api = {
  // auth
  async signup(email: string, pass: string, fullname: string): Promise<string | {error: string}> {
    const resp = await fetch(API_BASE + '/auth/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        pass,
        fullname,
      })
    })
    if (resp.status === 200) {
      const token = await resp.json() 
      saveAccessToken(token)
      return token
    } 
    return {error: await resp.json() }
  },
  async signin(email: string, pass: string): Promise<string | {error: string}> {
    const resp = await fetch(API_BASE + '/auth/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        pass,
      })
    })

    if (resp.status === 200) {
      const token = await resp.json() 
      saveAccessToken(token)
      return token
    }
    return {error: await resp.json() }
  },
  async deleteAccount(): Promise<true | {error: string}> {
    const resp = await fetch(API_BASE + '/auth/delete-account', {
      method: 'delete',
      headers: {
        'authorization': addAccessToken(),
      }
    })
    if (resp.status === 200) {
      deleteAccessToken()
      return true
    } 
    return {error: await resp.json() }
  },
  // async refresh() {},


  async getUserProfile(): Promise<{email: string, fullname: string} | {error: string}> {
    const resp = await fetch(API_BASE + '/auth/profile', {
      headers: {
        'authorization': addAccessToken(),
      }
    })
    
    if (resp.status === 200) {
      return resp.json()
    }
    return {error: await resp.json() }
  },
  // test
  async _getUsers(): Promise<unknown[] | {error: string}> {
    const resp = await fetch(API_BASE + '/auth/users', {
      method: 'get',
      headers: {
        'authorization': addAccessToken()
      }
    })

    if (resp.status === 200) {
      const users = await resp.json()
      return users
    }
    return {error: await resp.json()}
  },




  // blog
  async getUsers(count: number = 4): Promise<User[]> {
    return (await import("../../public/data/users.json")).default.slice(0, count) as User[]
  },
  async findUser(id: User['id']): Promise<User> {
    return (await import("../../public/data/users.json")).default.find(user => user.id === id) as User
  },
  async getBlogPostComments(count: number = 4): Promise<BlogPostComment[]> {
    return (await import("../../public/data/blogPostComments.min.json")).default.slice(0, count) as BlogPostComment[]
  },
  async getBlogPosts(count: number = 4): Promise<BlogPost[]> {
    return (await import("../../public/data/blogPosts.min.json")).default.slice(0, count) as BlogPost[]
  },
  async getProductReviews(count: number = 4): Promise<ProductReview[]> {
    return (await import("../../public/data/productReviews.json")).default.slice(0, count) as ProductReview[]
  },
  async getProducts(count: number = 16): Promise<Product[]> {
    return (await import("../../public/data/products.json")).default.slice(0, count) as Product[]
  },
  async findProduct(id: Product['id']): Promise<Product | undefined> {
    return (await import("../../public/data/products.min.json")).default.find(p => p.id === id) as Product | undefined
  },
  async getCollections(count: number = 4): Promise<Collection[]> {
    return (await import("../../public/data/collections.json")).default.slice(0, count) as Collection[]
  },


  
}

export default api