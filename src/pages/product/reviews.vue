<script setup lang="ts">
import ProductReviewsSectionHeader from '~/components/widgets/ProductReviewsSectionHeader.vue'
import ProductCard from '~/components/widgets/ProductCard.vue'
import type { ProductReview } from '~/types'
import ProductReviewComp from '~/components/widgets/ProductReview.vue'


const props = defineProps<{
  id: number
}>()


const { data: product } = useFetch(() => api.findProductById(props.id), null)
const { data: productReviews } = useFetch(() => api.getProductReviews(props.id), [])

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
  if (typeof selectedSort.value !== 'function') return productReviews.value
  return productReviews.value.toSorted(selectedSort.value)
})

</script>

<template>
  <div class="product-review-page"
    v-if="product"
  >
    <div class="right">
      <ProductCard class="product-card"
        :="product"
      ></ProductCard>
    </div>

    <div class="left">
      <ProductReviewsSectionHeader class="reviews-header"
        :rating="product.rating"
        :reviews="productReviews"
        v-model:selectedSort="selectedSort"
        :sortOptions="sorts"
      ></ProductReviewsSectionHeader>


      <div class="reviews">
        <ProductReviewComp class="review"
          v-for="review in sortedReviews" :key="review.id" 
          :="review"
        ></ProductReviewComp>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "~css/consts";

.product-review-page {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: var(--leng-120);
  /* align-items: start; */
}

.left {
  flex: 1 1 40rem;
}
.right {
  flex: 0 0 auto;
  margin: 0 auto;
}


.reviews-header {
  /* flex: 1 1 auto; */
}
.product-card {
  width: rl(280, 390);
}

.reviews {
  max-width: 81rem;
  margin-right: auto;
}
.review {
  flex: 1 1 auto;
  & + & {
    border-top: 1px solid $color-gray-300;
  }
}
</style>