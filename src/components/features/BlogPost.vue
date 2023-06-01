<script setup lang="ts">
import type { Id, BlogThemeCategory, DateRecord, } from '~/types'
import { dateToHumanCase } from '~/utils'


const props = defineProps<{
  id: Id
  img: string
  category: BlogThemeCategory
  date: DateRecord
  commentsNumber: number
  title: string
  description: string
}>()


</script>

<template>
  <div class="post">
    <div class="img">
      <Img :src="img"></Img>
    </div>

    <div class="post-body">
      <div class="product-title">{{ title }}</div>
      <div class="labels">
        <div class="label test_s">{{ category }} </div>
        <div class="label test_s">{{ dateToHumanCase(date) }} </div>
        <div class="label test_s">
          <Icon icon="Chat"></Icon>&#x2800;
          {{ commentsNumber }} comments
        </div>
      </div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';

.post {
  width: clamp(28rem, 100%, 39rem);
}


.post-body {
  padding: 2.4rem;
}
.product-title {
  margin-bottom: 1.2rem;
}
.labels {
  margin-bottom: 1.6rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;

  @mixin slashBetween 1.2rem;
}
.label {
}

.img {
  width: 60rem;
  height: 30rem;

  & img {
    object-fit: cover;
  }
}

</style>