<script setup lang="ts">
import type { CartProductVariant } from '~/types'
import IconBankCart from '~/assets/img/icons/decor/card.svg'
import Price from '~/components/features/Price.vue'
import CartItemSmall from '~/components/features/CartItemSmall.vue'

import useStoreCart from '~/stores/cart'
const cartStore = useStoreCart()

const router = useRouter()

// fetch data
const subtotal = computed(() => cartStore.subtotal)
const distinctiveProductsCount = computed(() => cartStore.cartItemsCount)
const cartItemsData = computed(() => cartStore.cartItemsData)






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


function closePopup(event: Event) {
  const target = event.target as HTMLElement
  const isLinkClicked = target.closest('.link') ? true : false
  if (isLinkClicked) usePopupManager().closePopup('Cart')
}



</script>

<template>
    <form class="form"
      @submit.prevent=""
    >
      <div class="title h5">Your cart ({{ distinctiveProductsCount }})</div>

      <div class="middle">
        <div class="cart-items">
          <CartItemSmall class="cart-item"
            v-for="cartItemData in cartItemsData" :key="cartStore.getCartItemId(cartItemData)" 
            :="cartItemData"
            @setCount="(count) => setCount(cartItemData, count)"
            @deleteProduct="() => deleteProduct(cartItemData)"
            @click="closePopup"
          >
          </CartItemSmall>
        </div>
      </div>

      <div class="bottom">
        <div class="bottom-row">
          <div>subtotal</div>
          <Price class="price"
            :price="subtotal"
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
  width: 35rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top {
  flex: 0 0 auto;
}

.title {
  padding: 3.2rem 2.4rem;
  border-bottom: 1px solid $color-gray-300;
}

.middle {
  flex: 1 1 auto;

  position: relative;
}
.cart-items {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;

  padding: 2.4rem;
  overflow-y: auto;
}
.cart-item {
  padding: 3.2rem 0;

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }

  & + & {
    border-top: 1px solid $color-gray-300;
  }
}
.bottom {
  padding: 2rem 3.2rem 2.4rem;
  border-top: 1px solid $color-gray-300;

  flex: 0 0 10rem;
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