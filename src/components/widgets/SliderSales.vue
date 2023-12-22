<script setup lang="ts">
import Slider from '~/components/widgets/Slider.vue'
import ProductCard from '~/components/widgets/ProductCard.vue'


// products
import useStoreProducts from '~/stores/products'
const productsStore = useStoreProducts()

const products = computed(() => productsStore.productsSale)





</script>

<template>
  <div class="wrapper">
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
        name: 'products',
        query: {sale: 'y'},
      }"
    >
      Explore top sales
    </AppLinkBtn>
  </div>
  
</template>

<style scoped>
@import '~css/consts';


.wrapper {

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
/* 
.product-card {
  z-index: 1;
} */
.product-card {
  flex: 0 0 clamp(28rem, 100%, 39rem);
}

.link {
  display: block;
  width: max-content;
  margin: var(--leng-80) auto 0;
}


</style>