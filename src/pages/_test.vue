<script setup lang="ts">
import SearchProduct from '~/components/features/SearchProduct.vue';

// import { apiFlat} from '~/utils'

// const payload = {
//   name: 'Ann',
//   age: 21,
//   address: {
//     city: 'Hogwarts'
//   }
// }


// onMounted(async () => {
//   const res = await apiFlat('foo', 'foo')
//   console.log(res)
// })

// onMounted(async () => {
//   const res = await apiFlat('bar', 12)
//   console.log(res)
// })

// onMounted(async () => {
//   const res = await apiFlat('echo', payload)
//   console.log(res)
// })

// onMounted(async () => {
//   const res = await apiFlat('toggle', 12)
//   console.log(res)
// })

</script>

<template>
  <div class="div">
    <SearchProduct></SearchProduct>
  </div>
</template>

<style scoped>
@import "~css/consts";
.div {
}

</style>