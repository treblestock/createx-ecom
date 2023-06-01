<script setup lang="ts">
import manImg from '~/assets/img/people/man.png'
import womanImg from '~/assets/img/people/woman.png'
import kidImg from '~/assets/img/people/kid.png'




</script>

<template>
  <section class="section">
    <div class="container">
      <div class="category">
        <div class="img">
          <img :src="womanImg" alt="">
          <div class="title text_xl">women's</div>
        </div>
      </div>
      
      <div class="category">
        <div class="img">
          <img :src="manImg" alt="">
          <div class="title text_xl">men's</div>
        </div>
      </div>

      <div class="category">
        <div class="img">
          <img :src="kidImg" alt="">
          <div class="title text_xl">kids'</div>
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
  display: flex;
  gap: 3rem;
}
.category {
  flex: 0 0 33%;
}
.img {
  width: 39rem;
  height: 39rem;

  margin-bottom: 1.6rem;

  & img {
    object-fit: cover;
  }
}
.title text_xl {
  text-align: center;
}

</style>