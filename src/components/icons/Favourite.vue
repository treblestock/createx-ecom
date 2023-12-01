<script setup lang="ts">
import IconHeart from '~/assets/img/icons/decor/heart.svg'

const favouriteItems = ref<number>(0)



</script>

<template>
  <AppLink class="favourite _with-icon"
    :to="{name: 'accountFavourite'}"
  >
    <IconHeart class="icon"></IconHeart>
    <div class="label">
      {{ favouriteItems }}
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