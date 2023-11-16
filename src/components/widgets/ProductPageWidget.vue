<script setup lang="ts">





</script>

<template>
  <section class="section">
    <div class="container">
      <div class="header">
        <div class="name-and-art">
          <div class="h1">Basic hooded sweatshirt in pink</div>
          <div class="art text_b">Art. No. <span class="art-number">183260098</span></div>
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
  </section>
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
}


</style>