<script setup lang="ts">
import Collection from '~/components/widgets/Collection.vue'
import MailingSubscribtionSale from '~/components/widgets/MailingSubscribtionSale.vue'


const { data: collections } = useFetch(async () => {
  const allCollections = await api.getCollections()
  return allCollections.slice(1)
}, [])

</script>

<template>
  <div class="wrapper">
    <Collection class="collection"
      v-for="collection, ind in collections" :key="collection.title" 
      :="collection"
      :class="{_l: ind === 1 || ind === 2}"
    ></Collection>

    <MailingSubscribtionSale class="email collection"></MailingSubscribtionSale>

  </div>
  
</template>

<style scoped>
@import '~css/consts';

.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
}
.collection {
  flex: 1 0 max(calc(40% - .8rem), 36rem);

  min-height: 30rem;
  /* height: 40vw; */
  max-height: 50rem;

  &._l {
    flex: 2 0 max(calc(60% - .8rem), 36rem);
  }
}

.email {
  height: auto;
}

</style>