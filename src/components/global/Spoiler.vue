<script setup lang="ts">
import {ref } from 'vue'

type cssUnit = 'px' | 'rem' | 'em' | '%'
const props = defineProps<{
  maxBodyHeight?: number | `${string}${cssUnit}`
  innerBorder?: boolean
  title?: string
  classBody?: string
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
      <slot name="title">{{ title }}</slot>
      <div class="plus"></div>
    </div>
    <div class="spoiler-header">
      <slot name="header"></slot>
    </div>
    <div class="spoiler-body" 
      :class="[{_fixedHeight: maxBodyHeight}, classBody]"
    >
      <slot>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae accusantium modi blanditiis non sapiente dolores? Natus quisquam assumenda voluptatibus aliquam minima necessitatibus! Explicabo ab amet doloribus soluta recusandae aut.</slot>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';


.spoiler {
  max-width: 60rem;
  /* padding: 1rem 0; */

  overflow: hidden;
}
.title {
  position: relative;

  padding: 2rem 0;
  color: $color-gray-900;
  background: $color-white;
  cursor: pointer;

  /* children */
  display: flex;
  justify-content: space-between;
  align-items: center;

}


.spoiler._active {
  .plus:after {
    display: none;
  }
}

.spoiler-header {
  margin: 0 .2rem 1.6rem .2rem;


  translate: 0 0;
  transition: all .2s linear;
  

  opacity: 1;

  position: relative;
  .spoiler:not(._active) & {
    z-index: -1;
    translate: 0 -100%;
    height: 0;
    margin: 0;

    opacity: 0;
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