<script setup lang="ts">
import HomeIntroSlider from '~/components/widgets/HomeIntroSlider.vue'
import HomeCategories from '~/components/widgets/HomeCategories.vue'
import HomeNewCollections from '~/components/widgets/HomeNewCollections.vue'
import HomeGridCollections from '~/components/widgets/HomeGridCollections.vue'
import HomePopularCategories from '~/components/widgets/HomePopularCategories.vue'
import SliderTrends from '~/components/widgets/SliderTrends.vue'
import SliderSales from '~/components/widgets/SliderSales.vue'
import MobileAppAdv from '~/components/widgets/MobileAppAdv.vue'
import CreatexAdvantages from '~/components/widgets/CreatexAdvantages.vue'
import InstAdv from '~/components/widgets/InstAdv.vue'
import FashionBlog from '~/components/widgets/FashionBlog.vue'
import Sponsors from '~/components/widgets/Sponsors.vue'
import MailingSubscribtion from '~/components/widgets/MailingSubscribtion.vue'






</script>

<template>
  <div class="page">
    <section class="section-0">
      <HomeIntroSlider></HomeIntroSlider>
    </section>
    <section class="section-180 shift-top-60">
      <div class="container">
        <HomeCategories></HomeCategories>
      </div>
    </section>
    <section class="section-180">
      <div class="container-l">
        <HomeNewCollections></HomeNewCollections>
      </div>
    </section>
    <section class="section-180">
      <div class="container-l">
        <HomeGridCollections></HomeGridCollections>
      </div>
    </section>
    <section class="section-180">
      <div class="container">
        <HomePopularCategories></HomePopularCategories>
      </div>
    </section>
    <section class="section-100 bgc-300 pv-80">
      <div class="container">
        <SliderTrends></SliderTrends>
      </div>
    </section>
    <section class="section-120">
      <div class="container">
        <SliderSales></SliderSales>
      </div>
    </section>
    <section class="section-120 bgc-gray-900">
      <div class="container">
        <MobileAppAdv></MobileAppAdv>
      </div>
    </section>
    <section class="section-120">
      <div class="container">
        <CreatexAdvantages></CreatexAdvantages>
      </div>
    </section>
    <section class="section-180">
      <div class="container">
        <InstAdv></InstAdv>
      </div>
    </section>
    <section class="section-120">
      <div class="container">
        <FashionBlog></FashionBlog>
      </div>
    </section>
    <section class="section-120">
      <div class="container">
        <Sponsors></Sponsors>
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
.page {
  padding: 0;
}

.shift-top-60 {
  margin-top: calc(-1 * var(--leng-60));
}


</style>