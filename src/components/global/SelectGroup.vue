<script setup lang="ts">
// @ts-ignore
const props = defineProps<{
  modelValue?: string,
  label?: string,
    options?: {
    value: string
    text: string
  }[]
}>()
const emit = defineEmits([
  'update:modelValue'
])

</script>

<template>

  <div class="select-group">
    <div class="select-group__label">
      <slot>{{ label }}</slot>
    </div>
    <Select class="select-group__select"
      :modelValue="modelValue"
      @update:model-value="value => emit('update:modelValue', value)"
      :options="options"
    ></Select>
  </div>
</template>

<style scoped>
@import '~/assets/css/consts';
@import '~/assets/css/utils';


.select-group {

  &__label {
    margin-bottom: 1rem;

    font-size: 1.6rem;
    color: $color-gray-800;
  }

  &__select {
    width: 100%;
  }
}


</style>