<script setup lang="ts">
import ProductReview from '~/components/widgets/ProductReview.vue'


import useStoreProductReviews from '~/stores/productReviews'
const productReviewsStore = useStoreProductReviews()


const reviews = computed(() => productReviewsStore.reviews.slice(0, 6))


</script>

<template>
  <div class="reviews-page">
    <section class="reviews">
      <div class="reviews-header">
        <h1 class="h1">Wishlist</h1>
        <Btn class="_transparent _with-icon _delete">
          <IconDelete class="icon-delete"></IconDelete>
          Delete all
        </Btn>
      </div>

      <div class="product-cards">
        <ProductReview class="product-card"
          v-for="product in reviews" :key="product.id" 
          :="product"
        ></ProductReview>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import '~css/consts';

.reviews-page  {
  max-width: 81rem;
}

.reviews-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;

  margin-bottom: 4rem;
}

._delete {
  color: $color-red;
}
.icon-delete {
}
.product-cards {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.product-card {
  padding: 3rem 0;

  border-top: 1px solid $color-gray-300;
}

</style>