<script setup lang="ts">




</script>

<template>
  <nav class="nav">
    <slot></slot>
  </nav>
</template>

<style  scoped>
@import '~/assets/css/consts';
/* 
.nav {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));

  :slotted(& > *) {

    display: grid;
    place-content: center;

    padding: $nav-padding;
    border-left: 1px solid $grey;
    &:first-child {
      border: none;
    }
  }
} */


</style>