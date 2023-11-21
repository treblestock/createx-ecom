<script setup lang="ts">



</script>

<template>
  <div class="delivery-conditions">
    <div class="desctiprion">Free standard shipping on orders <b>over $35</b> before tax, plus free returns.</div>

    <div class="delivery-conditions-items">
      <div class="delivery-conditions-item header-item">
        <div>type</div>
        <div>how long</div>
        <div>how much</div>
      </div>

      <div class="delivery-conditions-item">
        <div>Standard delivery</div>
        <div>1-4 business days</div>
        <div>$4.50</div>
      </div>
      
      <div class="delivery-conditions-item">
        <div>Express delivery</div>
        <div>1 business day</div>
        <div>$10.00</div>
      </div>

      <div class="delivery-conditions-item">
        <div>Pick up in store</div>
        <div>1-3 business days</div>
        <div>Free</div>
      </div>

    </div>
  </div>  
</template>

<style scoped>
@import "~css/consts";

.delivery-conditions {
  color: $color-gray-900
}
.desctiprion {
  margin-bottom: 2.4rem;
}
.delivery-conditions-items {
  padding: 0 2rem;
}
.delivery-conditions-item {
  display: flex;
  justify-content: space-between;

  & > * {
    padding: 1.2rem 0;
    flex: 0 0 40%;

    &:last-child {
      flex: 0 0 20%;
    }
  }

  border-top: 1px solid $color-gray-400;
  
}
.header-item {
  text-transform: uppercase;
  color: $color-gray-700;

  border-top: none;
}


</style>