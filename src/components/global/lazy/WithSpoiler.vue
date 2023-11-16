<script setup lang="ts">
import Spoiler from '~/components/global/Spoiler.vue'
import useViewPort from '~/composables/useViewPort.js'


const {isMobile} = useViewPort()


</script>

<template>
  <Spoiler v-if="isMobile">
    <slot></slot>
  </Spoiler>
  <slot v-else></slot>
</template>

<style scoped>





</style>