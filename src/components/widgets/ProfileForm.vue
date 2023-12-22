<script setup lang="ts">
import IconDelete from '~/assets/img/icons/decor/delete.svg'
// import type { UserBio } from '~/types'
import useStoreProfile from '~/stores/profile'
import type { UserBio } from '~/types'
const profileStore = useStoreProfile()

import useStoreAuth from '~/stores/auth'
const authStore = useStoreAuth()

const emptyUserBio = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  passNew: '',
  passConfirm: '',
  country: '',
  city: '',
  address: '',
  zipCode: '',
}



const profileForm = ref<typeof emptyUserBio>({...emptyUserBio})

async function onSubmit() {
  if (profileForm.value.passNew !== profileForm.value.passConfirm) return 
  const newUserBio: UserBio = {
    firstName: profileForm.value.firstName,
    lastName: profileForm.value.lastName,
    email: profileForm.value.email,
    phone: profileForm.value.phone,
    password: profileForm.value.passNew,
    country: profileForm.value.country,
    city: profileForm.value.city,
    address: profileForm.value.address,
    zipCode: profileForm.value.zipCode,
  }
  await profileStore.updateUserBio(newUserBio)

  fetchForm()
}

var deleteAccount = authStore.deleteAccount

function fetchForm() {
  const { password, ...userBio} = profileStore.userBio as UserBio
  profileForm.value.passNew = ''
  profileForm.value.passConfirm = ''
  Object.assign(profileForm.value, userBio)
}
onMounted(fetchForm)




</script>

<template>
  <section class="profile">
    <div class="profile-header">
      <h1 class="h1">My profile</h1>
      <Btn class="_transparent _with-icon _delete"
        @click="deleteAccount"
      >
        <IconDelete></IconDelete>
        Delete account
      </Btn>
    </div>

    <form class="profile-form"
      @submit.prevent="onSubmit"
    >
      <InputGroup class="input-group"
        v-model="profileForm.firstName"
      >First name</InputGroup>
      <InputGroup class="input-group"
        v-model="profileForm.lastName"
      >Last name</InputGroup>
      <InputGroup class="input-group"
        v-model="profileForm.email"
      >Email</InputGroup>
      <InputGroup class="input-group"
        v-model="profileForm.phone"
      >phone</InputGroup>
      <PasswordGroup class="input-group"
        v-model="profileForm.passNew"
      >
        New Password
      </PasswordGroup>
      <PasswordGroup class="input-group"
        v-model="profileForm.passConfirm"
      >
        Confirm Password
      </PasswordGroup>
      <InputGroup class="input-group"
        v-model="profileForm.country"
      >Country</InputGroup>
      <InputGroup class="input-group"
        v-model="profileForm.city"
      >City</InputGroup>
      <InputGroup class="input-group"
        v-model="profileForm.address"
      >Address</InputGroup>
      <InputGroup class="input-group"
        v-model="profileForm.zipCode"
      >ZIP Code</InputGroup>
      <Btn class="submit"
        type="submit"
      >Save Changes</Btn>
    </form>
  </section>
</template>

<style scoped>
@import "~css/consts";

.profile {
  /* max-width: 81rem; */
}
.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;

  margin-bottom: 4rem;
}
._delete {

  font-size: 1.6rem;
  font-weight: 700;
  color: $color-red;

  &:hover {
    text-decoration: underline;
  }
}
.profile-form {
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.4rem;
  column-gap: 3rem;
}
.input-group {
  /* flex: 1 0 clamp(23rem, 100% / 2 - 1.5rem , 39rem); */
  flex: 1 0 max(calc(50% - 1.5rem), 20rem);
}
.submit {
  margin-top: 5rem;
}

</style>