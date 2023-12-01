<script setup lang="ts">
const props = defineProps<{
  label?: string
  value: any
  name: string
}>()
const modelValue = defineModel<any>()
</script>

<template>

  <label class="radio-group">
    <Radio class="radio-group__radio"
      v-model="modelValue"
      :value="value"
      :name="name"
      :="$attrs"
    ></Radio>
    <div class="radio-group__label">
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