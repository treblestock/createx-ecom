<script setup lang="ts">
import InputGroup from '~/components/global/InputGroup.vue'
import PasswordGroup from '~/components/global/PasswordGroup.vue'
import usePopupManager from '~/composables/usePopupManager'

const formData = ref({
  email: '',
  pass: '',
  isKeepMeSignedIn: true,
})


function isValidForm() {
  if (
    formData.value.email === '' ||
    formData.value.pass === ''
  ) return false
  return true
}

function clearForm() {
  formData.value.email = '' 
  formData.value.pass = '' 
}

function onSubmit() {
  if (!isValidForm() ) return
  const signInRequestResault = api.signin(
    formData.value.email,
    formData.value.pass,
  )

  if (typeof signInRequestResault === 'string') {
    throw new Error(`Failed to sign up. Got: ${signInRequestResault}`)
  }
  usePopupManager().closePopup('Signin')
}


function onRedirect() {
  usePopupManager().closePopup('Signin')
  usePopupManager().showPopup('Signup')
}  

</script>

<template>
  <div class="auth-popup">
    <div class="auth-title h3">Sign in</div>
    <div class="auth-description">Sign in to your account using email and password provided during registration.</div>
    <form class="auth-form"
      @submit.prevent="onSubmit"
    >
      <InputGroup class="input-group"
        v-model="formData.email"
      >Email</InputGroup>
      <PasswordGroup class="input-group"
        v-model="formData.pass"
      >Password</PasswordGroup>
      <div class="row">
        <CheckboxGroup class="checkbox-group"
          v-model="formData.isKeepMeSignedIn"
        >
        Keep me signed in</CheckboxGroup>
        <AppLink>Forgot password?</AppLink>
      </div>
      <Btn class="submit"
        type="submit"
      >Sign in</Btn>
    </form>
    <div class="redirect">
      Don't have an account? <AppLink @click.prevent="onRedirect">Sign up</AppLink>
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
.row {
  display: flex;
  justify-content: space-between;
  align-items: start; 
  gap: 2rem;
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