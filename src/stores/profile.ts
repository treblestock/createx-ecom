import { defineStore } from "pinia"
import type { Order, Product, UserBio } from "~/types"

// import ordersData from '~/assets/data/orders.json'
import useStoreProducts from '~/stores/products'
import useStoreAuth from '~/stores/auth'


export default defineStore('profile', () => {
  // user bio
  const userBio = ref<UserBio | null>(null)

  // orders
  const orders = ref<Order[]>([])
  function findOrder(id: string) {
    return orders.value.find(order => order.id === id)
  }

  // products
  const favouriteIds = ref<Set<Product['id']>>(new Set())
  const favouriteProducts = computed(
    () => useStoreProducts().findProductsByIds([...favouriteIds.value.values()])
  )
  const recientlyViewedIds = ref<Product['id'][]>([])
  const recientlyViewedProducts = computed(
    () => useStoreProducts().findProductsByIds(recientlyViewedIds.value)
  )
  
  async function fetchProfile() {
    api.getUserBio()
      .then(res => userBio.value = res)
    api.getFavouriteProductsIds()
      .then(res => favouriteIds.value = new Set(res))
    api.getRecientlyViewedProdctsIds()
      .then(res => recientlyViewedIds.value = res)
    api.getOrders()
      .then(res => orders.value = res)
  }
  
  // api
  async function updateUserBio(newUserBioData: Partial<UserBio>): Promise<UserBio> {
    const updatedUserBio = await api.updateUserBio(newUserBioData)
    userBio.value = updatedUserBio

    useStoreAuth().updateAccount({
      fullname: updatedUserBio.firstName + ' ' + updatedUserBio.lastName,
      email: updatedUserBio.email,
      password: newUserBioData.password,
    })
    return updatedUserBio
  }
  function isFavourite(productId: Product['id']): boolean {
    return favouriteIds.value.has(productId)
  }
  function toggleFavourite(productId: Product['id']) {
    if (favouriteIds.value.has(productId)) {
      favouriteIds.value.delete(productId) 
      api.removeFavouriteProduct(productId)
      return
    }
    favouriteIds.value.add(productId)
    api.addFavouriteProduct(productId)
  }
  async function deleteFavouriteProducts() {
    favouriteIds.value.clear()
    await api.deleteFavouriteProducts()
  }
  function pushRecientlyViewedProdcts(productId: Product['id']) {
    api.pushRecientlyViewedProdcts(productId)
    recientlyViewedIds.value.push(productId)
  }
  async function deleteRecientlyViewedProdcts() {
    recientlyViewedIds.value.length = 0
    await api.deleteRecientlyViewedProdcts()
  }


  // hooks
  async function onSignin() {
    fetchProfile()
  }
  async function onSignout() {
    userBio.value = null
    favouriteIds.value.clear()
    recientlyViewedIds.value = []
    orders.value = []
  }


  return {
    userBio,
    orders,
    findOrder,
    
    favouriteIds,
    favouriteProducts,
    
    recientlyViewedIds,
    recientlyViewedProducts,

    // api
    updateUserBio,
    isFavourite,
    toggleFavourite,
    deleteFavouriteProducts,
    pushRecientlyViewedProdcts,
    deleteRecientlyViewedProdcts,

    onSignin,
    onSignout,
  }
})