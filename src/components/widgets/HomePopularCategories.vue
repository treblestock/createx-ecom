<script setup lang="ts">
import img1 from '~/assets/img/clothes/categories/1.png'
import img2 from '~/assets/img/clothes/categories/2.png'
import img3 from '~/assets/img/clothes/categories/3.png'
import img4 from '~/assets/img/clothes/categories/4.png'
import img5 from '~/assets/img/clothes/categories/5.png'
import img6 from '~/assets/img/clothes/categories/6.png'



</script>

<template>
  <div class="wrapper">
    <h1 class="section-title h1">Popular categories</h1>
    
    <div class="categories grid">
      <AppLink class="category"
        :to="{name: 'products', query: {categoryMinorClothType: 'Tops'}}"
      >
        <div class="img-a">
          <img :src="img1" alt="">
        </div>
        <div class="title text-xl-b">Tops</div>
      </AppLink>

      <AppLink class="category"
        :to="{name: 'products', query: {categoryMinorClothType: 'T-shirts<'}}"
      >
        <div class="img-a">
          <img :src="img2" alt="">
        </div>
        <div class="title text-xl-b">T-shirts</div>
      </AppLink>

      <AppLink class="category"
        :to="{name: 'products', query: {categoryMinorClothType: 'Caps'}}"
      >
        <div class="img-a">
          <img :src="img3" alt="">
        </div>
        <div class="title text-xl-b">Caps</div>
      </AppLink>

      <AppLink class="category"
        :to="{name: 'products', query: {categoryMinorClothType: 'Sandals'}}"
      >
        <div class="img-a">
          <img :src="img4" alt="">
        </div>
        <div class="title text-xl-b">Sandals</div>
      </AppLink>

      <AppLink class="category"
        :to="{name: 'products', query: {categoryMinorClothType: 'Jackets'}}"
      >
        <div class="img-a">
          <img :src="img5" alt="">
        </div>
        <div class="title text-xl-b">Jackets</div>
      </AppLink>

      <AppLink class="category"
        :to="{name: 'products', query: {categoryMinorClothType: 'Coats'}}"
      >
        <div class="img-a">
          <img :src="img6" alt="">
        </div>
        <div class="title text-xl-b">Coats</div>
      </AppLink>

    </div>
  </div>
  
</template>

<style scoped>
@import '~css/consts';



.section-title {
  margin-bottom: var(--leng-60);

  text-align: center;
  color: $color-gray-900;
}
.title {
  text-align: center;
  color: $color-gray-900;
}
.wrapper {
  
}
.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
}
.category {
  flex: 0 0 rl(100, 180);
  
  margin-bottom: var(--leng-60);
  &:hover {
    & .title {
      color: $color-green;
    }
  }
}
.img-a {
  aspect-ratio: 1 / 1;
  border-radius: 50%;

  margin-bottom: 2.4rem;

}

</style>