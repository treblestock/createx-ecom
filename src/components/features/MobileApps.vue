<script setup lang="ts">
import googlePlayIcon from '~/assets/img/mobile-store/google-play.png'
import appStoreIcon from '~/assets/img/mobile-store/app-store.png'






</script>

<template>
  <div class="mobile-apps">
    <div class="icon">
      <img :src="appStoreIcon" alt="">
    </div>
    <div class="icon">
      <img :src="googlePlayIcon" alt="">
    </div>
  </div>
  
</template>

<style scoped>
@import '~css/consts';


.mobile-apps {
  display: flex;
  gap: 2rem;
}
.icon {
}


</style>