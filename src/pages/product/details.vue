<script setup lang="ts">
import ProductDetails from '~/components/widgets/ProductDetails.vue'
import ProductCard from '~/components/widgets/ProductCard.vue'


const props = defineProps<{
  id: number
}>()


const { data: product } = useFetch(() => api.findProduct(props.id), null)


</script>

<template>
  <div class="product-details-page"
    v-if="product"
  >
    <ProductDetails class="details" 
      :="product"
    />
    <ProductCard class="product-card"
      :="product"
    ></ProductCard>
  </div>
</template>

<style scoped>
@import "~css/consts";

.product-details-page {
  display: flex;
  gap: 14.5rem;
  align-items: start;
}
.details {
  flex: 1 1 auto;
}
.product-card {
  flex: 0 0 auto;
}

</style>