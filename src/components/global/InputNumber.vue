<script setup lang="ts">
// const props = defineProps<{
//   modelValue?: number
// }>()
// const emit = defineEmits([
//   'update:modelValue'
// ])

const props = defineProps<{
  label?: string
  vertical?: boolean
}>()
const modelValue = defineModel<number>()

</script>

<template>

  <!-- <input type="number" class="input"
    :value="modelValue"
    @input="event => emit('update:modelValue', (event.target as HTMLInputElement).value)"
    placeholder="..."
  > -->
  <input type="number" class="input"
    v-model.number="modelValue"
  >
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';



.input {
  display: inline-block;
  width: 8rem;

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