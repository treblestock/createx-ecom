<script setup lang="ts">
type cssUnit = 'px' | 'rem' | 'em' | '%'
const props = withDefaults(defineProps<{
  maxBodyHeight?: number | `${string}${cssUnit}`
  innerBorder?: boolean
  title?: string
  classTitle?: string
  classBody?: string
  noIcon?: true
  active?: boolean
}>(), {
  active: undefined
})



const exactMaxBodyHeight = computed(() => {
  return typeof props.maxBodyHeight === 'number'
    ? props.maxBodyHeight + 'px'
    : props.maxBodyHeight
})



function externalToggleSpoiler() {
  // external spoiiler management if there is related prop
  if (props.active === undefined) return
  if (props.active) spoilerHtml.value?.classList.add('_active')
  else spoilerHtml.value?.classList.remove('_active')
}

onMounted(externalToggleSpoiler)
onUpdated(externalToggleSpoiler)


const spoilerHtml = ref<HTMLElement | null>(null)

function internalToggleSpoiler() {
  // internal spoiiler management if there no props.active provided
  if (props.active === undefined) {
    spoilerHtml.value?.classList.toggle('_active')
  }
}


</script>

<template>
  <div class="spoiler"
    :class="{
      '_with-border': innerBorder,
      '_no-icon': noIcon,
    }"
    ref="spoilerHtml"
  >
    <div class="title text-b"
      :class="classTitle"
      @click="internalToggleSpoiler"
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
@import '~css/lib/customWebkitScrollbar';


.spoiler {
  /* padding: 1rem 0; */

  overflow: hidden;

  &._no-icon .plus {
    display: none;
  }
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
.plus {
  margin-left: 1rem;
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
  @mixin custom-scrollbar;


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