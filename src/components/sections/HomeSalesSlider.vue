<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '~/api'
import { type Product } from '~/types'

import Slider from '~/components/features/Slider.vue'
import ProductCard from '~/components/features/ProductCard.vue'


// products
const products = useFetchItems(() => api.getProducts(8))







</script>

<template>
  <section class="section">
    <div class="container">
      <Slider class="slider"
        title="Sale up to 70%"
        isPaginationHidden
      >
        <ProductCard class="product-card"
          v-for="product in products" :key="product.id" 
          :="product"
          :img="product.imgs[0]"
        ></ProductCard>
      </Slider>

      <AppLinkBtn class="link"
        outlined
        size="l"
        :to="{
          name: 'products'
        }"
      >
        Explore top sales
      </AppLinkBtn>
    </div>
  </section>
  
</template>

<style scoped>
@import '~css/consts';


.section {
  margin-bottom: 18rem;
}
.container {
  
}
.slider {
  
}
.title {
}

.product-card {
  z-index: 1;
}

.link {
  display: block;
  width: max-content;
  margin: 8rem auto 0;
}


</style>