<script setup lang="ts">
import MobileApps from '~/components/features/MobileApps.vue'
import Socials from '~/components/features/Socials.vue'



</script>

<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">

        <div class="footer-group">
          <div class="footer-group-title">help</div>
          <AppLink>Delivery & returns</AppLink>
          <AppLink>FAQ</AppLink>
          <AppLink>Track order</AppLink>
          <AppLink>Contacts</AppLink>
          <AppLink>Blog</AppLink>
        </div>

        <div class="footer-group">
          <div class="footer-group-title">shop</div>
          <AppLink>New arrivals</AppLink>
          <AppLink>Trending now</AppLink>
          <AppLink>Sales</AppLink>
          <AppLink>Brands</AppLink>
        </div>
        <div class="footer-group">
          <div class="footer-group-title">get in touch</div>
          <div class="footer-group-row">
            <span class="_bold _white">Call:&#x2800;</span>
            <AppLink href="tel:4055550128">(405) 555-0128</AppLink>
          </div>

          <div class="footer-group-row">
            <span class="_bold _white">Email:&#x2800;</span>
            <AppLink href="mailto:hello@createx.com">hello@createx.com</AppLink>
          </div>
          <Socials class="socials" theme="dark"></Socials>
        </div>

        <div class="footer-group">
          <div class="footer-group-title">Download our app</div>
          <MobileApps class="footer-group-row"></MobileApps>

        </div>      
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">    
        <div class="copy">
          © All rights reserved. Made with
          <Icon class="copy-icon"
            icon="heart"
          ></Icon>
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

._white {
  color: $color-white;
}

.footer {
  background: $color-gray-900;
  & .link {
    color: $color-white-op;

    &:hover {
      color: $color-green;
    }
  }  
}


/* bottom section */
.footer-main {
  padding: 6rem 0 4rem;

  & .container {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
  }
}
.footer-group {
  display: flex;
  flex-direction: column;
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
}
.copy-icon {
}
.scroll-top {
}

</style>