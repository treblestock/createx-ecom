<script setup lang="ts">
import img1 from '~/assets/img/clothes/collections/1.jpg'
import img2 from '~/assets/img/clothes/collections/2.jpg'
import img3 from '~/assets/img/clothes/collections/3.jpg'
import img4 from '~/assets/img/illustrations/1.png'



</script>

<template>
  <section class="section">
    <div class="container">
      <div class="collection">
        <div class="img">
          <img :src="img1" alt="">
        </div>
        <div class="collection-name text_sb">Summer Collections</div>
        <div class="collection-title h2">Sale Up to 70%</div>
        <AppLinkBtn class="collection-link _transparent" outlined
          size="l"
          :to="{name: 'products'}"
        >Explore new prices</AppLinkBtn>
      </div>

      <div class="collection _l">
        <div class="img">
          <img :src="img2" alt="">
        </div>
        <div class="collection-name text_sb">Deal of the week</div>
        <div class="collection-title h2">Stay Warm With Our&#x000A;New Sweaters</div>
        <AppLinkBtn class="collection-link _transparent" outlined
          size="l"
          :to="{name: 'products'}"
        >Shop now</AppLinkBtn>
      </div>

      <div class="collection _l">
        <div class="img">
          <img :src="img3" alt="">
        </div>
        <div class="collection-name text_sb">New collection</div>
        <div class="collection-title h2">Shoes & Bags <br/>autumn / winter 2020</div>
        <AppLinkBtn class="collection-link _transparent" outlined
          size="l"
          :to="{name: 'products'}"
        >See offers</AppLinkBtn>
      </div>

      <div class="collection _gray">
        <div class="img">
          <img :src="img4" alt="">
        </div>
        <div class="collection-name text_sb">For All new Email Subscribers</div>
        <div class="collection-title h2">Get 5% Off & Free Delivery</div>
        <AppLinkBtn class="collection-link" outlined
          size="l"
          to="#subscribe-mailing"
        >Explore new prices</AppLinkBtn>
      </div>

    </div>
  </section>
  
</template>

<style scoped>
@import '~css/consts';


.section {
  margin-bottom: 18rem;
}
.container {
  max-width: 100%;
  padding: 0 3rem;


  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1.6rem;
}
.collection {
  height: 50rem;
  position: relative;
  padding: 6rem;


  grid-column: span 2;
  &._l {
    grid-column: span 3;
  }
}
._gray {
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;

    z-index: -2;
    position: absolute;
    top: 0;
    left: 0;
    background: $color-gray-300;
  }
}

.collection-name {
  text-transform: uppercase;
  margin-bottom: 1.2rem;

  color: $color-gray-900;
}
.collection-title {
  margin-bottom: 4rem;

  color: $color-gray-900;

}
.collection-link {
}

.img {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  overflow: hidden;

  margin-bottom: 1.6rem;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.title text_xl {
  text-align: center;
}

</style>