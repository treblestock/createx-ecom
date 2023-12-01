<script setup lang="ts">


</script>

<template>
  <div class="apply-promo">
    <InputGroup class="input-group"
      placeholder="Enter promo code"
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