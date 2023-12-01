<script setup lang="ts">


</script>

<template>
  <div class="order-total-price">
    <div class="total-price-item title h4">Order totals</div>
    <div class="total-price-item costs">
      <div class="cost-row text_b">
        <div>Subtotal:</div>
        <div>$198.65</div>
      </div>
      <div class="cost-row">
        <div>Shipping costs:</div>
        <div>$25.00</div>
      </div>
      <div class="cost-row">
        <div>Discount:</div>
        <div>—</div>
      </div>
      <div class="cost-row">
        <div>Estimated sales tax:</div>
        <div>$6.35</div>
      </div>
    </div>
    <div class="total-price-item total text_xl">
      <div>Order total:</div>
      <div>$230.00</div>
    </div>
  </div>  
</template>

<style scoped>
@import "~css/consts";
.order-total-price {
  background: $color-gray-200;
}
.total-price-item {
  padding: 2.4rem;
  & + & {
    border-top: 1px solid $color-gray-300;
  }
}
.title {
  color: $color-gray-900;
}
.costs {
  color: $color-gray-800;
}
.cost-row {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: .7rem;

  color: $color-gray-800;

}
.total {
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: $color-gray-900;
  font-weight: 700;
}


</style>