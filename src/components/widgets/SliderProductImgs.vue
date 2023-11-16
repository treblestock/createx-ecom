<script setup lang="ts">
import Img from '~/components/global/Img.vue'




const props = defineProps<{
  imgs: string[]
}>()


const {
  activeInd,
  setSlide,
  prevSlide,
  nextSlide,
  SliderWindow,
  setItemsCount,
} = useSlider2()



</script>

<template>
  <div class="img-slider">
    <SliderWindow class="slider"
      :activeInd="activeInd"
      :setItemsCount="setItemsCount"
    >
      <div class="img"
        v-for="img, ind in imgs" :key="img"
      >
        <Img :src="img" alt=""/>
      </div>
    </SliderWindow>
  </div>
</template>

<style scoped>
@import "~css/consts";


.img {
  margin-right: 2rem;
}

.slider {
  width: 30rem;
}
</style>