<script setup lang="ts">
import type { CartRecord, OrderStatus, OrderTracking } from '~/types'
import Price from '~/components/features/Price.vue'
import Date from '~/components/features/Date.vue'
import CartItemStatic from '~/components/features/CartItemStatic.vue'

// Props<Order>
const props = defineProps<{
  id: string
  cart: CartRecord[]
  tracking: OrderTracking
  comment?: string
  promocode?: string
}>()


import useStoreCart from '~/stores/cart'

const cartStore = useStoreCart()


const costs = computed(() => cartStore.calcCartTotal(props.cart, props.tracking.shipping.shippingMethod))



const orderStatus = computed<OrderStatus>(() => {
  if (props.tracking.status === 'Delivered' || props.tracking.status === 'Canceled') return props.tracking.status
  return 'In progress'
})



// css
const statusClasess: Record<OrderStatus, string> = {
  "In progress": '_in-progress',
  "Delivered": '_delivered',
  "Canceled": '_canceled'
}
</script>

<template>
  <Spoiler class="order-record">

    <template #title>
      <div class="order-header">
        <AppLink class="order-id"
          @click.stop=""
          :to="{name: 'trackOrder', params: {orderId: id}}"
        ># {{ id }}</AppLink>
        <Date class="order-date"
          :date="tracking.orderDate"
        ></Date>

        <div class="order-status label text-s"
          :class="statusClasess[orderStatus]"
        >{{ orderStatus }}</div>
        <Price class="order-total"
          :price="costs.total"
        />
      </div>
    </template>

    <template #default>
      <div class="order-body">
        <CartItemStatic class="cart-item"
          v-for="cartItem in cartStore.fetchCartItemData(cart)" :key="cartItem.productId"
          :="cartItem"
        ></CartItemStatic>
        <div class="cart-total">
          <div class="cart-total-record">
            <div class="cart-total-record-name">Subtotal: </div>
            <Price class="total-price"
              :price="costs.subtotal"
            ></Price>
          </div>
          <div class="cart-total-record">
            <div class="cart-total-record-name">Shipping: </div>
            <Price class="total-price"
              :price="costs.shippingCost"
            ></Price>
          </div>
          <div class="cart-total-record">
            <div class="cart-total-record-name">Tax: </div>
            <Price class="total-price"
              :price="costs.tax"
            ></Price>
          </div>
          <div class="cart-total-record">
            <div class="cart-total-record-name">Total: </div>
            <Price class="total-price"
              :price="costs.total"
            ></Price>
          </div>
        </div>

        <div class="order-track-redirect">
          <span class="text-b">You can track your order here</span>
          <AppLinkBtn class="btn_outlined"
            :to="{name: 'trackOrder', params: { orderId: id}}"
          >Order Tracking</AppLinkBtn>
        </div>
      </div>
    </template>
  </Spoiler>  
</template>

<style scoped>
@import "~css/consts";


.order-record {
  border-bottom: 1px solid $color-gray-300;
  /* padding: 0; */
}
.order-header {
  /* padding: 2.4rem 0; */
  width: 100%;
  padding-right: 0.5rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center; 
  justify-content: space-between;
  column-gap: var(--leng-60);
}

.left {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: var(--leng-40);
}
.right {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: var(--leng-60);
}

.order-id {
  flex: 0 0 16rem;
  /* margin-right: 3rem; */

  .order-record._active & {
    color: $color-green;
  }
}
.order-date {
  flex: 0 0 17rem;
  /* margin-right: 7rem; */
}
.order-status {
  flex: 0 0 9rem;

  height: 2.4rem;
}
.order-total {
  flex: 1 0 10rem;
}


._in-progress {
  background: $color-blue;

}
._delivered {
  background: $color-green-light;

}
._canceled {
  background: $color-red;

}

/* slider-body */
.order-body {
  padding-bottom: 2.4rem;
}
.cart-item {
  border-bottom: 1px solid $color-gray-300;
}
.cart-item, .cart-total {
  background: $color-gray-200;
}

.cart-total {
  padding: 1.6rem 2.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 2rem;
  row-gap: 1rem;

  margin-bottom: 2.4rem;

  color: $color-gray-700;

  @media (width < 400px) {
    flex-wrap: wrap;
  }
  @media (width < 360px) {
    flex-direction: column;
    & .cart-total-record {
      width: 100%;
      justify-content: space-between;
    }
    
  }
}
.cart-total-record {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.cart-total-record-name {
  padding-left: 10px;
}
.total-price {
  display: inline;
  margin-left: 1rem;
}

.order-track-redirect {
  display: flex;
  justify-content: end;
  align-items: center;

  gap: 2rem;


  & span {
    color: $color-gray-900;
  }
}


</style>