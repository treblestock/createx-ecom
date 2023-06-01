<script setup lang="ts">
import { ref, onMounted } from 'vue'

import useSliderLogic from '~/composables/useSliderLogic.js'


const props = defineProps<{
  isPaginationHidden?: true
  isArrowsHidden?: true
  activeClass?: string
}>()

const HTMLbody = ref<null | HTMLElement>(null)
const HTMLpagination = ref<null | HTMLElement>(null)
const pagesCount = ref<number>(0)


onMounted(() => { // todo: mutation observer is prefered 
  const itemsCount = HTMLbody.value?.children.length || 0
  pagesCount.value = itemsCount
})

const sliderLogic = useSliderLogic({
  HTMLbody,
  HTMLpagination,
  activeClass: props.activeClass || '_active'
})






</script>

<template>
  <div class="slider _fullscreen">
    <div class="header">
      <div class="arrows"
        v-if="!isArrowsHidden"
      >
        <IconRounded icon="ArrowLeft"
          @click="sliderLogic.prevSlide()"
        ></IconRounded>
        <IconRounded icon="ArrowRight"
          @click="sliderLogic.nextSlide()"
        ></IconRounded>
      </div>
    </div>

    <div class="body"
      ref="HTMLbody"
    >
      <slot></slot>
    </div>

    <div class="pagination"
      v-if="!isPaginationHidden"
      ref="HTMLpagination"
    >
      <div class="container">
        <div class="page"
          v-for="page, ind in pagesCount" :key="page"
          @click="sliderLogic.setSlide(ind)"
        >
          <div class="page-count h3">0{{ ind }}</div>
          <div class="page-icon"></div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
@import '~css/consts';



.slider {
  
}
.slider-header {
  display: flex;
  justify-content: space-between;
}
.slider-body {
  width: 100%;
  height: 100%;
}
.slider-item {
}

.arrows {
  width: 100%;

  /* pos */
  z-index: 1;
  position: absolute;
  left: 0;
  top: 50%;

  /* structure */
  display: flex;
  justify-content: space-between;
}

.pagination {
  width: 100%;
  /* pos */
  z-index: 1;
  position: absolute;
  left: 0;
  top: 75%;

  /* structure */
  & .container {
    display: flex;
    align-items: center;
    gap: 1rem;

    text-align: left;
  }
}
.page {
  cursor: pointer;

  &._active {
    & .page-count {
      color: $color-gray-800;
    }
    & .page-icon {
      background: $color-gray-800;
    }
  }
}
.page-count {
  margin-bottom: 1.2rem;
  text-align: left;
}
.page-icon {
  width: 3rem;
  height: 1px;

  background: $color-gray-500;
}


</style>
