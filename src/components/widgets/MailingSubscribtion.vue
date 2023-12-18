<script setup lang="ts">
import img from '~/assets/img/illustrations/2.png'
import MailingSubscribtionForm from '~/components/widgets/MailingSubscribtionForm.vue'

</script>

<template>
  <div class="wrapper">
    <MailingSubscribtionForm class="form"></MailingSubscribtionForm>

    <div class="img-a">
      <img :src="img" alt="">
    </div>
  </div>

  
</template>

<style scoped>
@import '~css/consts';

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  gap: var(--leng-32);


  @media (800px < width < 930px) {
    flex-wrap: nowrap;
  }

}
.form {
  flex: 0 1 49.5rem;
}
.img-a {
  flex: 0 0 min(80%, 46rem);
  aspect-ratio: 46 / 41;

  margin-left: auto;
}


</style>