<script setup lang="ts">
// @ts-ignore
const props = defineProps<{
  modelValue?: string
  label?: string
  type?: string
}>()
const emit = defineEmits([
  'update:modelValue'
])

</script>

<template>

  <div class="input-group">
    <div class="input-group__label">
      <slot>{{ label }}</slot>
    </div>
    <PasswordInput class="input-group__input"
      :modelValue="modelValue"
      @update:model-value="value => emit('update:modelValue', value)"
    ></PasswordInput>
  </div>
</template>

<style scoped>
@import '~/assets/css/consts';
@import '~/assets/css/utils';


.input-group {


  &__label {
    margin-bottom: 1rem;

    font-size: 1.6rem;
    color: $color-gray-800;
  }

  &__input {
    width: 100%;
  }
}


</style>