<script setup lang="ts">


const props = defineProps<{
  value: any
  name: string
  classWrapper?: string
  type: 'radio' | 'checkbox'
}>()


const modelValue = defineModel<any>()

</script>

<template>
  <label class="text-s-b"
    :class="classWrapper"
  >
    <input class="input _hidden-smart"
      :type="type"
      v-model="modelValue"
      :="$attrs"
      :value="value"
      :name="name"
    >
    <div class="tag">{{ value }}</div>
  </label>
</template>

<style scoped>
@import "~css/consts";

.input {
  &:checked {
    & + .tag {
      background: $color-green;
      color: $color-white;
    }
  }
}

</style>