import { defineStore } from "pinia"
import type { CartProductVariant, ProductSize, Cart, ShippingMethod, CartRecord, Product } from '~/types'

import useStoreProducts from '~/stores/products'



type CartItemId = string
export default defineStore('cart', () => {

  const cart = ref<Map<CartItemId, CartRecord>>(new Map())

  const cartItemsData = computed(() => {
    if (!useStoreProducts().products.length) return []
    return fetchCartItemData([...cart.value.values()])
  })

  
  const cartItemsCount = computed(() => cart.value.size)
  const subtotal = computed(() => {
    const { subtotal } = calcCartTotal([...cart.value.values()], 'Store')
    return subtotal
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

  // calc arbitary calc
  var calcCartTotal = useCalcCartTotal
  
  function fetchCartItemData(cartItems: CartRecord[]) {
    const productsStore = useStoreProducts()    
    return cartItems.map(cartItem => {
      const product = productsStore.findProduct(cartItem.productId) as Product
      return {
        productId: product.id,
        name: product.name,
        price: product.price,
        discount: product.discount,
        img: product.imgs[0],
        color: cartItem.color,
        size: cartItem.size,
        count: cartItem.count
      }
    })
  }
  

  function onRegister() {
    setCount('1:S:Black', 1)
    setCount('2:S:Black', 1)
    setCount('3:S:Black', 1)
    setCount('4:S:Black', 1)
  }

  return {
    cart,
    cartItemsData,
    cartItemsCount,
    subtotal,

    getCartItemId,
    getProductVariant,
    setCount,
    getCount,

    calcCartTotal,
    fetchCartItemData,
    onRegister,
  }
})