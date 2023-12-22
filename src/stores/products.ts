import { defineStore } from "pinia"
import type { Product, ProductReview, User } from "~/types"

const productsNewIds = [21, 22, 32, 43, 17, 25, 11, 13, 18]
const trendingNowIds = [11, 32, 2, 13, 17, 24, 12, 38, 39]

import useStoreAuth from '~/stores/auth'

export default defineStore('products', () => {
  // const products = ref<Product[]>(productsMock as Product[])
  const {data: products} = useFetch(api.getProducts, [])
  

  function findProduct(id: number) {
    return products.value.find(product => product.id === id)
  }
  function findProductsByIds(ids: number[]) {
    return products.value.filter(product => ids.includes(product.id))
  }

  // slices
  const productsSale = computed(() => products.value.filter(prod => prod.discount))
  const productsNew = computed(() => findProductsByIds(productsNewIds))
  const productsTrending = computed(() => findProductsByIds(trendingNowIds))
  async function getSaleProducts(): Promise<Product[]> {
    return products.value.filter(prod => prod.discount)
  }
  var getCompleteLookProducts = api.getCompleteLookProducts

  // product reviews
  const currentProductId = ref<null | Product['id']>(null)
  const {
    data: currentProductReviews,
    refetch: refetchCurrentProductReviews,
  } = useFetch(async () => {
    const productId = currentProductId.value
    if (!productId) return [] as ProductReview[]
    return api.getProductReviews(productId)
  }, [] as ProductReview[])

  watch(currentProductId, refetchCurrentProductReviews)

  const userId = computed(() => useStoreAuth().account?.id)
  const {
    data: userReviews,
    refetch: refetchUserReviews,
  } = useFetch(async () => {
    if (!userId.value) return [] as ProductReview[]

    return api.getUserProductReviews(userId.value)
  }, [] as ProductReview[])
  watch(userId, refetchUserReviews)

  var getProductReviews = api.getProductReviews
  var getUserProductReviews = api.getUserProductReviews


  // async function getUserProductReviews(): <ProductReview[]> {
    // const account = useStoreAuth().account
    // if (!account) throw new Error(`products.ts: required to be signed in to get user's product reviews`)
    // const userId = account.id
    // return api.getUserProductReviews(userId)

  // }
  async function leaveProductReview(productReview: Omit<ProductReview, 'id' | 'userId'>): Promise<ProductReview> {
    const account = useStoreAuth().account
    if (!account) throw new Error(`products.ts: required to be signed in to leave review`)
    const userId = account.id
    const newProductReview = await api.leaveProductReview({
      userId,
      ...productReview,
    })
    currentProductReviews.value?.push(newProductReview)
    userReviews.value.push(newProductReview)
    return newProductReview
  }  
  



  // async function onRegister() {
  //   const fetchedProducts = await api.getProducts(50)
  //   products.value = fetchedProducts
  //   isLoaded.value = true
  // }


  return {
    products,
    findProduct,
    findProductsByIds,

    // slices
    productsSale,
    productsNew,
    productsTrending,
    getSaleProducts,
    getCompleteLookProducts,

    // api
    userReviews,
    currentProductId,
    currentProductReviews,
    getProductReviews,
    // getUserProductReviews,
    leaveProductReview,
    // onRegister,
  }
})