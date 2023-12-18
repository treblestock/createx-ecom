<script setup lang="ts">
import ProductDetails from '~/components/widgets/ProductDetails.vue'
import ProductCard from '~/components/widgets/ProductCard.vue'


const props = defineProps<{
  id: number
}>()


const { data: product } = useFetch(() => api.findProductById(props.id), null)


</script>

<template>
  <div class="product-details-page"
    v-if="product"
  >
    <ProductCard class="product-card"
      :="product"
    ></ProductCard>
    <ProductDetails class="details" 
      :="product"
    />
  </div>
</template>

<style scoped>
@import "~css/consts";

.product-details-page {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  column-gap: var(--leng-120);
  align-items: start;
}
.details {
  flex: 1 0 40%;
}
.product-card {
  flex: 0 0 rl(280, 390);
  margin: 0 auto;
}

</style>