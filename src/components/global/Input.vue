<script lang="ts">
export default { 
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  modelValue: {
    type: [String, Array, Boolean],
    required: false,
    default: '',
  },
})
const emit = defineEmits([
  'input',
])

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('input', value),
})

// const getElementClass = (classList) =>
//   classList ? classList.split(' ').filter(cls => cls.includes('__') ).join(' ') : ''
// const getBlockClass = (classList) =>
//   classList ? classList.split(' ').filter(cls => !cls.includes('__') ).join(' ') : ''
</script>

<template>
    <!-- :class="getElementClass($attrs.class)" -->
  <label class="input"
  >
    <input type="text" class="input__input"
      :="$attrs"
      v-model="model"
    >
  </label>
</template>

<style scoped>
@import '~/assets/css/consts';
@import '~/assets/css/utils';


$input-color: #000;
$input-background: #fff;
$input-placeholder-color: $grey;

.input {
  display: inline-block;
  /* width: 100%; */

  &__input {
    display: inline-block;
    width: 100%;

    padding: 1rem 1.5rem;
    box-shadow: 0 0 0 1px $grey;

    border-radius: $border-radius;
    cursor: text;

    font-size: 1.6rem;
    line-height: 1.5;
    color: $input-color;
    background: $input-background;

    &::placeholder {
      color: $input-placeholder-color;
      text-transform: lowercase;
    }
  }
}
  
  



        
      


</style>