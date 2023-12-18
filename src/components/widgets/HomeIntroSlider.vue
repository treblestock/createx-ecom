<script setup lang="ts">
import SliderFullscreen from '~/components/widgets/SliderFullscreen.vue'
import CollectionFullscreen from '~/components/widgets/CollectionFullscreen.vue'



const { data: collections } = useFetch(api.getCollections, [])


</script>

<template>
  <SliderFullscreen class="slider">
    <CollectionFullscreen class="collection" 
      v-for="collection in collections" :key="collection.title" 
      :="collection"
    />
  </SliderFullscreen>
  
</template>

<style scoped>
@import '~css/consts';


</style>