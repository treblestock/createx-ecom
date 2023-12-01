<script setup lang="ts">
import type { BlogPost } from '~/types'
import { dateToHumanCase } from '~/utils'

type Props = 'id' | 'category' | 'commentsIds' | 'title' | 'date' | 'description' | 'img'
const props = defineProps<Pick<BlogPost, Props>>()


</script>

<template>
  <div class="post">
    <div class="img">
      <Img :src="img"></Img>
    </div>

    <div class="post-body">
      <AppLink class="product-title text_xlb"
        :to="{name: `blogPost`, params: {id: id}}"
      >{{ title }}</AppLink>
      <div class="labels">
        <div class="test_s">{{ category[0] }}</div>
        <div class="test_s">{{ dateToHumanCase(date) }}</div>
        <div class="test_s">
          <Icon icon="Chat"></Icon>&#x2800;
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
  width: 60rem;

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

/* post-body */
.post-body {
  padding: 2.4rem;
  background: $color-white;
}
.product-title {
  display: block;
  color: $color-gray-900;
  margin-bottom: 1.2rem;
}
.labels {
  margin-bottom: 1.6rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;

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



</style>