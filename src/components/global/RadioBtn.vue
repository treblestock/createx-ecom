<script setup lang="ts">
const props = defineProps<{
  value: any
  name: string
}>()

const modelValue = defineModel<any>()
</script>

<template>
  <label>
    <Radio class="input _hidden-smart"
      v-model="modelValue"
      :value="value"
      :name="name"
      :="$attrs"
    ></Radio>
    <div class="btn">
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

  font-weight: 700;
  line-height: $lh;

  user-select: none;
}
.input {
  position: absolute;
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