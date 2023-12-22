<script setup lang="ts">
import ProductsSortAndPagination from '~/components/features/ProductsSortAndPagination.vue'
import ProductCard from '~/components/widgets/ProductCard.vue'
import ProductFilters from '~/components/features/ProductFilters.vue'

import IconFilter from '~/components/icons/Filter.vue'

import useProductFilters from '~/composables/useProductFilters'
import { Product } from '~/types'

import MobileSidebar from '~/components/features/MobileSidebar.vue'

import useStoreProducts from '~/stores/products'
const productsStore = useStoreProducts()

// sidebar
const isSidebarOpen = ref(true)

const productCardsHtml = ref<null | HTMLElement>(null)



// items
// const { data: products } = useFetch(api.getProducts, [])
const products = computed(() => productsStore.products)


// filters
const {
  items: filteredProducts,
  categorySex,
  categoryMinorClothType,
  brand,
  materials,
  sizes,
  colors,
  resetFilters: _resetFilters,
} = useProductFilters(products)


const isSaleOnly = ref(false)
const productsFilteredBySale = computed(() => {
  return isSaleOnly.value 
    ? filteredProducts.value.filter(prod => prod.discount)
    : filteredProducts.value
})

function resetFilters() {
  isSaleOnly.value = false
  _resetFilters()
}


// filters api when navigation the page
const route = useRoute()
onMounted(parseQueryAndUpdateFilters)
watch(
  route,
  () => {
    resetFilters()
    parseQueryAndUpdateFilters()
    currentPage.value = 1
  },
)

interface FilterOptionsInUrlQuery {
  categorySex?: Product['categorySex']
  categoryMinorClothType?: Product['categoryMinorClothType']
  brand?: Product['brand']
  materials?: Product['materials'][number]
  sizes?: Product['sizes'][number]
  colors?: Product['colors'][number]

  sale?: 'y'
}

function parseQueryAndUpdateFilters() {
  const queries = route.query as FilterOptionsInUrlQuery
  if (queries.categorySex) categorySex.value.add(queries.categorySex)
  if (!Object.keys(queries).length) return

  if (queries.categoryMinorClothType) categoryMinorClothType.value.add(queries.categoryMinorClothType)
  if (queries.brand) brand.value.add(queries.brand)
  if (queries.materials) materials.value.add(queries.materials)
  if (queries.sizes) sizes.value.add(queries.sizes)
  if (queries.colors) colors.value.add(queries.colors)

  if (queries.sale) isSaleOnly.value = true
}

// items sort
const sorts = {
  none: undefined,
  rating: (a: Product, b: Product) => {
    return b.rating - a.rating
  },
  ['price up']: (a: Product, b: Product) => {
    const aTotalPrice = (a.price * (100 - (a.discount || 0)) )
    const bTotalPrice = (b.price * (100 - (b.discount || 0)) )
    return aTotalPrice - bTotalPrice
  },
  ['price down']: (a: Product, b: Product) => {
    const aTotalPrice = (a.price * (100 - (a.discount || 0)) )
    const bTotalPrice = (b.price * (100 - (b.discount || 0)) )
    return bTotalPrice - aTotalPrice
  },
} as const



const selectedSort = ref(sorts.none)
const sortedProducts = computed<Product[]>(() => {
  const productsToSort = productsFilteredBySale.value
  if (typeof selectedSort.value !== 'function') return productsToSort
  return productsToSort.sort(selectedSort.value)
})

// items pagination
const limit = ref(8)
const currentPage = ref(1)
const {
  currentInds, 
  pages,
} = usePagination({
  items: sortedProducts,
  limit,
  currentPage,
})


// sidebar adaptive 
const { vw } = useViewPort()
const VW_VALUE_TO_SHOW_BURGER = 840
const isSidebarPopuped = computed(() => vw.value < VW_VALUE_TO_SHOW_BURGER)

onMounted(() => {
  if (isSidebarPopuped.value) isSidebarOpen.value = false
})

</script>

<template>
  <div class="wrapper">
    <header class="products-header">
      <Btn class="toggle-sidebar _with-icon btn_l"
        @click="isSidebarOpen = !isSidebarOpen"
      >
        <IconFilter :class="{_active: isSidebarOpen}"></IconFilter>
        <span class="toggle-sidebar-text">
          {{ isSidebarOpen ? 'Hide filters' : 'Open filters' }}
        </span>
      </Btn>
      <ProductsSortAndPagination class="sorts"
        v-model:selectedSort="selectedSort"
        :sortOptions="sorts"
        :pages="pages"
        v-model:currentPage="currentPage"
        v-model:limit="limit"
      ></ProductsSortAndPagination>
    </header>


    <MobileSidebar v-if="isSidebarPopuped"
      :isShown="isSidebarOpen"
      @open="isSidebarOpen = true"
      @close="isSidebarOpen = false"
      @toggle="isSidebarOpen = !isSidebarOpen"
    >
      <div class="sidebar-popuped" ref="sidebarHtml">
        <ProductFilters
          v-model:categoryMinorClothType="categoryMinorClothType"
          v-model:brand="brand"
          v-model:materials="materials"
          v-model:sizes="sizes"
          v-model:colors="colors"
        ></ProductFilters>
      </div>
    </MobileSidebar>
    
    <div class="middle">
      <Transition name="shift-right-enter" v-if="!isSidebarPopuped">
        <KeepAlive>
          <div class="filters-sidebar"
            v-if="isSidebarOpen"
          >
            <ProductFilters
              v-model:categoryMinorClothType="categoryMinorClothType"
              v-model:brand="brand"
              v-model:materials="materials"
              v-model:sizes="sizes"
              v-model:colors="colors"
            ></ProductFilters>
          </div>
        </KeepAlive>
      </Transition>

      <div class="products-main">
        <section class="products-grid grid"
          ref="productCardsHtml"
        >
          <TransitionGroup name="fade-shift">
            <ProductCard class="product-card"
              v-for="ind in currentInds" :key="sortedProducts[ind].id" 
              :="sortedProducts[ind]"
              :img="sortedProducts[ind].imgs[0]"
            ></ProductCard>
          </TransitionGroup>
        </section>
        <footer class="products-footer">
          <ProductsSortAndPagination class="sorts"
            v-show="pages.length > 1"

            v-model:selectedSort="selectedSort"
            :sortOptions="sorts"
            :pages="pages"
            v-model:currentPage="currentPage"
            v-model:limit="limit"
          ></ProductsSortAndPagination>
        </footer>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/vueAnimations';


$sidebar-width: 25.5rem;
$card-min-width: 28.5rem; /* $sidebar-width + $margin-1 / 2 */

$card-min-width: 24rem; 
  /* 
    Card min width is smaller than ProductCard.vue's
    min-width in order to get 1 card in a row on smaller viewport width.
    As card will be stretched to 100%, when it is alone, this means
    it will happen on smaller viewport width and card will be stretched less. 
   */

.wrapper {
  gap: var(--leng-60);
}

/* header */
.products-header {
  margin-bottom: var(--leng-60);

  flex: 0 0 calc(100%);

  display: flex;
  flex-wrap: wrap;
  gap: var(--leng-60);

  /* margin-bottom: 3rem; */
  & .sorts {
    flex: 1 1 auto;
  }
}

.middle {
  display: flex;
  gap: var(--leng-60);
}
.toggle-sidebar {
  width: $sidebar-width;

  @media (width < 950px) {
    width: auto;
  }
  @media (width < 840px) {
    display: none;
  }
}

/* sidebar */
.filters-sidebar {
  flex: 0 0 $sidebar-width;
}
.sidebar-popuped {
  padding: 0 2rem;
}

/* main */
.products-main {
  min-height: 100vh;
  flex: 1 1 auto;
  
  /* children */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.products-grid {
  width: 100%;
  margin-bottom: var(--leng-80);

  /* items */
  justify-items: center;
  --min-width: $card-min-width;
  gap: 3rem;
}
.product-card {
  width: clamp($card-min-width, 100%, 39rem);
}
</style>