<script setup lang="ts">
import ProductCard from '~/components/features/ProductCard.vue'
import Slider from '~/components/features/Slider.vue'
import ProductWidget from '~/components/sections/ProductWidget.vue'
import { Product } from '~/types'
import SubscribeMailing from '~/components/sections/SubscribeMailing.vue'



const props = defineProps<{
  id: number
}>()


const products = useFetchItems<Product>(api.getProducts)

const product = computed(() => products.value.find(product => product.id === props.id) )


const interestingProducts = computed(() => products.value.slice(0, 7))
const recientlyViewedProducts = computed(() => products.value.slice(8))

</script>

<template>
  <div class="product-page"
    v-if="product && products"
  >
    <ProductWidget
      :="product || products[0]"
    ></ProductWidget>

    <section class="section">
      <div class="container">
        <Slider
          title="You may be interested in"
          isPaginationHidden
        >
          <ProductCard class="product-card"
            v-for="product in interestingProducts" :key="product.id" :="product"
          ></ProductCard>
        </Slider>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <Slider
          title="Recently viewed"
          isPaginationHidden
        >
          <ProductCard class="product-card"
            v-for="product in recientlyViewedProducts" :key="product.id" :="product"
          ></ProductCard>
        </Slider>
      </div>
    </section>


    <SubscribeMailing></SubscribeMailing>
  </div>
</template>

<style scoped>
@import '~css/consts';

.product-card {
  width: 28.5rem;
}

</style>