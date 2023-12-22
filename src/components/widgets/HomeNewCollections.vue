<script setup lang="ts">
import Slider from '~/components/widgets/Slider.vue'
import ProductCard from '~/components/widgets/ProductCard.vue'


// products
// const {data: products} = useFetch(api.getProductsNew, [])
import useStoreProducts from '~/stores/products'
const productsStore = useStoreProducts()
const products = computed(() => productsStore.productsNew)






</script>

<template>
  <div class="wrapper">
    <Slider class="slider"
      title="Trending now"
      isArrowsHidden
    >
      <template #header>
        <div class="header-content-wrapper">
          <h2 class="h1">New</h2>
          <div class="description text-l">Check out our latest arrivals for the upcoming season</div>
          <AppLink class="link-underlined text-l"
            :to="{name: 'products'}"
          >See collection here</AppLink>
        </div>
      </template>
      <template #default>
        <ProductCard class="product-card size-s"
          v-for="product in products" :key="product.id" 
          :="product"
          :img="product.imgs[0]"
        ></ProductCard>
      </template>
    </Slider>
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
  text-align: center;
}

.header-content-wrapper {
  flex: 0 0 100%;
  text-align: center;
}
.h1 {
  margin-bottom: 2.4rem;
}
.description {
  color: $color-gray-700;
}
.link-underlined {
}


.product-card {
  z-index: 1;
}



</style>