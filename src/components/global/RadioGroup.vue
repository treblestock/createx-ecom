<script setup lang="ts">
// @ts-ignore
const props = defineProps<{
  modelValue?:  string
  label?: string
  value: string
  name?: string
}>()
const emit = defineEmits([
  'update:modelValue'
])

</script>

<template>

  <label class="radio-group">
    <Radio class="radio-group__radio"
      :name="name || modelValue"
      :modelValue="modelValue"
      @update:model-value="value => emit('update:modelValue', value)"
      :value="value"
      :checked="modelValue === value"
    ></Radio>
    <div class="radio-group__label">
      <slot>{{ label }}</slot>
    </div>
  </label>
</template>

<style scoped>
@import '~/assets/css/consts';
@import '~/assets/css/utils';


.radio-group {
  display: flex;
  &__label {
    margin-left: 1.2rem;

    font-size: 1.6rem;
    color: $color-gray-800;
  }

  &__radio {
  }
}


</style>