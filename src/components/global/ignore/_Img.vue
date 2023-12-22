<script setup lang="ts">
import {computed} from 'vue'

const props = withDefaults(defineProps<{
  src?: string,
}>(), {
  src: 'test.jpg'
})




const ASSETS_IMG_PATH = '../../assets/img/'
// // const PUBLIC_IMG_PATH = import.meta.env.BASE_URL + '/public'
// const PUBLIC_IMG_PATH = '../../public/img/'

// const imgUrl = computed(() => {
//   console.log(import.meta.url)
//   const isStaticPath = props.src.startsWith(import.meta.env.BASE_URL) 
//   if (isStaticPath) return props.src
  
//   return props.public 
//       ? new URL(`${PUBLIC_IMG_PATH + props.src}`, import.meta.url).href
//       : new URL(`${ASSETS_IMG_PATH + props.src}`, import.meta.url).href
// })


// const imgUrl = import.meta.env.BASE_URL + props.src


// const assetsPrefix = import.meta.env.MODE === 'development'
//   ? 'src/assets' : 'assets'


// const imgUrl = props.src.startsWith(import.meta.env.BASE_URL + assetsPrefix) 
//   ? props.src
//   : import.meta.env.BASE_URL + 'img' + props.src

  // : props.src.startsWith('/') 
  //   ? '/img' + props.src
  //   : new URL(ASSETS_IMG_PATH + props.src, import.meta.url).href






</script>

<template>
  <img :src="props.src" alt="img">
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';

</style>