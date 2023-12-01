<script setup lang="ts">
import { dateToHumanCase } from '~/utils'
import IconChat from '~/assets/img/icons/decor/Chat.svg'

const props = defineProps<{
  id: number
  img: string
  title: string
  date: string
  category: string[]
  description: string
  commentsIds: number[]
}>()


</script>

<template>
  <div class="post">
    <div class="img">
      <Img :src="img"></Img>
    </div>

    <div class="post-body">
      <div class="labels">
        <div class="test_s">{{ category[0] }}</div>
        <div class="test_s">{{ dateToHumanCase(date, 'long') }}</div>
        <div class="test_s with-icon">
          <IconChat></IconChat>
          {{ commentsIds.length }} comment(-s)
        </div>
      </div>
      <AppLink class="post-title text_xlb"
        :to="{name: 'blogPost', params: {id: id}}"
      >{{ title }}</AppLink>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';

$img-ratio: 50%; /* 600px / 300px */
.post {
  max-width: 81rem;
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
  padding-top: 1.6rem;
}
.labels {
  margin-bottom: .8rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;

  color: $color-gray-700;

  @mixin slashBetween 80%, $color-text, 1.2rem; 
}

.with-icon {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.post-title {
  display: block;
  color: $color-gray-900;
  margin-bottom: 1.2rem;
}


.description {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  color: $color-gray-800;

}

/* webkit */
@media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
  .description{ 
    white-space: initial;
    text-overflow: initial;

    display: -webkit-box;
    -weblit-line-clamp: 3;
    -weblit-box-orient: vertical;
  }
}





</style>