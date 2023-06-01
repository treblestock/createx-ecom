<script setup lang="ts">
import SubscribeMailing from '~/components/sections/SubscribeMailing.vue'
import HomeIntroSlider from '~/components/sections/HomeIntroSlider.vue'
import HomeCategories from '~/components/sections/HomeCategories.vue'
import HomeNewCollections from '~/components/sections/HomeNewCollections.vue'
import HomeGridCollections from '~/components/sections/HomeGridCollections.vue'
import HomePopularCategories from '~/components/sections/HomePopularCategories.vue'
import HomeTrendingSlider from '~/components/sections/HomeTrendingSlider.vue'
import HomeSalesSlider from '~/components/sections/HomeSalesSlider.vue'
import MobileAppAdv from '~/components/sections/MobileAppAdv.vue'
import CreatexAdvantages from '~/components/sections/CreatexAdvantages.vue'
import InstAdv from '~/components/sections/InstAdv.vue'
import FashionBlog from '~/components/sections/FashionBlog.vue'
import Sponsors from '~/components/sections/Sponsors.vue'







</script>

<template>
  <div class="home-page">
    <HomeIntroSlider></HomeIntroSlider>
    <HomeCategories></HomeCategories>
    <HomeNewCollections></HomeNewCollections>
    <HomeGridCollections></HomeGridCollections>
    <HomePopularCategories></HomePopularCategories>
    <HomeTrendingSlider></HomeTrendingSlider>
    <HomeSalesSlider></HomeSalesSlider>
    <MobileAppAdv></MobileAppAdv>
    <CreatexAdvantages></CreatexAdvantages>
    <InstAdv></InstAdv>
    <FashionBlog></FashionBlog>
    <Sponsors></Sponsors>
    <SubscribeMailing></SubscribeMailing>
  </div>
</template>

<style scoped>
@import '~css/consts';



</style>