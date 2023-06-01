<script setup lang="ts" generic="N extends string">
import type { Product } from '~/types'
import ProductColorFilter from '~/components/features/ProductColorFilter.vue'
import ProductCheckboxFilter from '~/components/features/ProductCheckboxFilter.vue'
// import ProductPriceFilter from '~/components/features/ProductPriceFilter.vue'

import type { Component } from 'vue';

import {
  clothes,
  shoes,
  accessories,
  brands,
  materials,
  colors,
  sizeLetter,
} from '~/public/data/different.json'

// type FiltersType<N extends string> = Uppercase<N> extends 'COLOR' 
//   ? 'colorFilters' 
//   : Uppercase<N> extends 'PRICE'
//     ? 'priceFilters'
//     : 'checkboxFilters'

// type FilterOptions = {
//   colorFilters: Record<ProductColor, Ref<boolean>>
//   priceFilters: {
//     minPrice: number
//     maxPrice: number
//   }
//   checkboxFilters: Record<string, Ref<boolean>>
// }


// const props = defineProps<{
//   // filters: Record<N, FilterOptions[FiltersType<N>]>
//   categoryMinorClothType: Set<Product['categoryMinorClothType']>
//   brand: Set<Product['brand']>
//   materials: Set<Product['materials'][number]>
//   colors: Set<Product['colors'][number]>
//   sizes: Set<Product['sizes'][number]>
// }>()

const selectedCategoryMinorClothType = defineModel<Set<Product['categoryMinorClothType']>>('categoryMinorClothType', {required: true})
const selectedBrand = defineModel<Set<Product['brand']>>('brand', {required: true})
const selectedMaterials = defineModel<Set<Product['materials'][number]>>('materials', {required: true})
const selectedSizes = defineModel<Set<Product['sizes'][number]>>('sizes', {required: true})
const selectedColors = defineModel<Set<Product['colors'][number]>>('colors', {required: true})




const filterGroups = {
  clothes: clothes,
  accessories: accessories,
  shoes: shoes,
  brand: brands,
  material: materials,
  color: colors,
  size: sizeLetter,
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





const predefinedfitlerComponents: Record<string, Component> = {
  color: ProductColorFilter,
  // price: ProductPriceFilter,
}


function getFilterComponentByFilterGroup(filterGroupName: string): Component {
  return predefinedfitlerComponents[filterGroupName] || ProductCheckboxFilter
}




</script>

<template>
  <div class="product-filters">
    <Spoiler class="filter-spoiler"
      maxBodyHeight="22rem"
      v-for="possibleValues, filterGroupName in filterGroups" :key="filterGroupName"
      innerBorder
    >
      <template #title>{{ filterGroupName }}</template>
      <template #default>
        <component :is="getFilterComponentByFilterGroup(filterGroupName)"
          v-model="getWhiteListByFilterName[filterGroupName].value"
          :possibleValues="possibleValues"
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


</style>