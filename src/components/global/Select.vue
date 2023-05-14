<script setup lang="ts">
// @ts-ignore
const props = defineProps<{
  modelValue?: string | boolean | []
  options?: {
    value: string
    text: string
  }[]
}>()
const emit = defineEmits([
  'update:modelValue'
])


function updateValue(event: Event) {
  const target = event.target as HTMLSelectElement

  const newValue = target.multiple
    ? target.selectedOptions
    : target.selectedOptions[0].value
  emit('update:modelValue', newValue)
}

</script>

<template>

  <select class="select"
    :value="modelValue"
    @input="updateValue"
  >
    <slot>
      <option class="select__option" disabled value="">choose...</option>
      <option class="select__option"
        v-for="option in options" :key="option.value"
      >
        {{ option.text }}
      </option>
    </slot>
  </select>
</template>

<style scoped>
@import '~/assets/css/consts';
@import '~/assets/css/utils';


@define-mixin baseUI {
  padding: 1rem 1.5rem;
  box-shadow: 0 0 0 1px $color-green;
  color: $color-green;
}


@define-mixin addCustomDecor {
  /* hide default select tick */
  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */
  
  /* doesn't work -> select is action element -> has no :after/:before */
  /* &:after {
    content: '\2713';
    content: '';
    display: block;

    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
    height: 2rem;
  } */
}

.select {
  @mixin baseUI;
  border-radius: $radius;


  /* placeholder (= disabled option) color */
  &:first-child {
    color: $color-gray-700; 
  }

  position: relative;

  &__option {
    @mixin baseUI;
  }
}
  
  



</style>