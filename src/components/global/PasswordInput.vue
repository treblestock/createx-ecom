<script setup lang="ts">

const isPassVisivle = ref(false)
const currentType = computed(() => isPassVisivle.value ? 'text' : 'password')


const modelValue = defineModel<string | number>()
</script>

<template>
  <div class="wrapper">
    <input class="input"
      :type="currentType"
      v-model="modelValue"
      placeholder="your password"
      :="$attrs"
    >
    <div class="decor"
      @click="isPassVisivle = !isPassVisivle"
    ></div>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';


.wrapper {
  display: inline-block;

  position: relative;
}

.decor {
  position: absolute;
  z-index: 1;
  cursor: pointer;

  top: 50%;
  right: 2rem;
  transform: translate(0, -75%);
  width: 2rem;
  height: 2rem;
  

  &:after {
    content: '\1F441';
    display: block;
    color: $color-black;
  }
}

.input {
  display: block;
  width: 100%;

  padding: 1rem 1.5rem;
  box-shadow: 0 0 0 1px $color-gray-400;
  &:focus-visible {
    box-shadow: 0 0 0 1px $color-green;
  }

  border-radius: $radius;
  cursor: text;

  font-size: 1.6rem;
  line-height: 1.5;
  color: $color-green;

  &::placeholder {
    color: $color-gray-700;
    text-transform: lowercase;
  }
}
  
  



</style>