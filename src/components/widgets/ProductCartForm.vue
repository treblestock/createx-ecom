<script setup lang="ts">
import type { Product, ProductSize } from '~/types'
import Price from '~/components/features/Price.vue'
import Rating from '~/components/features/Rating.vue'
import ColorInput from '~/components/features/ColorInput.vue'
import IconCart from '~/assets/img/icons/decor/Cart.svg'
import IconHeart from '~/assets/img/icons/decor/Heart.svg'
import DeliveryConditions from '~/components/features/DeliveryConditions.vue'
import ReturnConditions from '~/components/features/ReturnConditions.vue'


import useStoreCart from '~/stores/cart'
const cartStore = useStoreCart()

import useStoreProfile from '~/stores/profile'
const profileStore = useStoreProfile()

const props = defineProps<{
  product: Product
}>()



const formData = ref({
  selectedColor: props.product.colors[0],
  selectedSize: props.product.sizes[0],
  selectedCount: 1,
})

const isValidForm = computed(() => {
  if (
    formData.value.selectedCount < 0
  ) return false
  return true
})

function onSubmit() {
  if (!isValidForm.value) return
  cartStore.setCount({
    productId: props.product.id,
    color: formData.value.selectedColor,
    size: formData.value.selectedSize,
  }, formData.value.selectedCount)
}

</script>

<template>
  <div class="product-cart-form">
    <div class="product-cart-form-row">
      <div class="price-row">
        <Price class="price"
          :price="product.price"
          :discount="product.discount"
        ></Price>
        <div class="label-sale" v-if="product.discount">{{ product.discount }}</div>
      </div>

      <div class="product-reviews">
        <Rating class="rating"
          :rating="product.rating"
        />
        <div class="reviews-count text-xs">{{ product.reviewsIds.length }} reviews</div>
      </div>
    </div>
    <form  class="form"
      @submit.prevent="onSubmit"
    >
      <div class="color-row">
        <div class="color-title text-xs">Color</div>
        <div class="colors">
          <ColorInput class="color"
            v-for="color in product.colors" :key="color" 
            :value="color"
            name="color"
            v-model="formData.selectedColor"
          />
        </div>
      </div>

      <div class="product-cart-form-row size-and-btns">
        <div class="product-cart-form-row size-row">
          <SelectGroup class="size"
            v-model="formData.selectedSize"
            :options="product.sizes.reduce((sizes, size) => {return (sizes[size] = size, sizes) }, {} as Record<ProductSize, ProductSize>)"
            disabledValue="Please select"
          >Size</SelectGroup>
        </div>

        <div class="product-cart-form-row btns">
          <InputNumber class="selected-count" 
            v-model="formData.selectedCount"
            
          />
          <Btn class="submit _with-icon" type="submit">
            <IconCart></IconCart>
            Add to cart
          </Btn>
          <Btn class="add-to-favourite btn_outlined _with-icon"
            :class="{_active: profileStore.isFavourite(product.id)}"
            @click="profileStore.toggleFavourite(product.id)"
          >
            <IconHeart></IconHeart>
            Favourite
          </Btn>
        </div>

      </div>

    </form>
    <Spoiler class="product-cart-form-spoiler"
      title="Delivery"
      classBody="spoiler-body"
    >
      <DeliveryConditions />
    </Spoiler>
    <Spoiler class="product-cart-form-spoiler"
      title="Return"
    >
      <ReturnConditions />
    </Spoiler>
    <!-- <Share class="product-cart-form-share"> </Share> -->
    <div class="product-cart-form-payment-method"></div>
  </div>
</template>

<style scoped>
@import "~css/consts";

.product-cart-form {

}
.product-cart-form-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2.4rem;
}
.price-row {
  display: flex;
  gap: 3.5rem;
}
.price {

}
.product-reviews {

}
.rating {
  margin-bottom: 0.6rem;
}
.reviews-count {
  text-align: center;
  font-size: 1.4rem;
}
.size-and-btns {
  align-items: end;
  margin-bottom: 0;
}
.colors {
  display: flex;
  gap: 1rem;

  margin-bottom: 2.4rem;
}
.color-row {
  margin-bottom: 2.4rem;
}
.color-title {
  font-size: 1.6rem;
  color: $color-gray-800;

  margin-bottom: 2.4rem;
}
.color {
}
.size-row {
  margin-bottom: 3.2rem;
}
:deep(.size) {
  /* flex: 0 1 35rem; */
  width: 35rem;
}


.btns {
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;

  margin-bottom: 4rem;
}
.submit {
  flex: 1 0 auto;
}
/* spoilers */
.product-cart-form-spoiler {
  max-width: 100%;
  border-bottom: 1px solid $color-gray-400;
}
:deep(.spoiler-body) {
  padding: 0 0 2rem 0;
}
.product-cart-form-payment-method {
}

</style>