<script setup lang="ts">

const props = defineProps<{
  possibleValues: any[]
}>()

// const pickedValues = defineModel<Ref<Set<any>>>({required: true})
const pickedValues = defineModel<Set<any>>({required: true})




</script>

<template>
  <div class="filter-spoiler-inner">
    <CheckboxGroup class="filter-item"
      v-for="value in possibleValues" :key="value"
      v-model="pickedValues"
      :value="value"
    >{{ value }}</CheckboxGroup>
  </div>
</template>

<style scoped>
@import '~css/consts';

.filter-spoiler-inner {

}
.filter-item {
  margin-bottom: 0.8rem;

}

</style>