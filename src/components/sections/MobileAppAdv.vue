<script setup lang="ts">
import img from '~/assets/img/illustrations/3.png'
import MobileApps from '../features/MobileApps.vue';





</script>

<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <div class="img">
          <img :src="img" alt="">
        </div>
        <div class="body">
          <div class="title h2">Enjoy mobile shopping with our Createx Store App!</div>
          <MobileApps class="apps"></MobileApps>
        </div>
      </div>
    </div>
  </section>
  
</template>

<style scoped>
@import '~css/consts';


.section {
  margin-bottom: 18rem;

  background: $color-gray-900;
  color: $color-white;
}
.container {
  
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 15rem;
}

.body {

}

.title {
  margin-bottom: 5rem;
  color: $color-white;
}


</style>