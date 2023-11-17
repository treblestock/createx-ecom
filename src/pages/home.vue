<script setup lang="ts">
import HomeIntroSlider from '~/components/widgets/HomeIntroSlider.vue'
import HomeCategories from '~/components/widgets/HomeCategories.vue'
// import HomeNewCollections from '~/components/widgets/HomeNewCollections.vue'
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
  <div class="home-page">
    <HomeIntroSlider></HomeIntroSlider>
    <HomeCategories></HomeCategories>
    <!-- <HomeNewCollections></HomeNewCollections> -->
    <HomeGridCollections></HomeGridCollections>
    <HomePopularCategories></HomePopularCategories>
    <SliderTrends></SliderTrends>
    <SliderSales></SliderSales>
    <MobileAppAdv></MobileAppAdv>
    <CreatexAdvantages></CreatexAdvantages>
    <InstAdv></InstAdv>
    <FashionBlog></FashionBlog>
    <Sponsors></Sponsors>
    <MailingSubscribtion></MailingSubscribtion>
  </div>
</template>

<style scoped>
@import '~css/consts';



</style>