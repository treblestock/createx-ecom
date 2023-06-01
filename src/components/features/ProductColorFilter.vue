<script setup lang="ts">
import type { ProductColor } from '~/types';
import ColorInput from './ColorInput.vue';

const props = defineProps<{
  possibleValues: ProductColor[]
}>()

const selectedColors = defineModel<Set<ProductColor>>({required: true})






</script>

<template>
  <div class="colors">
    <ColorInput class="product-color"
      v-for="value, filterName in possibleValues" :key="filterName"
      v-model="selectedColors"
      :value="value"
      name="productColors"
    ></ColorInput>
  </div>
</template>

<style scoped>
@import '~css/consts';


.colors {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.product-color {
}


</style>