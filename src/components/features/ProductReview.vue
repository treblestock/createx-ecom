<script setup lang="ts">
import type { Rating, DateRecord } from '~/types'
import RatingComponent from './Rating.vue'

import IconReply from '~/assets/img/icons/decor/share-arrow.svg'
import IconLike from '~/assets/img/icons/decor/like.svg'
import IconDislike from '~/assets/img/icons/decor/dislike.svg'

import { dateToHumanCase } from '~/utils'


// defineProps<ProductReview>
const props = defineProps<{
  id: number
  productId: number
  userId: number
  date: DateRecord
  rating: Rating
  comment: string
  likes: number
  dislikes: number
}>()
const { data: reviewerName} = useFetch(async () => {
  return (await api.findUser(props.userId)).fullName
}, '')

</script>

<template>
  <div class="review">
    <div class="left">
      <div class="reviewer-name text_xlb">{{ reviewerName }}</div>
      <div class="review-date">{{ dateToHumanCase(date) }}</div>
      <RatingComponent class="review-rating"
        :rating="rating"
      ></RatingComponent>
    </div>
    <div class="right">
      <div class="comment">{{ comment }}</div>
      <div class="row">
        <div class="reply">
          <IconReply class="reply-icon"></IconReply>
          Reply
        </div>

        <div class="like-toolbar">
          <button class="_transparent like">
            <IconLike class="like-icon"></IconLike>
            {{ likes }}
          </button>

          <button class="_transparent dislike">
            <IconDislike class="dislike-icon"></IconDislike>
            {{ dislikes }}
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';

.review {
  display: flex;
  gap: 3rem;

  padding: 3.2rem 0;
}
.left {
  flex: 0 0 15rem;
  justify-content: start;
}
.reviewer-name {
  margin-bottom: 1rem;

  color: $color-gray-900;
}
.review-date {
  color: $color-gray-600;

  margin-bottom: 1.6rem;
}
.review-rating {

}

.right {
}
.comment {
  margin-bottom: 1.6rem;

  color: $color-gray-800;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.reply {
  display: flex;
  align-items: center;
  gap: 1rem;

  color: $color-gray-800;
  cursor: pointer;
}
.reply-icon {
  color: $color-gray-700;
}
.like-toolbar {
  display: flex;
  gap: 1.6rem;
}

._transparent {
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0;
  color: $color-gray-700;
  font-weight: 400;

  font-size: 1.8rem;
  line-height: 0;

  &:hover {
    color: $color-green;
  }
}
.like-icon {
  color: $color-green-light;
}
.dislike {
}
.dislike-icon {
  color: $color-red;
}


</style>