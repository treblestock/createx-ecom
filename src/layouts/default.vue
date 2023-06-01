<script setup lang="ts">
import Header from '~/components/sections/Header.vue'
import Footer from '~/components/sections/Footer.vue'
import {onBeforeRouteLeave, onBeforeRouteUpdate} from 'vue-router'

</script>

<template>
  <div class="layout">
    <Header class="header"></Header>
    <main class="main">
      <RouterView></RouterView>
    </main>
    <Footer class="footer"></Footer>
  </div>
</template>

<style  scoped>
@import '~css/consts';

$header-height: 12.8rem;
$header-height-full: 16.6rem;
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  padding-top: $header-height-full;  
}
.header {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;

  height: $header-height;
}
.main {
  /* flex: 1 1 auto; */ /*last value*/ 
  flex: 1 0 calc(100vh - $header-height-full);
}
.footer {

}


</style>