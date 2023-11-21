<script setup lang="ts">
import type { ProductColor } from '~/types'
import ColorInput from './ColorInput.vue';

const props = defineProps<{
  colors: ProductColor[]
}>()


const selectedColor = defineModel<Set<ProductColor> | ProductColor>()

</script>

<template>
  <div class="product-colors">
    <ColorInput class="product-color"
      v-for="color in colors" :key="color"
      v-model="selectedColor"
      :value="color"
      name="productColors"
    >
    </ColorInput>
  </div>
</template>

<style scoped>
@import "~/assets/css/consts";

.product-colors {
  display: flex;  
  gap: 1.2rem;
  flex-wrap: wrap;
}

.product-color {
  position: relative;
}
.input {
  position: absolute;
/* animations */
  &:checked {
    & + .big-circle {
      box-shadow: 0 0 0 1px $color-green;
    }
  }
  &:disabled {
    opacity: 0.5;
  }
}
._l {
  font-size: 1.4rem;
  padding: 1rem 4rem;
}
._s {
  font-size: 1.2rem;
  padding: 0.9rem 2.4rem;
}

.big-circle {
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background: $color-white;
  box-shadow: 0 0 0 1px $color-gray-500;
}
.small-circle {
  width: 67%;
  height: 67%;

  /* ui */
  border-radius: 50%;
}


</style>