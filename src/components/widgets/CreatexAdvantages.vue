<script setup lang="ts">
import img1 from '~/assets/img/icons/advantages/delivery.svg?url'
import img2 from '~/assets/img/icons/advantages/support.svg?url'
import img3 from '~/assets/img/icons/advantages/secure.svg?url'
import img4 from '~/assets/img/icons/advantages/payment.svg?url'




</script>

<template>
  <section class="section">
    <div class="container">
      <div class="advantages">
        <div class="advantage">
          <div class="img">
            <img :src="img1" alt="">
          </div>
          <div class="title text_xl">Fast Worldwide Shipping</div>
          <div class="text">Get free shipping over $250</div>
        </div>

        <div class="advantage">
          <div class="img">
            <img :src="img2" alt="">
          </div>
          <div class="title text_xl">24/7 Customer Support</div>
          <div class="text">Friendly 24/7 customer support</div>
        </div>

        <div class="advantage">
          <div class="img">
            <img :src="img3" alt="">
          </div>
          <div class="title text_xl">Money Back Guarantee</div>
          <div class="text">We return money within 30 days</div>
        </div>

        <div class="advantage">
          <div class="img">
            <img :src="img4" alt="">
          </div>
          <div class="title text_xl">Secure Online Payment</div>
          <div class="text">Accept all major credit cards</div>
        </div>
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
  
}
.advantages {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
}
.advantage {
  flex: 0 0 24rem;


  text-align: center;
}
.img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;

  margin-bottom: 2.4rem;

  text-align: center;
  margin: 0 auto 2.4rem;

  /* & img {
    object-fit: cover;
  } */
}
.title {
  text-align: center;
  color: $color-gray-900;
  margin-bottom: 1rem;
}

</style>