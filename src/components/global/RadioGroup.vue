<script setup lang="ts">
// const props = defineProps<{
//   modelValue?:  string
//   label?: string
//   value: string
//   name?: string
// }>()
// const emit = defineEmits([
//   'update:modelValue'
// ])
const props = defineProps<{
  label?: string
  value: any
  name: string
}>()
const modelValue = defineModel<any>()
</script>

<template>

  <label class="radio-group">
    <!-- <Radio class="radio-group__radio"
      :name="name || modelValue"
      :modelValue="modelValue"
      @update:model-value="value => emit('update:modelValue', value)"
      :value="value"
      :checked="modelValue === value"
    ></Radio> -->
    <Radio class="radio-group__radio"
      v-model="modelValue"
      :value="value"
      :name="name"
      :="$attrs"
    ></Radio>
    <div class="radio-group-label">
      <slot>{{ label }}</slot>
    </div>
  </label>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';


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