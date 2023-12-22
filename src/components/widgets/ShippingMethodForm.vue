<script setup lang="ts">
import type { ShippingMethod } from '~/types'
const shippingMethods: ShippingMethod[] = ['Courier', 'Store', 'UPS', 'createxLocker', 'createxGlobalExport']
// const selectedShiipingMethod = ref(shippingMethods[0])

import useStoreOrder from '~/stores/order'
const orderStore = useStoreOrder()

const selectedShiipingMethod = computed<ShippingMethod>({
  get: () => orderStore.shippingMethod,
  set: (value) => orderStore.shippingMethod = value,
})


</script>

<template>
  <form class="shipping-billing-form">
    <div class="radio-item">
      <div class="left">
        <RadioGroup class="radio-group"
          v-model="selectedShiipingMethod"
          value="Courier"
          name="shipping-method"
        >
          Courier to your address
        </RadioGroup>
        <div class="description">Estimated date: September 9</div>
      </div>

      <div class="right">$25.00</div>
    </div>
    <div class="radio-item">
      <div class="left">
        <RadioGroup class="radio-group"
          v-model="selectedShiipingMethod"
          value="Store"
          name="shipping-method"
        >
          Pick up from store
        </RadioGroup>
        <div class="description">Pick up on September 8 from 12:00</div>
      </div>

      <div class="right">Free</div>
    </div>
    <div class="radio-item">
      <div class="left">
        <RadioGroup class="radio-group"
          v-model="selectedShiipingMethod"
          value="UPS"
          name="shipping-method"
        >
          UPS Ground Shipping
        </RadioGroup>
        <div class="description">Up to one week</div>
      </div>

      <div class="right">$10.00</div>
    </div>
    <div class="radio-item">
      <div class="left">
        <RadioGroup class="radio-group"
          v-model="selectedShiipingMethod"
          value="createxLocker"
          name="shipping-method"
        >
          Pick up at Createx Locker
        </RadioGroup>
        <div class="description">Pick up on September 8 from 12:00</div>
      </div>

      <div class="right">$8.50</div>
    </div>
    <div class="radio-item">
      <div class="left">
        <RadioGroup class="radio-group"
          v-model="selectedShiipingMethod"
          value="createxGlobalExport"
          name="shipping-method"
        >
          Createx Global Export
        </RadioGroup>
        <div class="description">3-4 days</div>
      </div>

      <div class="right">$15.00</div>
    </div>

    
  </form>
</template>

<style scoped>
@import "~css/consts";

.shipping-billing-form {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}
.radio-item {
  display: flex;
  align-items: start;
  justify-content: space-between;

  margin-bottom: 1.6rem;
}
.left {
}
.radio-group {
  margin-bottom: .7rem;
  color: $color-gray-800;
  font-weight: 700;
}
.description {
  margin-left: 3.6rem;
  color: $color-gray-700;
}
.right {
  color: $color-gray-800;
}

</style>