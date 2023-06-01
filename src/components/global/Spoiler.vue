<script setup lang="ts">
import {ref } from 'vue'

type cssUnit = 'px' | 'rem' | 'em' | '%'
const props = defineProps<{
  maxBodyHeight?: number | `${string}${cssUnit}`
  innerBorder?: boolean
}>()

const exactMaxBodyHeight = computed(() => {
  return typeof props.maxBodyHeight === 'number'
    ? props.maxBodyHeight + 'px'
    : props.maxBodyHeight
})




const spoilerHtml = ref<HTMLElement | null>(null)

function togglespoiler() {
  spoilerHtml.value?.classList.toggle('_active')
}

</script>

<template>
  <div class="spoiler"
    :class="{'_with-border': innerBorder}"
    ref="spoilerHtml"
  >
    <div class="title text_b"
      @click="togglespoiler"
    >
      <slot name="title">some tilte</slot>
      <div class="plus"></div>
    </div>
    <div class="spoiler-body" 
      :class="{_fixedHeight: maxBodyHeight}"
    >
      <slot>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae accusantium modi blanditiis non sapiente dolores? Natus quisquam assumenda voluptatibus aliquam minima necessitatibus! Explicabo ab amet doloribus soluta recusandae aut.</slot>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';


.spoiler {
  max-width: 60rem;
  padding: 1rem 0;
}
.title {
  position: relative;

  padding: 1rem 0;
  color: $color-gray-900;

  /* children */
  display: flex;
  justify-content: space-between;
  align-items: center;

}


.spoiler:not(._active) {
  .plus:after {
    display: none;
  }
}



.spoiler-body {
  padding: 1rem 0;
  transition: all .2s linear;


  .spoiler:not(._active) & {
    max-height: 0;
    font-size: 0;
    line-height: 0;
    padding: 0;
    margin: 0;
    border: none;
  }
}



._with-border {
  border-top: 1px solid $color-gray-400;
}


/* spoiler max height */
._fixedHeight {
  max-height: v-bind(exactMaxBodyHeight);
  overflow: auto;
}


</style>