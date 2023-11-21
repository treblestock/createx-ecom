<script setup lang="ts">
import Slider from '~/components/widgets/Slider.vue'
import ProductCard from '~/components/widgets/ProductCard.vue'

//<!-- todo: stub
const { data: recomendedProducts } = useFetch(api.getProducts, []) 


</script>

<template>
  <section class="section">
    <div class="container">
      <Slider
        title="You may be interested in"
        isPaginationHidden
      >
        <ProductCard class="product-card"
          v-for="product in recomendedProducts" :key="product.id" :="product"
        ></ProductCard>
      </Slider>
    </div>
  </section>
</template>

<style scoped>
@import "~css/consts";


</style>