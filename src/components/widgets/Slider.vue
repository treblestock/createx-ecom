<script setup lang="ts">
import Arrow from '~/components/icons/Arrow.vue'



const props = defineProps<{
  title?: string
  isPaginationHidden?: boolean
  isArrowsHidden?: boolean
}>()


const {
  activeInd,
  setSlide,
  prevSlide,
  nextSlide,
  SliderWindow,
  setItemsCount,
} = useSlider()


const itemsCount = ref(0)
function onItemsCountChanged(n: number) {
  itemsCount.value = n
}



</script>

<template>
  <div class="slider">
    <header class="slider-header">
      <slot name="header">
        <h2 class="slider-title h1">{{ title || '' }}</h2>
      </slot>
      <div class="slider-arrows"
        v-if="!isArrowsHidden"
      >
        <Arrow class="slider-arrow" 
          direction="left"
          @click="prevSlide()" 
        />
        <Arrow class="slider-arrow" 
          direction="right"
          @click="nextSlide()" 
        />
      </div>
    </header>

    <SliderWindow class="slider-window"
      :activeInd="activeInd"
      :setItemsCount="setItemsCount"
      itemsClass="slider-items"
      @onItemsCountChanged="onItemsCountChanged"
    >
      <slot></slot>
    </SliderWindow>

    <div class="slider-pagination"
      ref="HTMLpagination"
      v-if="!isPaginationHidden"
    >
      <div class="slider-pagination-item"
        v-for="i in itemsCount" :key="i"
        :class="{_active: i === activeInd + 1}"
        @click="setSlide(i - 1)"
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
  flex-wrap: wrap;
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
  margin-top: var(--leng-60);
  min-height: 30rem;

  /* overflow: hidden; */
}

:deep(.slider-items) {
  display: flex;
  gap: 3rem;

  transition: all ease .3s;

  & > * {
    flex: 1 0 auto;
  }
}

.slider-pagination {
  z-index: -1;
  margin-top: var(--leng-60);
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