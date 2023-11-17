<script setup lang="ts">


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
        <IconRounded icon="ArrowLeft"
          @click="prevSlide()"
        ></IconRounded>
        <IconRounded icon="ArrowRight"
          @click="nextSlide()"
        ></IconRounded>
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


$slider-arrows-padding: 3.2rem;

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
