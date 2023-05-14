<script setup lang="ts">
import RatingStar from '~/components/icons/RatingStar.vue'

// @ts-ignore
const props = withDefaults(defineProps<{
  rating?: 0 | 1 | 2 | 3 | 4 | 5 | 
    '0' | '1' | '2' | '3' | '4' | '5'
}>(), {
  rating: 0
})

</script>

<template>
  <template v-for="n in 5">
    <RatingStar 
      :class="n <= +rating ? '_active' : ''"
    ></RatingStar>
  </template>
</template>

<style scoped>
@import '~/assets/css/consts';



</style>