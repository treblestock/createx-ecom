<script setup lang="ts">
import type { WithParamsAny } from '~/router/types'

const props = defineProps<{
  size?: 's' | 'l',
  outlined?: boolean
} & WithParamsAny>()

</script>

<template>
  <AppLink class="btn"
    :class="[
      size ? 'btn_' + size : '',
      outlined ? 'btn_outlined' : ''
    ]"
    :to="$props.to"
  >
    <slot></slot>
  </AppLink>  
</template>



<style scoped>
@import "~css/consts";
@import "~css/shared/btn-ui";
</style>