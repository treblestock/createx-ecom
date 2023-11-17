<script setup lang="ts">
import Collection from '~/components/widgets/Collection.vue'
import MailingSubscribtionSale from '~/components/widgets/MailingSubscribtionSale.vue'


const collections = useFetch(async () => {
  const allCollections = await api.getCollections()
  return allCollections.slice(1)
}, [])

</script>

<template>
  <section class="section">
    <div class="container">
      <Collection class="collection"
        v-for="collection, ind in collections" :key="collection.title" 
        :="collection"
        :class="{_l: ind === 1 || ind === 2}"
      ></Collection>

    <MailingSubscribtionSale></MailingSubscribtionSale>

    </div>
  </section>
  
</template>

<style scoped>
@import '~css/consts';


.section {
  margin-bottom: 18rem;
}
.container {
  max-width: 100%;
  padding: 0 3rem;


  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1.6rem;
}
.collection {
  height: 50rem;
  position: relative;
  padding: 6rem;

  grid-column: span 2;
  &._l {
    grid-column: span 3;
  }
}

</style>