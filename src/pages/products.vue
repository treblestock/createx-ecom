<script setup lang="ts">
import ProductsGrid from '~/components/widgets/ProductsGrid.vue'
import SubscribeMailing from '~/components/widgets/SubscribeMailing.vue'


</script>

<template>
  <div class="products-page">
    <ProductsGrid class="products-section"></ProductsGrid>
    <SubscribeMailing></SubscribeMailing>
  </div>
</template>

<style scoped>
@import '~css/consts';


.products-page {
}

.products-section {
  margin-bottom: 18rem;
}


</style>