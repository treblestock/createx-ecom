<script setup lang="ts">
import TimeCounter from '~/components/features/TimeCounter.vue'


const props = defineProps<{
  description: string,
  title: string,
  backgroundImg: string,
  linkOutlined?: {
    text: string
    url: string
  }
  linkSolid?: {
    text: string
    url: string
  }
  expiresWhen?: string | Date
  classCollectionContainer?: string
}>()



</script>

<template>
  <div class="collection">
    <div class="img-a">
      <Img :src="backgroundImg" />
    </div>

    <div class="container">
      <div class="content">
        <div class="content-top">
          <div class="collection-description text-s-b">{{ description }}</div>
          <div class="collection-title h1">{{ title }}</div>
          <div class="collection-links">
            <AppLinkBtn class="btn_xl collection-link btn_outlined-transparent"
              v-if="linkOutlined"
              :to="linkOutlined.url"
            >{{ linkOutlined.text }}</AppLinkBtn>
            <AppLinkBtn class="btn_xl collection-link"
              v-if="linkSolid"
              :to="linkSolid.url"
            >{{ linkSolid.text }}</AppLinkBtn>
          </div>
        </div>

        <!-- <div class="content-bottom"
          v-if="expiresWhen"
        >
          <TimeCounter :expiresWhen="expiresWhen" />
        </div> -->

      </div>
    </div>    
  </div>  
</template>

<style scoped>
@import "~css/consts";

.collection {
  position: relative;
  padding: var(--leng-30) 0;

  & .collection-description {
    font-size: 1.8rem;
  }
  & .collection-title {
    font-size: var(--leng-80);
    margin-bottom: var(--leng-60);
  }
  & .content {
    display: flex;
    gap: 3rem;

    /* padding-top: 14rem; */
  }
}

.container {
  /* height: calc(100% - 15vh); */
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 calc(4.8rem + var(--leng-80) );
}
.content {
  /* max-width: 36rem; */
  /* height: 100%; */

  /* 25 rem is fullscreen sliders' pagination gap */

  /* min-height: calc((100vh - var(--header-height)) / .75 ); */
  /* flex: 0 0 30rem; */

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 4rem;
}
.content-top {
}
.content-bottom {
}
.collection-description {
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  text-transform: uppercase;

  color: $color-gray-900;
}
.collection-title {
  margin-bottom: var(--leng-40);

  color: $color-gray-900;
}
.collection-links {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}
.collection-links {
}


.img-a {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  overflow: hidden;

  margin-bottom: 1.6rem;

  & img {
    position: absolute;
  }
}
</style>