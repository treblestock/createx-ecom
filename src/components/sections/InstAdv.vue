<script setup lang="ts">
import img1 from '~/assets/img/from-inst/1.jpg'
import img2 from '~/assets/img/from-inst/2.jpg'
import img3 from '~/assets/img/from-inst/3.jpg'





</script>

<template>
  <section class="section">
    <div class="container">
      <div class="body">
        <div class="title h6">Follow us on Instagram</div>
        <div class="inst-acc h1">@createx_store</div>
        <AppLinkBtn outlined>
          <Icon icon="inst"></Icon>&#x2800;
          Follow instagram
        </AppLinkBtn>
      </div>
      <div class="imgs">
        <div class="img">
          <img :src="img1" alt="">
        </div>
        <div class="img">
          <img :src="img2" alt="">
        </div>
        <div class="img">
          <img :src="img3" alt="">
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
  display: flex;
  gap: 3rem;
}

.body {
}
.title {
  margin-bottom: 1rem;
}
.inst-acc {
  margin-bottom: 6rem;
}
.imgs {
  display: flex;
  gap: 1.5rem;
}
.img {
  width: 26rem;
  height: 26rem;

  & img {
    object-fit: cover;
  }
}

</style>