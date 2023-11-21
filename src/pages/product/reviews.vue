<script setup lang="ts">
import ProductReviewsSection from '~/components/widgets/ProductReviewsSection.vue'
import ProductCard from '~/components/widgets/ProductCard.vue'


const props = defineProps<{
  id: number
}>()


const { data: product } = useFetch(() => api.findProduct(props.id), null)


</script>

<template>
  <div class="product-review-page"
    v-if="product"
  >
    <ProductReviewsSection class="review" 
      :rating="product.rating"
      :reviewIds="product.reviewsIds"
    />
    <ProductCard class="product-card"
      :="product"
    ></ProductCard>
  </div>
</template>

<style scoped>
@import "~css/consts";

.product-review-page {
  display: flex;
  gap: 14.5rem;
  align-items: start;
}
.review {
  flex: 1 1 auto;
}
.product-card {
  flex: 0 0 auto;
}

</style>