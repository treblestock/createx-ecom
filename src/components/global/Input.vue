<script setup lang="ts">
const modelValue = defineModel<string | number>()
</script>

<template>

  <input type="text" class="input"
    v-model="modelValue"
    :="$attrs"
  >
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';



.input {
  display: inline-block;

  padding: 1rem 1.5rem;
  box-shadow: 0 0 0 1px $color-green;

  border-radius: $radius;
  cursor: text;

  font-size: 1.6rem;
  line-height: 1.5;
  color: $color-green;

  &::placeholder {
    color: $color-gray-700;
    text-transform: lowercase;
  }

  &._s {
    padding: .9rem 1.2rem;

    /* text-xxxs */
    font-size: 1.2rem;
    line-height: 1.5;
  }
}
  
  



</style>