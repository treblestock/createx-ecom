<script setup lang="ts">
import { type SocialIcons } from '~/types'
import { socials as iconsData } from '~/public/data/different.json'

const props = withDefaults(defineProps<{
  theme?: 'dark' | 'light'
}>(), {
  theme: 'light'
})

</script>

<template>
  <div class="socials">
    <Icon class="icon"
      v-for="path in iconsData" :key="path"
      :icon="(path as SocialIcons)"
    ></Icon>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/global';

</style>