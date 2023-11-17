<script setup lang="ts">
import ProductsGrid from '~/components/widgets/ProductsGrid.vue'
import MailingSubscribtion from '~/components/widgets/MailingSubscribtion.vue'


</script>

<template>
  <div class="products-page">
    <ProductsGrid class="products-section"></ProductsGrid>
    <MailingSubscribtion></MailingSubscribtion>
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