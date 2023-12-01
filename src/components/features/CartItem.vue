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





</script>

<template>
  <div class="cart-item">
    <div class="col img">
      <Img :src="img" />
    </div>
    
    <div class="col name-size-color">
        <div class="name text_sb">{{ name }}</div>
        <div class="color-and-size">
          <div class="color">Color: <span>{{ color }}</span></div>
          <div class="size">Size: <span>{{ size }}</span></div>
        </div>
    </div>

    <div class="col count">
      <InputNumber class="count-input"
        v-model="selectedCount"
      ></InputNumber>
    </div>

    <div class="col price">
      <Price class="price-feature"
        :price="price"
        :discount="discount"
      ></Price>
    </div>

    <div class="col delete-and-favourite">
      <Btn class="delete btn_outlined-transparent">Delete</Btn>      
      <Btn class="favourite _transparent _with-icon">
        Move to
        <IconHeart></IconHeart>
      </Btn>
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
  margin-bottom: 1rem;

  & span {
    color: $color-gray-800;
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
  margin-bottom: .5rem;
}
.size {
  margin-bottom: .5rem;
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

</style>