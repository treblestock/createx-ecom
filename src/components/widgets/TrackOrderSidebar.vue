<script setup lang="ts">
import { dateToHumanCase } from '~/utils';
const props = defineProps<{
  orderExists?: boolean
  orderId?: string
  shippingMethod?: string
  orderDate?: string
  destination?: string
  expectedDate?: string
  orderStatus?: string
}>()



const emit = defineEmits<{
  searchUpdate: [string]
}>()

// form
const searchOrderId = ref<string>(props.orderId || '')
const isNotifyMe = defineModel<boolean>('isNotifyMe', {required: true})

function onsubmit() {
  emit('searchUpdate', searchOrderId.value)
}



</script>

<template>
  <div class="sidebar">
    <div class="top">
      <div class="top-text">
        <div class="title h1">Track your order</div>
        <div class="text-l">This form allows you to search for tracking details from anywhere within Createx Tracking Service.</div>
      </div>

      <form class="order-search"
        @submit.prevent="onsubmit"
      >
        <InputGroup class="input-group"
          placeholder="order No"
          v-model="searchOrderId"
        >Order No</InputGroup>
        <Btn class="submit"
          type="submit"
        >Search</Btn>
      </form>
    </div>

    <div class="bottom">
      <div class="order-details">
        <div class="order-details-row">
          <b>Order No:</b>
          {{ orderId || '' }}
        </div>
        <div class="order-details-row">
          <b>Shiped via:</b>
          {{ shippingMethod }}
        </div>
        <div class="order-details-row">
          <b>Shipped on:</b>
          {{ orderDate ? dateToHumanCase(orderDate, 'long') : '' }}
        </div>
        <div class="order-details-row">
          <b>Destination:</b>
          {{ destination }}
        </div>
        <div class="order-details-row">
          <b>Expected date:</b>
          {{ expectedDate ? dateToHumanCase(expectedDate, 'long') : '' }}
        </div>
        <div class="order-details-row">
          <b>Status:</b>
          {{ orderStatus }}
        </div>
      </div>

      <CheckboxGroup class="notify-me"
        :disabled="!orderExists"
        v-model="isNotifyMe"
      >Notify me when order is delivered</CheckboxGroup>
    </div>

  </div>
</template>

<style scoped>
@import "~css/consts";


.sidebar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  /* gap: 2rem; */
  gap: var(--leng-40);
}
.top {
  flex: 1 1 min(100%, 30rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bottom {
  flex: 1 1 min(100%, 30rem);
}

.title {
  margin-bottom: 2.4rem;
}
.text-l {
  margin-bottom: 3.2rem;

  color: $color-gray-700;
}
.order-search {
  max-width: 100%;
  display: flex;
  align-items: end;

}
.input-group {
  flex: 1 1 auto;
}
.submit {
}
.order-details {
  padding: 2.4rem;
  margin-bottom: 4rem;

  box-shadow: $shadow-card;
  border: 1px solid $color-gray-300;
}
.order-details-row {
  display: flex;
  justify-content: space-between;

  margin-bottom: 1rem;

  color: $color-gray-700;
  & b {
    color: $color-gray-800;
  }
}
.notify-me {
}
</style>