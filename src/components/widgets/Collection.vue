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
  fullScreen?: boolean 
}>()


const BASE_URL = import.meta.env.BASE_URL
</script>

<template>
  <div class="collection"
    :class="{_full: fullScreen}"
  >
    <div class="img-a">
      <img :src="BASE_URL + backgroundImg" >
    </div>
    
    <div class="content"
      :class="classCollectionContainer"
    >
      <div class="content-top">
        <div class="collection-description text-s-b">{{ description }}</div>
        <div class="collection-title h2">{{ title }}</div>
        <div class="collection-links">
          <AppLinkBtn class="collection-link btn_outlined-transparent"
            :class="{btn_l: fullScreen}"
            v-if="linkOutlined"
            :to="linkOutlined.url"
          >{{ linkOutlined.text }}</AppLinkBtn>
          <AppLinkBtn class="collection-link"
            :class="{btn_l: fullScreen}"
            v-if="linkSolid"
            :to="linkSolid.url"
          >{{ linkSolid.text }}</AppLinkBtn>
        </div>
      </div>

      <div class="content-bottom"
        v-if="expiresWhen"
      >
        <TimeCounter :expiresWhen="expiresWhen" />
      </div>
    </div>
  </div>  
</template>

<style scoped>
@import "~css/consts";

.collection {
  position: relative;
  padding: var(--leng-60);

  /* &._full {
    & .collection-description {
      font-size: 1.8rem;
    }
    & .collection-title {
      font-size: 7.2rem;
      margin-bottom: var(--leng-60);
    }
    & .content {
      display: flex;
      gap: 3rem;

      padding-top: 14rem;
    }
  } */
}

.content {
  max-width: 36rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  gap: 4rem;
}
.content-top {
}
.content-bottom {
}
.collection-description {
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
  gap: 3rem;
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