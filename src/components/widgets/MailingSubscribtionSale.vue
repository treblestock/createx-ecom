<script setup lang="ts">
import illustration from '~/assets/img/illustrations/1.png'

const email = ref()
function onSubmit() {

}
</script>

<template>

  <div class="email">
    <div class="img">
      <img :src="illustration" alt="">
    </div>
    
    <div class="email-text">
      <div class="description text_sb">For All new Email Subscribers</div>
      <div class="title h2">Get 5% Off & Free Delivery</div>
      
      <form class="email-form"
        @submit.prevent="onSubmit"
      >
        <InputGroup class="input-group"
          type="email"
          v-model="email"
          placeholder="Your working email"
          classInput="input"
        >
          Email
        </InputGroup>
        <Btn class="submit"
          size="l"
          type="submit"
        >Subscribe</Btn>
      </form>
      <div class="details text_s">
        *Sign up to be the first to hear about exclusive deals, special offers and upcoming collections.
      </div>
    </div>
  </div>

  
</template>

<style scoped>
@import '~css/consts';


$bg-img-ratio-height: calc(380 / 500 * 100%);
$bg-img-ratio-width: calc(440 / 750 * 100%);



.email {
  height: 50rem;
  position: relative;
  padding: 6rem;


  grid-column: span 2;
  &._l {
    grid-column: span 3;
  }
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

  background: $color-gray-300;

  & img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: $bg-img-ratio-height;
    width: $bg-img-ratio-width;
    object-fit: cover;
  }

}
.email-text {
  max-width: 36rem;
}

.description {
  text-transform: uppercase;
  margin-bottom: 1.2rem;

  color: $color-gray-900;
}
.title {
  text-wrap: nowrap;
  margin-bottom: 3.2rem;

  color: $color-gray-900;

}


.email-form {
  display: flex;
  align-items: end;
  margin-bottom: 2rem;
}
.input-group {
  color: $color-gray-800;
}
:deep(.input) {
  background: $color-white;
}
.submit {
  width: 13rem;
}
.details {
  color: $color-gray-800;
}



</style>