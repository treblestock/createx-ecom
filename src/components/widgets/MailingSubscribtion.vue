<script setup lang="ts">
import img from '~/assets/img/illustrations/2.png'
import MailingSubscribtionForm from '~/components/widgets/MailingSubscribtionForm.vue'

</script>

<template>
  <section class="section" id="subscribe-mailing">
    <div class="container">
      <MailingSubscribtionForm class="form"></MailingSubscribtionForm>

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