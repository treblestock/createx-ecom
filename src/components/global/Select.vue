<script setup lang="ts">
const props = defineProps<{
  options: string[] | Record<string, any> | Set<string>
  disabledValue?: string
}>()

const modelValue = defineModel<any>()

</script>

<template>
  <select class="select"
    v-model="modelValue"
  >
    <slot>
      <option class="select__option"
        disabled
        value=""
      >{{ disabledValue || 'choose' }}</option>
      <option class="select__option"
        v-for="optionValue, optionText in options" :key="optionValue"
        :value="optionValue"
      >
        <!-- 
          if key is like '0', then +key returns valid number (which is case in v-for="Set | Array").
          That means we should use it's string value as text in template too   
        -->
        {{ Number.isNaN(+optionText) ? optionText : optionValue }}
      </option>
    </slot>
  </select>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';


@define-mixin baseUI {
  padding: 1rem 1.5rem;
  box-shadow: 0 0 0 1px $color-green;
  color: $color-gray-800;
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
  display: inline-block;
  width: 100%;

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