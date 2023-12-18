<script setup lang="ts">
import img from '~/assets/img/illustrations/3.png'
import MobileApps from '~/components/features/MobileApps.vue'




</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="img-a">
        <img :src="img" alt="">
      </div>
      <div class="body">
        <div class="title h2">Enjoy mobile shopping with our Createx Store App!</div>
        <MobileApps class="apps"></MobileApps>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
@import '~css/consts';


.wrapper {
  
}
.content {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  gap: var(--leng-120);

  @media (width < 750px) {
    flex-wrap: wrap;
    gap: 0;
    & .img-a {
      flex: 0 0 80%;
      order: 2;
    }
  }
}
.img-a {
  flex: 0 0 40%;
  aspect-ratio: 49 / 33;
}
.body {
  padding: var(--leng-60) 0;
}

.title {
  margin-bottom: var(--leng-60);
  color: $color-white;
}


</style>