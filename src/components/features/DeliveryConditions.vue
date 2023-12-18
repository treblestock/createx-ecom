<script setup lang="ts">



</script>

<template>
  <div class="delivery-conditions">
    <div class="desctiprion">Free standard shipping on orders <b>over $35</b> before tax, plus free returns.</div>

    <!-- <div class="delivery-conditions-items">
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

    </div> -->


    <table class="delivery-conditions-items">
      <tr class="delivery-conditions-item header-item">
        <th class="th">type</th>
        <th class="th">how long</th>
        <th class="th">how much</th>
      </tr>

      <tr class="delivery-conditions-item">
        <td>Standard delivery</td>
        <td>1-4 business days</td>
        <td>$4.50</td>
      </tr>
      
      <tr class="delivery-conditions-item">
        <td>Express delivery</td>
        <td>1 business day</td>
        <td>$10.00</td>
      </tr>

      <tr class="delivery-conditions-item">
        <td>Pick up in store</td>
        <td>1-3 business days</td>
        <td>Free</td>
      </tr>

    </table>


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
  width: 100%;
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
.th {
  text-align: left;
}
.header-item {
  text-transform: uppercase;
  color: $color-gray-700;

  border-top: none;
}


</style>