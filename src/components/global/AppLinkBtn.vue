<script setup lang="ts" generic="N extends AppRouteName">
import type { AppRouteName, TypedTo } from '~/router/typedRouter'
import { type RouterLinkProps } from 'vue-router'

const props  = defineProps<Omit<RouterLinkProps, 'to'> & {to?: TypedTo<N>}>()
// const props  = defineProps<RouterLinkProps>()

</script>

<template>
  <AppLink class="btn"
    :to="props.to"
  >
    <slot></slot>
  </AppLink>  
</template>



<style scoped>
@import "~css/consts";
@import "~css/shared/btn-ui";
</style>