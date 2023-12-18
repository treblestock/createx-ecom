<script setup lang="ts">
const searchStr = ref('')

const {data: products} = useFetch(api.getProducts, [])

const foundProducts = computed(() => {
  if (searchStr.value === '') return []
  return products.value.filter(product => doesIncludeWords(product.name, searchStr.value))
})


// ui
const searchInput = ref<ComponentPublicInstance>()
function clearInput() {
  setTimeout(() => searchStr.value = '', 100)
}

onMounted(() => searchInput.value?.$el.addEventListener('blur', clearInput))
onBeforeUnmount(() => searchInput.value?.$el.removeEventListener('blur', clearInput))

</script>

<template>
  <div class="search-products">
    <Input class="search-input"
      ref="searchInput"
      placeholder="Search for products..."
      v-model="searchStr"
    ></Input>
    <div class="popover"
      v-if="foundProducts.length"
    >
      <AppLink class="search-record link-idle"
        
        v-for="product in foundProducts" :key="product.id"
        :to="{name: 'product', params: {id: product.id}}"
      >{{ product.name }}</AppLink>
    </div>
  </div>
</template>

<style scoped>
@import "~css/consts";
@import "~css/lib/customWebkitScrollbar";
.search-products {
  z-index: 101;
  position: relative;
  overflow: visible;
}
.search-input {
  display: block;
  width: 100%;
}
.popover {

  z-index: 101;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  max-height: 20rem;
  overflow: auto;
  @mixin custom-scrollbar;

  background: $color-white;
  color: $color-gray-700;
  font-weight: 700;
}
.search-record {
  display: block;

  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid $color-gray-300;
}


</style>