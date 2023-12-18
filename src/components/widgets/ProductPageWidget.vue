<script setup lang="ts">





</script>

<template>
  <div class="wrapper">
    <div class="header">
      <div class="name-and-art">
        <h1 class="h1">Basic hooded sweatshirt in pink</h1>
        <div class="art text-b">Art. No. <span class="art-number">183260098</span></div>
      </div>
      <div class="tabs">
        <AppLinkBtn class="tab btn_transparent-bordered"
          :to="{name: 'productGeneralInfo'}"
        >
          General info
        </AppLinkBtn>
        <AppLinkBtn class="tab btn_transparent-bordered"
          :to="{name: 'productDetails'}"
        >
          Product details
        </AppLinkBtn>
        <AppLinkBtn class="tab btn_transparent-bordered"
          :to="{name: 'productReviews'}"
        >
          Reviews
        </AppLinkBtn>
      </div>
    </div>
    <div class="tab-body">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';

.header {
}
.name-and-art {
  display: flex;
  justify-content: space-between;
  align-items: start;
  
  margin-bottom: 3.2rem;
}
.art {
  color: $color-gray-700;
  line-height: 3;
}
.art-number {
  color: $color-text;
}
.tabs {
  border-bottom: 1px solid $color-gray-300;
  padding-bottom: 2rem;
  margin-bottom: 3.2rem;

  display: flex;
  justify-content: start;
  gap: 1.2rem;
}
.tab {
  box-shadow: none;
  font-weight: 700;

  @media (width < 400px) {
    padding: 1.2rem var(--leng-32);
  }
}


</style>