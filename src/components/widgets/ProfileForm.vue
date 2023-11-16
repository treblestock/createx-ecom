<script setup lang="ts">
import IconDelete from '~/assets/img/icons/decor/delete.svg'

const profileForm = ref({
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
})

function onSubmit() {
  console.log(profileForm.value)
}


</script>

<template>
  <section class="profile">
    <div class="profile-header">
      <h1 class="h1">My profile</h1>
      <Btn class="_transparent _with-icon _delete">
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
      >First name</InputGroup>
      <InputGroup class="input-group"
        v-model="profileForm.phone"
      >First name</InputGroup>
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
  flex: 1 0 clamp(23rem, 100% / 2 - 1.5rem , 39rem);

}
.submit {
  margin-top: 5rem;
}

</style>