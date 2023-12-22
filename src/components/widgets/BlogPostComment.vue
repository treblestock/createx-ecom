<script setup lang="ts">
import type { DateRecord, BlogPostId, Id, UserId } from '~/types'

import IconReply from '~/assets/img/icons/decor/share-arrow.svg'

import { dateToHumanCase } from '~/utils'


// defineProps<Productcomment>
const props = defineProps<{
  id: Id
  postId: BlogPostId
  userId: UserId
  date: DateRecord
  comment: string
}>()
const { data: autorName} = useFetch(async () => {
  return (await api.findUserById(props.userId))?.fullname || 'ups'
}, '')

</script>

<template>
  <div class="comment">
    <div class="left">
      <div class="commenter-name text-xl-b">{{ autorName }}</div>
      <div class="comment-date">{{ dateToHumanCase(date, 'long') }}</div>
    </div>
    <div class="right">
      <div class="comment-text">{{ comment }}</div>
      <div class="row">
        <div class="reply">
          <IconReply class="reply-icon"></IconReply>
          Reply
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';

.comment {
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;

  padding: 3.2rem 0;
}
.left {
  flex: 0 0 15rem;
  justify-content: start;
}
.commenter-name {
  margin-bottom: 1rem;

  color: $color-gray-900;
}
.comment-date {
  color: $color-gray-600;

  margin-bottom: 1.6rem;
}


.right {
  flex: 1 1 40rem;
}
.comment-text {
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

.like-icon {
  color: $color-green-light;
}
.dislike {
}
.dislike-icon {
  color: $color-red;
}


</style>