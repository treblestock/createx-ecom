<script setup lang="ts">


</script>

<template>
  <span class="label">
    <span class="text_b">
      -<slot></slot>%
    </span>
  </span>
  
</template>

<style scoped>
@import '~css/consts';
.label {
  display: inline-block;

  border-radius: $radius;
  padding: .4rem .8rem;
  background: $color-red;

  & .text_b {
    line-height: 0;
    color: $color-white;
  }
}


</style>