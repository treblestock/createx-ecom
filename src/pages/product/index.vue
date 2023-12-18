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
  <div class="page"
    :key="id"
  >
    <section class="section">
      <div class="container">
        <ProductPageWidget/>
      </div>
    </section>
    
    <section class="section-100 bgc-gray-300 pv-100">
      <div class="container">
        <SliderRecomendations/>
      </div>
    </section>

    <section class="section-100">
      <div class="container">
        <SliderRecientlyViewed/>
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