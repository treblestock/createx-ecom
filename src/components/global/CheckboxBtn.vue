<script setup lang="ts">
const modelValue = defineModel<any>()

const props = defineProps<{
  classBtn?: string
}>()
</script>

<template>
  <label>
    <input type="checkbox" class="input _hidden-smart"
      v-model="modelValue"
      :="$attrs"
    >
    <div class="btn"
      :class="classBtn"
    >
      <slot></slot>
    </div>
  </label>
</template>

<style scoped>
@import "~/assets/css/consts";

.btn {
  /* shape */
  color: $color-green;
  background: $color-white;
  box-shadow: 0 0 0 $border-w $color-green;
  border-radius: $radius;

  padding: 1.2rem 3.2rem;
  font-size: 1.4rem;


  user-select: none;
}
.input {
/* animations */
  &:checked {
    & + .btn {
      color: $color-white;
      background: $color-green-dark;
    }
  }
  &:disabled {
    opacity: 0.5;
  }
}
.btn_l {
  font-size: 1.4rem;
  padding: 1rem 4rem;
}
.btn_s {
  font-size: 1.2rem;
  padding: 0.9rem 2.4rem;
}




</style>