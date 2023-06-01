<script setup lang="ts">
const props = defineProps<{
  label?: string
  options: {
    [text: string]: any
    length?: undefined
  }
  vertical?: boolean
}>()

const modelValue = defineModel<any>()

</script>

<template>

  <div class="select-group"
    :class="{_vertical: vertical}"
  >
    <div class="select-group-label">
      <slot>{{ label }}</slot>
    </div>
    <Select class="select-group__select"
      v-model="modelValue"
      :options="options"
      :="$attrs"
    ></Select>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';

._vertical {
  display: flex;
  gap: 1.2rem;
  align-items: center;

  & .select-group-label {
    white-space: nowrap;
    margin-bottom: 0;
  }
}
.select-group-label {
  margin-bottom: 1rem;

  font-size: 1.6rem;
  color: $color-gray-800;
}

.select-group-select {
  width: 100%;
}


</style>