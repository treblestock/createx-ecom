<script setup lang="ts">
import useStoreOrder from '~/stores/order'
const orderStore = useStoreOrder()

const shippingForm = computed({
  get: () => orderStore.shippingForm,
  set: (value) => orderStore.shippingForm = value,
})
const billingForm = computed({
  get: () => orderStore.billingForm,
  set: (value) => orderStore.billingForm = value,
})
const isBillinEqualsShipping = computed({
  get: () => orderStore.isBillingEqualsShipping,
  set: (value) => orderStore.isBillingEqualsShipping = value,
})


function onSubmit() {
  console.log(shippingForm.value)
}

</script>

<template>
    <form class="shipping-billing-form"
      @submit.prevent="onSubmit"
    >
      <h2 class="h4" v-if="!isBillinEqualsShipping">Shipping Form</h2>

      <InputGroup class="input-group"
        v-model="shippingForm.firstName"
      >First name</InputGroup>
      <InputGroup class="input-group"
        v-model="shippingForm.lastName"
      >Last name</InputGroup>
      <InputGroup class="input-group"
        v-model="shippingForm.email"
      >Email</InputGroup>
      <InputGroup class="input-group"
        v-model="shippingForm.phone"
      >Phone</InputGroup>

      <InputGroup class="input-group"
        v-model="shippingForm.country"
      >Country</InputGroup>
      <InputGroup class="input-group"
        v-model="shippingForm.city"
      >City</InputGroup>
      <InputGroup class="input-group"
        v-model="shippingForm.address"
      >Address</InputGroup>
      <InputGroup class="input-group"
        v-model="shippingForm.zipCode"
      >ZIP Code</InputGroup>


      <CheckboxGroup class="biling-equals-shipping"
        v-model="isBillinEqualsShipping"
      >
        Billing and Shipping details are the same
      </CheckboxGroup>


      <template
        v-if="!isBillinEqualsShipping"
      >
        <h2 class="h4">Billing Form</h2>
        <InputGroup class="input-group"
          v-model="billingForm.firstName"
        >First name</InputGroup>
        <InputGroup class="input-group"
          v-model="billingForm.lastName"
        >Last name</InputGroup>
        <InputGroup class="input-group"
          v-model="billingForm.email"
        >Email</InputGroup>
        <InputGroup class="input-group"
          v-model="billingForm.phone"
        >Phone</InputGroup>

        <InputGroup class="input-group"
          v-model="billingForm.country"
        >Country</InputGroup>
        <InputGroup class="input-group"
          v-model="billingForm.city"
        >City</InputGroup>
        <InputGroup class="input-group"
          v-model="billingForm.address"
        >Address</InputGroup>
        <InputGroup class="input-group"
          v-model="billingForm.zipCode"
        >ZIP Code</InputGroup>
      </template>

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
.h4 {
  flex: 0 0 100%;
  color: $color-gray-900;
}

.item {
  background: $color-gray-200;
  padding: 2rem 2.4rem;
  & + & {
    border-top: 1px solid $color-gray-300;
  }
}
.input-group {
  flex: 1 0 max(calc(50% - 1.5rem), 20rem);
}

</style>