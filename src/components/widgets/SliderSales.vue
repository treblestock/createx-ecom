<script setup lang="ts">
import Slider from '~/components/widgets/Slider.vue'
import ProductCard from '~/components/widgets/ProductCard.vue'


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

  /* solution to hide cards in slider horizontally,
  but not verticaly in order to let product card's popover be visible */
  overflow: hidden;
  padding-bottom: 1rem;
}
.slider {
  overflow: visible;
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