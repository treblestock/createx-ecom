<script setup lang="ts">
import type { WithParamsAny } from '~/router/utils';

// @ts-ignore
const props = defineProps<WithParamsAny>()

</script>

<template>
  <AppLink class="btn">
    <slot></slot>
  </AppLink>  
</template>

<style scoped>
@import "~/assets/css/consts";

.btn {
  padding: 1rem 1.5rem;
  background-color: $primary;
}
</style>