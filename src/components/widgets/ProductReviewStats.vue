<script setup lang="ts">
import type { ProductReview, Rating } from '~/types'
import RatingComponent from '~/components/features/Rating.vue'


const props = defineProps<{
  rating: Rating
  reviews: ProductReview[]
}>()

const totalCount = computed(() => props.reviews.length)
const byRating = computed(() => {
  const res = {
    '5': 0,
    '4': 0,
    '3': 0,
    '2': 0,
    '1': 0,
  }
  for (const review of props.reviews) {
    res[review.rating]++
  }
  return res
})
const recomendCount = computed(() => byRating.value[4] + byRating.value[5])
const recomendPercent = computed(() => Math.floor(recomendCount.value / totalCount.value * 100) )

</script>

<template>
  <div class="review-stats">
    <div class="left">
        <div class="reviews-count h2">{{ totalCount }} reviews</div>
        <RatingComponent class="stars"
          :rating="rating"
        ></RatingComponent>
        <div class="recomendation-part text_xs">
          {{ recomendCount }} out of {{ totalCount }} ({{ recomendPercent }}%)
        </div>
        <div class="recomendation-text text_xs">Customers recommended this product</div>
    </div>
    <div class="right"></div>
  </div>
</template>

<style scoped>
@import "~css/consts";
.review-stats {
  display: flex;
  gap: 8rem;

}
.left {
  & > * {
    margin-bottom: 2rem;
  }
}
.reviews-count {
  color: $color-gray-900;
}
.stars {
}
.recomendation-part {
  color: $color-gray-700;
  margin-bottom: 1rem;
}
.recomendation-text {
  margin-bottom: 1rem;
  color: $color-gray-700;
}
.right {
}

</style>