<script setup lang="ts">
import type { ProductColor } from '~/types'
import { humanToKebab } from '~/utils'
const props = defineProps<{
  value: ProductColor
  name: string
}>()


const selectedColor = defineModel<Set<ProductColor> | ProductColor>()
const inputType = typeof selectedColor.value === 'string' ? 'radio' : 'checkbox'

</script>

<template>
  <label class="color">
    <input class="input _hidden-smart"
      :type="inputType"
      :name="name"
      v-model="selectedColor"
      :value="value"
    >
    <div class="big-circle">
      <div class="small-circle"
        :class="'_background-' + humanToKebab(value)"
      ></div>
    </div>
  </label>
</template>

<style scoped>
@import "~/assets/css/consts";

.product-colors {
  display: flex;  
  gap: 1.2rem;
  flex-wrap: wrap;
}

.color {
  position: relative;
}
.input {
  position: absolute;
/* animations */
  &:checked {
    & + .big-circle {
      box-shadow: 0 0 0 3px $color-green;
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