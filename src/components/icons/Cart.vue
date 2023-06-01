<script setup lang="ts">
import { ref } from 'vue';
import useIcon from '~/composables/useIcon.js'


const Icon = useIcon('Profile')

const cartItems = ref<number>(0)



</script>

<template>
  <div class="cart">
    <Icon class="icon"></Icon>
    <div class="label text_xsb">
      {{ cartItems }}
    </div>
  </div>
  
</template>

<style scoped>
@import '~css/consts';

.cart {
  display: flex;
  gap: 0.8rem;
  

}
.icon {
  
}

.label {
  padding: .8rem;
  line-height: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: $radius;

  background: $color-green-light;
  color: $color-white;
}


</style>