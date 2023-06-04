<script setup lang="ts">
const props = defineProps<{
  label?: string
}>()
const modelValue = defineModel<any>()
</script>

<template>

  <label class="checkbox-group">
    <Checkbox class="checkbox-group-checkbox"
      v-model="modelValue"
      :="$attrs"
    ></Checkbox>
    <div class="checkbox-group-label">
      <slot>{{ label || '' }}</slot>
    </div>
  </label>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';


.checkbox-group {
  display: flex;
  padding-left: 0.3rem;
}
.checkbox-group-label {
  margin-left: 1.2rem;

  font-size: 1.6rem;
  color: $color-gray-800;
}

.checkbox-group-checkbox {
}


</style>