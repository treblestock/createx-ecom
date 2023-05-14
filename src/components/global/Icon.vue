<script setup lang="ts">
import { assetsIcons } from '~/types'


// @ts-ignore
const props = defineProps<{
  icon: keyof typeof assetsIcons // .png | .vue | .svg
}>()

const ASSETS_IMG_PATH = '../../assets/img/'
// const PUBLIC_IMG_PATH = '../../public/img/'

const iconPath = assetsIcons[props.icon]
const url = new URL(`${ASSETS_IMG_PATH + iconPath}`, import.meta.url).href





</script>

<template>
  <img :src="url" alt="" />
  
</template>

<style scoped>
@import "~/assets/css/consts";

.icon {
  
}
</style>