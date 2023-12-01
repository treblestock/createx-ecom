<script setup lang="ts">
const modelValue = defineModel<string | number>()


</script>

<template>
  <textarea type="text" class="textarea"
    v-model="modelValue"
    :="$attrs"
  ></textarea>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';



.textarea {
  display: inline-block;
  height: 10rem;

  padding: 1rem 1.5rem;
  
  box-shadow: 0 0 0 1px $color-gray-400;
  &:focus-visible {
    box-shadow: 0 0 0 1px $color-green;
  }

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

  &:disabled {
    background: $color-gray-400;
  }
}
  
  



</style>