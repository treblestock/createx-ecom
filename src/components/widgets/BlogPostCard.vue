<script setup lang="ts">
import type { BlogPost } from '~/types'
import { dateToHumanCase } from '~/utils'
import IconChat from '~/assets/img/icons/decor/Chat.svg'

type Props = 'id' | 'category' | 'commentsIds' | 'title' | 'date' | 'description' | 'img'
const props = defineProps<Pick<BlogPost, Props>>()

const BASE_URL = import.meta.env.BASE_URL
</script>

<template>
  <div class="post">
    <div class="img">
      <img :src="BASE_URL + img">
    </div>

    <div class="post-body">
      <AppLink class="product-title text-xl-b"
        :to="{name: `blogPost`, params: {id: id}}"
      >{{ title }}</AppLink>
      <div class="labels mobile-scroll">
        <div class="test_s">{{ category[0] }}</div>
        <div class="test_s">{{ dateToHumanCase(date) }}</div>
        <div class="test_s _with-icon">
          <IconChat class="chat-icon"></IconChat>
          {{ commentsIds.length }} comments
        </div>
      </div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';

$img-ratio: 50%; /* 600px / 300px */
.post {
  min-width: 37rem;
  box-shadow: $shadow-card;
}

.img {
  width: 100%;

  height: 0;
  padding-top: $img-ratio;

  position: relative;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.chat-icon {
  display: inline;
}
/* post-body */
.post-body {
  padding: 2.4rem;
  background: $color-white;
}
.product-title {
  display: block;
  color: $color-gray-900;
  margin-bottom: 1.2rem;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.labels {
  margin-bottom: 1.6rem;

  display: flex;
  flex-wrap: wrap;
  column-gap: var(--leng-24);

  color: $color-gray-700;

  @mixin slashBetween 80%, $color-text, 1.2rem; 
}
.label {
}



.description {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  color: $color-gray-800;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm) {
  .description {
    white-space: normal;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    color: $color-gray-800;
  }
}

</style>