<script setup lang="ts">
import { ref } from 'vue'

import useSlider from '~/composables/useSlider.js'

import Arrow from '~/components/icons/Arrow.vue';


const props = defineProps<{
  title: string
  isPaginationHidden?: true
  isArrowsHidden?: true
  activeClass?: string
}>()

const HTMLbody = ref<null | HTMLElement>(null)
const HTMLpagination = ref<null | HTMLElement>(null)


const slider = useSlider({
  HTMLbody,
  HTMLpagination,
  activeClass: props.activeClass || '_active'
})




</script>

<template>
  <div class="slider">
    <div class="slider-header">
      <h2 class="slider-title h1">{{ title || '' }}</h2>
      <div class="slider-arrows">
        <Arrow class="slider-arrow" 
          direction="left"
          @click="slider.prevSlide()" 
        />
        <Arrow class="slider-arrow" 
          direction="right"
          @click="slider.nextSlide()" 
        />
      </div>
    </div>

    <div class="slider-window">
      <div class="slider-items"
        ref="HTMLbody"
      >
        <slot></slot>
      </div>
    </div>

    <div class="slider-pagination"
      ref="HTMLpagination"
    >
      <div class="slider-pagination-item"
        v-for="i in slider.pagesCount.value" :key="i"
        @click="slider.setSlide(i - 1)"
      ></div>
    </div>
  </div>  
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';



.slider {
  overflow: hidden;
}
.slider-header {
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.slider-title {
  margin-top: 1rem;
  color: $color-gray-900;
}

.slider-arrows {
  display: flex;
  align-items: flex-end;
} 
.slider-arrow {
  flex: 0 0 auto;
  user-select: none;
}

/* slider items*/
.slider-window {
  margin-top: 6rem;
  min-height: 30rem;

  /* overflow: hidden; */
}

.slider-items {
  display: flex;
  gap: 3rem;

  transition: all ease .3s;

  :slotted(& > *) {
    flex: 1 0 auto;
  }

}

.slider-pagination {
  z-index: -1;
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > * + * {
    margin-left: 1rem;
  }
  

}
.slider-pagination-item {
  width: 3rem;
  height: 1px;

  cursor: pointer;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;


  border-radius: .4px;
  background: $color-gray-500;

  &:hover {
    background: $color-gray-800;
  }
  &._active {
    background: $color-gray-800;
  }

}


</style>