<script setup lang="ts">
import type { WithParamsAny } from '~/router/types'

const props = defineProps<WithParamsAny>()

</script>

<template>
  <AppLink class="btn"
    :to="$props.to"
  >
    <slot></slot>
  </AppLink>  
</template>



<style scoped>
@import "~css/consts";
@import "~css/shared/btn-ui";
</style>