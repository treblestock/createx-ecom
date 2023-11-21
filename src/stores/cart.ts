import type { CartProductVariant, ProductSize } from '~/types'
import { defineStore } from "pinia"


import useStoreProducts from '~/stores/products'



type CartItemId = string
export default defineStore('cart', () => {

  const cart = ref<Map<CartItemId, CartProductVariant & {count: number}>>(new Map())
  const cartItemsCount = computed(() => cart.value.size)

  const subtotal = computed(() => {
    const productsStore = useStoreProducts()
    if (!productsStore.isLoaded) return 0

    let res = 0
    cart.value.forEach(cartItem => {
      const product = productsStore.findProduct(cartItem.productId)
      const actualPrice = product.price * (1 - (product.discount || 0) / 100 )
      res += actualPrice * cartItem.count 
    })
    return res
  })



  function getCartItemId(productVariant: CartProductVariant): CartItemId {
    return `${productVariant.productId}:${productVariant.size}:${productVariant.color}`
  }

  function getProductVariant(cartItemId: CartItemId): CartProductVariant {
    const [productId, productSize, productColor] = cartItemId.split(':')
    return {
      productId: +productId,
      size: productSize as ProductSize,
      color: productColor,
    }
  }

  function setCount(uniqueKey: CartItemId | CartProductVariant, count: number) {
    const cartItemId = typeof uniqueKey === 'string' ? uniqueKey : getCartItemId(uniqueKey)
    const item = typeof uniqueKey === 'string' 
      ? cart.value.get(uniqueKey) || getProductVariant(uniqueKey) 
      : uniqueKey
    
    if (count > 0) return cart.value.set(cartItemId, {...item, count})
    return cart.value.delete(cartItemId) // count === 0 => delete()
  }

  function getCount(uniqueKey: CartItemId | CartProductVariant): number {
    const cartItemId = typeof uniqueKey === 'string' ? uniqueKey : getCartItemId(uniqueKey)
    return cart.value.get(cartItemId)?.count || 0
  }

  function onRegister() {
    setCount('1:S:Black', 1)
  }

  return {
    cart,
    cartItemsCount,
    subtotal,

    getCartItemId,
    getProductVariant,
    setCount,
    getCount,
    onRegister,
  }
})