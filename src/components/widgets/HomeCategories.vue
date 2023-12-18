<script setup lang="ts">
import manImg from '~/assets/img/people/man.png'
import womanImg from '~/assets/img/people/woman.png'
import kidImg from '~/assets/img/people/kid.png'

</script>

<template>
  <div class="content-wrapper grid">
    <AppLink class="category"
      :to="{name: 'products', query: {categorySex: 'women'}}"
    >
      <div class="img">
        <img :src="womanImg" alt="">
      </div>
      <div class="title text-xl-b">women's</div>
    </AppLink>
    
    <AppLink class="category"
      :to="{name: 'products', query: {categorySex: 'men'}}"
    >
      <div class="img">
        <img :src="manImg" alt="">
      </div>
      <div class="title text-xl-b">men's</div>
    </AppLink>

    <AppLink class="category"
      :to="{name: 'products', query: {categorySex: 'kids'}}"
    >
      <div class="img">
        <img :src="kidImg" alt="">
      </div>
      <div class="title text-xl-b">kids'</div>
    </AppLink>
  </div>

  
</template>

<style scoped>
@import '~css/consts';

.content-wrapper {
  /* display: flex;
  flex-wrap: wrap; */
  gap: 3rem;

  --min-width: 10rem;
  --gap: 3rem;
}
.category {
  width: clamp(10rem, 100%, 39rem);
  /* flex: 0 0 clamp(10rem, auto, 39rem); */

  &:hover {
    & .title {
      color: $color-green;
    }
  }
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