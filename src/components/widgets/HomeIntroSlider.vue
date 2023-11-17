<script setup lang="ts">
import SliderFullscreen from '~/components/widgets/SliderFullscreen.vue'
import Collection from '~/components/widgets/Collection.vue'




const collections = useFetch(api.getCollections, [])


</script>

<template>
  <section class="section">
    <SliderFullscreen class="slider">
      <Collection class="collection _scaled" 
        v-for="collection in collections" :key="collection.title" 
        :="collection"
        :fzScale="2.25"
        classCollectionContainer="container"
        fullScreen
      />
    </SliderFullscreen>
  </section>
  
</template>

<style scoped>
@import '~css/consts';

.section {
  margin-bottom: 18rem;
}
:deep(.container) {
  display: flex;
  gap: 3rem;

  padding-top: 14rem;
}

</style>