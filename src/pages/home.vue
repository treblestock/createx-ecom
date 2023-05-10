<script setup lang="ts">



</script>

<template>
  <div>
    <Slider>
      <AppLink to="http://google.com"
        v-for="_ in 5"
      >
        <Img></Img>
      </AppLink>
    </Slider>
    <!-- <Popup></Popup>
    <NavTabs></NavTabs>
    <Slider></Slider>
    <WithSlider></WithSlider> -->
  </div>
</template>

<style scoped>
@import '~/assets/css/consts';



</style>