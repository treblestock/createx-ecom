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
        </div>
        <div class="title text_xlb">women's</div>
      </div>
      
      <div class="category">
        <div class="img">
          <img :src="manImg" alt="">
        </div>
        <div class="title text_xlb">men's</div>
      </div>

      <div class="category">
        <div class="img">
          <img :src="kidImg" alt="">
        </div>
        <div class="title text_xlb">kids'</div>
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
  flex-wrap: wrap;
  gap: 3rem;
}
.category {
  flex: 0 0 39rem;
}
.img {
  /* width: 39rem;
  height: 39rem; */
  width: 100%;
  padding-bottom: 100%;

  position: relative;

  margin-bottom: 2rem;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.title {
  text-align: center;
  color: $color-gray-800;

}

</style>