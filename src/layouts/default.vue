<script setup lang="ts">
import Header from '~/components/widgets/Header.vue'
import Footer from '~/components/widgets/Footer.vue'


</script>

<template>
  <div class="layout">
    <Header class="header"></Header>
    <div class="layout-body" id="layout-body">
      <main class="main">
        <RouterView></RouterView>
      </main>
      <Footer class="footer"></Footer>
    </div>
  </div>
</template>

<style  scoped>
@import '~css/consts';

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

}
.header {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
}
.layout-body {
  translate: 0 var(--header-height);
  flex: 1 0 calc(100vh - var(--header-height));
}
.main {
  min-height: calc(100vh - var(--header-height));
}
.footer {
}


</style>