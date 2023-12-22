<script setup lang="ts">
import ProductCard from '~/components/widgets/ProductCard.vue'
import IconDelete from '~/assets/img/icons/decor/delete.svg'



import useStoreProfile from '~/stores/profile'
const profileStore = useStoreProfile()


const products = computed(() => profileStore.favouriteProducts)
var clearFavourite = profileStore.deleteFavouriteProducts

</script>

<template>
  <div class="favourite-page">
    <section class="favourite">
      <div class="favourite-header">
        <h1 class="h1">Wishlist</h1>
        <Btn class="_transparent _with-icon _delete"
          @click="clearFavourite"
        >
          <IconDelete class="icon-delete"
          ></IconDelete>
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
  </div>
</template>

<style scoped>
@import '~css/consts';

.favourite-page  {
  max-width: 81rem;
}

.favourite-header {
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