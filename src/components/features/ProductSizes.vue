<script setup lang="ts">
import { ref } from 'vue'
import type { ProductSize } from '~/types'


const props = defineProps<{
  sizes: ProductSize[]
}>()


const selectedSize = ref<string | number>(props.sizes[0])

</script>

<template>
  <div class="sizes">
    <RadioBtn class="size"
      v-for="size in sizes" :key="size"
      name="size"
      :value="size"
      v-model="selectedSize"
    >
      <span class="text_xs">{{ size }}</span>
    </RadioBtn>
  </div>
</template>

<style scoped>
@import '~css/consts';

.sizes {
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;

  :deep(.size) {
    padding: 0;
  }
}

.size {
  &:deep(.btn) {
    /* width: 2.4rem;
    height: 2.4rem; */
    min-width: 2.4rem;
    min-height: 2.4rem;
    padding: 0.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>