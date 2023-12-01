<script setup lang="ts">



</script>

<template>
  <aside class="account-sidebar">
    <AppLink class="link h3"
      :to="{name: 'contactsFeedback'}"
    >Contact Us</AppLink>
    <AppLink class="link h3"
      :to="{name: 'contactsStores'}"
    >Outlet Stores</AppLink>
    <AppLink class="link h3"
      :to="{name: 'contactsFAQ'}"
    >FAQ</AppLink>
  </aside>
</template>

<style scoped>
@import "~css/consts";


.account-sidebar {
  max-width: 28.5rem;
}
.link {
  display: block;
  margin-bottom: 1rem;

  color: $color-gray-600;
  /* &:hover, &. {
    color: $color-green;
  } */
}

</style>