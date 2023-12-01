<script setup lang="ts">
import type { Order } from '~/types';
import { dateToHumanCase } from '~/utils'

const props = defineProps<{
  orderId?: string
}>()


const orderId = ref<string | undefined>(props.orderId)

import useStoreProfile from '~/stores/profile'
const profileStore = useStoreProfile()


const orderTracking = computed<Order['tracking'] | undefined>(() => {
  if (!inputOrderId.value) return undefined
  return profileStore.findOrder(inputOrderId.value)?.tracking
})



// form
const inputOrderId = ref<string>(props.orderId || '')

function onsubmit() {
  orderId.value = inputOrderId.value
}
const isNotifyMe = ref(false)





</script>

<template>
  <div class="page">
    <div class="container">
      <aside class="sidebar">
        <div class="title h1">Track your order</div>
        <div class="text_l">This form allows you to search for tracking details from anywhere within Createx Tracking Service.</div>

        <form class="order-search"
          @submit.prevent="onsubmit"
        >
          <InputGroup class="input-group"
            placeholder="order No"
            v-model="inputOrderId"
          >Order No</InputGroup>
          <Btn class="submit"
            type="submit"
          >Search</Btn>
        </form>

        <div class="order-details">
          <div class="order-details-row">
            <b>Order No:</b>
            {{ orderId || '' }}
          </div>
          <div class="order-details-row">
            <b>Shiped via:</b>
            {{ orderTracking && orderTracking.shipping.shippingMethod }}
          </div>
          <div class="order-details-row">
            <b>Shipped on:</b>
            {{ orderTracking && orderTracking.orderDate }}
          </div>
          <div class="order-details-row">
            <b>Destination:</b>
            {{ orderTracking && `${orderTracking?.shipping.city}, ${orderTracking.shipping.country}`}}
          </div>
          <div class="order-details-row">
            <b>Expected date:</b>
            {{ orderTracking && orderTracking.expectedDate }}
          </div>
          <div class="order-details-row">
            <b>Status:</b>
            {{ orderTracking && orderTracking.status }}
          </div>
        </div>

        <CheckboxGroup class="notify-me"
          :disabled="!orderTracking"
          v-model="isNotifyMe"
        >Notify me when order is delivered</CheckboxGroup>

      </aside>



      <div class="tracking-history">
        <div class="titles text_lb table-row">
          <div class="record-status">Status</div>
          <div class="record-location">Location</div>
          <div class="record-date">Date</div>
          <div class="record-time">Time</div>
        </div>

        <div class="history-record table-row"
          v-for="record in orderTracking?.history" :key="record.status"
        >
          <div class="record-status">{{ record.status }}</div>
          <div class="record-location">{{ record.location }}</div>
          <div class="record-date">{{ dateToHumanCase(record.time, 'long') }}</div>
          <div class="record-time">2:00 pm</div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';



.page {
  padding: 4.8rem 0;
}
.container {
  display: flex;
  gap: 13.5rem;

}
.sidebar {
  flex: 0 0 39rem;
}
.title {
  margin-bottom: 2.4rem;
}
.text_l {
  margin-bottom: 3.2rem;

  color: $color-gray-700;
}
.order-search {
  max-width: 100%;
  display: flex;
  align-items: end;

  margin-bottom: 4.8rem;
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

/* table */
.tracking-history {
  width: 100%;
  padding-left: 4rem;
}
.table-row {
  display: flex;
  gap: 3rem;
}

.record-status, 
.record-location {
  flex: 0 0 18rem;
}
.record-date {
  flex: 0 0 14rem;
}
.record-time {
  flex: 0 0 7.5rem;
}
.titles {
  color: $color-gray-900;
  padding-bottom: 2rem;
}
.history-record {
  padding: 2rem 0;
  border-top: 1px solid $color-gray-300;

  color: $color-gray-800;

  /* decor */
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: -4rem;

    width: 0.6rem;
    height: 0.6rem;
    background: $color-green;
    border-radius: 50%;
  }
}

</style>