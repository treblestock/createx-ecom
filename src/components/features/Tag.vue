<script setup lang="ts">


const props = defineProps<{
  value: any
  name: string
  classWrapper?: string
  type: 'radio' | 'checkbox'
}>()


// defineOptions({inheritAttrs: false})

const modelValue = defineModel<any>()

</script>

<template>
  <label class="text_sb"
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