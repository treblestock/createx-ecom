<script setup lang="ts">
import IconHeart from '~/assets/img/icons/decor/heart.svg'

import useStoreProfile from '~/stores/profile'
const profileStore = useStoreProfile()



</script>

<template>
  <AppLink class="favourite _with-icon"
    :to="{name: 'accountFavourite'}"
  >
    <IconHeart class="icon"></IconHeart>
    <div class="label">
      {{ profileStore.favouriteIds.size }}
    </div>
  </AppLink>
  
</template>

<style scoped>
@import '~css/consts';

.favourite {
  display: flex;
  gap: 0.8rem;
  color: $color-gray-800;

  &:hover {
    color: $color-green;
  }

}
.icon {
  
}

.label {
  background: none;
  color: inherit;
}


</style>