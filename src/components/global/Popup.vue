<script setup lang="ts">
import {Teleport} from 'vue'
type TeleportTo = InstanceType<typeof Teleport>['$props']['to']

export type Props = {
  teleportTo?: TeleportTo,
  transitionName?: string,
  classBody?: string
  sideRight?: true
  sideLeft?: true
  headerVisible?: boolean
  noCross?: boolean
  noPadding?: boolean
  isHidden?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  teleportTo: 'body',
  transitionName: 'shift-right',
})



const emit = defineEmits<{
  close: []
}>()


function close() {
  emit('close')
}






onMounted(() => {
  if (!props.isHidden) document.body.classList.add('_scroll-hidden')
})

onUpdated(() => {
  if (props.isHidden) document.body.classList.remove('_scroll-hidden')
  else document.body.classList.add('_scroll-hidden')
})

onBeforeUnmount(() => {
  document.body.classList.remove('_scroll-hidden')
})




</script>

<template>
  <Teleport :to="teleportTo">
    <div class="popup"
      v-show="!isHidden"
      @click="close"
      :class="{
        ['_side-left']: sideLeft,
        ['_side-right']: sideRight,
        ['_header-visible']: headerVisible,
        ['_no-padding']: noPadding,
      }"
    >
      <Transition :name="transitionName" appear>
        <div class="body"
          @click.stop
          :class="[classBody]"
        >
          <div class="cross"
            v-if="!noCross"
            @click="close"
          >&#x2573;</div>
          <slot :close="close"></slot>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<style scoped>
@import '~css/consts';
@import '~css/vueAnimations';
@import '~css/lib/customWebkitScrollbar';





$color-popup-bgc: #1E212CAA;

.popup {
  /* cover screen */
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /* left: 0;
  bottom: 0; */

  /* body pos */
  display: flex;
  justify-content: center;
  align-items: center;


  /* wrapper */
  background: $color-popup-bgc;

  &._side-left {
    justify-content: start;
    align-items: stretch;

    & .body {
      max-height: 100%;
      padding: 3.2rem 2.4rem;
    }
  }
  &._side-right {
    justify-content: end;
    align-items: stretch;

    & .body {
      max-height: 100%;
      padding: 3.2rem 2.4rem;
    }
  }

  &._no-padding .body{
    padding: 0;
  }

  &._header-visible {
    z-index: 99;
    top: var(--header-height);
    height: calc(100vh - var(--header-height));
  }
}


.body {
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  padding: var(--leng-80) var(--leng-60) var(--leng-60);

  background: $color-white;
  @mixin custom-scrollbar;

  /* cross position */
  position: relative;
}

.cross {
  position: absolute;
  top: 2.4rem;
  right: 2rem;

  width: 2.4rem;
  height: 2.4rem;

  color: $color-gray-700;
  cursor: pointer;

  &:hover {
    color: $color-green;
  }
}

  

:global(body._scroll-hidden) {
  overflow: hidden;
}






</style>