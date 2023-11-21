<script setup lang="ts">
import type { Rating } from '~/types'
import InputGroup from '~/components/global/InputGroup.vue'
import PasswordGroup from '~/components/global/PasswordGroup.vue'



const formData = ref({
  name: '' as string,
  email: '' as string,
  rating: null as Rating | null,
  photo: null,
  comment: '' as string,
})


function isValidForm() {
  if (
    formData.value.name === '' ||
    formData.value.email === '' ||
    formData.value.comment === ''
  ) return false
  return true
}

function clearForm() {
  formData.value.name = '' 
  formData.value.email = '' 
  formData.value.rating = null 
  formData.value.photo = null
  formData.value.comment = ''
}


function onSubmit() {
  if (!isValidForm() ) return
  usePopupManager().closePopup('LeaveReview')
}

const ratingOptions = [1, 2, 3, 4, 5]

</script>

<template>
  <div class="review-popup">
    <div class="review-title h3">Sign up</div>

    <form class="review-form"
      @submit.prevent="onSubmit"
    >
      <InputGroup class="input-group"
        v-model="formData.name"
        placeholder="Your name"
      >Full Name</InputGroup>
      <SelectGroup class="input-group"
        v-model="formData.rating"
        :options="ratingOptions"
        disabledValue="Choose raiting"
      >Raiting</SelectGroup>
      <InputGroup class="input-group"
        v-model="formData.email"
        placeholder="Your working email"
      >Email</InputGroup>
      <InputGroup class="input-group"
        v-model="formData.comment"
        placeholder="Leave a review"
      >Review</InputGroup>
        
      <Btn class="submit"
        type="submit"
      >Submit a review</Btn>
    </form>
    
  </div>
</template>

<style scoped>
@import "~css/consts";
.review-popup {
  width: 39rem;
  

  display: flex;
  flex-direction: column;

  gap: 2.4rem;
}
.review-title {
  text-align: center;
}
.review-form {
}
.input-group {
  margin-bottom: 2rem;
}
.submit {
  width: 100%;
  margin-top: 4rem;
}


</style>