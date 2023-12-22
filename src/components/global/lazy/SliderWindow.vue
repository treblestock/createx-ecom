<script setup lang="ts">

const props = defineProps<{
  activeInd: number
  setItemsCount: (n: number) => void
  itemsClass?: string
}>()


const HTMLitems = ref<HTMLElement | null>(null)
const totalShift = ref('0px')

function calcShift()  {
  if (!HTMLitems.value) throw new Error(`Slider.vue: calcShift() used before component's root element rendered)`)

  const parent = HTMLitems.value
  const parentGap = Number.parseFloat(getComputedStyle(parent).gap) || 0
  const children = parent.children
  if (!children.length) return totalShift.value = '0px'

  let newTotalShift = 0

  for (let i = props.activeInd; i >= 0; i--) {
    const childStyles = getComputedStyle(children[i])
    const delta = parentGap 
      + Number.parseFloat(childStyles.marginLeft)
      + Number.parseFloat(childStyles.marginRight)
      + Number.parseFloat(childStyles.width)

    newTotalShift += delta
  }

  const activeSlideItemStyles = getComputedStyle(children[props.activeInd])
  newTotalShift -= Number.parseFloat(activeSlideItemStyles.marginRight)
  newTotalShift -= Number.parseFloat(activeSlideItemStyles.width)
  newTotalShift -= parentGap
  
  totalShift.value = (-newTotalShift) + 'px'
}


const emit = defineEmits<{
  onItemsCountChanged: [itemsCount: number]
}>()


function forceUpdate() {
  const itemsCount = HTMLitems.value?.children.length || 1
  emit('onItemsCountChanged', itemsCount)
  props.setItemsCount(itemsCount)

  calcShift()
}

const debouncedCalcShift = useDebounce(calcShift, 100)
onMounted(() => {
  window.addEventListener('resize', debouncedCalcShift)
  forceUpdate()
})
onUpdated(forceUpdate)
onBeforeUnmount(() => window.removeEventListener('resize', debouncedCalcShift))




</script>

<template>
  <div class="slider">
    <div class="slider-items"
      ref="HTMLitems"
      :class="itemsClass"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@import "~css/consts";


.slider {
  overflow: hidden;
}
.slider-items {
  /* overflow-y: visible; */
  display: flex;
  flex-wrap: nowrap;
  

  transition: all .2s linear;
  translate: v-bind(totalShift) 0;
}


</style>