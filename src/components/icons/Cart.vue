<script setup lang="ts">
import IconCart from '~/assets/img/icons/decor/Cart.svg'

import useStoreCart from '~/stores/cart'
const cartStore = useStoreCart()

const cartItemsCount = computed(() => cartStore.cartItemsCount)



</script>

<template>
  <Btn class="cart _transparent"
    @click="$router.$showPopup('Cart')"
  >
    <IconCart class="icon"></IconCart>
    <div class="label text_xsb">
      {{ cartItemsCount }}
    </div>
  </Btn>
  
</template>

<style scoped>
@import '~css/consts';

.cart {
  padding: 0;

  display: flex;
  align-items: stretch;
  gap: 0.8rem;
  
  color: $color-gray-800 !important;
}
.icon {
  
}

.label {
  color: $color-white;
  background: $color-green-light;
}



</style>