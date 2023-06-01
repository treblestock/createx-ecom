<script setup lang="ts">

const props = defineProps<{
  value: any
  name: string
}>()

const modelValue = defineModel<any>()



</script>

<template>
  <input type="radio" class="input"
    v-model="modelValue"
    :value="value"
    :name="name"
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
    width: 100%;
    height: 100%;

    border-radius: 50%;
    box-shadow: 0 0 0 1px $color-green;
  }

  /* small circle */
  &::after {
    content: '';
    display: none; /* hide small circle when redio is inactive */ 
    /* overlay original input */
    z-index: 1;
    position: absolute;
    top: 25%;
    left: 25%;
    
    width: 50%;
    height: 50%;

    /* ui */
    border-radius: 50%;
    background: $color-green;
  }

  /* emulate &:active */
  &:checked {
    &:after {
      display: block;
    }
  }
}
</style>