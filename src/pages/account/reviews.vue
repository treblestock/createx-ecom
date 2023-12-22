<script setup lang="ts">
import type { ProductReview } from '~/types'
import ProductReviewComp from '~/components/widgets/ProductReview.vue'

import useStoreProducts from '~/stores/products'
const productsStore = useStoreProducts()

// const { data: reviews } = useFetch(() => api.getUserProductReviews(1), [])
const reviews = computed(() => productsStore.userReviews)
// <!--todo:

const sorts = {
  none: undefined,
  newest: (a: ProductReview, b: ProductReview) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  },
  oldest: (a: ProductReview, b: ProductReview) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  },
  likes: (a: ProductReview, b: ProductReview) => {
    return b.likes - a.likes
  },
  dislikes: (a: ProductReview, b: ProductReview) => {
    return b.dislikes - a.dislikes
  },
}
const selectedSort = ref(sorts.none)

const sortedReviews = computed<ProductReview[]>(() => {
  if (typeof selectedSort.value !== 'function') return reviews.value
  return reviews.value.toSorted(selectedSort.value)
})

</script>

<template>
  <main class="reviews-page">
    <section class="reviews">
      <div class="reviews-header">
        <h1 class="h1">My reviews</h1>
        <SelectGroup class="sort"
          v-model="selectedSort"
          :options="sorts"
        >
          <span class="sort-label">Sort by</span>
        </SelectGroup>
      </div>

      <div class="product-cards">
        <ProductReviewComp class="product-card"
          v-for="review in sortedReviews" :key="review.id" 
          :="review"
        ></ProductReviewComp>
      </div>
    </section>
  </main>
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

.sort {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.sort-label {
  text-wrap: nowrap;
  font-weight: 700;
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