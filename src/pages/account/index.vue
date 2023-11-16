<script setup lang="ts">
import AccountSidebar from '~/components/widgets/AccountSidebar.vue'









</script>

<template>
  <div class="account">
    <div class="container">
      <AccountSidebar class="sidebar"></AccountSidebar>
      <RouterView class="reviews"></RouterView>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';

.account .container{
  padding: 4rem 2rem;

  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
.sidebar {
  flex: 0 0 28.5rem;
}
.reviews {
  flex: 1 1 auto;
}


</style>