<script setup lang="ts">
import InputGroup from '~/components/global/InputGroup.vue'
import PasswordGroup from '~/components/global/PasswordGroup.vue'

import useStoreAuth from '~/stores/auth'
const authStore = useStoreAuth()



const formData = ref({
  fullname: '',
  email: '',
  pass: '',
  passConfirm: '',
  isRememberMe: true,
})

const errorMsg = ref('')

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

async function onSubmit() {
  if (!isValidForm() ) {
    errorMsg.value = `Fill in all the fields and make sure the passwords are equals`
    return
  }
  const account = await authStore.signup(
    formData.value.email,
    formData.value.pass,
    formData.value.fullname,
  )

  if (account == null) {
    errorMsg.value = `Failed to sign up cannot find account or wrong password`
    return 
  }
  usePopupManager().closePopup('Signup')
}
function onRedirect() {
  usePopupManager().closePopup('Signup')
  usePopupManager().showPopup('Signin')
}


// client only
function _clientOnlyRestrictionCheck() {
  const accounts = useLocalStorage().get('auth.accounts')
  if (!accounts.length) return
  _doesAccountExist.value = true
}
function _deleteAccountClientOnly() {
  authStore._deleteAccountClientOnly()
  _doesAccountExist.value = false
}

function _createTestAccount() {
  authStore._createTestAccount()
  usePopupManager().closePopup('Signup')
}  
const _doesAccountExist = ref(false)
onMounted(_clientOnlyRestrictionCheck)




// api

</script>

<template>
  <div class="auth-popup">
    <div class="auth-title h3">Sign up</div>
    <div class="auth-description">Registration takes less than a minute but gives you full control over your orders.</div>
    <div class="error">{{ errorMsg }}</div>

    <div class="error client-only"
      v-if="_doesAccountExist"  
    >
      Currently there is a restriction: only 1 account may exist at one time. You can delete existing account to create new one. Moreover, you are always able to create new test account with existing data, such as orders, favourite products and so on.
      <button class="client-only-delete"
        @click="_deleteAccountClientOnly"
      >delete ?</button>
    </div>

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
      <div class="row">
        <CheckboxGroup class="checkbox-group"
          v-model="formData.isRememberMe"
        >
        Remember me</CheckboxGroup>
        <AppLink class="client-only-create-test"
          v-if="!_doesAccountExist"
          @click="_createTestAccount"
        >create test account</AppLink>
      </div>
      <Btn class="submit"
        type="submit"
        :disabled="_doesAccountExist"
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
.row {
  display: flex;
  justify-content: space-between;
  align-items: start; 
  gap: 2rem;
}
.error {
  color: $color-red;
}
.client-only-delete {
  color: $color-green;
}
.client-only-create-test {
  color: $color-green;
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