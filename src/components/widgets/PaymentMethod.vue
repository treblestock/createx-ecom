<script setup lang="ts">


// const selectedPaymentMethod = ref<typeof PAYMENT_METHODS[number]>(PAYMENT_METHODS[0])



// const creditCardForm = ref({
//   cardNumber: undefined,
//   expiryDate: undefined,
//   cvc: undefined,
// })

// const paypalForm = ref({
//   cardNumber: undefined,
//   password: undefined
// })
import useStoreOrder from '~/stores/order'
const orderStore = useStoreOrder()

const selectedPaymentMethod = computed({
  get: () => orderStore.selectedPaymentMethod,
  set: (value) => orderStore.selectedPaymentMethod = value,
})
const creditCardForm = computed({
  get: () => orderStore.creditCardForm,
  set: (value) => orderStore.creditCardForm = value,
})
const paypalForm = computed({
  get: () => orderStore.paypalForm,
  set: (value) => orderStore.paypalForm = value,
})






</script>

<template>
  <form class="form">
    <Spoiler class="form-item"
      classTitle="spoiler-title"
      classBody="spoiler-body"
      noIcon
      :active="selectedPaymentMethod === 'creditCard'"
    >
      <template #title>
        <RadioGroup class="radio" 
          name="paymentMethod"
          v-model="selectedPaymentMethod"
          value="creditCard"
        >Credit card</RadioGroup>
      </template>
      
      <template #default>
        <div class="card-form">
          <InputGroup class="card-number"
            placeholder="0000 0000 0000 0000"
            v-model.number="creditCardForm.cardNumber"
          >Card number</InputGroup>
          <InputGroup class="card-expiry"
            placeholder="MM/YY"
            v-model.number="creditCardForm.expiryDate"
          >Expiry date</InputGroup>
          <InputGroup class="card-cvc"
            placeholder="000"
            v-model.number="creditCardForm.cvc"
          >CVC</InputGroup>
        </div>
      </template>
    </Spoiler>

    <Spoiler class="form-item" 
      classTitle="spoiler-title"
      classBody="spoiler-body"
      noIcon 
      :active="selectedPaymentMethod === 'paypal'"
    >
      <template #title>
        <RadioGroup class="radio" 
          name="paymentMethod"
          v-model="selectedPaymentMethod"
          value="paypal"
        >Credit card</RadioGroup>
      </template>

      <template #default>
        <div class="paypal-form">
          <InputGroup class="paypal-number"
            placeholder="0000 0000 0000 0000"
            v-model.number="paypalForm.cardNumber"
          >Paypal number</InputGroup>
          <PasswordGroup class="paypal-password"
            placeholder="0000"
            v-model="paypalForm.password"
          >Paypal password</PasswordGroup>
        </div>
      </template>
    </Spoiler>

    <RadioGroup class="form-item cash"
      name="paymentMethod"
      v-model="selectedPaymentMethod"
      value="cash"
    >Cash on delivery</RadioGroup>

  </form>
</template>

<style scoped>
@import "~css/consts";



.form {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}
.form-item {
  box-shadow: $shadow;
  max-width: 39rem;
}
:deep(.spoiler-title) {
  padding: 0;
}
:deep(.spoiler-body) {
  padding: 0 2.4rem 2.4rem;
}
.radio {
  width: 100%;
  padding: 2.4rem;
}
.card-form {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.card-number {
  flex: 0 0 100%;
}
.card-expiry {
  flex: 1 0 10rem;
}
.card-cvc {
  flex: 0 0 14rem;
}

.paypal-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.cash {
  padding: 2.4rem;
}

</style>