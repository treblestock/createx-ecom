<script setup lang="ts">
import img1 from '~/assets/img/clothes/categories/1.png'
import img2 from '~/assets/img/clothes/categories/2.png'
import img3 from '~/assets/img/clothes/categories/3.png'
import img4 from '~/assets/img/clothes/categories/4.png'
import img5 from '~/assets/img/clothes/categories/5.png'
import img6 from '~/assets/img/clothes/categories/6.png'



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
          <div class="category-title text_xlb">Tops</div>
        </div>

        <div class="category">
          <div class="img">
            <img :src="img2" alt="">
          </div>
          <div class="category-title text_xlb">T-shirts</div>
        </div>

        <div class="category">
          <div class="img">
            <img :src="img3" alt="">
          </div>
          <div class="category-title text_xlb">Caps</div>
        </div>

        <div class="category">
          <div class="img">
            <img :src="img4" alt="">
          </div>
          <div class="category-title text_xlb">Sandals</div>
        </div>

        <div class="category">
          <div class="img">
            <img :src="img5" alt="">
          </div>
          <div class="category-title text_xlb">Jackets</div>
        </div>

        <div class="category">
          <div class="img">
            <img :src="img6" alt="">
          </div>
          <div class="category-title text_xlb">Coats</div>
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

.title {
  margin-bottom: 6rem;
  
  text-align: center;
  color: $color-gray-900;
}
.container {
  
}
.categories {
  display: flex;
  flex-wrap: wrap;
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
.category-title {
  text-align: center;
  color: $color-gray-900;
}

</style>