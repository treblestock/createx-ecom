<script setup lang="ts">

const props = defineProps<{
  pages: number[]
}>()

const currentPage = defineModel<number>({required: true})



</script>

<template>
  <div class="pagination"
    v-if="pages.length > 1"
  >
    <div class="slide"
      v-show="currentPage !== pages[0]"
      @click="currentPage--"
    >
      <Icon icon="ArrowLeft"></Icon>

    </div>
    <template 
      v-show="currentPage > 3"
    >
      <div class="pagination-item">{{ pages[0] }}</div>
      <span>...</span>
    </template>

    <div class="pagination-item"
      v-for="page in pages" :key="page"
      :class="page === currentPage ? '_active': ''"
      @click="currentPage = page"
    >{{ page }}</div>

    <template 
      v-show="currentPage < pages[pages.length] - 3"
    >
      <span>...</span>
      <div class="pagination-item">{{ pages[0] }}</div>
    </template>

    <div class="slide"
      v-show="currentPage !== pages[pages.length - 1]"
      @click="currentPage++"
    > 
      <Icon icon="ArrowRight"></Icon>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';

$items-gap: 2rem; 
._active {
  color: $color-green;
}

.pagination {
  padding: 1rem 0;

  display: flex;
  align-items: center;
  gap: $items-gap;
}
.pagination-item {
  cursor: pointer;
  font-weight: 700;
  /* margin: 0 calc($items-gap / 2); */
}
.slide {
  cursor: pointer;
}

/* reserve space for arrows when they are hidden */
$arrow-width: 2.4rem;
$arrow-and-gap-width: 4.4rem;
.pagination {
  margin: 0 $arrow-and-gap-width;
}

.slide:first-of-type {
  margin-left: calc(-1 * $arrow-and-gap-width);
}
.slide:last-of-type {
  margin-right: calc(-1 * $arrow-and-gap-width);
}



</style>