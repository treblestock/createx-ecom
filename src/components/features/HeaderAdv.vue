<script setup lang="ts">


// todo: make dynamic data fetch
const adv = {
  productId: 2,
  img: 'clothes/product' + 2,
  title: 'Shirt with insertion lace trims',
}







</script>

<template>
  <div class="adv"
    v-if="adv"
    v-once
  >
    <div class="img"
      :src="adv.img"
    ></div>
    <div class="title">{{ adv.title }}</div>
    <AppLinkBtn class="redirect-btn" outlined
      :to="{
        name: 'product',
        params: {
          id: adv.productId,
        }
      }"
    >See offers</AppLinkBtn>
  </div>  
</template>

<style scoped>
@import '~css/consts';



</style>