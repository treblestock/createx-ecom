<script setup lang="ts">
import type { Product } from '~/types'
import ProductColorFilter from '~/components/features/ProductColorFilter.vue'
import ProductCheckboxFilter from '~/components/features/ProductCheckboxFilter.vue'
// import ProductPriceFilter from '~/components/features/ProductPriceFilter.vue'

import type { Component } from 'vue'

import { capitalize } from '~/utils'

import {
  clothes,
  shoes,
  accessories,
  brands,
  materials,
  colors,
  sizeLetter,
} from '~/public/data/different.json'


const selectedCategoryMinorClothType = defineModel<Set<Product['categoryMinorClothType']>>('categoryMinorClothType', {required: true})
const selectedBrand = defineModel<Set<Product['brand']>>('brand', {required: true})
const selectedMaterials = defineModel<Set<Product['materials'][number]>>('materials', {required: true})
const selectedSizes = defineModel<Set<Product['sizes'][number]>>('sizes', {required: true})
const selectedColors = defineModel<Set<Product['colors'][number]>>('colors', {required: true})




const filterGroups = {
  clothes: computed(() => {
    return clothes.filter(prop => doesIncludeWords(prop, filterValuesFilterQueries.value.clothes))
  }),
  accessories: computed(() => {
    return accessories.filter(prop => doesIncludeWords(prop, filterValuesFilterQueries.value.accessories))
  }),
  shoes: computed(() => {
    return shoes.filter(prop => doesIncludeWords(prop, filterValuesFilterQueries.value.shoes))
  }),
  brand: computed(() => {
    return brands.filter(prop => doesIncludeWords(prop, filterValuesFilterQueries.value.brand))
  }),
  material: computed(() => {
    return materials.filter(prop => doesIncludeWords(prop, filterValuesFilterQueries.value.material))
  }),
  color: computed(() => {
    return colors
  }),
  size: computed(() => {
    return sizeLetter.filter(prop => doesIncludeWords(prop, filterValuesFilterQueries.value.size))
  }),
  // accessories: accessories,
  // shoes: shoes,
  // brand: brands,
  // material: materials,
  // color: colors,
  // size: sizeLetter,
}


const getWhiteListByFilterName = {
  clothes: selectedCategoryMinorClothType,
  accessories: selectedCategoryMinorClothType,
  shoes: selectedCategoryMinorClothType,
  brand: selectedBrand,
  material: selectedMaterials,
  color: selectedColors,
  size: selectedSizes,
}




// 
const filterValuesFilterQueries = ref({
  clothes: '',
  accessories: '',
  shoes: '',
  brand: '',
  material: '',
  size: '',
})





const predefinedfitlerComponents: Record<string, Component> = {
  color: ProductColorFilter,
  // price: ProductPriceFilter,
}


const _ = {
  clothes: computed(() => {
    return clothes.filter(prop => doesIncludeWords(prop, filterValuesFilterQueries.value.clothes))
  })
}

function getFilterComponentByFilterGroup(filterGroupName: string): Component {
  return predefinedfitlerComponents[filterGroupName] || ProductCheckboxFilter
}


function getFilteredFilterOptions(filterGroupName: keyof typeof filterGroups): string[] {
  
  return filterGroups[filterGroupName].value
}




</script>

<template>
  <div class="product-filters">
    <Spoiler class="filter-spoiler"
      maxBodyHeight="22rem"
      v-for="possibleValues, filterGroupName in filterGroups" :key="filterGroupName"
      innerBorder
    >
      <template #title>
          {{ capitalize(filterGroupName) }}
      </template>
      <template #header
          v-if="filterGroupName in filterValuesFilterQueries"
      >
        <Input class="spoiler _s"
          v-model="filterValuesFilterQueries[filterGroupName as keyof typeof filterValuesFilterQueries]"
          placeholder="Search for clothes type"
        />
      </template>
      <template #default>
        <component :is="getFilterComponentByFilterGroup(filterGroupName)"
          v-model="getWhiteListByFilterName[filterGroupName].value"
          :possibleValues="getFilteredFilterOptions(filterGroupName)"
        ></component>
      </template>
    </Spoiler>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';

.product-filters {
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */

  /* @mixin slashBetween 2rem; */
}
.filter-spoiler {
  & + & {
    border-top: 1px solid $color-gray-300;
  }
}

.spoiler {
  width: 100%;
}


</style>