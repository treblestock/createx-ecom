<script setup lang="ts">

export type Props = {
  classBody?: string
  _side?: true
}
const props = defineProps<Props>()



const emit = defineEmits<{
  close: []
}>()


function close() {
  emit('close')
}



onMounted(() => {
  document.body.classList.add('_scroll-hidden')
})
onBeforeUnmount(() => {
  document.body.classList.remove('_scroll-hidden')
})



</script>

<template>
  <Teleport to="body">
    <div class="popup"
      @click="close"
      :class="{_side: _side}"
    >
      <div class="body"
        @click.stop
        :class="classBody"
      >
        <div class="cross"
          @click="close"
        >&#x2573;</div>
        <slot :close="close"></slot>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
@import '~css/consts';




$color-popup-bgc: #1E212CAA;

.popup {
  /* cover screen */
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  /* body pos */
  display: flex;
  justify-content: center;
  align-items: center;


  /* wrapper */
  background: $color-popup-bgc;

  &._side {
    justify-content: end;
    align-items: stretch;

    & .body {
      max-height: 100%;
      padding: 3.2rem 2.4rem;

      &._no-padding {
        padding: 0;
      }
    }
  }
}
.body {
  max-width: 90%;
  max-height: 90%;
  padding: 7rem 5rem 5rem;

  background: $color-white;

  /* cross position */
  position: relative;

  &._no-padding {
    padding: 0;
  }
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
  padding-right: $custom-scrollbar-width;
}
    




</style>