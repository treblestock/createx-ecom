<script setup lang="ts">
import {computed} from 'vue'

// @ts-ignore
const props = withDefaults(defineProps<{
  src?: string,
  public?: boolean 
}>(), {
  src: 'test.jpg'
})


const ASSETS_IMG_PATH = '../../assets/img/'
const PUBLIC_IMG_PATH = '../../public/img/'

const imgUrl = computed(() => {
  const isStaticPath = props.src.startsWith(import.meta.env.BASE_URL) 
  if (isStaticPath) return props.src
  
  return props.public 
      ? new URL(`${PUBLIC_IMG_PATH + props.src}`, import.meta.url).href
      : new URL(`${ASSETS_IMG_PATH + props.src}`, import.meta.url).href
})

</script>

<template>
  <img :src="imgUrl" alt="img">
</template>

<style scoped>
@import '~/assets/css/consts';
@import '~/assets/css/utils';

</style>