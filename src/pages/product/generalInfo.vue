<script setup lang="ts">
import SliderProductImgs from '~/components/widgets/SliderProductImgs.vue';
// import ProductCartForm from '~/components/features/ProductCartForm.vue';

const props = defineProps<{
  id: number
}>()


const product = useFetch(async () => {
  await sleep(500)
  return api.findProduct(props.id)
}, null)


const productImgs = computed(() => {
  return product.value?.imgs || []
})



function upd() {
  console.log('generalInfo: upd')
}
</script>

<template>
  <div class="product-general-info"
    v-if="product"
  >
    <SliderProductImgs class="product-imgs"
      :imgs="productImgs"
      @vue:updated="upd"
    />
    <!-- <ProductCartForm class="product-cart-form"></ProductCartForm> -->
  </div>
</template>

<style scoped>
@import "~css/consts";

.product-general-info {
  display: flex;
  justify-content: space-between;
  gap: 6rem;
}
.product-imgs {
}
.product-cart-form {
}

</style>