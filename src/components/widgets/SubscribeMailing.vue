<script setup lang="ts">
import img from '~/assets/img/illustrations/2.png'
import SubscribeMailingForm from '~/components/widgets/SubscribeMailingForm.vue'

</script>

<template>
  <section class="section" id="subscribe-mailing">
    <div class="container">
      <SubscribeMailingForm class="form"></SubscribeMailingForm>

      <div class="img">
        <img :src="img" alt="">
      </div>
    </div>
  </section>

  
</template>

<style scoped>
@import '~css/consts';



.section {
  padding: 6.5rem;
  background: $color-gray-200;
}
.container {
  display: flex;
  gap: 3rem;
  justify-content: space-between;
}
.form {
}
.img {
  width: 46rem;
  height: 41.5rem;

  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    object-fit: cover;

  }
}


</style>