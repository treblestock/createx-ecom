<script setup lang="ts">
import type { Product, Rating } from '~/types'


const props = defineProps<{
  productId: Product['id']
}>()

import useStoreProducts from '~/stores/products'
const productsStore = useStoreProducts()

import useStoreAuth from '~/stores/auth'
const authStore = useStoreAuth()
const isAuth = computed(() => authStore.isAuth)



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
    formData.value.comment === '' ||
    !formData.value.rating
  ) return false
  return true
}

const errorMsg = ref('')

function clearForm() {
  formData.value.name = '' 
  formData.value.email = '' 
  formData.value.rating = null 
  formData.value.photo = null
  formData.value.comment = ''
}


async function onSubmit() {
  if (!isValidForm() ) {
    errorMsg.value = 'Fill in all the fields and select raitng'
    return
  }
  const newProductReview = await productsStore.leaveProductReview({
    productId: props.productId,
    date: new Date(),
    likes: 0,
    dislikes: 0,
    rating: formData.value.rating as Rating,
    comment: formData.value.comment,
  })


  usePopupManager().closePopup('LeaveReview')
}

const ratingOptions = [1, 2, 3, 4, 5]

</script>

<template>
  <div class="review-popup">
    <div class="review-title h3">Leave a review</div>

    <div class="error"
      v-if="!isAuth"
    >It's required to be signed in to leave a review</div>

    <div class="error">{{ errorMsg }}</div>


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
        :disabled="!isAuth"
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