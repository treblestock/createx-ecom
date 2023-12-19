<script setup lang="ts">
import { dateToHumanCase } from '~/utils'
import IconClock from '~/assets/img/icons/decor/Clock.svg'

const props = defineProps<{
  id: number
  img: string
  title: string
  date: string
}>()

const BASE_URL = import.meta.env.BASE_URL
</script>

<template>
  <div class="post">
    <div class="img">
      <img :src="BASE_URL + img">
    </div>

    <div class="post-body">
      <div class="date">
        <IconClock class="icon"></IconClock>
        {{ dateToHumanCase(date, 'long') }}
      </div>
      <AppLink class="title text-b"
        :to="{name: 'blogPost', params: {id: id}}"
      >{{ title }}</AppLink>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';

.post {
  display: flex;
  align-items: start;
  gap: 2rem;
}
.img {
  flex: 0 0 10rem;
  height: 10rem;
  
  position: relative;
  overflow: hidden;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  border-radius: $radius;
}
.post-body {
}
.date {
  vertical-align: middle;
  margin-bottom: 0.8rem;

  color: $color-gray-700;
}
.icon {
  display: inline;
  vertical-align: middle;
  scale: .6666;
}
.title {
  color: $color-gray-900;
}


</style>