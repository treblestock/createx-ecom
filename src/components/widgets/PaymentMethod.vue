<script setup lang="ts">
import { PasswordGroup } from '../global';

const PAYMENT_METHODS = ['creditCard', 'paypal', 'cash'] as const

const selectedPaymentMethod = ref<typeof PAYMENT_METHODS[number]>(PAYMENT_METHODS[0])


type FormData = {
  cardNumber: number
  expiryDate: string
  cvc: number
}

const creditCardForm = ref({
  cardNumber: undefined,
  expiryDate: undefined,
  cvc: undefined,
})

const paypalForm = ref({
  cardNumber: undefined,
  password: undefined
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
            v-model="creditCardForm.cardNumber"
          >Card number</InputGroup>
          <InputGroup class="card-expiry"
            placeholder="MM/YY"
            v-model="creditCardForm.expiryDate"
          >Expiry date</InputGroup>
          <InputGroup class="card-cvc"
            placeholder="000"
            v-model="creditCardForm.cvc"
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
            v-model="paypalForm.cardNumber"
          >Card number</InputGroup>
          <PasswordGroup class="paypal-password"
            placeholder="0000"
            v-model="paypalForm.password"
          >Expiry date</PasswordGroup>
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