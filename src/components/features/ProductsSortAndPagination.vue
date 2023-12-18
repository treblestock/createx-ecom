<script setup lang="ts">
import Pagination from '~/components/features/Pagination.vue'

type SelectGroupComp = typeof import('~/components/global/SelectGroup.vue').default
type SelectGroupOptionsProps = InstanceType<SelectGroupComp>['$props']['options']

const props = defineProps<{
  pages: number[]
  sortOptions: SelectGroupOptionsProps
}>()

const selectedSort = defineModel<any>('selectedSort', {required: true})
const currentPage = defineModel<number>('currentPage', {required: true})
const limit = defineModel<number>('limit', {required: true})






</script>

<template>
  <div class="sort-and-filters">
    <div class="toolbar">
      <SelectGroup class="sort"
        classSelect="sort-select"
        vertical
        v-model="selectedSort"
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
  flex-wrap: wrap;
  column-gap: var(--leng-60);
  row-gap: var(--leng-30);
  justify-content: space-between;
}
.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--leng-60);

}

.sort-select {
  
}

.limit {
  &:deep(.input-group-input) {
    width: 8rem;

  }
}
.pagination {
}


</style>