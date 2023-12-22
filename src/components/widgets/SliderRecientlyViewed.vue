<script setup lang="ts">
import Slider from '~/components/widgets/Slider.vue'
import ProductCard from '~/components/widgets/ProductCard.vue'

// const { data: recientlyViewedProducts } = useFetch(api.getProducts, []) 

import useStoreProfile from '~/stores/profile'
const profileStore = useStoreProfile()
const recientlyViewedProducts = computed(() => profileStore.recientlyViewedProducts)


</script>

<template>
  <Slider
    title="Reciently viewed"
    isPaginationHidden
  >
    <ProductCard class="product-card"
      v-for="product in recientlyViewedProducts" :key="product.id" 
      :="product"
    ></ProductCard>
  </Slider>
</template>

<style scoped>
@import "~css/consts";
.product-card {
  flex: 0 0 clamp(28rem, 100%, 39rem);
}

</style>