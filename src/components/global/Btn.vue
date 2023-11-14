<script setup lang="ts">
const props = defineProps<{
  size?: 's' | 'l',
  outlined?: boolean
}>()
</script>

<template>
  <button class="btn" type="button"
    :class="[
      size ? 'btn_' + size : '',
      outlined ? 'btn_outlined' : ''
    ]"
  >
    <slot></slot>
  </button>  
</template>

<style scoped>
@import "~/assets/css/consts";
@import "~/assets/css/shared/btn-ui";
</style>