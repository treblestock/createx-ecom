<script setup lang="ts">
import img1 from '~/assets/img/sponsors/1.png'
import img2 from '~/assets/img/sponsors/2.png'
import img3 from '~/assets/img/sponsors/3.png'
import img4 from '~/assets/img/sponsors/4.png'
import img5 from '~/assets/img/sponsors/5.png'
import img6 from '~/assets/img/sponsors/6.png'




</script>

<template>
  <section class="section">
    <div class="container">
      <div class="sponsors">
        <div class="sponsor">
          <img :src="img1" alt="">
        </div>
        <div class="sponsor">
          <img :src="img2" alt="">
        </div>
        <div class="sponsor">
          <img :src="img3" alt="">
        </div>
        <div class="sponsor">
          <img :src="img4" alt="">
        </div>
        <div class="sponsor">
          <img :src="img5" alt="">
        </div>
        <div class="sponsor">
          <img :src="img6" alt="">
        </div>

      </div>
    </div>
  </section>
  
</template>

<style scoped>
@import '~css/consts';


.section {
  margin-bottom: 18rem;
}
.container {
  
}
.sponsors {
  display: flex;
  gap: 9rem;
}
.sponsor {
  width: 12rem;
  height: 6.5rem;

  & img {
    object-fit: cover;
  }
}

</style>