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



const emit = defineEmits<{
  deleteProduct: []
  setCount: [count: number]
}>()




const BASE_URL = import.meta.env.BASE_URL
</script>

<template>
  <div class="cart-item">
    <div class="left">
      <div class="col img-a">
        <img :src="BASE_URL + img" >
      </div>
    </div>
    
    <div class="right">
      <div class="name-size-color">
        <AppLink class="name text-s-b"
          :to="{name: 'product', params: {id: productId}}"
        >{{ name }}</AppLink>
        <div class="color-and-size">
          <div class="color"><span class="_color-gray">Color: </span> {{ color }}</div>
          <div class="size"><span class="_color-gray">Size: </span> {{ size }}</div>
        </div>
      </div>

      <div class="right-right">
        <div class="col price-col">
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
    </div>

  </div>
</template>

<style scoped>
@import "~css/consts";

.cart-item {
  display: flex;
  justify-content: space-between;
  gap: var(--leng-40);

  padding: 2rem 2.4rem;
  background: $color-gray-200;

  color: $color-gray-900;
}


.left {
  flex: 0 0 auto;
}
.right {
  flex: 1 1 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 2rem;
  justify-content: space-between;
}
.right-right {
  flex: 1 1 36.5rem;

  display: flex;
  justify-content: space-between;
  column-gap: var(--leng-40);
  row-gap: 1rem;


  @media (width < 400px) {



    flex-direction: column;

    row-gap: .7rem;

    & .col {
      flex: 0 0 auto;
      justify-content: space-between;

      flex-direction: row;
    }
    & .price {
      justify-content: end;
    }
  }
}

.col {
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  gap: .7rem;
  /* & > *:first-child {
    margin-bottom: .7rem;
  } */
}
.img-a  {
  width: 8rem;
  height: 8rem;
}
.name-size-color {
  flex: 1 0 13rem;
}
.name {
  color: $color-gray-800;
}
.color-and-size {
  & span {
    margin-right: 1rem;
  }
}
.subtotal-price {
  justify-content: end;
}

.count {
  flex: 0 0 7rem;
}
.price-col {
  flex: 0 0 10rem;
}
.subtotal {
  flex: 0 0 10rem;
  justify-content: end;
}

.color {
  margin-bottom: .3rem;
}
.size {
}

._color-gray {
  color: $color-gray-700;
}

</style>