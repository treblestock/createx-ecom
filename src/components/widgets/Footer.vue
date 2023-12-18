<script setup lang="ts">
import MobileApps from '~/components/features/MobileApps.vue'
import Socials from '~/components/features/Socials.vue'
import IconHeart from '~/assets/img/icons/decor/heart.svg'



</script>

<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">

        <div class="footer-group">
          <div class="footer-group-title">help</div>
          <AppLink :to="{name: 'contactsFAQ'}">FAQ</AppLink>
          <AppLink :to="{name: 'trackOrder'}">Track order</AppLink>
          <AppLink :to="{name: 'contactsStores'}">Contacts</AppLink>
          <AppLink :to="{name: 'blog'}">Blog</AppLink>
        </div>

        <div class="footer-group">
          <div class="footer-group-title">shop</div>
          <AppLink :to="{name: 'products'}">New arrivals</AppLink>
          <AppLink :to="{name: 'products'}">Trending now</AppLink>
          <AppLink :to="{name: 'products', query: {sale: 'y'}}">Sales</AppLink>
          <AppLink :to="{name: 'products'}">Brands</AppLink>
        </div>
        <div class="footer-group">
          <div class="footer-group-title">get in touch</div>
          <div class="footer-group-row">
            <span class="bold-white">Call:&#x2800;</span>
            <AppLink href="tel:4055550128">(405) 555-0128</AppLink>
          </div>

          <div class="footer-group-row">
            <span class="bold-white">Email:&#x2800;</span>
            <AppLink href="mailto:hello@createx.com">hello@createx.com</AppLink>
          </div>
          <Socials class="socials" theme="dark"></Socials>
        </div>

        <div class="footer-group">
          <div class="footer-group-title">Download our app</div>
          <MobileApps class="footer-group-row mobile-apps"></MobileApps>

        </div>      
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">    
        <div class="copy">
          © All rights reserved. Made with
          &nbsp;
          <IconHeart class="copy-icon"></IconHeart>
          &nbsp;
          by Createx Studio 
        </div>
        <AppLink class="scroll-top"
          :to="$route.fullPath"
        >Go to top</AppLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import '~css/consts';

$color-footer-devidor: rgba(255, 255, 255, .15);

.bold-white {
  font-weight: 700;
  color: $color-white;
}

.footer {
  background: $color-gray-900;
  & .link {
    color: $color-white-op;

    &:hover {
      font-weight: 700;
      color: $color-white;
    }
  }  
}


/* bottom section */
.footer-main {
  padding: 6rem 0 4rem;

  & .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3rem;
  }
}
.footer-group {
  display: flex;
  flex-direction: column;
  /* flex: 0 0 auto; */
  & > * {
    margin-bottom: .4rem;
  }
}
.footer-group-title {
  margin-bottom: 1.2rem;

  color: $color-white;
  text-transform: uppercase;
  font-weight: 700;
}
.footer-group-row {
  
  color: $color-white;
}
.socials {
  margin-top: 2.4rem;
}

/* bottom section */
.footer-bottom {
  padding: 2.4rem 0 3.2rem;

  border: 1px solid $color-footer-devidor;

  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
  }
}
.copy {
  color: $color-white;
  vertical-align: middle;
}
.copy-icon {
  color: $color-green;
}
.scroll-top {
}

.mobile-apps {
  flex-wrap: wrap;
  /* max-width: 100%; */

  :deep(> *) {
    flex: 0 0 16rem;
  }
}

</style>