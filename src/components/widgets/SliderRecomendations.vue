<script setup lang="ts">
import Slider from '~/components/widgets/Slider.vue'
import ProductCard from '~/components/widgets/ProductCard.vue'

//<!-- todo: stub
const { data: recomendedProducts } = useFetch(api.getProducts, []) 


</script>

<template>
  <Slider
    title="You may be interested in"
    isPaginationHidden
  >
    <ProductCard class="product-card"
      v-for="product in recomendedProducts" :key="product.id" :="product"
    ></ProductCard>
  </Slider>
</template>

<style scoped>
@import "~css/consts";


</style>