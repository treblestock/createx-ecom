<script setup lang="ts">
// @ts-ignore
const props = defineProps<{
  size?: 's' | 'l',
  outlined?: boolean
}>()
</script>

<template>
  <button class="btn" type="button"
    :class="[
      size ? 'btn_' + size : '',
      outlined ? 'btn_outlined' : ''
    ]"
  >
    <slot></slot>
  </button>  
</template>

<style scoped>
@import "~/assets/css/consts";

.btn {
  /* shape */
  background: $color-green;
  color: $color-white;
  border-radius: $radius;

  padding: 1.2rem 3.2rem;
  font-size: 1.4rem;

  font-weight: 700;
  line-height: $lh;

  /* animations */
  &:not(&:disabled) {
    
    &:hover,
    &:active,
    &._hover,
    &._active {
      background: $color-green-dark;
    }
  }
  &:disabled {
    opacity: 0.5;
  }
}
.btn_l {
  font-size: 1.4rem;
  padding: 1rem 4rem;
}
.btn_s {
  font-size: 1.2rem;
  padding: 0.9rem 2.4rem;
}

.btn_outlined {
  /* shape */
  color: $color-green;
  background: $color-white;
  box-shadow: 0 0 0 $border-w $color-green;

  /* animations */
  /* animations */
  &:not(&:disabled) {
    
    &:hover,
    &:active,
    &._hover,
    &._active {
      color: $color-white;
      background: $color-green-dark;
    }
  }
  &:disabled {
    opacity: 0.5;
  }
}



</style>