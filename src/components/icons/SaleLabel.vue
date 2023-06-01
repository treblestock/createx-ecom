<script setup lang="ts">


</script>

<template>
  <span class="label">
    <div class="text_b">
      -<slot></slot>%
    </div>
  </span>
  
</template>

<style scoped>
@import '~css/consts';
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