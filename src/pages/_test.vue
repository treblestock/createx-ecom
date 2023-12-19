<script setup lang="ts">
import imgStaticImport from '~img/clothes/product/1.png'

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



/*
  /img/clothes/1.png -> public/img/clothes/1.png

  clothes/1.png ->  import.meta.url

*/ 

</script>

<template>
  <div class="div">
    <Img :src="imgStaticImport"></Img>
    <Img src="clothes/product/1.png"></Img>
    <Img src="/clothes/product/1.png"></Img>
    <!-- <img src="/test.jpg" alt=""> -->
  </div>
</template>

<style scoped>
@import "~css/consts";
.div {
}

</style>