import { defineStore } from "pinia"
import type { Order, Product, ProductId } from "~/types"

import ordersData from '~/assets/data/orders.json'



export default defineStore('profile', () => {
  // user bio
  const email = ref('')
  const fullname = ref('')

  function fetchUserProfile() {
    email.value = 'annblack@gmail.com'
    fullname.value = 'Ann Black'
  }


  // orders
  const orders = ref<Order[]>(ordersData as Order[])
  function findOrder(id: string) {
    return orders.value.find(order => order.id === id)
  }

  // favourite products
  const favouriteProducts = ref<Set<ProductId>>(new Set() )
  
  



  return {
    email,
    fullname,
    fetchUserProfile,

    orders,
    findOrder,  
  }
})