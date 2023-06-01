<script setup lang="ts">
import img1 from '~/assets/img/clothes/categories/1.jpg'
import img2 from '~/assets/img/clothes/categories/2.jpg'
import img3 from '~/assets/img/clothes/categories/3.jpg'
import img4 from '~/assets/img/clothes/categories/4.jpg'
import img5 from '~/assets/img/clothes/categories/5.jpg'
import img6 from '~/assets/img/clothes/categories/6.jpg'



</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title h1">Popular categories</h1>
      
      <div class="categories">
        <div class="category">
          <div class="img">
            <img :src="img1" alt="">
          </div>
          <div class="title text_xl">Tops</div>
        </div>

        <div class="category">
          <div class="img">
            <img :src="img2" alt="">
          </div>
          <div class="title text_xl">T-shirts</div>
        </div>

        <div class="category">
          <div class="img">
            <img :src="img3" alt="">
          </div>
          <div class="title text_xl">Caps</div>
        </div>

        <div class="category">
          <div class="img">
            <img :src="img4" alt="">
          </div>
          <div class="title text_xl">Sandals</div>
        </div>

        <div class="category">
          <div class="img">
            <img :src="img5" alt="">
          </div>
          <div class="title text_xl">Jackets</div>
        </div>

        <div class="category">
          <div class="img">
            <img :src="img6" alt="">
          </div>
          <div class="title text_xl">Coats</div>
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

.tilte {
  margin-bottom: 6rem;
}
.container {
  
}
.categories {
  display: flex;
  gap: 3rem;
}
.category {
}
.img {
  width: 18rem;
  height: 18rem;
  border-radius: 50%;

  margin-bottom: 2.4rem;

  & img {
    object-fit: cover;
  }
}
.title text_xl {
  text-align: center;
}

</style>