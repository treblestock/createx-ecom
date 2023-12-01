<script setup lang="ts">
import img1 from '~/assets/img/contacs/address/1.png'
import img2 from '~/assets/img/contacs/address/2.png'
import img3 from '~/assets/img/contacs/address/3.png'
import img4 from '~/assets/img/contacs/address/4.png'

import IconIphone from '~/assets/img/icons/decor/Iphone.svg'
import IconMail from '~/assets/img/icons/decor/Mail.svg'
import IconClock from '~/assets/img/icons/decor/Clock.svg'
import IconGeo from '~/assets/img/icons/decor/Geo.svg'






</script>

<template>
  <div class="stores">
    <div class="store-card">
      <div class="img"><img :src="img1" alt=""></div>

      <div class="card-inner">
        <div class="title h4">New York, USA</div>
        <div class="row">
          <IconIphone class="icon"></IconIphone>
          <a class="link" href="tel:4055550128">(405) 555-0128</a>
        </div>

        <div class="row">
          <IconMail class="icon"></IconMail>
          <a class="link" href="mailto:hello@createx.com">hello@createx.com</a>
        </div>

        <div class="row">
          <IconClock class="icon"></IconClock>
          <span href="">Daily from 9 am to 9 pm</span>
        </div>

        <div class="row geo">
          <IconGeo class="icon"></IconGeo>
          <a href="">20 W 29th Street New York, NY 10001</a>
        </div>
      </div>

    </div>

    <div class="store-card">
      <div class="img"><img :src="img2" alt=""></div>

      <div class="card-inner">
        <div class="title h4">Delaware, USA</div>
        <div class="row">
          <IconIphone class="icon"></IconIphone>
          <a class="link" href="tel:8085550111">(808) 555-0111</a>
        </div>

        <div class="row">
          <IconMail class="icon"></IconMail>
          <a class="link" href="mailto:delaware@createx.com">delaware@createx.com</a>
        </div>

        <div class="row">
          <IconClock class="icon"></IconClock>
          <span href="">Daily from 10 am to 9 pm</span>
        </div>

        <div class="row geo">
          <IconGeo class="icon"></IconGeo>
          <a href="">6391 Elgin St. Celina, Delaware 10299</a>
        </div>
      </div>

    </div>

    <div class="store-card">
      <div class="img"><img :src="img3" alt=""></div>

      <div class="card-inner">
        <div class="title h4">New Jersey, USA</div>
        <div class="row">
          <IconIphone class="icon"></IconIphone>
          <a class="link" href="tel:7025550122">(702) 555-0122</a>
        </div>

        <div class="row">
          <IconMail class="icon"></IconMail>
          <a class="link" href="mailto:newjersey@createx.com">newjersey@createx.com</a>
        </div>

        <div class="row">
          <IconClock class="icon"></IconClock>
          <span href="">Daily from 9 am to 8 pm</span>
        </div>

        <div class="row geo">
          <IconGeo class="icon"></IconGeo>
          <a href="">2464 Royal Ln. Mesa, New Jersey 45463</a>
        </div>
      </div>

    </div>
    
    <div class="store-card">
      <div class="img"><img :src="img4" alt=""></div>

      <div class="card-inner">
        <div class="title h4">Maine, USA</div>
        <div class="row">
          <IconIphone class="icon"></IconIphone>
          <a class="link" href="tel:2195550114">(219) 555-0114</a>
        </div>

        <div class="row">
          <IconMail class="icon"></IconMail>
          <a class="link" href="mailto:maine@createx.com">maine@createx.com</a>
        </div>

        <div class="row">
          <IconClock class="icon"></IconClock>
          <span href="">Daily from 9 am to 9 pm</span>
        </div>

        <div class="row geo">
          <IconGeo class="icon"></IconGeo>
          <a href="">8502 Preston Rd. Inglewood, Maine 98380</a>
        </div>
      </div>

    </div>


  </div>  
</template>

<style scoped>
@import '~css/consts';
.stores {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}
.store-card {
  flex: 0 0 39rem;

  box-shadow: $shadow-card;
  &:hover {
    box-shadow: $shadow-card-hover;
  }
}
.card-inner {
  padding: 2.4rem 2.4rem 3.2rem;
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
.geo {
  color: $color-green;
  &:hover {
    text-decoration: underline;
  }
}
.icon {
  color: $color-green;
}


</style>