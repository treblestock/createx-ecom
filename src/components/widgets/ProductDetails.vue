<script setup lang="ts">
import type { Product } from '~/types'


const props = defineProps<{
  details: Product['details']
}>()



</script>

<template>
  <div class="product-details">
    <div class="row">
      <div class="title text_xlb">Details</div>
      <div class="desciption">{{ details.desctiption }}</div>
      <ul class="ul">
        <li v-for="characteristic in details.characteristics" :key="characteristic">{{ characteristic }}</li>
      </ul>
    </div>

    <div class="row">
      <div class="title text_xlb">Fabric</div>
      <ul class="ul">
        <li v-for="fabricClauses in details.fabricClauses" :key="fabricClauses">{{ fabricClauses }}</li>
      </ul>
    </div>

    <div class="row">
      <div class="title text_xlb">Care</div>
      <ul class="_with-icon">
        <li v-for="fabricClauses in details.careClauses" :key="fabricClauses.icon">
          <Img class="icon"
            :src="fabricClauses.icon"
          ></Img>
          {{ fabricClauses.explanation }}
        </li>
      </ul>
    </div>

  </div>  
</template>

<style scoped>
@import "~css/consts";

.product-details {
  color: $color-gray-800;
}
.row {
  padding-bottom: 2.4rem;
  margin-bottom: 2.4rem;
  & + & {
    border-top: 1px solid $color-gray-300;
  }
}

.desciption {
  margin-bottom: 1.6rem;
}

.title {
  color: $color-gray-900;
  margin-bottom: 1.6rem;
}

._with-icon li {
  display: flex;
  gap: 2rem;
}
.icon {
  width: 2rem;
  height: 2rem;
}

</style>