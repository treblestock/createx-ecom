<script setup lang="ts">
import type { CartProductVariant } from '~/types'
import IconBankCart from '~/assets/img/icons/decor/card.svg'
import Price from '~/components/features/Price.vue'
import CartItemSmall from '~/components/features/CartItemSmall.vue'

import useStoreCart from '~/stores/cart'
const cartStore = useStoreCart()

import useStoreProducts from '~/stores/products'
const productsStore = useStoreProducts()

const router = useRouter()

// fetch data
const subTotal = computed(() => cartStore.subtotal)
const distinctiveProductsCount = computed(() => cartStore.cartItemsCount)


const cartItemsData = computed(() => {
  const cartItems = [...cartStore.cart.values()]
  
  if (!productsStore.isLoaded) return

  return cartItems.map(cartItem => {
    const product = productsStore.findProduct(cartItem.productId)
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
})






// form
function deleteProduct(uniqueKey: CartProductVariant) {
  cartStore.setCount(uniqueKey, 0)
}
function setCount(productVariant: CartProductVariant, count: number) {
  cartStore.setCount(productVariant, count)
}

function addFavourite(id: number) {
  
}

function redirect() {
  usePopupManager().closePopup('Cart')
  router.$navigate({name: 'checkout'})
}



</script>

<template>
    <form class="form"
      @submit.prevent=""
    >
      <div class="top">
        <div class="title h5">Your cart ({{ distinctiveProductsCount }})</div>
        <CartItemSmall class="cart-item"
          v-for="cartItemData in cartItemsData" :key="cartStore.getCartItemId(cartItemData)" 
          :="cartItemData"
          @setCount="(count) => setCount(cartItemData, count)"
          @deleteProduct="() => deleteProduct(cartItemData)"
        >
        </CartItemSmall>
      </div>
      <div class="bottom">
        <div class="bottom-row">
          <div>Subtotal</div>
          <Price class="price"
            :price="subTotal"
          ></Price>
        </div>
        <AppLinkBtn class="submit _with-icon"
          @click.prevent="redirect"
        >
          <IconBankCart></IconBankCart>
          Checkout
        </AppLinkBtn>
      </div>
      
    </form>
</template>

<style scoped>
@import "~css/consts";

.form {
  width: 30rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top {
  flex: 1 1 auto;
}
.title {
}
.cart-item {
  padding: 3.2rem 0;

  & + & {
    border-top: 1px solid $color-gray-300;
  }
}
.bottom {
  
}
.bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;
}
.price {
}
.submit {
}

</style>