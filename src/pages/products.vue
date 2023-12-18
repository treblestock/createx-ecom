<script setup lang="ts">
import ProductsGrid from '~/components/widgets/ProductsGrid.vue'
import MailingSubscribtion from '~/components/widgets/MailingSubscribtion.vue'


</script>

<template>
  <div class="page">
    <section class="section-180">
      <div class="container">
        <ProductsGrid class="products-section"></ProductsGrid>
      </div>
    </section>
    <section class="pv-100 bgc-gray-200" id="subscribe-mailing">
      <div class="container">
        <MailingSubscribtion></MailingSubscribtion>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import '~css/consts';



</style>