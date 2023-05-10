<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'



import useSliderLogic from '~/composables/useSliderLogic'

// @ts-ignore
const props = defineProps<{
  title?: string,
  label?: string,
}>()

const HTMLbody = ref<null | HTMLElement>(null)
const HTMLpagination = ref<null | HTMLElement>(null)
const itemsCount = ref(0)
onMounted(() => {
  if (!HTMLbody.value) return
  itemsCount.value = HTMLbody.value.children.length
})


const sliderLogic = useSliderLogic({
  HTMLbody,
  HTMLpagination,
})


function prevSlide() {
  sliderLogic.prevSlide()
} 
function nextSlide() {
  sliderLogic.nextSlide()
} 
function setSlide(event: Event) {
  if (!HTMLpagination.value) return
  const foundInd: number = [...HTMLpagination.value.children].indexOf(event.target as HTMLElement)
  if (!(foundInd + 1) ) return
  sliderLogic.setSlide(foundInd)
} 



</script>


<template>
  <div class="slider">
    <div class="slider__header">
      <div class="slider__label title_label">{{ label || 'label'}}</div>
      <h2 class="slider__title title">{{ title || 'title'}}</h2>
    </div>
    <div class="slider__body">
      <ArrowLeft class="slider__arrow" 
        @click="prevSlide" 
      />
      <div class="slider__window">
        <div class="slider__items"
          ref="HTMLbody"
        >
          <slot>
            <div></div>
          </slot>
        </div>
      </div>
      <ArrowRight class="slider__arrow" 
        @click="nextSlide" 
      />
    </div>
    <div class="slider__pagination"
      ref="HTMLpagination"
      @click="setSlide"
    >
      <template v-if="itemsCount">
        <div class="slider__pagination-item"
          :data-ind="i"
          v-for="i in itemsCount" :key="i"
        ></div>
      </template>
    </div>
  </div>  
</template>

<style scoped>
@import '~/assets/css/consts';
@import '~/assets/css/utils';

$color-gray-500: palegreen;
$color-carrot: #ccc;
$color-gray-800: black;

.slider {
  /* max-width: $container-inner-width; */
  max-width: 80%;
  overflow: hidden;

  user-select: none;
  &__header {
    text-align: center;

  }

  &__title {
    margin-top: 1rem;
  }

  &__body {
    margin-top: 6rem;

    display: flex;
    align-items: center;
    gap: 3rem;
  }
  &__arrow {
    flex: 0 0 auto;
  }

  &__window {
    min-height: 30rem;

    overflow: hidden;
  }

  &__items {
    display: flex;
    gap: 3rem;

    transition: all ease .3s;

    :slotted(& > *) {
      flex: 1 0 auto;
    }

  }

  &__pagination {
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & > * + * {
      margin-left: 1rem;
    }
    

  }
  &__pagination-item {
    cursor: pointer;
    width: 3rem;
    height: 2rem;

    border-radius: .4px;
    background: $color-gray-500;

    &:hover {
      background: $color-carrot;
    }
    &._active {
      background: $color-gray-800;
    }

  }
}




</style>



