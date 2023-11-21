import { defineStore } from "pinia"
import type { Product } from "~/types"

export default defineStore('profile', {
  state: () => ({
    
  }),
  getters: {
    
  },
  actions: {
    async toggleFavouriteProducts(id: number) {
      console.log('add fovourite')
    }
  },
})