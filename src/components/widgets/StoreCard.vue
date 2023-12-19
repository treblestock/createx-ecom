<script setup lang="ts">
import IconIphone from '~/assets/img/icons/decor/Iphone.svg'
import IconMail from '~/assets/img/icons/decor/Mail.svg'
import IconClock from '~/assets/img/icons/decor/Clock.svg'
import IconGeo from '~/assets/img/icons/decor/Geo.svg'

const props = defineProps<{
  img: string
  storeName: string
  phoneNumber: string
  email: string
  workingHours: string
  address: string
}>()


function parseNumber(str: string) {
  return str.match(/\d/g)?.join('')
}

const BASE_URL = import.meta.env.BASE_URL

</script>

<template>
  <div class="store-card">
    <div class="img">
      <img :src="BASE_URL + img" alt="" >
    </div>

    <div class="card-inner">
      <div class="title h4">{{ storeName }}</div>
      <div class="row">
        <IconIphone class="icon"></IconIphone>
        <a class="link" :href="`tel:${parseNumber(phoneNumber)}`">{{ phoneNumber }}</a>
      </div>

      <div class="row">
        <IconMail class="icon"></IconMail>
        <a class="link" :href="`mailto:${email}`">{{ email }}</a>
      </div>

      <div class="row">
        <IconClock class="icon"></IconClock>
        <span href="">{{ workingHours }}</span>
      </div>

      <div class="row address">
        <IconGeo class="icon"></IconGeo>
        <a href="">{{ address }}</a>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import "~css/consts";

.store-card {
  box-shadow: $shadow-card;
  &:hover {
    box-shadow: $shadow-card-hover;
  }
}
.card-inner {
  padding: var(--leng-24) var(--leng-24) var(--leng-32);
}
.img {
  position: relative;
  width: 100%;
  height: 20rem;

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
  color: $color-gray-900;

  margin-bottom: 2rem;
}
.row {
  display: flex;
  align-items: center;
  gap: 1.2rem;

  margin-bottom: 1.2rem;
  
  font-weight: 700;
  color: $color-gray-800;
}

.link {
  color: $color-gray-800;
  &:hover {
    color: $color-green;
  }
}
.address {
  color: $color-green;
  &:hover {
    text-decoration: underline;
  }
}
.icon {
  color: $color-green;
}

</style>