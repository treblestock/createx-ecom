<script setup lang="ts">
import type { ProductColor, ProductSize } from '~/types'
import IconDelete from '~/assets/img/icons/decor/delete.svg'
import IconHeart from '~/assets/img/icons/decor/heart.svg'
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



const BASE_URL = import.meta.env.BASE_URL

</script>

<template>
  <div class="cart-item-small">
    <div class="left img">
      <img :src="BASE_URL + img" >
    </div>
    <div class="right">
      <div class="name-and-delete">
        <AppLink class="name text-s-b"
          :to="{name: 'product', params: {id: productId}}"
        >{{ name }}</AppLink>
        <Btn class="delete _transparent"
          @click="emit('deleteProduct')"
        >
          <IconDelete class="delete"></IconDelete>
        </Btn>
      </div>
      <div class="color-and-size">
        <div class="color">Color: <span>{{ color }}</span></div>
        <div class="size">Size: <span>{{ size }}</span></div>
      </div>
      <div class="count-and-price">
        <InputNumber class="count"
          v-model="selectedCount"
        ></InputNumber>
        <Price class="price"
          :price="price"
          :discount="discount"
        ></Price>
      </div>

      <Btn class="favourite _transparent _with-icon">
        Move to
        <IconHeart></IconHeart>
      </Btn>
    </div>
  </div>
</template>

<style scoped>
@import "~css/consts";

.cart-item-small {
  display: flex;
  align-items: start;
  gap: 1.6rem;
}
.left {
  flex: 0 0 8rem;
  height: 8rem;

  gap: 1.6rem;

  position: relative;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.img {

}
.right {
  flex: 1 1 auto; 
}
.name-and-delete {
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  margin-bottom: .5rem;
  
}
.name {
  color: $color-gray-800;
}
.text {

  &_xsb {
  }
}
.delete {
  padding: 0;
  color: $color-gray-700;
  &:hover {
    color: $color-red;
  }
}
.color-and-size {
  margin-bottom: 1rem;

  & span {
    color: $color-gray-800;
  }
  
}
.color {
  margin-bottom: .5rem;
}
.size {
  margin-bottom: .5rem;
}
.count-and-price {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.6rem;

  margin-bottom: 1rem;
}
.count {
}
.price {
  flex-direction: column;
  gap: 1rem;
}
.favourite {
  padding: 0;
  color: $color-gray-800;
  &:hover {
    color: $color-green !important;
  }
}

</style>