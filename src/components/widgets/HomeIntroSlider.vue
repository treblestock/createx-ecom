<script setup lang="ts">
import img from '~/assets/img/clothes/collections/intro.jpg'

import SliderFullscreen from '~/components/widgets/SliderFullscreen.vue'





</script>

<template>
  <section class="section">
    <SliderFullscreen class="slider">
      <div class="img"
        v-for="n in 4" :key="n"
      >
        <img :src="img" alt="">
      </div>
    </SliderFullscreen>
  </section>
  
</template>

<style scoped>
@import '~css/consts';


.section {
  margin-bottom: 18rem;
}
.container {
  display: flex;
  gap: 3rem;
}
.slider {
  
}
.title {
}

.product-card {
}

.link {
  display: block;
  margin: 8rem auto 0;
}

/* slider  */
.img {
  /* flex: 0 0 100%;
  height: 100%; */
  position: relative;

  img {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}


</style>