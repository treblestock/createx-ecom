<script setup lang="ts">
// const props = defineProps<{
//   modelValue?:  boolean | any[] | Set<any>
//   label?: string
//   name?: string
// }>()
// const emit = defineEmits([
//   'update:modelValue'
// ])
const props = defineProps<{
  label?: string
}>()
const modelValue = defineModel<any>()
</script>

<template>

  <label class="checkbox-group">
    <!-- <Checkbox class="checkbox-group__checkbox"
      :modelValue="modelValue"
      @update:model-value="value => emit('update:modelValue', value)"
    ></Checkbox> -->
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