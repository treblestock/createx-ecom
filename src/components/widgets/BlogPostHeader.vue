<script setup lang="ts">
import type { DateRecord, commmentId } from '~/types';
import { dateToHumanCase } from '~/utils'
import IconChat from '~/assets/img/icons/decor/Chat.svg'
import Socials from '~/components/features/Socials.vue'



const props = defineProps<{
  category: string[]
  date: DateRecord
  commentsIds: commmentId[]
  title: string
}>()



</script>

<template>
  <div class="header">
    <div class="title h1">{{ title }}</div>
    <div class="header-row">
      <div class="labels">
        <div class="test_s">{{ category.join(`, `) }}</div>
        <div class="test_s">{{ dateToHumanCase(date, 'long') }}</div>
        <AppLink class="test_s with-icon link-idle"
          to="#comments"
        >
          <IconChat></IconChat>
          {{ commentsIds.length }} comment(-s)
        </AppLink>
      </div>

      <Socials class="social-share"></Socials>
    </div>
  </div>

</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';

.header {
  padding: 3.2rem 0;
}

.title {
  margin-bottom: 3.2rem;
}
.header-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  column-gap: 3rem;
  row-gap: 2rem;
}
.social-share {
}

.labels {
  flex: 1 1 40rem;

  margin-bottom: .8rem;

  display: flex;
  flex-wrap: wrap;
  column-gap: 2.4rem;
  row-gap: 1rem;


  color: $color-gray-700;

  @mixin slashBetween 80%, $color-text, 1.2rem; 
}
.with-icon {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
</style>