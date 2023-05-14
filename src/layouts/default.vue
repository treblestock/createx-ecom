<script setup lang="ts">


</script>

<template>
  <div class="layout">
    <header class="header">
      <AppLink :to="{name: 'account'}">account</AppLink>
      <AppLink :to="{name: 'accountProfile'}">accountProfile</AppLink>
      <AppLink :to="{name: 'accountOrders'}">accountOrders</AppLink>
      <AppLink :to="{name: 'accountFavourite'}">accountFavourite</AppLink>
      <AppLink :to="{name: 'accountRecentlyViewed'}">accountRecentlyViewed</AppLink>
      <AppLink :to="{name: 'accountReviews'}">accountReviews</AppLink>
      <AppLink :to="{name: 'blog'}">blog</AppLink>
      <AppLink :to="{name: 'blogPost', params: {id: 1} }">blogPost</AppLink>
      <AppLink :to="{name: 'checkout'}">checkout</AppLink>
      <AppLink :to="{name: 'contacts'}">contacts</AppLink>
      <AppLink :to="{name: 'contactsFeedback'}">contactsFeedback</AppLink>
      <AppLink :to="{name: 'contactsOutletStores'}">contactsOutletStores</AppLink>
      <AppLink :to="{name: 'contactsFAQ'}">contactsFAQ</AppLink>
      <AppLink :to="{name: 'home'}">home</AppLink>
      <AppLink :to="{name: 'products'}">products</AppLink>
      <AppLink :to="{name: 'product', params: {id: 1} }">product</AppLink>
      <AppLink :to="{name: 'trackOrder'}">trackOrder</AppLink>
    </header>

    <RouterView></RouterView>

  </div>
</template>

<style  scoped>
@import '~/assets/css/consts';

.header {
  .link {
    display: block;
    margin-bottom: 1rem;
  }
}


</style>