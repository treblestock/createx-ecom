<script setup lang="ts">
import type { ProductColor } from '~/types'

const props = defineProps<{
  color: ProductColor
}>()

</script>

<template>
  <div class="color-icon">
    <div class="circle"></div>
  </div>
  
</template>

<style scoped>
@import '~css/consts';
.color-icon {
  display: inline-block;
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.4rem;

  border-radius: $radius;
}

.circle {
  width: 1.6rem;
  height: 1.6rem;
  color: $color-green; /* todo: dynamic color */
}
</style>