import { defineStore } from "pinia"
import type { Product } from "~/types"
import productsMock from '~/assets/data/products.json'

export default defineStore('products', () => {
  const products = ref<Product[]>(productsMock as Product[])
  

  function findProduct(id: number) {
    return products.value[id - 1]
  }
  function findProducts(ids: number[]) {
    return ids.map(id => products.value[id - 1]) // products have incremental id starting from 1
  }

  // async function onRegister() {
  //   const fetchedProducts = await api.getProducts(50)
  //   products.value = fetchedProducts
  //   isLoaded.value = true
  // }


  return {
    products,
    findProduct,
    findProducts,
    // onRegister,
  }
})