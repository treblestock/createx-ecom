<script setup lang="ts">
import SliderProductImgs from '~/components/widgets/SliderProductImgs.vue'
import ProductCartForm from '~/components/widgets/ProductCartForm.vue'

const props = defineProps<{
  id: number
}>()


const { data: product } = useFetch(() => api.findProduct(props.id), null)

const productImgs = computed(() => {
  return product.value?.imgs || []
})



</script>

<template>
  <div class="product-general-info"
    v-if="product"
  >
    <SliderProductImgs class="product-imgs"
      :imgs="productImgs"
    />
    <ProductCartForm class="product-cart-form"
      :product="product"
    ></ProductCartForm>
  </div>
</template>

<style scoped>
@import "~css/consts";

.product-general-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6rem;
}
.product-imgs {
}
.product-cart-form {
  flex: 0 1 52.5rem;

}

</style>