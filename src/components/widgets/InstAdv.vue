<script setup lang="ts">
import img1 from '~/assets/img/from-inst/1.webp'
import img2 from '~/assets/img/from-inst/2.webp'
import img3 from '~/assets/img/from-inst/3.webp'
import IconInst from '~/assets/img/icons/socials/inst.svg'





</script>

<template>
  <div class="wrapper">
    <div class="body">
      <div class="title h6">Follow us on Instagram</div>
      <div class="inst-acc h1">@createx_store</div>
      <AppLinkBtn class="link"
        outlined
        to="https://google.com"
      >
        <IconInst class="inst-icon"></IconInst>
        &#x2800;
        Follow instagram
      </AppLinkBtn>
    </div>
    <div class="imgs">
      <div class="img-a">
        <img :src="img1" alt="">
      </div>
      <div class="img-a">
        <img :src="img2" alt="">
      </div>
      <div class="img-a">
        <img :src="img3" alt="">
      </div>
    </div>
  </div>
  
</template>

<style scoped>
@import '~css/consts';


.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;
}

.body {
}
.title {
  margin-bottom: 1rem;
  color: $color-gray-900;
}
.inst-acc {
  color: $color-gray-900;
  margin-bottom: var(--leng-60);
}
.link {
  display: flex;
  align-items: center;
  width: max-content;
  padding: 1rem 4rem;

  &:hover .svg {
    color: $color-white;
  }
}

.inst-icon {
  margin-right: -1rem;
  &:deep(.icon-color) {
    color: $color-white;
  }
  &:deep(.icon-bgc) {
    color: transparent;
  }
}

/* imgs */
.imgs {
  flex: 1 1 81rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.img-a {
  flex: 1 0 max(calc((100% - 3rem) / 3), 26rem);
  height: 26rem;

}

</style>