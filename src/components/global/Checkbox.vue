<script setup lang="ts">
const modelValue = defineModel<any>()


</script>

<template>
  <input type="checkbox" class="input"
    v-model="modelValue"
  >
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';


.input {
  width: 2rem;
  height: 2rem;
  position: relative; /* circles pos */

  /* remove default checkbox border */
  -moz-appearance:none;
  -webkit-appearance:none;
  -o-appearance:none;

  /* big circle */
  &:before {
    content: '';
    display: block;
    /* overlay original input */
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 97%; /* to avoid white spaces*/
    height: 97%;

    box-shadow: 0 0 0 1px $color-green;
    border-radius: $radius;
  }

  /* small circle */
  &::after {
    /* tick style */
    content: '\2713';
    padding-left: 3px;
    padding-bottom: 2px;
    color: $color-white;

    display: none; /* hide small circle when redio is inactive */ 
    /* overlay original input */
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    /* ui */
    background: $color-green;
    border-radius: $radius;
  }

  /* emulate &:active */
  &:checked {
    &:after {
      display: block;
    }
  }
}
</style>