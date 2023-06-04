<script setup lang="ts">
import { ref } from 'vue'

import useSlider from '~/composables/useSlider.js'


const props = defineProps<{
  isPaginationHidden?: boolean
  isArrowsHidden?: boolean
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
  <div class="slider _fullscreen">

    <div class="slider-body">
      <div class="slider-items"
        ref="HTMLbody"
      >
        <slot></slot>
      </div>
    </div>

    <div class="slider-toolbar">
      <div class="arrows"
        v-if="!isArrowsHidden"
      >
        <IconRounded icon="ArrowLeft"
          @click="slider.prevSlide()"
        ></IconRounded>
        <IconRounded icon="ArrowRight"
          @click="slider.nextSlide()"
        ></IconRounded>
      </div>
      <div class="pagination"
        v-if="!isPaginationHidden"
      >
        <div class="container"
          ref="HTMLpagination"
        >
          <div class="page"
            v-for="ind in slider.pagesCount.value" :key="ind"
            @click="slider.setSlide(ind - 1)"
          >
            <div class="page-count h3">0{{ ind }}</div>
            <div class="page-icon"></div>
          </div>
        </div>
      </div>

      <div class="filler"></div>
    </div>
  </div>
  
</template>

<style scoped>
@import '~css/consts';


$slider-arrows-padding: 3.2rem;

.slider {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
}
/* items */
.slider-body {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  /* children */
  overflow: hidden;
}
.slider-items {
  height: 100%;
  display: flex;

  :slotted( > *) {
    flex: 0 0 100%;
    height: 100%;
  }

  /* animation */
  transition: all .5s ease;
}
.slider-item {
}

/* upper-layer */
.slider-toolbar {
  height: 50%;
  width: 100%;

  /* children */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.arrows {
  width: calc(100% - 2 * ($slider-arrows-padding) );
  margin: 0 auto;
  /* structure */
  display: flex;
  justify-content: space-between;

  & > * {
    cursor: pointer;
    user-select: none;
  }
}
/* pagination */
.pagination {

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
  width: 18rem;
  height: 1px;

  background: $color-gray-500;
}


</style>
