<script setup lang="ts">

</script>

<template>
  <button class="btn" type="button">
    <slot></slot>
  </button>  
</template>

<style scoped>
@import "~/assets/css/consts";

.btn {
  padding: .5rem 1rem;
  background-color: $primary;

  border-radius: .3rem;
  &:hover,
  &:active {
    background-color: $primary;
  }
}
</style>