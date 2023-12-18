<script setup lang="ts">
import type { Product, ProductReview as ProductReviewType, Rating } from '~/types'
import ProductReviewStats from '~/components/widgets/ProductReviewStats.vue'
import ProductReview from '~/components/widgets/ProductReview.vue'



const props = defineProps<{
  rating: Rating
  reviewIds: Product['reviewsIds']
}>()


const { data: reviews } = useFetch(async () => {
  const allReviews = await api.getProductReviews(60)
  return props.reviewIds.map(id => allReviews[id + 1])
}, [])

const selectOptions = ['newest', 'oldest', 'good marks', 'bad marks', 'likes', 'dislikes']
const selectedSort = ref(selectOptions[0])

function leaveReview() {
  usePopupManager().showPopup('LeaveReview')
}

</script>

<template>
  <div class="review-section">
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
          :options="selectOptions"
        ></Select>
      </div>
    </div>

    <div class="reviews">
      <ProductReview class="review"
        v-for="review in reviews" :key="review.id" 
        :="review"
      ></ProductReview>
    </div>
  </div>  
</template>

<style scoped>
@import "~css/consts";
.review-section {

}
.review-stats {
  margin-bottom: 8rem;
}
.review-toolbar {
  display: flex;
  justify-content: space-between;

  margin-bottom: 6rem;
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


.reviews {}
.review {
  & + & {
    border-top: 1px solid $color-gray-300;
  }
}


</style>