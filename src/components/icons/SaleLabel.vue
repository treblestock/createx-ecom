<script setup lang="ts">

// @ts-ignore
const props = defineProps<{
  discount: string | number
}>()

</script>

<template>
  <span class="label">
    <div class="text_b">
      -{{ discount }}%
    </div>
  </span>
  
</template>

<style scoped>
@import '~/assets/css/consts';
.label {
  display: inline-block;
  border-radius: $radius;
  padding: 0 .8rem;
  background: $color-red;

  .text_b {
    color: $color-white;
  }
}


</style>