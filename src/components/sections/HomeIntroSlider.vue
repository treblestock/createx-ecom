<script setup lang="ts">
import { ref, onMounted } from 'vue'
import img from '~/assets/img/clothes/collections/intro.jpg'
import api from '~/api'
import { type Product } from '~/types'

import SliderFullscreen from '~/components/features/SliderFullscreen.vue'


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
      <SliderFullscreen class="slider">
        <img v-for="n in 4" :key="n"
          :src="img" alt=""
        >
      </SliderFullscreen>

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