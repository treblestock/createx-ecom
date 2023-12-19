import { defineStore } from "pinia"
import productReviews from '~/assets/data/productReviews.json'
import type { ProductReview } from "~/types"

export default defineStore('productReviews', () => {
  const reviews = ref<ProductReview[]>(productReviews as ProductReview[])
  const isLoaded = ref(false)
  

  function findProduct(id: number) {
    return reviews.value[id - 1]
  }
  function findProducts(ids: number[]) {
    return ids.map(id => reviews.value[id - 1]) // reviews have incremental id starting from 1
  }



  return {
    reviews,
    isLoaded,
    findProduct,
    findProducts,
  }
})