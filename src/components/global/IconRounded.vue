<script setup lang="ts">
// import { computed } from 'vue'
import { assetsIcons } from '~/types'


const props = defineProps<{
  icon: keyof typeof assetsIcons
  // radius?: number
}>()


// const cssRadius = computed(() => props.radius || 3.2 + 'rem')


const ASSETS_IMG_PATH = '../../assets/img/'
// const PUBLIC_IMG_PATH = '../../public/img/'

const iconPath = assetsIcons[props.icon]
const url = new URL(`${ASSETS_IMG_PATH + iconPath}`, import.meta.url).href





</script>

<template>
  <span class="wrapper">
    <img :src="url" alt="" />
  </span>
  
</template>

<style scoped>
@import "~/assets/css/consts";

.wrapper {
  /* width: v-bind(cssRadius);
  height: v-bind(cssRadius); */

  width: 3.2rem;
  height: 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  /* ui */
  border-radius: 50%;
  background: $color-white;
  &:hover {
    background: $color-green;
  }
}
</style>