<script setup lang="ts">
import type { CartProductVariant } from '~/types';
import CartItem from '~/components/features/CartItem.vue'
import Price from '~/components/features/Price.vue'


import useStoreCart from '~/stores/cart'
const cartStore = useStoreCart()

const cartItemsData = computed(() => cartStore.cartItemsData)
const subtotal = computed(() => cartStore.subtotal)

function deleteProduct(uniqueKey: CartProductVariant) {
  cartStore.setCount(uniqueKey, 0)
}
function setCount(productVariant: CartProductVariant, count: number) {
  cartStore.setCount(productVariant, count)
}

function addFavourite(id: number) {
  
}

</script>

<template>
  <div class="cart-items">
    <CartItem class="item cart-item"
      v-for="cartItem in cartItemsData" :key="cartItem.productId" 
      :="cartItem"
      @setCount="(count) => setCount(cartItem, count)"
      @deleteProduct="() => deleteProduct(cartItem)"
    ></CartItem>
    <div class="item subtotal text_xlb">
      Subtotal: <Price class="price" :price="subtotal" ></Price>
    </div>
  </div>
</template>

<style scoped>
@import "~css/consts";

.cart-items {
}
.item {
  background: $color-gray-200;
  padding: 2rem 2.4rem;
  & + & {
    border-top: 1px solid $color-gray-300;
  }
}

.subtotal {
  text-align: right;
  color: $color-gray-900;
}
.price {
  display: inline;
  margin-left: 1rem;
}

</style>