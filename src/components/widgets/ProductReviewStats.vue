<script setup lang="ts">
import type { ProductReview, Rating } from '~/types'
import RatingComponent from '~/components/features/Rating.vue'
import RatingChart from '~/components/features/RatingChart.vue'


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
        <div class="recomendation-part text-s">
          {{ recomendCount }} out of {{ totalCount }} ({{ recomendPercent }}%)
        </div>
        <div class="recomendation-text text-s">Customers recommended this product</div>
    </div>

    <RatingChart class="right"
      :="byRating"
    ></RatingChart>
  </div>
</template>

<style scoped>
@import "~css/consts";
.review-stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--leng-80);

}
.left {
  & > * {
    margin-bottom: 2rem;
  }
}
.right {
  flex: 1 1 30rem;
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
  margin-bottom: 0;
  color: $color-gray-700;
}

</style>