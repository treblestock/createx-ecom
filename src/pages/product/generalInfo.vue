<script setup lang="ts">
import SliderProductImgs from '~/components/widgets/SliderProductImgs.vue'
import ProductCartForm from '~/components/widgets/ProductCartForm.vue'

const props = defineProps<{
  id: number
}>()


const { data: product } = useFetch(() => api.findProductById(props.id), null)

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
  gap: var(--leng-60);


  @media (width < 840px) {
    flex-wrap: wrap;
    & .product-cart-form {
      flex: 1 1 auto;
    }
  }
}
.product-imgs {
  flex: 0 1 auto;
}
.product-cart-form {
  flex: 1 0 52.5rem;

}

</style>