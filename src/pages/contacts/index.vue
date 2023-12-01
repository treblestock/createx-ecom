<script setup lang="ts">
import ContactsSidebar from '~/components/widgets/ContactsSidebar.vue'







</script>

<template>
  <div class="contacts">
    <div class="container">
      <ContactsSidebar class="sidebar"></ContactsSidebar>
      <RouterView class="subpage"></RouterView>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';

.contacts .container{
  padding: 4rem 2rem;

  display: flex;
  gap: 2rem;
}
.sidebar {
  flex: 0 0 28.5rem;
}
.reviews {
  flex: 1 1 auto;
}

.subpage {
  flex: 0 0 81rem;
}


</style>