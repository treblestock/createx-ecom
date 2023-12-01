<script setup lang="ts">
const formData = ref({
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
  isBillinEqualsShipping: true,
})

function onSubmit() {
  console.log(formData.value)
}

</script>

<template>
    <form class="shipping-billing-form"
      @submit.prevent="onSubmit"
    >
      <InputGroup class="input-group"
        v-model="formData.firstName"
      >First name</InputGroup>
      <InputGroup class="input-group"
        v-model="formData.lastName"
      >Last name</InputGroup>
      <InputGroup class="input-group"
        v-model="formData.email"
      >First name</InputGroup>
      <InputGroup class="input-group"
        v-model="formData.phone"
      >First name</InputGroup>

      <InputGroup class="input-group"
        v-model="formData.country"
      >Country</InputGroup>
      <InputGroup class="input-group"
        v-model="formData.city"
      >City</InputGroup>
      <InputGroup class="input-group"
        v-model="formData.address"
      >Address</InputGroup>
      <InputGroup class="input-group"
        v-model="formData.zipCode"
      >ZIP Code</InputGroup>


      <CheckboxGroup class="biling-equals-shipping"
        v-model="formData.isBillinEqualsShipping"
      >
        Billing and Shipping details are the same
      </CheckboxGroup>
    </form>
</template>

<style scoped>
@import "~css/consts";

.shipping-billing-form {
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.4rem;
  column-gap: 3rem;
}
.item {
  background: $color-gray-200;
  padding: 2rem 2.4rem;
  & + & {
    border-top: 1px solid $color-gray-300;
  }
}
.input-group {
  flex: 1 0 clamp(23rem, 100% / 2 - 1.5rem , 39rem);
}

</style>