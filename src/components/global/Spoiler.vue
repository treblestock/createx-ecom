<script setup lang="ts">
import {ref } from 'vue'

const sliderBody = ref<HTMLElement | null>(null)

function toggleSlider() {
  sliderBody.value?.classList.toggle('_active')
}

</script>

<template>
  <div class="slider">
    <div class="slider__title"
      @click="toggleSlider"
    >
      <div class="slider__icon">&#x2304;</div>
      <slot name="title">some tilte</slot>
    </div>
    <div class="slider__body" ref="sliderBody">
      <slot>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae accusantium modi blanditiis non sapiente dolores? Natus quisquam assumenda voluptatibus aliquam minima necessitatibus! Explicabo ab amet doloribus soluta recusandae aut.</slot>
    </div>
  </div>
</template>

<style scoped>
@import '~/assets/css/consts';


.slider {
  width: 60rem;

  &__title {
    position: relative;

    border: 1px solid #000;
    padding: 1rem 2rem;
  }

  &__icon {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-75%);
  }

  &__body {
    padding: 1rem 2rem;
    transition: all .2s linear;
    border: 1px solid #000;
    border-top: none;


    &:not(._active) {
      font-size: 0;
      line-height: 0;
      padding: 0;
      margin: 0;
      border: none;
    }
  }
}


</style>