<script setup lang="ts">
// @ts-ignore
const props = defineProps<{
  modelValue?: string
  name?: string
}>()
const emit = defineEmits([
  'update:modelValue'
])

</script>

<template>

  <input type="radio" class="input"
    :name="name || modelValue"
    :value="modelValue"
    @input="event => emit('update:modelValue', (event.target as HTMLInputElement).value)"
  >
</template>

<style scoped>
@import '~/assets/css/consts';
@import '~/assets/css/utils';


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