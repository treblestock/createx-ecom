<script setup lang="ts">
import googlePlayIcon from '~/assets/img/mobile-store/google-play.png'
import appStoreIcon from '~/assets/img/mobile-store/app-store.png'


</script>

<template>
  <div class="mobile-apps">
    <AppLink class="icon">
      <img :src="appStoreIcon" alt="">
    </AppLink>
    <AppLink class="icon">
      <img :src="googlePlayIcon" alt="">
    </AppLink>
  </div>
  
</template>

<style scoped>
@import '~css/consts';


.mobile-apps {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.icon {
}


</style>