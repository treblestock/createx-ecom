<script setup lang="ts">
// const props = defineProps<{
//   modelValue?: string
//   label?: string
//   type?: string
// }>()
// const emit = defineEmits([
//   'update:modelValue'
// ])

const props = defineProps<{
  label?: string
  vertical?: boolean
}>()
const modelValue = defineModel<string | number>()

</script>

<template>

  <!-- <div class="input-group">
    <div class="input-group-label">
      <slot>{{ label }}</slot>
    </div>
    <PasswordInput class="input-group-input"
      :modelValue="modelValue"
      @update:model-value="value => emit('update:modelValue', value)"
    ></PasswordInput>
  </div> -->
  <div class="input-group"
    :class="{_vertical: vertical}"
  >
    <div class="input-group-label">
      <slot>{{ label }}</slot>
    </div>
    <PasswordInput class="input-group-input"
      v-model="modelValue"
    ></PasswordInput>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';

._vertical {
  display: flex;
  gap: 1.2rem;
  align-items: center;

  & .input-group-label {
    white-space: nowrap;
    margin-bottom: 0;
  }
}
.input-group-label {
  margin-bottom: 1rem;

  font-size: 1.6rem;
  color: $color-gray-800;
}

.input-group-input {
  width: 100%;
}


</style>