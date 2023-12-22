<script setup lang="ts">
import type { ProductColor, ProductSize as ProductSizeType, Rating as RatingType } from '~/types'
import Rating from '~/components/features/Rating.vue'
import Price from '~/components/features/Price.vue'
import ProductSizes from '~/components/features/ProductSizes.vue'
import ProductColors from '~/components/features/ProductColors.vue'
import IconHeart from '~/assets/img/icons/decor/heart.svg'

import useStoreCart from '~/stores/cart'
const cartStore = useStoreCart()

import useStoreProfile from '~/stores/profile'
const profileStore = useStoreProfile()


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

function addToCart() {
  cartStore.setCount({
    productId: props.id,
    size: selectedSize.value,
    color: selectedColor.value,
  }, 1)
}

const BASE_URL = import.meta.env.BASE_URL

// favourite
const toggleFavourite = profileStore.toggleFavourite
const isFavourite = computed(() => profileStore.isFavourite(props.id))
</script>

<template>
  <article class="card">
    <div class="visible">
      <div class="img">
        <img :src="BASE_URL + imgs[0]">
        <div class="labels">
          <AppLink class="sale-link"
            :to="{name: 'products', query: {sale: 'y'}}"
          >
            <div class="label-sale label-l"
              v-if="discount"
            >{{ discount }}</div>
          </AppLink>
          <AppLink class="rating"
            :to="{name: 'productReviews', params: {id,}}"
          >
            <Rating class="start"
              :rating="rating"
            ></Rating>
          </AppLink>
          <button class="icon-circle favourite-label"
            :class="{_active: isFavourite}"
            @click="toggleFavourite(id)"
          >
            <IconHeart class="icon-heart"></IconHeart>
          </button>
        </div>
      </div>
      <div class="description">
        <AppLink class="product-name text-l"
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
    <form class="popover"
      @submit.prevent="addToCart"
    >
      <ProductSizes class="sizes"
        :sizes="sizes"
        v-model="selectedSize"
      ></ProductSizes>
      <ProductColors class="colors"
        :colors="colors"
        v-model="selectedColor"
      ></ProductColors>
      <Btn class="cart-add-btn"
        type="submit"
      >add to cart</Btn>
    </form>
  </article>
</template>

<style scoped>
@import '~css/consts';


/* $img-ratio: calc(100% * 320 / 285); */
$img-ratio: 114%;
$shadow: 0 -1px 1px 0 $color-gray-800;
$shadow-popover: 0 10px 10px 0 $color-gray-800;
/* $shadow: $shadow-card; */
.card {
  width: clamp(28rem, 100%, 39rem);

  position: relative;

}

.size-s {
  width: 28.5rem;
  flex: 0 0 28.5rem;
}
.visible {
  .card:hover & {
  }
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
.sale-link {
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

}
.product-name {
  display: block;
  text-align: left;
  margin-bottom: 1.2rem;

  color: $color-gray-800;
  &:hover {
    color: $color-green;
  }
}
.product-price {

}
.popover {
  display: block;
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
    box-shadow: $shadow-popover;
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