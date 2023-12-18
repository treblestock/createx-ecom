<script setup lang="ts">
import Select from '~/components/global/Select.vue'

// const props = defineProps<Props<typeof Select> & {label?: string} >
const props = defineProps<{
  label?: string
  options: string[] | Record<string, any> | Set<string>
  vertical?: boolean
  disabledValue?: string
  classSelect?: string
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
    <Select class="select"
      :class="classSelect"
      :="$attrs"
      v-model="modelValue"
      :options="options"
      :disabledValue="disabledValue"
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

  font-size: 1.6rem;
  color: $color-gray-800;
}

.select {
}


</style>