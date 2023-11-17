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



</script>

<template>
  <div class="collection"
    :class="{_full: fullScreen}"
  >
    <div class="img">
      <Img :src="backgroundImg" />
    </div>
    
    <div class="collection-container"
      :class="classCollectionContainer"
    >
      <div class="collection-container-top">
        <div class="collection-description text_sb">{{ description }}</div>
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

      <!-- <div class="collection-container-bottom"
        v-if="expiresWhen"
      >
        <TimeCounter :expiresWhen="expiresWhen" />
      </div> -->
    </div>
  </div>  
</template>

<style scoped>
@import "~css/consts";

.collection {
  height: 50rem;
  position: relative;
  padding: 6rem;


  &._full {
    & .collection-description {
      font-size: 1.8rem;
    }
    & .collection-title {
      font-size: 7.2rem;
      margin-bottom: 6rem;
    }

  }
}



.collection-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
}
.collection-container-top {
  max-width: 50%;
}
.collection-container-bottom {
  max-width: 50%;
}
.collection-description {
  margin-bottom: 1.2rem;

  /* font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.5; */
  text-transform: uppercase;

  color: $color-gray-900;
}
.collection-title {
  margin-bottom: 4rem;

  /* font-size: 3.2rem;
  line-height: 1.3;
  font-weight: 700; */
  color: $color-gray-900;
}
.collection-links {
  display: flex;
  gap: 3rem;
}


.img {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  overflow: hidden;

  /* margin-bottom: var(1.6rem; */
  margin-bottom: 1.6rem;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}




</style>