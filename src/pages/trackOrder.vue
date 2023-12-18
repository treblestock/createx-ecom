<script setup lang="ts">
import type { Order } from '~/types'
import TrackOrderSidebar from '~/components/widgets/TrackOrderSidebar.vue'
import OrderHistory from '~/components/widgets/OrderHistory.vue'

const props = defineProps<{
  orderId?: string
}>()


const orderId = ref<string | undefined>(props.orderId)

import useStoreProfile from '~/stores/profile'
const profileStore = useStoreProfile()


const orderTracking = computed<Order['tracking'] | undefined>(() => {
  if (!orderId.value) return undefined
  return profileStore.findOrder(orderId.value)?.tracking
})
const orderDestination = computed(() => {
  return orderTracking.value 
    ? `${orderTracking.value.shipping.city}, ${orderTracking.value.shipping.country}`
    : ''
})

// form
function onsubmit(newSearchOrderId: string) {
  orderId.value = newSearchOrderId
}
const isNotifyMe = ref(false)





</script>

<template>
  <div class="page">
    <div class="container">

      <TrackOrderSidebar class="sidebar"
        :orderExists="Boolean(orderTracking)"
        :orderId="orderTracking && orderId"
        :shippingMethod="orderTracking?.shipping.shippingMethod"
        :orderDate="orderTracking?.orderDate"
        :destination="orderDestination"
        :expectedDate="orderTracking?.expectedDate"
        :orderStatus="orderTracking?.status"
        v-model:isNotifyMe="isNotifyMe"
        @searchUpdate="onsubmit"
      ></TrackOrderSidebar>

      <div class="order-history">
        <OrderHistory class="order-history-table"
          :orderHistory="orderTracking?.history || []"
        ></OrderHistory>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/lib/customWebkitScrollbar';



.page {
  padding: 4.8rem 0;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--leng-60);
  justify-content: space-between;

}
.sidebar {
  flex: 1 0 min(100%, 39rem);
  margin: 0 auto;
}

.order-history {
  flex: 99 1 50rem;
  overflow: auto;

  @mixin custom-scrollbar;
}
.order-history-table {
  margin: 0 auto;
}

</style>