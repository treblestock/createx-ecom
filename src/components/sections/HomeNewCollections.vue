<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '~/api'
import { type Product } from '~/types'

import Slider from '~/components/features/Slider.vue'
import ProductCard from '~/components/features/ProductCard.vue'


// products
const products = ref<Product[]>([])
onMounted(async () => {
  const data = await api.getProducts(8)
  products.value = data
})








</script>

<template>
  <section class="section">
    <div class="container">
      <Slider class="slider"
        title="Trending now"
        isPaginationHidden
      >
        <ProductCard class="product-card"
          v-for="product, ind in products" :key="+product.id + ind" 
          :="product"
          :img="product.imgs[0]"
        ></ProductCard>
      </Slider>

      <AppLinkBtn class="link"
        outlined
        size="l"
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
  display: flex;
  gap: 3rem;
}
.slider {

}
.title {
}

.product-card {
}

.link {
  display: block;
  margin: 8rem auto 0;
}


</style>