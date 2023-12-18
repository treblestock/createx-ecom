<script setup lang="ts">
const burgerHtml = ref<HTMLElement>()


// const doesSidebarExist = useDoesMobileSidebarExist()
const {
  doesExist,
  isOpen,
  toggle,
} = useMobileSidebar()

// function onClick() {
//   burgerHtml.value?.classList.toggle('_active')
//   useMobileSidebar().toggle()
// }

</script>

<template>
  <button class="burger"
    v-if="doesExist"
    :class="{_active: isOpen}"
    ref="burgerHtml"
    @click="toggle"
  >
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </button>
</template>

<style scoped>
@import '~css/consts';


.burger {
  width: 3rem;
  height: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &._active .line {
    transition: all .3s linear;
    width: 33%;

    &:nth-child(1) {
      margin-right: auto;
    }
    &:nth-child(2) {
      margin: auto;
    }
    &:nth-child(3) {
      margin-left: auto;
    }
  }
}
.line {
  width: 100%;
  height: 3px;
  background: $color-green;
}

</style>