<script setup lang="ts">
import type { Rating } from '~/types'
import RatingStar from '~/components/icons/RatingStar.vue'

const props = withDefaults(defineProps<{
  rating?: Rating | 0
}>(), {
  rating: 0
})

</script>

<template>
  <div>
    <RatingStar 
      v-for="n in 5"
      :class="n <= +rating ? '_active' : ''"
    ></RatingStar>
  </div>
</template>

<style scoped>
@import '~css/consts';



</style>