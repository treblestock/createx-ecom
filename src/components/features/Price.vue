<script setup lang="ts">

// @ts-ignore
const props = defineProps<{
  oldPrice?: number
}>()

</script>

<template>
  <div class="price">
    <span class="new-price h4"
      :class="oldPrice ? '_red' : ''"
    >
      $<slot></slot>.00
    </span>
    <span v-if="oldPrice" class="old-price text_l">
      ${{ oldPrice }}.00
    </span>
  </div>
</template>

<style scoped>
@import '~/assets/css/consts';
@import '~/assets/css/global';

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