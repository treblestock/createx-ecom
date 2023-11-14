<script setup lang="ts">
import { ref  } from 'vue'

import ProductsSortAndPagination from '~/components/features/ProductsSortAndPagination.vue'
import ProductCard from '~/components/features/ProductCard.vue'
import ProductFilters from '~/components/features/ProductFilters.vue'

import Filter from '~/components/icons/Filter.vue'



import useFetchItems from '~/composables/useFetchItems'
import useProductFilters from '~/composables/useProductFilters'

// sidebar
const isSidebarOpen = ref(true)

// product cards animation on sidebar open
const productCardsHtml = ref<null | HTMLElement>(null)

watch(
  isSidebarOpen,
  () => {
    productCardsHtml.value?.classList.add('_fixed-card-product')
    setTimeout( () => productCardsHtml.value?.classList.remove('_fixed-card-product'), 300)
  }
)



// items
const products = useFetchItems(api.getProducts)


// filters
const {
  items: filteredProducts,
  categoryMinorClothType,
  brand,
  materials,
  sizes,
  colors,
} = useProductFilters(products)




// items pagination
const limit = ref(8)
const currentPage = ref(1)
const {
  currentInds, 
  pages,
} = usePagination({
  items: filteredProducts,
  limit,
  currentPage,
})

</script>

<template>
  <section class="section products">

    <div class="container">
      <div class="products-header">
        <Btn class="toggle-sidebar _with-icon"
          @click="isSidebarOpen = !isSidebarOpen"
          size="l"
        >
          <Filter :class="{_active: isSidebarOpen}"></Filter>
          Hide filters
        </Btn>
        <ProductsSortAndPagination class="sorts"
          :pages="pages"
          v-model:currentPage="currentPage"
          v-model:limit="limit"
        ></ProductsSortAndPagination>
      </div>

      <!-- <transition name="shift-right"> -->
      <!-- <transition name="shift-right">
      </transition> -->
      <aside class="filters-sidebar"
        :class="{_collapsed: !isSidebarOpen}"
      >
          <ProductFilters
            v-show="isSidebarOpen"

            v-model:categoryMinorClothType="categoryMinorClothType"
            v-model:brand="brand"
            v-model:materials="materials"
            v-model:sizes="sizes"
            v-model:colors="colors"
          ></ProductFilters>
      </aside>
      <div class="products-main">
        <div class="products-grid grid"
          ref="productCardsHtml"
        >
          <ProductCard class="product-card"
            v-for="ind in currentInds" :key="filteredProducts[ind].id" 
            :="filteredProducts[ind]"
            :img="filteredProducts[ind].imgs[0]"
          ></ProductCard>
        </div>
        <ProductsSortAndPagination class="sorts"
          v-show="pages.length > 1"
          :pages="pages"
          v-model:currentPage="currentPage"
          v-model:limit="limit"
        ></ProductsSortAndPagination>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import '~css/consts';
@import '~css/vueAnimations';


$margin-1: 6rem;
$sidebar-width: 25.5rem;
$card-width: 28.5rem; /* $sidebar-width + $margin-1 / 2*/
.products-page {
}
.products {
  padding-top: 3.2rem;
}
.container {
  display: flex;
  flex-wrap: wrap;
}


/* header */
.products-header {
  flex: 0 0 calc(100%);

  display: flex;
  gap: $margin-1;

  margin-bottom: 3rem;
}
.toggle-sidebar {
  width: $sidebar-width;
}
.sorts {
  flex: 1 1 auto;
}
/* sidebar */
.filters-sidebar {
  flex: 0 0 $sidebar-width;
  margin-right: $margin-1;

  /* merge animation */
  transition: all .3s ease;
  &._collapsed {
    flex-basis: 0;
    margin-right: 0;
  }
}


/* main */
.products-main {
  flex: 1 1 auto;
  

  /* children */
  display: flex;
  flex-direction: column;
  /* gap: $padding-1; */ 
}
.products-grid {
  width: 100%;

  /* items */
  --min-width: $card-width;

  /* animation on sidebar open */ 
  &._fixed-card-product {
    .product-card {
      width: $card-width;
    }
  }
}
.product-card {
  /* width: 28.5rem; */
}




</style>