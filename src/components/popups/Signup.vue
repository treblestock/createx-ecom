<script setup lang="ts">
import { emit } from 'process';
import InputGroup from '../global/InputGroup.vue'
import PasswordGroup from '../global/PasswordGroup.vue'

import useStoreAuth from '~/stores/auth'
const authStore = useStoreAuth()



const formData = ref({
  fullname: '',
  email: '',
  pass: '',
  passConfirm: '',
  isRememberMe: true,
})


function isValidForm() {
  if (
    formData.value.fullname === '' ||
    formData.value.email === '' ||
    formData.value.pass === '' ||
    formData.value.passConfirm === '' ||
    formData.value.pass !== formData.value.passConfirm
  ) return false
  return true
}

function clearForm() {
  formData.value.fullname = '' 
  formData.value.email = '' 
  formData.value.pass = '' 
  formData.value.passConfirm = ''
}

function onSubmit() {
  if (!isValidForm() ) return
  authStore.signup(
    formData.value.email,
    formData.value.pass,
    formData.value.fullname,
  )
  usePopupManager().closePopup('Signup')
}

function onRedirect() {
  usePopupManager().closePopup('Signup')
  usePopupManager().showPopup('Signin')
}



// api

</script>

<template>
  <div class="auth-popup">
    <div class="auth-title h3">Sign up</div>
    <div class="auth-description">Registration takes less than a minute but gives you full control over your orders.</div>
    <form class="auth-form"
      @submit.prevent="onSubmit"
    >
      <InputGroup class="input-group"
        v-model="formData.fullname"
      >Full Name</InputGroup>
      <InputGroup class="input-group"
        v-model="formData.email"
      >Email</InputGroup>
      <PasswordGroup class="input-group"
        v-model="formData.pass"
      >Password</PasswordGroup>
      <PasswordGroup class="input-group"
        v-model="formData.passConfirm"
      >Confirm Password</PasswordGroup>
      <CheckboxGroup class="checkbox-group"
        v-model="formData.isRememberMe"
      >
      Remember me</CheckboxGroup>
      <Btn class="submit"
        type="submit"
      >Sign up</Btn>
    </form>
    <div class="redirect">
      Already have an account? <AppLink @click.prevent="onRedirect">Sign in</AppLink>
    </div>
  </div>
</template>

<style scoped>
@import "~css/consts";
.auth-popup {
  max-width: 39rem;

  display: flex;
  flex-direction: column;

  gap: 2.4rem;
}
.auth-title {
  text-align: center;
}
.auth-description {
  text-align: center;
}
.auth-form {
}
.input-group {
  margin-bottom: 2rem;
}
.checkbox-group {
  margin-bottom: 2rem;
}
.submit {
  width: 100%;
}
.redirect {
}


</style>