<script setup lang="ts">



</script>

<template>
  <div class="account-sidebar">
    <AppLink class="link h3"
      :to="{name: 'contactsFeedback'}"
    >Contact Us</AppLink>
    <AppLink class="link h3"
      :to="{name: 'contactsStores'}"
    >Outlet Stores</AppLink>
    <AppLink class="link h3"
      :to="{name: 'contactsFAQ'}"
    >FAQ</AppLink>
  </div>
</template>

<style scoped>
@import "~css/consts";


.account-sidebar {
}
.link {
  display: block;
  margin-bottom: 1rem;

  text-wrap: nowrap;
  color: $color-gray-600;
}

</style>