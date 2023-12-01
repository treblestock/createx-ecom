<script setup lang="ts">
import OrderInfo from '~/components/widgets/OrderInfo.vue'
import IconDelete from '~/assets/img/icons/decor/delete.svg'


import useStoreProfile from '~/stores/profile'
const profileStore = useStoreProfile()


const orders = computed(() => profileStore.orders)






</script>

<template>
  <div class="orders-page">
    <section class="orders-section">
      <div class="orders-header">
        <h1 class="h1">My orders</h1>
        
      </div>

      <div class="orders">
        <OrderInfo class="order"
          v-for="order in orders" :key="order.id" 
          :="order"
        ></OrderInfo>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import '~css/consts';

.orders-page  {
  max-width: 81rem;
}

.orders-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;

  margin-bottom: 4rem;
}

.order {
  max-width: 100%;
}

._delete {
  color: $color-red;
}

</style>