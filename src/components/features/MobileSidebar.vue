<script setup lang="ts">
import { provideApi } from '~/composables/useMobileSidebar'

const props = defineProps<{
  isShown: boolean
}>()


const emit = defineEmits<{
  open: []
  close: []
  toggle: []
}>()

const open = () => emit('open')
const close = () => emit('close')
const toggle = () => emit('toggle')

const isOpen = computed(() => props.isShown)


provideApi({open, close, toggle, isOpen})



</script>

<template>
  <Popup
    :isHidden="!isShown"
    headerVisible
    sideLeft
    noPadding
    noCross
    @close="emit('close')"
  >
    <slot></slot>
  </Popup>
</template>

<style scoped>
@import "~css/consts";


</style>