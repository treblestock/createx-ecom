<script setup lang="ts">
// @ts-ignore
const props = defineProps<{
  modelValue?:  boolean
  label?: string
}>()
const emit = defineEmits([
  'update:modelValue'
])

</script>

<template>

  <label class="checkbox-group">
    <Checkbox class="checkbox-group__checkbox"
      :modelValue="modelValue"
      @update:model-value="value => emit('update:modelValue', value)"
      :checked="modelValue"
    ></Checkbox>
    <div class="checkbox-group__label">
      <slot>{{ label }}</slot>
    </div>
  </label>
</template>

<style scoped>
@import '~/assets/css/consts';
@import '~/assets/css/utils';


.checkbox-group {
  display: flex;
  &__label {
    margin-left: 1.2rem;

    font-size: 1.6rem;
    color: $color-gray-800;
  }

  &__checkbox {
  }
}


</style>