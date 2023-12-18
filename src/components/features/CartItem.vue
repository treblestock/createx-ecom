<script setup lang="ts">
import type { ProductColor, ProductSize } from '~/types'
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
  <article class="cart-item">

    <div class="left">
      <div class="col img-a">
        <Img :src="img" />
      </div>
    </div>
      
    <div class="right">
      <div class="col name-size-color">
          <AppLink class="name text-s-b"
            :to="{name: 'product', params: {id: productId}}"
          >{{ name }}</AppLink>
          <div class="color-and-size">
            <div class="color">Color: <span>{{ color }}</span></div>
            <div class="size">Size: <span>{{ size }}</span></div>
          </div>
      </div>

      <div class="count-and-price">
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
      </div>

      <div class="col delete-and-favourite">
        <Btn class="delete btn_s btn_outlined-transparent"
          @click="$emit('deleteProduct')"
        >Delete</Btn>      
        <Btn class="favourite _transparent _with-icon">
          Move to
          <IconHeart></IconHeart>
        </Btn>
      </div>
    </div>

  </article>
</template>

<style scoped>
@import "~css/consts";

.cart-item {
  display: flex;
  column-gap: var(--leng-40);
  row-gap: var(--leng-40);

  padding: 2rem var(--leng-24);
  background: $color-gray-200;

  @media (width < 600px) {
    & .name-size-color {
      flex: 1 0 13rem;
    }
  }
  @media (width < 550px) {
    & .count-and-price {

      flex: 1 1 auto;
      flex-direction: column;
    }
  @media (420px < width < 550px) {
    & .count {
      flex: 1 1 auto;
    }
    & .price {
      flex: 1 1 auto;
    }
  }
  }
  @media (width < 420px) {
    & .count-and-price {
      order: 3;
      flex-direction: row;
    }
  }
}
.left {
  flex: 0 0 auto;
}
.right {
  flex: 1 1 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--leng-40);
}
.count-and-price {
  display: flex;
  align-items: center;
  justify-content: start;
  align-items: start;
  gap: var(--leng-40);

  margin-bottom: 1rem;
}
.img-a  {
  /* flex: 0 0 8rem; */
  width: 8rem;  
  height: 8rem;
}
.name-size-color {
  flex: 0 0 21rem;
}
.name {
  max-width: fit-content;
  text-wrap: wrap;
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
  height: 4rem;
  display: flex;
  flex-direction: column;
  /* justify-content: start; */
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
.favourite {
  padding: 0;
  color: $color-gray-800;
  &:hover {
    color: $color-green !important;
  }
}

</style>