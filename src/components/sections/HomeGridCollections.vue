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
        <img :src="img1" alt="">
        <div class="collection-name text_sb">Summer Collections</div>
        <div class="collection-title h2">Sale Up to 70%</div>
        <AppLinkBtn class="collection-link" outlined
          size="l"
        >Explore new prices</AppLinkBtn>
      </div>

      <div class="collection _l">
        <img :src="img2" alt="">
        <div class="collection-name text_sb">Deal of the week</div>
        <div class="collection-title h2">Stay Warm With Our&#x000A;New Sweaters</div>
        <AppLinkBtn class="collection-link" outlined
          size="l"
        >Shop now</AppLinkBtn>
      </div>

      <div class="collection _l">
        <img :src="img3" alt="">
        <div class="collection-name text_sb">New collection</div>
        <div class="collection-title h2">Shoes & Bags &#x000A;autumn / winter 2020</div>
        <AppLinkBtn class="collection-link" outlined
          size="l"
        >See offers</AppLinkBtn>
      </div>

      <div class="collection">
        <img :src="img4" alt="">
        <div class="collection-name text_sb">For All new Email Subscribers</div>
        <div class="collection-title h2">Get 5% Off & Free Delivery</div>
        <AppLinkBtn class="collection-link" outlined
          size="l"
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
  grid-template-columns: repeat(5, 1rem);
  grid-template-rows: repeat(2, 1rem);
  grid-gap: 1.6rem;
}
.collection {
  position: relative;
  padding: 6rem;

  grid-column: span 2;
  &._l {
    grid-column: span 3;
  }
}

.collection-name {
  text-transform: uppercase;
  margin-bottom: 1.2rem;
}
.collection-title {
  margin-bottom: 4rem;

}
.collection-link {
}

.img {
  position: absolute;
  width: 100%;
  height: 100%;

  margin-bottom: 1.6rem;

  & img {
    object-fit: cover;
  }
}
.title text_xl {
  text-align: center;
}

</style>