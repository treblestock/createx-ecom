<script setup lang="ts">
import PopupManager from '~/components/features/PopupManager.vue'


// required to make store active and sign in
import useStoreAuth from '~/stores/auth'
const authStore = useStoreAuth()
// fetch products to make it possible perform sync fetching on client
import useStoreProducts from '~/stores/products'
const productsStore = useStoreProducts()


</script>

<template>
  <div class="app">
    <PopupManager></PopupManager>
    <RouterView></RouterView>
  </div>  
</template>

<style>
@import '~css/null';
@import '~css/consts';
@import '~css/fonts';
@import '~css/global';


</style>

<style scoped>

</style>