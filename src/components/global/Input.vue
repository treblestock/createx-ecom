<script setup lang="ts">
// const props = defineProps<{
//   modelValue?: string | boolean | [] 
// }>()
// const emit = defineEmits([
//   'update:modelValue'
// ])

const modelValue = defineModel<string | number>()
</script>

<template>

  <!-- <input type="text" class="input"
    :value="modelValue"
    @input="event => emit('update:modelValue', (event.target as HTMLInputElement).value)"
    placeholder="..."
  > -->
  <input type="text" class="input"
    v-model="modelValue"
    :="$attrs"
  >
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';



.input {
  display: inline-block;

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