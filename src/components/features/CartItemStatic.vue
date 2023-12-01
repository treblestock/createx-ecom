<script setup lang="ts">
import type { ProductColor, ProductSize } from '~/types'
import Price from '~/components/features/Price.vue'




const props = defineProps<{
  productId: number,
  img: string
  name: string
  color: ProductColor
  size: ProductSize
  price: number
  discount?: number  
  count: number
}>()

const selectedCount = computed({
  get: () => props.count,
  set: (newCount) => emit('setCount', newCount),
})


const emit = defineEmits<{
  deleteProduct: []
  setCount: [count: number]
}>()





</script>

<template>
  <div class="cart-item">
    <div class="col img">
      <Img :src="img" />
    </div>
    
    <div class="col name-size-color">
        <div class="name text_sb">{{ name }}</div>
        <div class="color-and-size">
          <div class="color"><span class="_color-gray">Color: </span> {{ color }}</div>
          <div class="size"><span class="_color-gray">Size: </span> {{ size }}</div>
        </div>
    </div>

    <div class="col price">
      <div class="_color-gray">Price: </div>
      <Price class="price-feature"
        :price="discount ? price * (1 - discount / 100) : price"
      ></Price>
    </div>

    <div class="col count">
      <div class="_color-gray">Quantity: </div>
      <div>{{ count }}</div>
    </div>


    <div class="col subtotal">
      <div class="_color-gray">Subtotal: </div>
      <Price class="subtotal-price"
        :price="discount ? price * (1 - discount / 100) : price"
      ></Price>
    </div>

  </div>
</template>

<style scoped>
@import "~css/consts";

.cart-item {
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  padding: 2rem 2.4rem;
  background: $color-gray-200;

  color: $color-gray-900;
}

.col {
  & > *:first-child {
    margin-bottom: .7rem;
  }
}
.img  {
  width: 8rem;
  height: 8rem;
  margin-right: -2rem;

  position: relative;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.name-size-color {
  flex: 0 0 21rem;
}
.name {
  color: $color-gray-800;
}
.color-and-size {
  & span {
    margin-right: 1rem;
  }
}

.count {
  flex: 0 0 7rem;
}
.price {
  flex: 0 0 10rem;
}
.delete-and-favourite {
  flex: 0 0 9rem;
}


.delete {
  color: $color-gray-800;
  margin-bottom: 1.6rem;
}
.color {
  margin-bottom: .3rem;
}
.size {
}
.count-and-price {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  margin-bottom: 1rem;
}
.favourite {
  padding: 0;
  color: $color-gray-800;
  &:hover {
    color: $color-green !important;
  }
}

._color-gray {
  color: $color-gray-700;
}

</style>