<script setup lang="ts">
import ProductPageWidget from '~/components/widgets/ProductPageWidget.vue'
import MailingSubscribtion from '~/components/widgets/MailingSubscribtion.vue'


import SliderRecientlyViewed from '~/components/widgets/SliderRecientlyViewed.vue'
import SliderRecomendations from '~/components/widgets/SliderRecomendations.vue'



const props = defineProps<{
  id: number
}>()

</script>

<template>
  <div class="product-page">
    <ProductPageWidget class="product-widget"/>

    <SliderRecomendations class="section" />
    <SliderRecientlyViewed class="section _bgc-gray" />

    <MailingSubscribtion/>
  </div>
</template>

<style scoped>
@import '~css/consts';

.product-card {
  width: 28.5rem;
}
.product-widget {
  margin-bottom: 18rem;
}
.section {
  padding: 8rem 0 10rem;
}

</style>