<script setup lang="ts">
import useIcon from '~/composables/useIcon.js'


const Icon = useIcon('heart')

const favouriteItems = ref<number>(0)



</script>

<template>
  <div class="favourite">
    <Icon class="icon"></Icon>
    <div class="label">
      {{ favouriteItems }}
    </div>
  </div>
  
</template>

<style scoped>
@import '~css/consts';

.favourite {
  display: flex;
  gap: 0.8rem;
  

}
.icon {
  
}

.label {
  color: $color-gray-800;

}


</style>