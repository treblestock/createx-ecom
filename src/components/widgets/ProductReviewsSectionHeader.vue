<script setup lang="ts">
import type { ProductReview, Rating } from '~/types'
import ProductReviewStats from '~/components/widgets/ProductReviewStats.vue'



const props = defineProps<{
  rating: Rating
  reviews: ProductReview[]
  sortOptions: Record<string, any>
}>()


const selectedSort = defineModel<any>('selectedSort', {required: true})


function leaveReview() {
  usePopupManager().showPopup('LeaveReview')
}

</script>

<template>
  <header class="review-section-header">
    <ProductReviewStats class="review-stats"
      :rating="rating"
      :reviews="reviews"
    ></ProductReviewStats>

    <div class="review-toolbar">
      <Btn class="leave-review"
        @click="leaveReview"
      >Leave a review</Btn>
      <div class="review-sort">
        <span class="text-b">Sort by</span>
        <Select class="review-sort-select"
          v-model="selectedSort"
          :options="sortOptions"
        ></Select>
      </div>
    </div>
  </header>  
</template>

<style scoped>
@import "~css/consts";
.review-section-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.review-stats {
  margin-bottom: var(--leng-80);
}
.review-toolbar {
  display: flex;
  justify-content: space-between;

  margin-bottom: var(--leng-60);
}

.leave-review {
}
.review-sort {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.text-b {
  text-wrap: nowrap;
  color: $color-gray-900;
}
.review-sort-select {

}
</style>