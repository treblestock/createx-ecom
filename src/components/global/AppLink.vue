<script setup lang="ts" generic="N extends AppRouteName">
import type { AppRouteName, TypedTo } from '~/router/typedRouter'
import { type RouterLinkProps } from 'vue-router'

import { modifyRouteTo } from '~/router/utils'

defineOptions({
  inheritAttrs: false
})



// 
// const props = defineProps<RouterLinkProps>()
// const props  = defineProps<Omit<RouterLinkProps, 'to'> & RouterLinkProps['to']>()
const props  = defineProps<Omit<RouterLinkProps, 'to'> & {to?: TypedTo<N>}>()


const isExternalLink = computed(() => 
  typeof props.to === 'string' && props.to.startsWith('http')
)

</script>

<template>
  <a class="link" target="_blank"
    v-if="isExternalLink" 
    :href="typeof to === 'string' ? to : undefined"
    :="$attrs" 
  >
    <slot />
  </a>
  <RouterLink class="link"
    v-else
    :="$attrs"
    :to="props.to ? modifyRouteTo(props.to as TypedTo<N>) : {}"
    v-slot="slotProps"
  >
    <slot class="link__inner"
      v-bind="slotProps"
    />
  </RouterLink>
</template>

<style scoped>
@import '~css/consts';
.link {
  &__inner {
    user-select: none;
  }

  &:hover,
  &._active {
    color: $color-green;
  }
}

.link-idle {
  /* color: inherit; */
  display: none;
  &:hover {
    color: $color-green;
  }
}


</style>