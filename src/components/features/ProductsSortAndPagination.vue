<script setup lang="ts">
import Pagination from './Pagination.vue';


const props = defineProps<{
  pages: number[]
}>()

const currentPage = defineModel<number>('currentPage', {required: true})
const limit = defineModel<number>('limit', {required: true})



const sortOptions = ref({
  popularity: 'popularity'
})
</script>

<template>
  <div class="sort-and-filters">
    <div class="toolbar">
      <SelectGroup class="sort"
        vertical
        :options="sortOptions"
      >
        Sort by
      </SelectGroup>
      <InputNumberGroup class="limit"
        vertical
        v-model="limit"
      >
        Show
      </InputNumberGroup>
    </div>
    <Pagination class="pagination"
      :pages="pages"
      v-model="currentPage"
    ></Pagination>
  </div>
</template>

<style scoped>
@import '~css/consts';

.sort-and-filters {
  display: flex;
  gap: 6rem;
  justify-content: space-between;
}
.toolbar {
  display: flex;
  align-items: center;
  gap: 6rem;
}

.limit {
  &:deep(.input-group-input) {
    width: 8rem;

  }
}
.pagination {
}


</style>