<script setup lang="ts">
import ProductsGrid from '~/components/sections/productsGrid.vue'
import SubscribeMailing from '~/components/sections/SubscribeMailing.vue'


</script>

<template>
  <div class="products-page">
    <ProductsGrid></ProductsGrid>
    <SubscribeMailing class="section"></SubscribeMailing>
  </div>
</template>

<style scoped>
@import '~css/consts';


.products-page {
}

.section {
  margin-bottom: 18rem;
}

</style>