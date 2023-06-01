<script setup lang="ts">

const props = defineProps<{
  discount?: number
  price: number
}>()

</script>

<template>
  <div class="price">
    <span class="new-price h4"
      :class="discount ? '_red' : ''"
    >
      ${{ discount ? (price * (1 - discount / 100) ).toFixed(2) : price.toFixed(2) }}
    </span>
    <span v-if="discount" class="old-price text_l">
      ${{ price }}.00
    </span>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/global';

.price {
}
.new-price {
  color: $color-gray-900;
}
.old-price {
  margin-left: 1.2rem;
  
  color: $color-gray-700;
  text-decoration: line-through;
}
._red {
  color: $color-red;
}

</style>