<script setup lang="ts">
import { ref, onMounted } from 'vue'

import useSliderLogic from '~/composables/useSliderLogic.js'


const props = defineProps<{
  title: string
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
  <div class="slider">
    <div class="header">
      <div class="title h1">{{ title }}</div>
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
      <div class="cursor-area"
        v-for="page, ind in pagesCount" :key="page"
        @click="sliderLogic.setSlide(ind)"
      >
        <div class="page-icon"></div>
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
.title {
}
.slider-body {
}
.slider-item {
}
.arrows {

}

.pagination {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
.cursor-area {
  height: 3rem;
  cursor: pointer;

  &._active {
    & .page-icon {
      background: $color-gray-800;
    }
  }
}
.page-icon {
  width: 3rem;
  height: 1px;

  background: $color-gray-500;
}


</style>
