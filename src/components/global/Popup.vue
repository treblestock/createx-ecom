<script setup lang="ts">

const emit = defineEmits<{
  close: []
}>()


function close() {
  emit('close')
}




</script>

<template>
  <Teleport to="body">
    <div class="popup"
      @click="close"
    >
      <div class="popup__body"
        @click.stop
      >
        <div class="popup__cross"
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


  &__body {
    max-width: 90%;
    max-height: 90%;
    padding: 7rem 5rem 5rem;

    background: $color-white;

    /* cross position */
    position: relative;
  }
  
  &__cross {
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
}

    




</style>