<script setup lang="ts">
import IconArrow from '~/components/icons/Arrow.vue'


const props = defineProps<{
  isPaginationHidden?: boolean
  isArrowsHidden?: boolean
  activeClass?: string
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
  <div class="slider _fullscreen">

    <SliderWindow class="slider-body"
      :activeInd="activeInd"
      :setItemsCount="setItemsCount"
      itemsClass="slider-items"
      @onItemsCountChanged="onItemsCountChanged"
    >
      <slot></slot>
    </SliderWindow>

    <div class="slider-toolbar">
      <div class="arrows"
        v-if="!isArrowsHidden"
      >
        <IconArrow class="icon-arrow"
          direction="left"
          @click="prevSlide"

        ></IconArrow>
        <IconArrow class="icon-arrow"
          direction="right"
          @click="nextSlide"
        ></IconArrow>
      </div>
      <div class="pagination"
        v-if="!isPaginationHidden"
      >
        <div class="container"
          ref="HTMLpagination"
        >
          <div class="page"
            v-for="i in itemsCount" :key="i"
            :class="{_active: i === activeInd + 1}"
            @click="setSlide(i - 1)"
          >
            <div class="page-count h3">0{{ i }}</div>
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



.slider {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
}
/* items */
.slider-body {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  /* children */
  overflow: hidden;

}
.slider :deep(.slider-items) {
  height: 100%;
  display: flex;
  & > * {
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
  z-index: 1;
  height: 50%;
  width: 100%;

  /* children */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.arrows {
  /* width: calc(100% - 2 * 3.2rem ); */
  width: 100%;
  padding: 0 var(--leng-30);
  margin: 0 auto;
  /* structure */
  display: flex;
  justify-content: space-between;

  & > * {
    cursor: pointer;
    user-select: none;
  }
}

.icon-arrow {
  width: 3rem;
  height: 3rem;
  
  color: $color-gray-800;
  background: $color-white !important;
  &:hover {
    color: $color-gray-800 !important;
  }
}
/* pagination */
.pagination {
  padding: 0 var(--leng-60);

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
  flex: 0 0 min(25%, 18rem);

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
  height: 1px;

  background: $color-gray-500;
}


</style>
