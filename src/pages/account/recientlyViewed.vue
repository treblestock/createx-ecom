<script setup lang="ts">
import ProductCard from '~/components/widgets/ProductCard.vue'
import IconDelete from '~/assets/img/icons/decor/delete.svg'


import useStoreProfile from '~/stores/profile'
const profileStore = useStoreProfile()


const products = computed(() => profileStore.recientlyViewedProducts)
var clearRecientlyViewed = profileStore.deleteRecientlyViewedProdcts


</script>

<template>
  <main class="reciently-viewed-page">
    <section class="reciently-viewed">
      <div class="reciently-viewed-header">
        <h1 class="h1">Recently viewed</h1>
        <Btn class="_transparent _with-icon _delete"
          @click="clearRecientlyViewed"
        >
          <IconDelete class="icon-delete"></IconDelete>
          Delete all
        </Btn>
      </div>

      <div class="product-cards grid">
        <ProductCard class="product-card"
          v-for="product in products" :key="product.id" 
          :="product"
        ></ProductCard>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import '~css/consts';

.reciently-viewed-page  {
  max-width: 81rem;
}

.reciently-viewed-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;

  margin-bottom: 4rem;
}

._delete {
  color: $color-red;
}
.icon-delete {
}
.product-cards {
  /* display: flex;
  flex-wrap: wrap; */
  gap: 3rem;

  --min-width: 28rem;
}
.product-card {
  /* flex: 0 0 39rem; */
}

</style>