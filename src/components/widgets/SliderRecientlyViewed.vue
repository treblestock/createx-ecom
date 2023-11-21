<script setup lang="ts">
import Slider from '~/components/widgets/Slider.vue'
import ProductCard from '~/components/widgets/ProductCard.vue'

//<!-- todo: stub
const { data: recientlyViewedProducts } = useFetch(api.getProducts, []) 


</script>

<template>
  <section class="section">
    <div class="container">
      <Slider
        title="Reciently viewed"
        isPaginationHidden
      >
        <ProductCard class="product-card"
          v-for="product in recientlyViewedProducts" :key="product.id" :="product"
        ></ProductCard>
      </Slider>
    </div>
  </section>
</template>

<style scoped>
@import "~css/consts";


</style>