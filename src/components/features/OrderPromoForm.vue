<script setup lang="ts">
import useStoreOrder from '~/stores/order'
const orderStore = useStoreOrder()

const promocode = computed({
  get: () => orderStore.promocode,
  set: (value) => orderStore.promocode = value,
})

</script>

<template>
  <div class="apply-promo">
    <InputGroup class="input-group"
      placeholder="Enter promo code"
      v-model="promocode"
    >
      <span class="span text">Apply a promo code</span>
    </InputGroup>
    <Btn class="submit">Apply</Btn>
  </div>
</template>

<style scoped>
@import "~css/consts";
.apply-promo {
  display: flex;
  align-items: end;
}
.span {
  color: $color-gray-800;
}
.input-group {
  flex: 1 1 auto;
}
.submit {
  width: 13rem;
}


</style>