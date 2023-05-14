<script setup lang="ts">
import { ref, computed } from 'vue'

// @ts-ignore
const props = defineProps<{
  modelValue?: string | boolean | [] 
}>()
const emit = defineEmits([
  'update:modelValue'
])

const isPassVisivle = ref(false)
const type = computed(() => isPassVisivle.value ? 'text' : 'password')

</script>

<template>

  <div class="wrapper">
    <input class="input"
      :type="type"
      :value="modelValue"
      @input="event => emit('update:modelValue', (event.target as HTMLInputElement).value)"
      placeholder="your password"
      :="$attrs"
    >
    <div class="decor"
      @click="isPassVisivle = !isPassVisivle"
    ></div>
  </div>
</template>

<style scoped>
@import '~/assets/css/consts';
@import '~/assets/css/utils';


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
  box-shadow: 0 0 0 1px $color-green;

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