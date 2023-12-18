<script setup lang="ts">
import StoreCard from '~/components/widgets/StoreCard.vue'

const { data: stores } = useFetch(api.getOfflineStores, [])


</script>

<template>
  <div class="stores grid">
    <StoreCard class="store"
      v-for="store in stores" :key="store.address" 
      :="store"
    ></StoreCard>

  </div>  
</template>

<style scoped>
@import '~css/consts';
.stores {
  gap: 3rem;
  justify-items: center;

  --min-width: 30rem;
}

.store {
  max-width: 39rem;
}

</style>