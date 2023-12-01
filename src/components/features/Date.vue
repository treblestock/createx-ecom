<script setup lang="ts">
import IconClock from '~/assets/img/icons/decor/Clock.svg'


import { dateToHumanCase } from '~/utils'


const props = defineProps<{
  date: string | Date
}>()



</script>

<template>
  <div class="date">
    <IconClock class="icon"></IconClock>
    <div class="words">{{ dateToHumanCase(date, 'long') }}</div>
  </div>
</template>

<style scoped>
@import '~css/consts';

.date {
  display: flex;
  align-items: center;
  gap: .7rem;

  color: $color-gray-700;

  font-size: 1.4rem;
}
.icon {
  /* width: 1.6rem;
  height: 1.6rem; */
  scale: .666;
}
.words {

}


</style>