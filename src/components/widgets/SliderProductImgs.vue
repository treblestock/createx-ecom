<script setup lang="ts">
import Arrow from '~/components/icons/Arrow.vue'




const props = defineProps<{
  imgs: string[]
}>()




const {
  activeInd,
  setSlide,
  prevSlide,
  nextSlide,
  setItemsCount,
} = useSlider()


setItemsCount(props.imgs.length)
watch(props.imgs, () => {
  setItemsCount(props.imgs.length)
})

const activeImg = computed(() => {
  return props.imgs[activeInd.value]
})
const BASE_URL = import.meta.env.BASE_URL
</script>

<template>
  <div class="slider">
    <div class="active-img">
      <img :src="BASE_URL + activeImg" >


      <div class="slider-arrows">
        <Arrow class="arrow" 
          direction="left"
          @click="prevSlide"
        />
        <Arrow class="arrow" 
          direction="right"
          @click="nextSlide"
        />
      </div>
    </div>


    <div class="slider-pagination">
      <div class="pagination-img img-a"
        v-for="img, ind in imgs" :key="img"
        :ind="ind"
        :class="{_active: ind === activeInd}"
        @click="() => setSlide(ind)"
      >
        <img :src="BASE_URL + img">
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "~css/consts";


.slider {
}
.active-img {
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;

  margin-bottom: 2rem;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    user-select: none;
  }
}
.slider-arrows {
  z-index: 1;
  position: absolute;
  top: 50%;
  width: 100%;
  padding: 0 var(--leng-32);

  display: flex;
  justify-content: space-between;
}
.arrow {
  background: $color-white;
}
.slider-pagination {
  display: flex;
  gap: 2rem;
}
.pagination-img {
  flex: 0 0 calc((100% - 2rem * 4) / 5);
  aspect-ratio: 1 / 1;
  & img {
    user-select: none;
    cursor: pointer;
  }


  &._active {
    box-shadow: 0 0 0 1px $color-green-dark;
  }
}

</style>