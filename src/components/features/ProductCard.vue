<script setup lang="ts">
import type { ProductColor, ProductSize as ProductSizeType, Rating as RatingType } from '~/types'
import Price from './Price.vue'
import SaleLabel from '../icons/SaleLabel.vue'
import Rating from './Rating.vue'
import ProductSizes from '~/components/features/ProductSizes.vue'
import ProductColors from '~/components/features/ProductColors.vue'


const props = defineProps<{
  id: number
  imgs: string[]
  name: string
  price: number
  discount?: number
  isFavourite?: true
  rating: RatingType
  colors: ProductColor[]
  sizes: ProductSizeType[]
}>()


const selectedColor = ref(props.colors[0])
const selectedSize = ref(props.sizes[0])



</script>

<template>
  <div class="card">
    <div class="visible">
      <div class="img">
        <Img :src="imgs[0]"></Img>
        <div class="labels">
          <SaleLabel class="sale-label"
            v-if="discount"
          >{{ discount }}</SaleLabel>
          <Rating class="rating"
            :rating="rating"
          ></Rating>
          <IconRounded class="favourite-label"
            icon="heart"
          ></IconRounded>
        </div>
      </div>
      <div class="description">
        <AppLink class="product-name text_l"
          :to="{
            name: 'product',
            params: {id},
          }"
        >{{ name }}</AppLink>
        <Price class="product-price"
          :price="price"
          :discount="discount"
        ></Price>
      </div>
    </div>
    <div class="popover">
      <ProductSizes class="sizes"
        :sizes="sizes"
        v-model="selectedSize"
      ></ProductSizes>
      <ProductColors class="colors"
        :colors="colors"
        v-model="selectedColor"
      ></ProductColors>
      <Btn class="cart-add-btn">add to cart</Btn>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';


/* $img-ratio: calc(100% * 320 / 285); */
$img-ratio: 114%;
$shadow: 0 10px 10px 0 $color-gray-800;
/* $shadow: $shadow-card; */
.card {
  width: clamp(28rem, 100%, 39rem);

  position: relative;

  /* &:hover {
    box-shadow: $shadow;
  } */
}
.visible {

}
.img {
  width: 100%;

  height: 0;
  padding-top: $img-ratio;

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
.labels {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);

  padding: 1.6rem;
}
.sale-label {
  align-self: start;
  justify-self: start;
  grid-area: 1 / 1 / 2 / 2;
}
.rating {
  align-self: start;
  justify-self: end;
  grid-area: 1 / 2 / 2 / 3;
}
.favourite-label {
  grid-area: 2 / 2 / 3 / 3;
  align-self: end;
  justify-self: end;

  cursor: pointer;
}
.description {
  padding: 1.6rem;

  .card:hover & {
    box-shadow: $shadow;
  }
}
.product-name {
  margin-bottom: 0.8rem;

  color: $color-gray-800;
  &:hover {
    color: $color-green;
  }
}
.product-price {

}
.popover {
  visibility: hidden;

  /* pos relative to card */
  z-index: 1;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  padding: .4rem 1.6rem 1.6rem;

  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;

  .card:hover & {
    z-index: 1;
    visibility: visible;
    background: $color-white;
    box-shadow: $shadow;
  }
}
.sizes {
  flex: 0 0 50%
}
.colors {
  flex: 0 0 50%
}
.cart-add-btn {
  margin-top: 2.4rem;
  flex: 0 0 100%
}


</style>